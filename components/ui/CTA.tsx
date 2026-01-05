import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/utils'

interface CTAProps {
  title: string
  description: string
  primaryButton?: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
  className?: string
}

export default function CTA({
  title,
  description,
  primaryButton,
  secondaryButton,
  className = '',
}: CTAProps) {
  const defaultPrimaryButton = {
    text: 'Contactar',
    href: '/contacto',
  }

  const defaultSecondaryButton = {
    text: 'WhatsApp',
    href: generateWhatsAppLink(SITE_CONFIG.whatsapp, 'Hola, estoy interesado en paneles sándwich'),
  }

  const primary = primaryButton || defaultPrimaryButton
  const secondary = secondaryButton || defaultSecondaryButton

  return (
    <section className={`bg-primary-600 ${className}`}>
      <div className="container-custom section-padding">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="mb-8 text-xl text-primary-100">{description}</p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            {primary.href.startsWith('http') ? (
              <a
                href={primary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary bg-white text-primary-600 hover:bg-gray-50"
              >
                {primary.text}
              </a>
            ) : (
              <Link
                href={primary.href}
                className="btn-secondary bg-white text-primary-600 hover:bg-gray-50"
              >
                {primary.text}
              </Link>
            )}

            {secondary.href.startsWith('http') ? (
              <a
                href={secondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                {secondary.text}
              </a>
            ) : (
              <Link href={secondary.href} className="btn-whatsapp">
                {secondary.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

