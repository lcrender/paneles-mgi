import { NextResponse } from 'next/server'
import { isSmtpConfigured, sendContactEmail } from '@/lib/send-contact-email'

const MAX = {
  name: 200,
  email: 320,
  phone: 80,
  message: 10000,
} as const

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(request: Request) {
  if (!isSmtpConfigured()) {
    return NextResponse.json(
      { error: 'El envío de correo no está configurado en el servidor.' },
      { status: 503 }
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Cuerpo inválido' }, { status: 400 })
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Datos inválidos' }, { status: 400 })
  }

  const { name, email, phone, message } = body as Record<string, unknown>

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof phone !== 'string' ||
    typeof message !== 'string'
  ) {
    return NextResponse.json({ error: 'Todos los campos son obligatorios' }, { status: 400 })
  }

  const trimmed = {
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    message: message.trim(),
  }

  if (!trimmed.name || !trimmed.email || !trimmed.phone || !trimmed.message) {
    return NextResponse.json({ error: 'Todos los campos son obligatorios' }, { status: 400 })
  }

  if (
    trimmed.name.length > MAX.name ||
    trimmed.email.length > MAX.email ||
    trimmed.phone.length > MAX.phone ||
    trimmed.message.length > MAX.message
  ) {
    return NextResponse.json({ error: 'Algún campo excede el tamaño permitido' }, { status: 400 })
  }

  if (!isValidEmail(trimmed.email)) {
    return NextResponse.json({ error: 'El email no es válido' }, { status: 400 })
  }

  try {
    await sendContactEmail(trimmed)
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('[contact] envío SMTP falló:', msg)
    return NextResponse.json(
      { error: 'No se pudo enviar el mensaje. Intentá más tarde.' },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
