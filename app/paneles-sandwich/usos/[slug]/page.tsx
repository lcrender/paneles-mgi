import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import HeroTwoColumn from '@/components/ui/HeroTwoColumn'
import HeroFullWidth from '@/components/ui/HeroFullWidth'
import TwoColumnSection from '@/components/ui/TwoColumnSection'
import HorizontalScrollCarousel from '@/components/ui/HorizontalScrollCarousel'
import CTA from '@/components/ui/CTA'
import FAQ from '@/components/ui/FAQ'
import FAQSchema from '@/components/seo/FAQSchema'
import { usosContent } from '@/lib/content/usos'
import { camarasFrigorificasContent } from '@/lib/content/camaras-frigorificas'
import { congeladosContent } from '@/lib/content/congelados'
import { USOS, SITE_CONFIG } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/utils'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return USOS.map((uso) => ({
    slug: uso.id,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const content = usosContent[slug as keyof typeof usosContent]

  if (!content) {
    return {
      title: 'Uso no encontrado',
    }
  }

  // Metadata específica para cámaras frigoríficas y congelados
  let title: string = content.title
  let description: string = content.description

  if (slug === 'camaras-frigorificas') {
    title = 'Paneles sandwich para cámaras frigoríficas'
    description =
      'Soluciones de aislación térmica para cámaras de refrigeración: mayor eficiencia energética, hermeticidad y durabilidad. Fabricación a medida y asesoramiento técnico para tu proyecto.'
  } else if (slug === 'congelados') {
    title = 'Paneles sandwich para cámaras de congelado'
    description =
      'Soluciones de aislación térmica para baja temperatura: mayor eficiencia energética, hermeticidad y durabilidad en cámaras de congelado. Fabricación a medida y asesoramiento técnico.'
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
  }
}

export default async function UsoPage({ params }: PageProps) {
  const { slug } = await params
  const content = usosContent[slug as keyof typeof usosContent]

  if (!content) {
    notFound()
  }

  const uso = USOS.find((u) => u.id === slug)
  const whatsappMessage =
    slug === 'congelados'
      ? 'Hola, estoy interesado en paneles sándwich para cámaras de congelado'
      : 'Hola, estoy interesado en paneles sándwich para cámaras frigoríficas'
  const whatsappLink = generateWhatsAppLink(SITE_CONFIG.whatsapp, whatsappMessage)

  // Si es la página de cámaras frigoríficas, usar el contenido específico
  if (slug === 'camaras-frigorificas') {
    const cfContent = camarasFrigorificasContent

    return (
      <>
        {/* Hero Section */}
        <HeroTwoColumn
          h1={cfContent.hero.h1}
          subtitle={cfContent.hero.subtitle}
          secondaryLine={cfContent.hero.secondaryLine}
          bullets={cfContent.hero.bullets}
          primaryCta={{ text: 'Pedir cotización', href: '/contacto' }}
          secondaryCta={{ text: 'WhatsApp', href: whatsappLink }}
          image="/images/hero-camara-frigorifica.svg"
          imageAlt="Cámara frigorífica construida con paneles sándwich aislantes"
        />

        {/* Explicación Técnica */}
        <TwoColumnSection
          title={cfContent.explicacionTecnica.h2}
          image="/images/corte-panel-sandwich.svg"
          imageAlt="Corte de panel sándwich mostrando capas metálicas y núcleo aislante"
          imagePosition="right"
          className="bg-gray-50"
        >
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            {cfContent.explicacionTecnica.p1}
          </p>
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            {cfContent.explicacionTecnica.p2}
          </p>
          <ul className="space-y-3">
            {cfContent.explicacionTecnica.bullets.map((bullet, index) => (
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
        </TwoColumnSection>

        {/* Ventajas */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              {camarasFrigorificasContent.ventajas.h2}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {camarasFrigorificasContent.ventajas.cards.map((card, index) => (
                <div key={index} className="overflow-hidden rounded-xl bg-white shadow-md">
                  <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{card.h3}</h3>
                    <p className="text-gray-700">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Aplicaciones */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              {camarasFrigorificasContent.aplicaciones.h2}
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700">
              {camarasFrigorificasContent.aplicaciones.p}
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {camarasFrigorificasContent.aplicaciones.items.map((item, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-900">{item.label}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tipos y Espesores */}
        <TwoColumnSection
          title={camarasFrigorificasContent.tiposEspesores.h2}
          image="/images/esquema-espesores.svg"
          imageAlt="Esquema de espesores y configuración de paneles sándwich para cámaras frigoríficas"
          imagePosition="right"
          className="bg-white"
        >
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            {camarasFrigorificasContent.tiposEspesores.p1}
          </p>
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            {camarasFrigorificasContent.tiposEspesores.p2}
          </p>
          <ul className="mb-8 space-y-3">
            {camarasFrigorificasContent.tiposEspesores.bullets.map((bullet, index) => (
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
          <Link
            href={camarasFrigorificasContent.tiposEspesores.ctaHref}
            className="inline-block rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700"
          >
            {camarasFrigorificasContent.tiposEspesores.ctaText}
          </Link>
        </TwoColumnSection>

        {/* FAQ */}
        {content.faqs && content.faqs.length > 0 && (
          <>
            <FAQ items={content.faqs} title="Preguntas Frecuentes sobre este Uso" />
            <FAQSchema items={content.faqs} />
          </>
        )}

        {/* CTA Final */}
        <CTA
          title={`¿Necesitas paneles sándwich para ${uso?.title.toLowerCase()}?`}
          description="Contactanos y recibe una cotización personalizada para tu proyecto"
        />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: cfContent.hero.h1,
              description: cfContent.hero.subtitle,
              provider: {
                '@type': 'Organization',
                name: 'Paneles Sándwich MGI',
              },
              areaServed: 'Argentina',
              serviceType: 'Fabricación e instalación de paneles sándwich',
            }),
          }}
        />
      </>
    )
  }

  // Si es la página de congelados, usar el contenido específico
  if (slug === 'congelados') {
    const congContent = congeladosContent

    return (
      <>
        {/* Hero Section - Full Width con Overlay */}
        <HeroFullWidth
          h1={congContent.hero.h1}
          subtitle={congContent.hero.subtitle}
          secondaryLine={congContent.hero.secondaryLine}
          bullets={congContent.hero.bullets}
          primaryCta={{ text: 'Pedir cotización', href: '/contacto' }}
          secondaryCta={{ text: 'WhatsApp', href: whatsappLink }}
          image="/images/hero-camara-congelado.svg"
          imageAlt="Cámara de congelado construida con paneles sándwich de alta aislación"
        />

        {/* Explicación Técnica - Imagen izquierda, texto derecha con contenedor */}
        <TwoColumnSection
          title={congContent.explicacionTecnica.h2}
          image="/images/corte-panel-congelado.svg"
          imageAlt="Corte de panel sándwich para cámaras de congelado mostrando capas y núcleo aislante"
          imagePosition="left"
          className="bg-white"
        >
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              {congContent.explicacionTecnica.p1}
            </p>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              {congContent.explicacionTecnica.p2}
            </p>
            <ul className="space-y-3">
              {congContent.explicacionTecnica.bullets.map((bullet, index) => (
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
          </div>
        </TwoColumnSection>

        {/* Ventajas - Listado vertical alternado */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              {congContent.ventajas.h2}
            </h2>
            <div className="space-y-8 lg:space-y-12">
              {congContent.ventajas.cards.map((card, index) => {
                const isEven = index % 2 === 0
                return (
                  <div
                    key={index}
                    className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
                      !isEven ? 'lg:grid-flow-dense' : ''
                    }`}
                  >
                    {/* Imagen */}
                    <div className={!isEven ? 'lg:col-start-2' : ''}>
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-100 shadow-lg">
                        {card.image.endsWith('.svg') ? (
                          <img
                            src={card.image}
                            alt={card.alt}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <Image
                            src={card.image}
                            alt={card.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            loading="lazy"
                          />
                        )}
                      </div>
                    </div>
                    {/* Contenido */}
                    <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                      <h3 className="mb-4 text-2xl font-bold text-gray-900 lg:text-3xl">
                        {card.h3}
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-700">{card.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Aplicaciones - Carrusel horizontal scrollable */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              {congContent.aplicaciones.h2}
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700">
              {congContent.aplicaciones.p}
            </p>
            <HorizontalScrollCarousel items={congContent.aplicaciones.items} />
          </div>
        </section>

        {/* Tipos y Espesores - Imagen centrada arriba, nota técnica abajo */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              {congContent.tiposEspesores.h2}
            </h2>

            {/* Imagen centrada arriba */}
            <div className="mb-12">
              <div className="mx-auto max-w-4xl">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-gray-100 shadow-lg">
                  <img
                    src="/images/esquema-espesores-congelado.svg"
                    alt="Esquema de espesores y configuración de paneles sándwich para cámaras de congelado"
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Bloque nota técnica */}
            <div className="mx-auto max-w-4xl rounded-xl border border-gray-200 bg-white p-8 shadow-md lg:p-12">
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                {congContent.tiposEspesores.p1}
              </p>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                {congContent.tiposEspesores.p2}
              </p>
              <ul className="mb-8 space-y-3">
                {congContent.tiposEspesores.bullets.map((bullet, index) => (
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
              <Link
                href={congContent.tiposEspesores.ctaHref}
                className="inline-block rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700"
              >
                {congContent.tiposEspesores.ctaText}
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {content.faqs && content.faqs.length > 0 && (
          <>
            <FAQ items={content.faqs} title="Preguntas Frecuentes sobre este Uso" />
            <FAQSchema items={content.faqs} />
          </>
        )}

        {/* CTA Final */}
        <CTA
          title={`¿Necesitas paneles sándwich para ${uso?.title.toLowerCase()}?`}
          description="Contactanos y recibe una cotización personalizada para tu proyecto"
        />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: congContent.hero.h1,
              description: congContent.hero.subtitle,
              provider: {
                '@type': 'Organization',
                name: 'Paneles Sándwich MGI',
              },
              areaServed: 'Argentina',
              serviceType: 'Fabricación e instalación de paneles sándwich',
            }),
          }}
        />
      </>
    )
  }

  // Para otras páginas de usos, mantener el diseño original
  return (
    <>
      <HeroTwoColumn
        h1={content.h1}
        subtitle={content.description}
        bullets={[]}
        primaryCta={{ text: 'Pedir cotización', href: '/contacto' }}
        secondaryCta={{ text: 'WhatsApp', href: whatsappLink }}
        image={uso?.image || '/images/hero-paneles.jpg'}
        imageAlt={content.title}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <div
                dangerouslySetInnerHTML={{ __html: content.content }}
                className="prose-headings:font-bold prose-headings:text-gray-900 prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-3xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-2xl prose-p:mb-6 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-base prose-ul:mb-6 prose-ul:text-gray-700 prose-li:text-gray-700 prose-li:mb-2 prose-strong:text-gray-900 prose-strong:font-semibold"
              />
            </article>
          </div>
        </div>
      </section>

      {content.faqs && content.faqs.length > 0 && (
        <>
          <FAQ items={content.faqs} title="Preguntas Frecuentes sobre este Uso" />
          <FAQSchema items={content.faqs} />
        </>
      )}

      <CTA
        title={`¿Necesitas paneles sándwich para ${uso?.title.toLowerCase()}?`}
        description="Contactanos y recibe una cotización personalizada para tu proyecto"
      />
    </>
  )
}
