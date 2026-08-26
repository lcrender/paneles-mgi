import Link from 'next/link'
import type { Metadata } from 'next'
import Hero from '@/components/ui/Hero'
import Card from '@/components/ui/Card'
import CTA from '@/components/ui/CTA'
import FAQ from '@/components/ui/FAQ'
import FAQSchema from '@/components/seo/FAQSchema'
import ProjectCard from '@/components/ui/ProjectCard'
import { BENEFICIOS, PROCESO_TRABAJO, SITE_CONFIG, USOS } from '@/lib/constants'
import { PROYECTOS } from '@/lib/content/proyectos'
import { generateWhatsAppLink } from '@/lib/utils'

export const metadata: Metadata = {
  // absolute: no aplica el template del layout ("| Paneles Sándwich MGI")
  title: {
    absolute: 'Precio Paneles Sándwich Cámaras Frigoríficas Techos y Paredes',
  },
  description:
    'Paneles para cámaras frigoríficas: cotización, precios y asesoramiento. MGI Paneles Sándwich para techos y paredes en varios espesores. Envíos a toda Argentina.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Precio Paneles Sándwich Cámaras Frigoríficas Techos y Paredes',
    description:
      'Paneles para cámaras frigoríficas: cotización, precios y asesoramiento. MGI Paneles Sándwich para techos y paredes en varios espesores. Envíos a toda Argentina.',
    type: 'website',
    url: '/',
  },
}

const homeFAQs = [
  {
    question: '¿Qué es un panel sándwich?',
    answer:
      'Es un sistema constructivo compuesto por dos chapas metálicas y un núcleo aislante que aporta rigidez estructural y alto rendimiento térmico. Es ampliamente utilizado en construcción industrial y refrigeración.',
  },
  {
    question: '¿Qué espesor necesito?',
    answer:
      'Depende de la temperatura interior requerida y la zona climática. Para refrigeración estándar suelen utilizarse 80–100 mm. Para congelado, 120–200 mm.',
  },
  {
    question: '¿Qué diferencia hay entre PIR y EPS?',
    answer:
      'El PIR ofrece mejor coeficiente térmico y mejor comportamiento frente al fuego. El EPS es una opción más económica con buen rendimiento para aplicaciones menos exigentes.',
  },
  {
    question: '¿Realizan instalación?',
    answer:
      'Sí. Contamos con equipo técnico especializado en montaje de paneles sándwich en todo el país.',
  },
]

const USOS_PRIORITARIOS = USOS.filter(
  (uso) => uso.id === 'camaras-frigorificas' || uso.id === 'congelados'
)
const USOS_SECUNDARIOS = USOS.filter(
  (uso) => uso.id !== 'camaras-frigorificas' && uso.id !== 'congelados'
)

export default function HomePage() {
  const showWhatsApp = SITE_CONFIG.contactVisibility.showWhatsApp
  const whatsappLink = generateWhatsAppLink(
    SITE_CONFIG.whatsapp,
    'Hola, quiero cotizar paneles para cámaras frigoríficas'
  )

  return (
    <>
      {/* Hero Section — foco paneles para cámaras */}
      <Hero
        title="Paneles para Cámaras Frigoríficas"
        description={
          <>
            <p>Fábrica de paneles para construir tu cámara frigorífica. Cotización, precio y asesoramiento técnico.</p>
            <p>También para techos, muros y naves industriales.</p>
            <p>Solicitá asesoramiento para tu proyecto: tenemos distintos tipos y espesores según la aplicación.</p>
            <p>📍 Envíos a toda Argentina.</p>
          </>
        }
        image="/images/hero-paneles.webp"
        imageAlt="Paneles sándwich para cámaras frigoríficas"
        rightImage="/images/mgi-paneles-para-camaras-frigorificas-hero.webp"
        rightImageAlt="Paneles para cámaras frigoríficas MGI"
        rightImageLarge
        primaryCta={{ text: 'Cotizar', href: '/contacto' }}
        secondaryCta={showWhatsApp ? { text: 'WhatsApp', href: whatsappLink } : undefined}
      />

      {/* Beneficios Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            ¿Por qué elegir nuestros paneles sándwich?
          </h2>
          <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center text-gray-600">
            <p>En MGI Paneles desarrollamos sistemas de panelería sándwich diseñados para responder a las exigencias de la construcción industrial moderna: eficiencia energética, rapidez de montaje y durabilidad estructural.</p>
            <p>Nuestros paneles están compuestos por chapas de acero prepintado de alta resistencia y núcleos aislantes de alto desempeño térmico (PIR, EPS o Lana de Roca), garantizando control térmico, estanqueidad y excelente comportamiento mecánico.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BENEFICIOS.map((beneficio, index) => (
              <div key={index} className="card text-center">
                <div className="mb-4 text-4xl">{beneficio.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{beneficio.title}</h3>
                <p className="text-gray-600">{beneficio.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usos prioritarios: cámaras + congelado */}
      <section id="usos" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Paneles para cámaras frigoríficas y de congelado
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Nuestro foco: paneles sándwich para refrigeración y baja temperatura, con el espesor y núcleo adecuados a tu proyecto.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {USOS_PRIORITARIOS.map((uso) => (
              <Card
                key={uso.id}
                title={uso.title}
                description={uso.description}
                href={uso.slug}
                image={uso.homeImage ?? uso.image}
                imageAlt={uso.title.toLowerCase()}
                imageHeight="h-72"
              />
            ))}
          </div>

          {/* Usos secundarios */}
          <div className="mt-16">
            <div className="mb-8 text-center">
              <h3 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
                También para techos, muros y naves
              </h3>
              <p className="mx-auto max-w-2xl text-gray-600">
                Además de cámaras, ofrecemos paneles sándwich para otras aplicaciones industriales y comerciales.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {USOS_SECUNDARIOS.map((uso) => (
                <Card
                  key={uso.id}
                  title={uso.title}
                  description={uso.description}
                  href={uso.slug}
                  image={uso.homeImage ?? uso.image}
                  imageAlt={uso.title.toLowerCase()}
                  imageHeight="h-48"
                  className="bg-white"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Paneles Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Tipos de Paneles Sándwich Disponibles
          </h2>
          <div className="mb-10 flex justify-center">
            <Link href="/paneles-sandwich/tipos" className="btn-primary">
              Ver Fichas Tecnicas de nuestros paneles
            </Link>
          </div>

          <div className="space-y-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900 sm:text-2xl">
                  <span aria-hidden>🔵</span> Paneles con Núcleo PIR
                </h3>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                  <li>Conductividad térmica aproximada: 0,020 – 0,022 W/m·K</li>
                  <li>Excelente reacción al fuego (Clasificación II-A)</li>
                  <li>Máximo rendimiento térmico</li>
                  <li>Ideales para refrigeración y cámaras de congelado</li>
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900 sm:text-2xl">
                  <span aria-hidden>🟢</span> Paneles con Núcleo EPS
                </h3>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                  <li>Conductividad térmica aproximada: 0,035 W/m·K</li>
                  <li>Alternativa eficiente y económica</li>
                  <li>Excelente comportamiento para refrigeración estándar</li>
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900 sm:text-2xl">
                  <span aria-hidden>🔴</span> Paneles con Lana de Roca
                </h3>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                  <li>Material incombustible</li>
                  <li>Alta resistencia al fuego</li>
                  <li>Buen desempeño acústico</li>
                  <li>Aplicaciones industriales con exigencia normativa RF</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border-2 border-primary-200 bg-primary-50/50 p-6 sm:p-8">
              <h3 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl">
                Especificaciones Técnicas Generales
              </h3>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>Ancho útil estándar: 1100 mm y 1150 mm</li>
                <li>Espesores disponibles: 50 mm, 70 mm, 100 mm, 120 mm, 150 mm y 200 mm</li>
                <li>Revestimiento: acero prepintado o galvalume</li>
                <li>Sistema de encastre: macho-hembra hermético</li>
                <li>Largos a medida según proyecto</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Nuestro Proceso de Trabajo
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Un proceso simple y eficiente desde la consulta hasta el servicio post venta
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {PROCESO_TRABAJO.map((paso) => (
              <div key={paso.step} className="relative flex">
                <div className="group relative flex w-full flex-col">
                  <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-bl-2xl rounded-tr-2xl bg-gradient-to-br from-primary-600 to-primary-700 text-sm font-bold text-white shadow-md">
                      {paso.step}
                    </div>
                    <div className="mb-4 text-5xl">{paso.icon}</div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900">{paso.title}</h3>
                    <p className="mt-auto text-sm leading-relaxed text-gray-600">{paso.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos Destacados Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Proyectos en funcionamiento
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Proyectos desarrollados con nuestros paneles sándwich para distintas aplicaciones industriales y comerciales.
            </p>
          </div>
          {PROYECTOS.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PROYECTOS.slice(0, 3).map((proyecto) => (
                <ProjectCard
                  key={proyecto.id}
                  id={proyecto.id}
                  title={proyecto.title}
                  description={proyecto.description}
                  videoSrc={proyecto.videoSrc}
                  thumbnail={proyecto.thumbnail}
                  thumbnailAlt={proyecto.thumbnailAlt}
                />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <p>No hay proyectos destacados disponibles en este momento.</p>
            </div>
          )}
          <div className="mt-8 text-center">
            <Link href="/proyectos" className="btn-primary">
              Ver Todos los Proyectos
            </Link>
          </div>
        </div>
      </section>

      <FAQ items={homeFAQs} className="bg-gray-50" />
      <FAQSchema items={homeFAQs} />

      <CTA
        title="¿Necesitás paneles para tu cámara frigorífica?"
        description="Contactanos y recibí una cotización personalizada. Envíos a toda Argentina."
      />
    </>
  )
}
