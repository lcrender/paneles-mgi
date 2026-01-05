import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/utils'

interface HeroTwoColumnProps {
  h1: string
  subtitle: string
  secondaryLine?: string
  bullets: string[]
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta: {
    text: string
    href: string
  }
  image: string
  imageAlt: string
}

export default function HeroTwoColumn({
  h1,
  subtitle,
  secondaryLine,
  bullets,
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
}: HeroTwoColumnProps) {
  return (
    <section className="bg-white">
      <div className="container-custom">
        <div className="grid gap-8 py-16 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-24">
          {/* Contenido izquierda */}
          <div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {h1}
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">{subtitle}</p>
            {secondaryLine && (
              <p className="mb-6 text-base leading-relaxed text-gray-600">{secondaryLine}</p>
            )}
            {bullets.length > 0 && (
              <ul className="mb-8 space-y-3">
                {bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex flex-col gap-4 sm:flex-row">
              {primaryCta.href.startsWith('http') ? (
                <a
                  href={primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {primaryCta.text}
                </a>
              ) : (
                <Link href={primaryCta.href} className="btn-primary">
                  {primaryCta.text}
                </Link>
              )}
              {secondaryCta.href.startsWith('http') ? (
                <a
                  href={secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  {secondaryCta.text}
                </a>
              ) : (
                <Link href={secondaryCta.href} className="btn-whatsapp">
                  {secondaryCta.text}
                </Link>
              )}
            </div>
          </div>

          {/* Imagen derecha */}
          <div className="relative order-first lg:order-last">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100">
              {image.endsWith('.svg') ? (
                <img
                  src={image}
                  alt={imageAlt}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              ) : (
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

