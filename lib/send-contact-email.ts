import nodemailer from 'nodemailer'

export type ContactFormPayload = {
  name: string
  email: string
  phone: string
  message: string
}

export const CONTACT_EMAIL_SUBJECT = 'MGI Paneles Contacto Web'

function getSmtpConfig() {
  const host = process.env.SMTP_HOST
  const port = parseInt(process.env.SMTP_PORT || '465', 10)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const fromName = process.env.SMTP_FROM_NAME || 'Paneles MGI'
  const fromEmail = process.env.SMTP_FROM_EMAIL || user || ''
  const to = process.env.CONTACT_TO_EMAIL
  const bcc = process.env.CONTACT_BCC_EMAIL

  return { host, port, user, pass, fromName, fromEmail, to, bcc }
}

export function isSmtpConfigured(): boolean {
  const { host, user, pass, fromEmail, to } = getSmtpConfig()
  return Boolean(host && user && pass && fromEmail && to)
}

/** Solo nombres de variables faltantes; no incluye valores ni contraseñas. */
export function getSmtpEnvDiagnostics(): {
  configured: boolean
  missing: string[]
} {
  const { host, user, pass, fromEmail, to } = getSmtpConfig()
  const missing: string[] = []
  if (!host?.trim()) missing.push('SMTP_HOST')
  if (!user?.trim()) missing.push('SMTP_USER')
  if (!pass?.trim()) missing.push('SMTP_PASS')
  if (!fromEmail?.trim()) {
    missing.push('SMTP_FROM_EMAIL')
  }
  if (!to?.trim()) missing.push('CONTACT_TO_EMAIL')
  return { configured: missing.length === 0, missing }
}

/** Orden de puertos: primero el configurado, luego el alternativo típico (465↔587). */
function smtpPortAttempts(preferred: number): number[] {
  if (
    process.env.SMTP_NO_FALLBACK === 'true' ||
    process.env.SMTP_NO_FALLBACK === '1'
  ) {
    return [preferred]
  }
  if (preferred === 465) return [465, 587]
  if (preferred === 587) return [587, 465]
  return [preferred]
}

/** Errores de capa conexión/TLS donde tiene sentido probar otro puerto. */
function isConnectionLayerFailure(err: unknown): boolean {
  const msg = (err instanceof Error ? err.message : String(err)).toLowerCase()
  if (
    /535|authentication failed|invalid user|invalid login|534 5\.7\./i.test(msg)
  ) {
    return false
  }
  return (
    msg.includes('connection closed unexpectedly') ||
    msg.includes('econnreset') ||
    msg.includes('etimedout') ||
    msg.includes('socket hang up') ||
    msg.includes('socket closed') ||
    msg.includes('eproto') ||
    msg.includes('wrong version number') ||
    msg.includes('ssl routines') ||
    msg.includes('eof occurred') ||
    msg.includes('greeting never received')
  )
}

function createSmtpTransport(
  host: string,
  port: number,
  user: string,
  pass: string
) {
  const implicitTls = port === 465
  const rejectUnauthorized =
    process.env.SMTP_TLS_REJECT_UNAUTHORIZED !== 'false' &&
    process.env.SMTP_TLS_REJECT_UNAUTHORIZED !== '0'

  const tlsServerName = process.env.SMTP_TLS_SERVERNAME?.trim() || host

  // `family` fuerza IPv4 (VPS/Docker); los tipos de @types/nodemailer no lo declaran.
  return nodemailer.createTransport({
    host,
    port,
    secure: implicitTls,
    requireTLS: port === 587,
    auth: { user, pass },
    family: 4,
    connectionTimeout: 25_000,
    greetingTimeout: 25_000,
    socketTimeout: 25_000,
    tls: {
      minVersion: 'TLSv1.2',
      servername: tlsServerName,
      rejectUnauthorized,
    },
    debug: process.env.SMTP_DEBUG === 'true',
  } as Parameters<typeof nodemailer.createTransport>[0])
}

export async function sendContactEmail(data: ContactFormPayload): Promise<void> {
  const { host, port, user, pass, fromName, fromEmail, to, bcc } = getSmtpConfig()

  if (!host || !user || !pass || !fromEmail || !to) {
    throw new Error('SMTP no configurado')
  }

  const text = [
    'Nuevo mensaje desde el formulario de contacto del sitio web.',
    '',
    `Nombre: ${data.name}`,
    `Email: ${data.email}`,
    `Teléfono: ${data.phone}`,
    '',
    'Mensaje:',
    data.message,
  ].join('\n')

  const mailOptions = {
    from: `"${fromName.replace(/"/g, '')}" <${fromEmail}>`,
    to,
    bcc: bcc?.trim() ? bcc.trim() : undefined,
    replyTo: data.email,
    subject: CONTACT_EMAIL_SUBJECT,
    text,
  }

  const ports = smtpPortAttempts(port)
  let lastError: unknown

  for (let i = 0; i < ports.length; i++) {
    const tryPort = ports[i]
    const transporter = createSmtpTransport(host, tryPort, user, pass)
    try {
      await transporter.sendMail(mailOptions)
      if (process.env.SMTP_DEBUG === 'true' && tryPort !== port) {
        console.info(`[smtp] envío OK usando puerto ${tryPort} (fallback desde ${port})`)
      }
      return
    } catch (err) {
      lastError = err
      const canRetry =
        i < ports.length - 1 && isConnectionLayerFailure(err)
      if (process.env.SMTP_DEBUG === 'true') {
        const msg = err instanceof Error ? err.message : String(err)
        console.info(
          `[smtp] puerto ${tryPort} falló: ${msg}${canRetry ? ' → reintento con otro puerto' : ''}`
        )
      }
      if (!canRetry) {
        throw err
      }
    } finally {
      transporter.close()
    }
  }

  throw lastError instanceof Error
    ? lastError
    : new Error(String(lastError))
}
