import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/utils'

interface HeroProps {
  title: string
  description: string
  image?: string
  imageAlt?: string
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
}

export default function Hero({
  title,
  description,
  image = '/images/hero-paneles.jpg',
  imageAlt = 'Paneles sándwich',
  primaryCta,
  secondaryCta,
}: HeroProps) {
  const defaultPrimaryCta = {
    text: 'Contactar',
    href: '/contacto',
  }

  const defaultSecondaryCta = {
    text: 'WhatsApp',
    href: generateWhatsAppLink(SITE_CONFIG.whatsapp, 'Hola, estoy interesado en paneles sándwich'),
  }

  const cta1 = primaryCta || defaultPrimaryCta
  const cta2 = secondaryCta || defaultSecondaryCta

  return (
    <section className="relative bg-gray-900">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover opacity-50"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
      </div>

      <div className="relative container-custom section-padding">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mb-8 text-xl text-gray-200 sm:text-2xl">{description}</p>

          <div className="flex flex-col gap-4 sm:flex-row">
            {cta1.href.startsWith('http') ? (
              <a
                href={cta1.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {cta1.text}
              </a>
            ) : (
              <Link href={cta1.href} className="btn-primary">
                {cta1.text}
              </Link>
            )}

            {cta2.href.startsWith('http') ? (
              <a
                href={cta2.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                {cta2.text}
              </a>
            ) : (
              <Link href={cta2.href} className="btn-whatsapp">
                {cta2.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

