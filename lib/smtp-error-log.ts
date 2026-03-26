/**
 * Nodemailer adjunta response / responseCode en errores SMTP; los mostramos en logs.
 */
export function formatSmtpErrorForLog(err: unknown): string {
  if (!err || typeof err !== 'object') {
    return err instanceof Error ? err.message : String(err)
  }
  const o = err as Record<string, unknown>
  const msg = err instanceof Error ? err.message : String(err)
  const response = typeof o.response === 'string' ? o.response.trim() : ''
  const code = o.responseCode
  if (response) {
    const suffix =
      typeof code === 'number' ? ` [código ${code}]` : ''
    return `${msg} | respuesta SMTP: ${response}${suffix}`
  }
  return msg
}
