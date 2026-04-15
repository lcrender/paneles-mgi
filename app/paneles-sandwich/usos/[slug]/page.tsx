import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/ui/Hero'
import HeroTwoColumn from '@/components/ui/HeroTwoColumn'
import TwoColumnSection from '@/components/ui/TwoColumnSection'
import CTA from '@/components/ui/CTA'
import FAQ from '@/components/ui/FAQ'
import FAQSchema from '@/components/seo/FAQSchema'
import { usosContent } from '@/lib/content/usos'
import { camarasFrigorificasContent } from '@/lib/content/camaras-frigorificas'
import { congeladosContent } from '@/lib/content/congelados'
import { navesIndustrialesContent } from '@/lib/content/naves-industriales'
import { techosContent } from '@/lib/content/techos'
import { murosContent } from '@/lib/content/muros'
import { USOS, SITE_CONFIG } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/utils'
import {
  PanelEcoTrapezoidalSection,
  PanelFrigorificoSection,
  PanelMuroSection,
  PanelProductSectionDivider,
  PanelProductSectionDividerLight,
  PanelTrapezoidalSection,
} from '@/components/paneles/panel-product-sections'

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
    title = 'Paneles sándwich para cámaras frigoríficas'
    description =
      'Soluciones de aislación térmica para cámaras de refrigeración: mayor eficiencia energética, hermeticidad y durabilidad. Fabricación a medida y asesoramiento técnico para tu proyecto.'
  } else if (slug === 'congelados') {
    title = 'Paneles sándwich para cámaras de congelado'
    description =
      'Soluciones de aislación térmica para baja temperatura: mayor eficiencia energética, hermeticidad y durabilidad en cámaras de congelado. Fabricación a medida y asesoramiento técnico.'
  }

  const canonicalPath = `/paneles-sandwich/usos/${slug}`

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}${canonicalPath}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${SITE_CONFIG.url}${canonicalPath}`,
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
      : slug === 'naves-industriales'
        ? 'Hola, estoy interesado en paneles sándwich para naves industriales'
        : slug === 'techos'
          ? 'Hola, estoy interesado en paneles sándwich para techos'
          : slug === 'muros'
            ? 'Hola, estoy interesado en paneles sándwich para muros'
            : 'Hola, estoy interesado en paneles sándwich para cámaras frigoríficas'
  const whatsappLink = generateWhatsAppLink(SITE_CONFIG.whatsapp, whatsappMessage)

  // Si es la página de cámaras frigoríficas, usar el contenido específico
  if (slug === 'camaras-frigorificas') {
    const cfContent = camarasFrigorificasContent
    const heroDesc = (
      <>
        <p>{cfContent.hero.subtitle}</p>
        {'intro' in cfContent.hero && cfContent.hero.intro && <p>{cfContent.hero.intro}</p>}
        <ul className="list-none space-y-2">
          {cfContent.hero.bullets.map((b, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-primary-400" aria-hidden>✔</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <p className="pt-2">📍 {cfContent.hero.footerLine}</p>
      </>
    )

    return (
      <>
        {/* Hero Section (estilo home) */}
        <Hero
          title={cfContent.hero.h1}
          description={heroDesc}
          image="/images/hero-paneles.webp"
          imageAlt="Paneles sándwich para cámaras frigoríficas"
          rightImage="/images/mgi-paneles-para-camaras-frigorificas-hero.webp"
          rightImageAlt="Paneles para cámaras frigoríficas MGI"
          rightImageLarge
          primaryCta={{ text: 'Pedir cotización', href: '/contacto' }}
          secondaryCta={{ text: 'WhatsApp', href: whatsappLink }}
        />

        {/* Sistemas de Paneles Frigoríficos */}
        <section className="hidden section-padding bg-white">
          <div className="container-custom">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                {cfContent.seccionSistemas.h2}
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                {cfContent.seccionSistemas.intro}
              </p>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                {cfContent.seccionSistemas.p2}
              </p>
              <ul className="mb-6 list-inside list-disc space-y-2 text-gray-700">
                {cfContent.seccionSistemas.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <p className="text-lg leading-relaxed text-gray-700">
                {cfContent.seccionSistemas.cierre}
              </p>
            </div>
          </div>
        </section>

        <PanelFrigorificoSection />

        {/* Explicación Técnica */}
        <TwoColumnSection
          title={cfContent.explicacionTecnica.h2}
          image="/images/usos/camaras-frigorificas/paneles-sandwich-para-camaras-frigorificas.webp"
          imageAlt="Paneles sándwich para cámaras frigoríficas"
          imagePosition="right"
          className="bg-gray-50"
        >
          {'intro' in cfContent.explicacionTecnica && (
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              {cfContent.explicacionTecnica.intro}
            </p>
          )}
          {'composicion' in cfContent.explicacionTecnica && cfContent.explicacionTecnica.composicion.length > 0 && (
            <ul className="mb-6 list-inside list-disc space-y-2 text-gray-700">
              {cfContent.explicacionTecnica.composicion.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
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
                <div key={index} className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900">
                    <span aria-hidden>{(card as { icon?: string }).icon}</span>
                    {(card as { h3: string }).h3}
                  </h3>
                  {'paragraphs' in card && card.paragraphs && card.paragraphs.length > 0 && (
                    <div className="mb-4 space-y-2">
                      {card.paragraphs.map((para, i) => (
                        <p key={i} className="text-gray-700">
                          {para}
                        </p>
                      ))}
                    </div>
                  )}
                  {'bullets' in card && card.bullets && card.bullets.length > 0 && (
                    <ul className="list-inside list-disc space-y-1 text-gray-700">
                      {card.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Aplicaciones */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              {camarasFrigorificasContent.aplicaciones.h2}
            </h2>
            {'intro' in camarasFrigorificasContent.aplicaciones && camarasFrigorificasContent.aplicaciones.intro && (
              <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700">
                {camarasFrigorificasContent.aplicaciones.intro}
              </p>
            )}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {camarasFrigorificasContent.aplicaciones.items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-gray-900">
                    <span aria-hidden>{(item as { emoji?: string }).emoji}</span>
                    {(item as { label: string }).label}
                  </h3>
                  <p className="text-gray-700">{(item as { description?: string }).description ?? ''}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tipos y Espesores / Refrigeración vs Congelado + Especificaciones */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="mx-auto max-w-3xl space-y-10">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                  {camarasFrigorificasContent.tiposEspesores.h2}
                </h2>
                <p className="mb-6 text-lg text-gray-700">
                  {(camarasFrigorificasContent.tiposEspesores as { intro?: string }).intro}
                </p>
                {'rangos' in camarasFrigorificasContent.tiposEspesores &&
                  (camarasFrigorificasContent.tiposEspesores as { rangos: { titulo: string; texto: string }[] }).rangos.map(
                    (r, i) => (
                      <div key={i} className="mb-6">
                        <h3 className="mb-1 font-semibold text-gray-900">{r.titulo}</h3>
                        <p className="text-gray-700">{r.texto}</p>
                      </div>
                    )
                  )}
                {'dependeDe' in camarasFrigorificasContent.tiposEspesores && (
                  <>
                    <p className="mb-2 font-medium text-gray-900">
                      {(camarasFrigorificasContent.tiposEspesores as { dependeDe: string }).dependeDe}
                    </p>
                    <ul className="mb-6 list-inside list-disc space-y-1 text-gray-700">
                      {(
                        camarasFrigorificasContent.tiposEspesores as { dependeBullets: string[] }
                      ).dependeBullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </>
                )}
                {'asesoramiento' in camarasFrigorificasContent.tiposEspesores && (
                  <p className="mb-6 flex items-center gap-2 text-gray-700">
                    <span aria-hidden>🔎</span>
                    {(camarasFrigorificasContent.tiposEspesores as { asesoramiento: string }).asesoramiento}
                  </p>
                )}
                <Link
                  href={camarasFrigorificasContent.tiposEspesores.ctaHref}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700"
                >
                  <span aria-hidden>📲</span>
                  {camarasFrigorificasContent.tiposEspesores.ctaText}
                </Link>
              </div>

              {'especificaciones' in camarasFrigorificasContent.tiposEspesores && (
                <div className="rounded-xl border-2 border-primary-200 bg-primary-50/50 p-6 sm:p-8">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    {(camarasFrigorificasContent.tiposEspesores as { especificaciones: { h3: string; items: string[] } })
                      .especificaciones.h3}
                  </h3>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    {(
                      camarasFrigorificasContent.tiposEspesores as {
                        especificaciones: { items: string[] }
                      }
                    ).especificaciones.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FAQ */}
        {content.faqs && content.faqs.length > 0 && (
          <>
            <FAQ
              items={content.faqs}
              title={slug === 'camaras-frigorificas' ? 'Preguntas Frecuentes sobre Paneles Frigoríficos' : 'Preguntas Frecuentes sobre este Uso'}
              className={slug === 'camaras-frigorificas' ? 'bg-gray-50' : ''}
            />
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
    const heroDesc = (
      <>
        <p>{congContent.hero.subtitle}</p>
        {congContent.hero.secondaryLine && <p>{congContent.hero.secondaryLine}</p>}
        {congContent.hero.introBeforeBullets && <p>{congContent.hero.introBeforeBullets}</p>}
        <ul className="list-none space-y-2">
          {congContent.hero.bullets.map((b, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-primary-400" aria-hidden>
                ✔
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <p className="pt-2">📍 {congContent.hero.footerLine}</p>
      </>
    )

    return (
      <>
        {/* Hero Section (estilo home) */}
        <Hero
          title={congContent.hero.h1}
          description={heroDesc}
          image="/images/hero-paneles.webp"
          imageAlt="Paneles sándwich para cámaras de congelado"
          rightImage="/images/mgi-camaras-para-congelado-hero.webp"
          rightImageAlt="Paneles para cámaras de congelado MGI"
          rightImageLarge
          primaryCta={{ text: 'Pedir cotización', href: '/contacto' }}
          secondaryCta={{ text: 'WhatsApp', href: whatsappLink }}
        />

        <PanelFrigorificoSection />

        <PanelProductSectionDivider />

        {/* Explicación Técnica - Imagen izquierda, texto derecha con contenedor */}
        <TwoColumnSection
          title={congContent.explicacionTecnica.h2}
          image="/images/usos/camaras-frigorificas/paneles-sandwich-para-camaras-de-congelado.webp"
          imageAlt="Paneles sándwich para cámaras de congelado"
          imagePosition="left"
          className="bg-white"
        >
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
            <p className="mb-4 text-lg leading-relaxed text-gray-700">
              {congContent.explicacionTecnica.intro}
            </p>
            <ul className="mb-6 list-inside list-disc space-y-2 text-gray-700">
              {congContent.explicacionTecnica.exigeBullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <p className="mb-2 font-medium text-gray-900">
              {congContent.explicacionTecnica.malaSeleccion}
            </p>
            <ul className="mb-6 list-inside list-disc space-y-2 text-gray-700">
              {congContent.explicacionTecnica.malaSeleccionBullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <p className="text-lg leading-relaxed text-gray-700">
              {congContent.explicacionTecnica.cierre}
            </p>
          </div>
        </TwoColumnSection>

        {/* Ventajas - Grid de cards */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              {congContent.ventajas.h2}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {congContent.ventajas.cards.map((card, index) => (
                <div key={index} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900">
                    <span aria-hidden>{card.icon}</span>
                    {card.h3}
                  </h3>
                  {card.paragraphs && card.paragraphs.length > 0 && (
                    <div className="mb-4 space-y-2">
                      {card.paragraphs.map((para, i) => (
                        <p key={i} className="text-gray-700">
                          {para}
                        </p>
                      ))}
                    </div>
                  )}
                  {card.bullets && card.bullets.length > 0 && (
                    <ul className="list-inside list-disc space-y-1 text-gray-700">
                      {card.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Aplicaciones - Grid emoji + label + description */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              {congContent.aplicaciones.h2}
            </h2>
            {congContent.aplicaciones.intro && (
              <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700">
                {congContent.aplicaciones.intro}
              </p>
            )}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {congContent.aplicaciones.items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-gray-900">
                    <span aria-hidden>{item.emoji}</span>
                    {item.label}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Espesores Recomendados + Especificaciones */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="mx-auto max-w-3xl space-y-10">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                  {congContent.tiposEspesores.h2}
                </h2>
                <p className="mb-6 text-lg text-gray-700">
                  {congContent.tiposEspesores.intro}
                </p>
                {congContent.tiposEspesores.rangos.map((r, i) => (
                  <div key={i} className="mb-6">
                    <h3 className="mb-1 font-semibold text-gray-900">{r.titulo}</h3>
                    <p className="text-gray-700">{r.texto}</p>
                  </div>
                ))}
                <p className="mb-2 font-medium text-gray-900">
                  {congContent.tiposEspesores.dependeDe}
                </p>
                <ul className="mb-6 list-inside list-disc space-y-1 text-gray-700">
                  {congContent.tiposEspesores.dependeBullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <p className="mb-6 flex items-center gap-2 text-gray-700">
                  <span aria-hidden>🔎</span>
                  {congContent.tiposEspesores.asesoramiento}
                </p>
                <Link
                  href={congContent.tiposEspesores.ctaHref}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700"
                >
                  <span aria-hidden>📲</span>
                  {congContent.tiposEspesores.ctaText}
                </Link>
              </div>

              <div className="rounded-xl border-2 border-primary-200 bg-primary-50/50 p-6 sm:p-8">
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {congContent.tiposEspesores.especificaciones.h3}
                </h3>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                  {congContent.tiposEspesores.especificaciones.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {content.faqs && content.faqs.length > 0 && (
          <>
            <FAQ
              items={content.faqs}
              title={slug === 'congelados' ? 'Preguntas Frecuentes sobre Paneles para Congelado' : 'Preguntas Frecuentes sobre este Uso'}
              className={slug === 'congelados' ? 'bg-gray-50' : ''}
            />
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

  // Página de naves industriales
  if (slug === 'naves-industriales') {
    const navContent = navesIndustrialesContent
    const heroDesc = (
      <>
        <p>{navContent.hero.subtitle}</p>
        {navContent.hero.secondaryLine && <p>{navContent.hero.secondaryLine}</p>}
        {navContent.hero.introBeforeBullets && <p>{navContent.hero.introBeforeBullets}</p>}
        <ul className="list-none space-y-2">
          {navContent.hero.bullets.map((b, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-primary-400" aria-hidden>✔</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <p className="pt-2">📍 {navContent.hero.footerLine}</p>
      </>
    )
    return (
      <>
        <Hero
          title={navContent.hero.h1}
          description={heroDesc}
          image="/images/usos/techos/paneles-para-techos.webp"
          imageAlt="Paneles sándwich para naves industriales"
          primaryCta={{ text: 'Pedir cotización', href: '/contacto' }}
          secondaryCta={{ text: 'WhatsApp', href: whatsappLink }}
        />

        <PanelTrapezoidalSection variant="naves" />
        <PanelProductSectionDivider />
        <PanelMuroSection />
        <PanelProductSectionDividerLight />
        <PanelEcoTrapezoidalSection />

        <TwoColumnSection
          title={navContent.explicacionTecnica.h2}
          image="/images/usos/industriales/paneles-sandwich-para-naves-industriales.webp"
          imageAlt="Paneles sándwich para naves industriales"
          imagePosition="right"
          className="bg-gray-50"
        >
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            {navContent.explicacionTecnica.intro}
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            {navContent.explicacionTecnica.intro2}
          </p>
          <ul className="list-inside list-disc space-y-2 text-gray-700">
            {navContent.explicacionTecnica.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </TwoColumnSection>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              {navContent.ventajas.h2}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {navContent.ventajas.cards.map((card, index) => (
                <div key={index} className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900">
                    <span aria-hidden>{card.icon}</span>
                    {card.h3}
                  </h3>
                  {card.paragraphs && card.paragraphs.length > 0 && (
                    <div className="mb-4 space-y-2">
                      {card.paragraphs.map((para, i) => (
                        <p key={i} className="text-gray-700">{para}</p>
                      ))}
                    </div>
                  )}
                  {card.bullets && card.bullets.length > 0 && (
                    <ul className="list-inside list-disc space-y-1 text-gray-700">
                      {card.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              {navContent.aplicaciones.h2}
            </h2>
            {navContent.aplicaciones.intro && (
              <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700">
                {navContent.aplicaciones.intro}
              </p>
            )}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {navContent.aplicaciones.items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-gray-900">
                    <span aria-hidden>{item.emoji}</span>
                    {item.label}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="bg-white">
          <div className="container-custom">
            <hr className="border-gray-200" />
          </div>
        </div>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              {navContent.murosYTechos.h2}
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-gray-700">
              {navContent.murosYTechos.intro}
            </p>
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              {navContent.murosYTechos.bloques.map((bloque, i) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900">
                    <span aria-hidden>{bloque.icon}</span>
                    {bloque.titulo}
                  </h3>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    {bloque.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-lg font-medium text-gray-700">
              {navContent.murosYTechos.cierre}
            </p>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="mx-auto max-w-3xl space-y-10">
              <div className="rounded-xl border-2 border-primary-200 bg-primary-50/50 p-6 sm:p-8">
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {navContent.especificaciones.h3}
                </h3>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                  {navContent.especificaciones.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {navContent.nucleo.h3}
                </h3>
                <p className="mb-4 text-gray-700">{navContent.nucleo.intro}</p>
                <ul className="mb-6 space-y-2">
                  {navContent.nucleo.opciones.map((o, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <span aria-hidden>{o.emoji}</span>
                      {o.texto}
                    </li>
                  ))}
                </ul>
                <p className="mb-2 font-medium text-gray-900">{navContent.nucleo.asesora}</p>
                <ul className="list-inside list-disc space-y-1 text-gray-700">
                  {navContent.nucleo.asesoraBullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {content.faqs && content.faqs.length > 0 && (
          <>
            <FAQ items={content.faqs} title="Preguntas Frecuentes" className="bg-white" />
            <FAQSchema items={content.faqs} />
          </>
        )}

        <section className="section-padding bg-gray-50">
          <div className="container-custom text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              {navContent.ctaFinal.title}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700">
              {navContent.ctaFinal.description}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href={navContent.ctaFinal.cta1.href} className="btn-primary">
                📲 {navContent.ctaFinal.cta1.text}
              </Link>
              <Link href={navContent.ctaFinal.cta2.href} className="btn-secondary">
                📲 {navContent.ctaFinal.cta2.text}
              </Link>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: navContent.hero.h1,
              description: navContent.hero.subtitle,
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

  // Página de techos
  if (slug === 'techos') {
    const tecContent = techosContent
    const heroDesc = (
      <>
        {tecContent.hero.subtitle && <p>{tecContent.hero.subtitle}</p>}
        {tecContent.hero.secondaryLine && <p>{tecContent.hero.secondaryLine}</p>}
        {tecContent.hero.introBeforeBullets && <p>{tecContent.hero.introBeforeBullets}</p>}
        <ul className="list-none space-y-2">
          {tecContent.hero.bullets.map((b, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-primary-400" aria-hidden>✔</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <p className="pt-2">📍 {tecContent.hero.footerLine}</p>
      </>
    )
    return (
      <>
        <Hero
          title={tecContent.hero.h1}
          description={heroDesc}
          image="/images/usos/techos/paneles-para-techos.webp"
          imageAlt="Paneles sándwich para techos"
          rightImage="/images/panel-sandwich-trapezoidal-para-techo.webp"
          rightImageAlt="Panel sándwich trapezoidal para techo"
          rightImageDesktopOnly
          primaryCta={{ text: 'Pedir cotización', href: '/contacto' }}
          secondaryCta={{ text: 'WhatsApp', href: whatsappLink }}
        />

        <PanelTrapezoidalSection
          id="panel-trapezoidal"
          variant="techos"
          className="section-padding scroll-mt-24 bg-white"
        />
        <PanelProductSectionDivider />
        <PanelEcoTrapezoidalSection
          id="panel-eco-trapezoidal"
          className="section-padding scroll-mt-24 bg-white"
        />

        <TwoColumnSection
          title={tecContent.explicacionTecnica.h2}
          image="/images/usos/techos/paneles-sandwich-para-techos.webp"
          imageAlt="Paneles sándwich para techos"
          imagePosition="right"
          className="bg-gray-50"
        >
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            {tecContent.explicacionTecnica.intro}
          </p>
          <ul className="mb-6 list-inside list-disc space-y-2 text-gray-700">
            {tecContent.explicacionTecnica.composicion.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-gray-700">
            {tecContent.explicacionTecnica.cierre}
          </p>
        </TwoColumnSection>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              {tecContent.ventajas.h2}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {tecContent.ventajas.cards.map((card, index) => (
                <div key={index} className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900">
                    <span aria-hidden>{card.icon}</span>
                    {card.h3}
                  </h3>
                  {card.paragraphs && card.paragraphs.length > 0 && (
                    <div className="mb-4 space-y-2">
                      {card.paragraphs.map((para, i) => (
                        <p key={i} className="text-gray-700">{para}</p>
                      ))}
                    </div>
                  )}
                  {card.bullets && card.bullets.length > 0 && (
                    <ul className="list-inside list-disc space-y-1 text-gray-700">
                      {card.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              {tecContent.aplicaciones.h2}
            </h2>
            {tecContent.aplicaciones.intro && (
              <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700">
                {tecContent.aplicaciones.intro}
              </p>
            )}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {tecContent.aplicaciones.items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-gray-900">
                    <span aria-hidden>{item.emoji}</span>
                    {item.label}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              {tecContent.tiposPanel.h2}
            </h2>
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
              {tecContent.tiposPanel.items.map((item, i) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                  <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-gray-900">
                    <span className="text-2xl" aria-hidden>{item.emoji}</span>
                    {item.titulo}
                  </h3>
                  <p className="text-gray-700">{item.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="mx-auto max-w-3xl space-y-10">
              <div className="rounded-xl border-2 border-primary-200 bg-primary-50/50 p-6 sm:p-8">
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {tecContent.especificaciones.h3}
                </h3>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                  {tecContent.especificaciones.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {tecContent.espesor.h3}
                </h3>
                <p className="mb-4 text-gray-700">{tecContent.espesor.intro}</p>
                <ul className="mb-6 list-inside list-disc space-y-1 text-gray-700">
                  {tecContent.espesor.factores.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <p className="mb-6 text-gray-700">{tecContent.espesor.texto}</p>
                <p className="flex items-center gap-2 font-medium text-gray-700">
                  <span aria-hidden>🔎</span>
                  {tecContent.espesor.asesoramiento}
                </p>
              </div>
            </div>
          </div>
        </section>

        {content.faqs && content.faqs.length > 0 && (
          <>
            <FAQ items={content.faqs} title="Preguntas Frecuentes" className="bg-white" />
            <FAQSchema items={content.faqs} />
          </>
        )}

        <section className="section-padding bg-gray-50">
          <div className="container-custom text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              {tecContent.ctaFinal.title}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700">
              {tecContent.ctaFinal.description}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href={tecContent.ctaFinal.cta1.href} className="btn-primary">
                📲 {tecContent.ctaFinal.cta1.text}
              </Link>
              {tecContent.ctaFinal.cta2.href === 'whatsapp' ? (
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  📲 {tecContent.ctaFinal.cta2.text}
                </a>
              ) : (
                <Link href={tecContent.ctaFinal.cta2.href} className="btn-secondary">
                  📲 {tecContent.ctaFinal.cta2.text}
                </Link>
              )}
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: tecContent.hero.h1,
              description: tecContent.hero.subtitle,
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

  // Página de muros
  if (slug === 'muros') {
    const murContent = murosContent
    const heroDesc = (
      <>
        <p>{murContent.hero.subtitle}</p>
        {murContent.hero.secondaryLine && <p>{murContent.hero.secondaryLine}</p>}
        {murContent.hero.introBeforeBullets && <p>{murContent.hero.introBeforeBullets}</p>}
        <ul className="list-none space-y-2">
          {murContent.hero.bullets.map((b, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-primary-400" aria-hidden>
                ✔
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <p className="pt-2">📍 {murContent.hero.footerLine}</p>
      </>
    )
    return (
      <>
        <Hero
          title={murContent.hero.h1}
          description={heroDesc}
          image="/images/hero-paneles.webp"
          imageAlt="Paneles sándwich para muros"
          rightImage="/images/mgi-paneles-para-muro-hero.webp"
          rightImageAlt="Paneles para muros MGI"
          rightImageLarge
          primaryCta={{ text: 'Pedir cotización', href: '/contacto' }}
          secondaryCta={{ text: 'WhatsApp', href: whatsappLink }}
        />

        <PanelMuroSection />
        <PanelProductSectionDivider />
        <PanelFrigorificoSection />

        <TwoColumnSection
          title={murContent.explicacionTecnica.h2}
          image="/images/usos/muros/paneles-sandwich-para-muros.webp"
          imageAlt="Paneles sándwich para muros"
          imagePosition="right"
          className="bg-gray-50"
        >
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            {murContent.explicacionTecnica.intro}
          </p>
          <ul className="mb-6 list-inside list-disc space-y-2 text-gray-700">
            {murContent.explicacionTecnica.composicion.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-gray-700">
            {murContent.explicacionTecnica.cierre}
          </p>
        </TwoColumnSection>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              {murContent.ventajas.h2}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {murContent.ventajas.cards.map((card, index) => (
                <div key={index} className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900">
                    <span aria-hidden>{card.icon}</span>
                    {card.h3}
                  </h3>
                  {card.paragraphs && card.paragraphs.length > 0 && (
                    <div className="mb-4 space-y-2">
                      {card.paragraphs.map((para, i) => (
                        <p key={i} className="text-gray-700">{para}</p>
                      ))}
                    </div>
                  )}
                  {card.bullets && card.bullets.length > 0 && (
                    <ul className="list-inside list-disc space-y-1 text-gray-700">
                      {card.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              {murContent.aplicaciones.h2}
            </h2>
            {murContent.aplicaciones.intro && (
              <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700">
                {murContent.aplicaciones.intro}
              </p>
            )}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {murContent.aplicaciones.items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-gray-900">
                    <span aria-hidden>{item.emoji}</span>
                    {item.label}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              {murContent.tiposPanel.h2}
            </h2>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
              {murContent.tiposPanel.items.map((item, i) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                  <div className="mb-3 text-2xl" aria-hidden>{item.emoji}</div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{item.titulo}</h3>
                  <p className="text-gray-700">{item.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="mx-auto max-w-3xl space-y-10">
              <div className="rounded-xl border-2 border-primary-200 bg-primary-50/50 p-6 sm:p-8">
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {murContent.especificaciones.h3}
                </h3>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                  {murContent.especificaciones.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {murContent.espesor.h3}
                </h3>
                <p className="mb-4 text-gray-700">{murContent.espesor.intro}</p>
                <ul className="mb-6 list-inside list-disc space-y-1 text-gray-700">
                  {murContent.espesor.factores.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <p className="mb-6 text-gray-700">{murContent.espesor.texto}</p>
                <p className="flex items-center gap-2 font-medium text-gray-700">
                  <span aria-hidden>🔎</span>
                  {murContent.espesor.asesoramiento}
                </p>
              </div>
            </div>
          </div>
        </section>

        {content.faqs && content.faqs.length > 0 && (
          <>
            <FAQ items={content.faqs} title="Preguntas Frecuentes" className="bg-white" />
            <FAQSchema items={content.faqs} />
          </>
        )}

        <section className="section-padding bg-gray-50">
          <div className="container-custom text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              {murContent.ctaFinal.title}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700">
              {murContent.ctaFinal.description}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href={murContent.ctaFinal.cta1.href} className="btn-primary">
                📲 {murContent.ctaFinal.cta1.text}
              </Link>
              {murContent.ctaFinal.cta2.href === 'whatsapp' ? (
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  📲 {murContent.ctaFinal.cta2.text}
                </a>
              ) : (
                <Link href={murContent.ctaFinal.cta2.href} className="btn-secondary">
                  📲 {murContent.ctaFinal.cta2.text}
                </Link>
              )}
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: murContent.hero.h1,
              description: murContent.hero.subtitle,
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
        image={uso?.image || '/images/hero-paneles.webp'}
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
