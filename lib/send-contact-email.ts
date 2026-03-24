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

export async function sendContactEmail(data: ContactFormPayload): Promise<void> {
  const { host, port, user, pass, fromName, fromEmail, to, bcc } = getSmtpConfig()

  if (!host || !user || !pass || !fromEmail || !to) {
    throw new Error('SMTP no configurado')
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })

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

  await transporter.sendMail({
    from: `"${fromName.replace(/"/g, '')}" <${fromEmail}>`,
    to,
    bcc: bcc?.trim() ? bcc.trim() : undefined,
    replyTo: data.email,
    subject: CONTACT_EMAIL_SUBJECT,
    text,
  })
}
