import { NextResponse } from 'next/server'
import { getSmtpEnvDiagnostics } from '@/lib/send-contact-email'

export async function GET() {
  const smtp = getSmtpEnvDiagnostics()

  return NextResponse.json(
    {
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'paneles-mgi',
      smtp: {
        configured: smtp.configured,
        missingEnvVars: smtp.missing,
      },
    },
    { status: 200 }
  )
}

