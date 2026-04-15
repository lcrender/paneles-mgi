import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { SITE_CONFIG } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/utils'

interface HeroProps {
  title: string
  description: string | ReactNode
  image?: string
  imageAlt?: string
  /** Imagen destacada a la derecha (desktop) o arriba (móvil), ej. render o ilustración */
  rightImage?: string
  rightImageAlt?: string
  /** Si true, la imagen derecha se muestra con tamaño grande (aprox. el doble) */
  rightImageLarge?: boolean
  /** Si true, la imagen derecha solo se muestra en desktop */
  rightImageDesktopOnly?: boolean
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
  image = '/images/hero-paneles.webp',
  imageAlt = 'Paneles sándwich',
  rightImage,
  rightImageAlt = 'Paneles sándwich MGI',
  rightImageLarge = false,
  rightImageDesktopOnly = false,
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
    <section className="relative overflow-x-clip bg-gray-900">
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
        <div
          className={
            rightImage
              ? 'flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-6'
              : ''
          }
        >
          {/* Columna de texto: mínimo 50% del ancho en desktop */}
          <div
            className={
              rightImageLarge
                ? 'min-w-0 flex-1 lg:min-w-[50%] lg:pr-4 xl:pr-8'
                : rightImage
                  ? 'min-w-0 flex-1 lg:min-w-[50%] lg:pr-4'
                  : 'max-w-3xl'
            }
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <div className="mb-8 space-y-4 text-lg text-gray-200 sm:text-xl">
              {typeof description === 'string' ? (
                <p>{description}</p>
              ) : (
                description
              )}
            </div>

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

          {/* Imagen alineada a la derecha */}
          {rightImage && (
            <div
              className={
                rightImageLarge
                  ? `${rightImageDesktopOnly ? 'hidden lg:block' : 'order-first'} w-full max-w-lg shrink-0 lg:order-last lg:-mr-12 lg:max-w-[48%] xl:-mr-16 xl:max-w-[45%]`
                  : `${rightImageDesktopOnly ? 'hidden lg:block' : 'order-first'} w-full max-w-sm shrink-0 lg:order-last lg:max-w-md xl:max-w-lg`
              }
            >
              <div
                className={
                  rightImageLarge
                    ? 'relative aspect-square w-full lg:aspect-auto lg:h-[48rem] lg:max-h-[70vh] xl:h-[56rem] xl:max-h-[70vh]'
                    : 'relative aspect-square w-full lg:aspect-auto lg:h-80 xl:h-96'
                }
              >
                <Image
                  src={rightImage}
                  alt={rightImageAlt}
                  fill
                  className={rightImageLarge ? 'object-contain scale-[1.12]' : 'object-contain'}
                  priority
                  sizes={
                    rightImageLarge
                      ? '(max-width: 1023px) 100vw, min(48vw, 768px)'
                      : '(max-width: 1023px) 100vw,  min(28vw, 420px)'
                  }
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

