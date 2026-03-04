import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import HeroTwoColumn from '@/components/ui/HeroTwoColumn'
import TwoColumnSection from '@/components/ui/TwoColumnSection'
import CTA from '@/components/ui/CTA'
import FAQ from '@/components/ui/FAQ'
import { tiposContent } from '@/lib/content/tipos'
import { TIPOS, SITE_CONFIG } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/utils'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return TIPOS.map((tipo) => ({
    slug: tipo.id,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const content = tiposContent[slug as keyof typeof tiposContent]

  if (!content) {
    return {
      title: 'Tipo de panel no encontrado',
    }
  }

  return {
    title: content.title,
    description: content.description,
    openGraph: {
      title: content.title,
      description: content.description,
      type: 'website',
    },
  }
}

export default async function TipoPage({ params }: PageProps) {
  const { slug } = await params
  const content = tiposContent[slug as keyof typeof tiposContent]

  if (!content) {
    notFound()
  }

  const tipo = TIPOS.find((t) => t.id === slug)
  const whatsappMessage = `Hola, estoy interesado en paneles ${tipo?.title}`
  const whatsappLink = generateWhatsAppLink(SITE_CONFIG.whatsapp, whatsappMessage)


  return (
    <>
      {/* Hero Section */}
      <HeroTwoColumn
        h1={content.h1}
        subtitle={content.description}
        bullets={slug === 'pir' ? [
          'Máxima aislación térmica con λ entre 0.020 y 0.022 W/(m·K)',
          'Mejor resistencia al fuego que el PUR',
          'Espesor reducido para mayor espacio útil',
        ] : [
          'Excelente aislación térmica con λ entre 0.022 y 0.025 W/(m·K)',
          'Costo competitivo y excelente relación calidad-precio',
          'Ideal para aplicaciones estándar y comerciales',
        ]}
        primaryCta={{ text: 'Pedir cotización', href: '/contacto' }}
        secondaryCta={{ text: 'WhatsApp', href: whatsappLink }}
        image={tipo?.image || '/images/hero-paneles.jpg'}
        imageAlt={content.title}
      />

      {/* Introducción */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            {slug === 'pir' ? (
              <>
                <h2 className="mb-4 text-3xl font-bold text-gray-900">¿Qué son los paneles PIR?</h2>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                  Los paneles sándwich PIR utilizan un núcleo aislante de poliisocianurato (PIR), una evolución del poliuretano que ofrece la mejor relación entre aislación térmica, resistencia al fuego y espesor. Es la opción más eficiente y segura para la mayoría de aplicaciones industriales y comerciales.
                </p>
              </>
            ) : (
              <>
                <h2 className="mb-4 text-3xl font-bold text-gray-900">¿Qué son los paneles PUR?</h2>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                  Los paneles sándwich PUR utilizan un núcleo aislante de poliuretano, un material que ofrece excelente relación entre aislación térmica y costo. Es una opción muy eficiente y competitiva para aplicaciones industriales y comerciales donde la eficiencia energética es prioritaria.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Características Principales */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Características principales
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {slug === 'pir' ? (
              <>
                <div className="card text-center">
                  <div className="mb-4 text-4xl">🌡️</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Excelente aislación térmica</h3>
                  <p className="text-gray-600">Coeficiente de conductividad térmica (λ) entre 0.020 y 0.022 W/(m·K), uno de los más bajos del mercado</p>
                </div>
                <div className="card text-center">
                  <div className="mb-4 text-4xl">🔥</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Mejor resistencia al fuego</h3>
                  <p className="text-gray-600">Superior al PUR gracias a su estructura química modificada, con mejor comportamiento ante el fuego</p>
                </div>
                <div className="card text-center">
                  <div className="mb-4 text-4xl">📏</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Espesor reducido</h3>
                  <p className="text-gray-600">Gracias a su alta eficiencia, permite lograr el mismo nivel de aislación con menor espesor</p>
                </div>
                <div className="card text-center">
                  <div className="mb-4 text-4xl">🏗️</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Resistencia estructural</h3>
                  <p className="text-gray-600">Alta resistencia a la compresión y excelente comportamiento mecánico</p>
                </div>
                <div className="card text-center">
                  <div className="mb-4 text-4xl">🔒</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Hermeticidad</h3>
                  <p className="text-gray-600">Baja permeabilidad al vapor de agua, ideal para aplicaciones frigoríficas</p>
                </div>
                <div className="card text-center">
                  <div className="mb-4 text-4xl">⚡</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Ligereza</h3>
                  <p className="text-gray-600">Peso reducido que facilita el transporte e instalación</p>
                </div>
              </>
            ) : (
              <>
                <div className="card text-center">
                  <div className="mb-4 text-4xl">🌡️</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Excelente aislación térmica</h3>
                  <p className="text-gray-600">Coeficiente de conductividad térmica (λ) entre 0.022 y 0.025 W/(m·K), muy eficiente</p>
                </div>
                <div className="card text-center">
                  <div className="mb-4 text-4xl">💰</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Costo competitivo</h3>
                  <p className="text-gray-600">Excelente relación calidad-precio para aplicaciones estándar</p>
                </div>
                <div className="card text-center">
                  <div className="mb-4 text-4xl">📏</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Espesor reducido</h3>
                  <p className="text-gray-600">Permite lograr buen nivel de aislación con menor espesor que otros materiales</p>
                </div>
                <div className="card text-center">
                  <div className="mb-4 text-4xl">🏗️</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Resistencia estructural</h3>
                  <p className="text-gray-600">Alta resistencia a la compresión y excelente comportamiento mecánico</p>
                </div>
                <div className="card text-center">
                  <div className="mb-4 text-4xl">🔒</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Hermeticidad</h3>
                  <p className="text-gray-600">Baja permeabilidad al vapor de agua, ideal para aplicaciones frigoríficas</p>
                </div>
                <div className="card text-center">
                  <div className="mb-4 text-4xl">⚡</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Ligereza</h3>
                  <p className="text-gray-600">Peso reducido que facilita el transporte e instalación</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Aplicaciones Ideales */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
              Aplicaciones ideales
            </h2>
            <p className="mb-8 text-lg text-gray-700">
              {slug === 'pir' 
                ? 'Los paneles PIR son especialmente recomendados para:'
                : 'Los paneles PUR son especialmente recomendados para:'}
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {slug === 'pir' ? (
                <>
                  <div className="flex items-start rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <svg className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <p className="text-gray-700">Cámaras frigoríficas y congelados que requieren máxima eficiencia</p>
                  </div>
                  <div className="flex items-start rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <svg className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-gray-700">Naves industriales que requieren climatización y seguridad contra incendios</p>
                  </div>
                  <div className="flex items-start rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <svg className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p className="text-gray-700">Techos y muros exteriores en climas extremos</p>
                  </div>
                  <div className="flex items-start rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <svg className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <p className="text-gray-700">Aplicaciones donde se prioriza tanto la eficiencia energética como la resistencia al fuego</p>
                  </div>
                  <div className="flex items-start rounded-lg border border-gray-200 bg-gray-50 p-4 md:col-span-2">
                    <svg className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">Cualquier construcción donde la máxima aislación térmica sea prioritaria</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <svg className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <p className="text-gray-700">Cámaras frigoríficas y congelados</p>
                  </div>
                  <div className="flex items-start rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <svg className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-gray-700">Naves industriales que requieren climatización</p>
                  </div>
                  <div className="flex items-start rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <svg className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p className="text-gray-700">Techos y muros exteriores</p>
                  </div>
                  <div className="flex items-start rounded-lg border border-gray-200 bg-gray-50 p-4 md:col-span-2">
                    <svg className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">Aplicaciones donde se busca eficiencia energética a un costo optimizado</p>
                  </div>
                  <div className="flex items-start rounded-lg border border-gray-200 bg-gray-50 p-4 md:col-span-2">
                    <svg className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-gray-700">Construcciones comerciales e industriales estándar</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas del PIR sobre PUR (solo para PIR) */}
      {slug === 'pir' && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                Ventajas del PIR sobre el PUR
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex items-start rounded-lg bg-white p-6 shadow-md">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100">
                    <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">Mayor resistencia al fuego</h3>
                    <p className="text-gray-600">Gracias a su estructura química modificada</p>
                  </div>
                </div>
                <div className="flex items-start rounded-lg bg-white p-6 shadow-md">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100">
                    <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">Mejor aislación térmica</h3>
                    <p className="text-gray-600">Ligeramente mejor (λ más bajo)</p>
                  </div>
                </div>
                <div className="flex items-start rounded-lg bg-white p-6 shadow-md">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100">
                    <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">Mejor estabilidad dimensional</h3>
                    <p className="text-gray-600">A altas temperaturas</p>
                  </div>
                </div>
                <div className="flex items-start rounded-lg bg-white p-6 shadow-md">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100">
                    <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">Mayor durabilidad</h3>
                    <p className="text-gray-600">En aplicaciones exigentes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ventajas Económicas */}
      <section className={`section-padding ${slug === 'pir' ? 'bg-white' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
              Ventajas económicas
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex items-start rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 p-6">
                <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-600 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">Reducción de consumo energético</h3>
                  <p className="text-gray-700">Hasta {slug === 'pir' ? '40%' : '35-40%'} menos que otros materiales</p>
                </div>
              </div>
              <div className="flex items-start rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 p-6">
                <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-600 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">Mejor aprovechamiento del espacio</h3>
                  <p className="text-gray-700">Menor espesor permite más espacio útil</p>
                </div>
              </div>
              <div className="flex items-start rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 p-6">
                <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-600 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">Rápido retorno de inversión</h3>
                  <p className="text-gray-700">Gracias al ahorro energético</p>
                </div>
              </div>
              <div className="flex items-start rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 p-6">
                <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-600 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">Menor costo de transporte</h3>
                  <p className="text-gray-700">E instalación por su ligereza</p>
                  {slug === 'pur' && <p className="mt-1 text-sm text-gray-600">Costo más competitivo que el PIR</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Espesores Disponibles */}
      <section className={`section-padding ${slug === 'pir' ? 'bg-gray-50' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
              Espesores disponibles
            </h2>
            <p className="mb-8 text-lg text-gray-700">
              Fabricamos paneles {slug === 'pir' ? 'PIR' : 'PUR'} en una amplia gama de espesores:
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border-2 border-primary-200 bg-white p-6 text-center shadow-md">
                <div className="mb-3 text-3xl font-bold text-primary-600">40-60mm</div>
                <p className="text-sm text-gray-600">Aplicaciones con requisitos térmicos moderados</p>
              </div>
              <div className="rounded-lg border-2 border-primary-200 bg-white p-6 text-center shadow-md">
                <div className="mb-3 text-3xl font-bold text-primary-600">80-100mm</div>
                <p className="text-sm text-gray-600">Uso general en naves industriales</p>
              </div>
              <div className="rounded-lg border-2 border-primary-200 bg-white p-6 text-center shadow-md">
                <div className="mb-3 text-3xl font-bold text-primary-600">120-150mm</div>
                <p className="text-sm text-gray-600">Cámaras frigoríficas y refrigeración</p>
              </div>
              <div className="rounded-lg border-2 border-primary-200 bg-white p-6 text-center shadow-md">
                <div className="mb-3 text-3xl font-bold text-primary-600">180-200mm</div>
                <p className="text-sm text-gray-600">Congelados y temperaturas extremas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {content.faqs && content.faqs.length > 0 && (
        <FAQ items={content.faqs} title="Preguntas Frecuentes sobre este Tipo de Panel" />
      )}

      {/* CTA Section */}
      <CTA
        title={`¿Necesitas paneles ${tipo?.title.toLowerCase()}?`}
        description="Contactanos y recibe una cotización personalizada para tu proyecto"
      />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: content.title,
            description: content.description,
            brand: {
              '@type': 'Brand',
              name: 'Paneles Sándwich MGI',
            },
            category: 'Panel sándwich',
          }),
        }}
      />
    </>
  )
}

