import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/ui/Hero'
import Card from '@/components/ui/Card'
import CTA from '@/components/ui/CTA'
import FAQ from '@/components/ui/FAQ'
import FAQSchema from '@/components/seo/FAQSchema'
import ProjectCard from '@/components/ui/ProjectCard'
import { BENEFICIOS, TIPOS, PROCESO_TRABAJO } from '@/lib/constants'
import { PROYECTOS } from '@/lib/content/proyectos'

export const metadata = {
  title: 'Paneles Sándwich para Construcción Industrial y Cámaras Frigoríficas',
  description:
    'Fabricación y venta de paneles sándwich para cámaras frigoríficas, naves industriales, techos y muros. Aislación térmica superior con entrega e instalación.',
}

const homeFAQs = [
  {
    question: '¿Qué es un panel sándwich?',
    answer:
      'Un panel sándwich es un sistema constructivo formado por dos chapas metálicas que encierran un núcleo aislante. Ofrece excelente aislación térmica, resistencia estructural y rapidez de montaje, ideal para cámaras frigoríficas, naves industriales y construcciones que requieren control térmico.',
  },
  {
    question: '¿Qué espesores de paneles sándwich ofrecen?',
    answer:
      'Fabricamos paneles sándwich en diferentes espesores, generalmente desde 40mm hasta 200mm, según las necesidades del proyecto. El espesor adecuado depende del uso, la temperatura requerida y las normativas de aislación térmica aplicables.',
  },
  {
    question: '¿Realizan la instalación de los paneles?',
    answer:
      'Sí, además de la fabricación, ofrecemos servicios de instalación. Nuestro equipo cuenta con experiencia en montaje de paneles sándwich para diversos tipos de proyectos, garantizando una instalación correcta y eficiente.',
  },
  {
    question: '¿Cuánto tiempo tarda la fabricación?',
    answer:
      'El tiempo de fabricación depende de la cantidad y complejidad del pedido. Generalmente, para proyectos estándar, el tiempo de fabricación oscila entre 2 a 4 semanas. Contactanos para una cotización precisa según tu proyecto específico.',
  },
  {
    question: '¿Qué tipos de núcleo aislante ofrecen?',
    answer:
      'Trabajamos principalmente con paneles de núcleo PIR/PUR (poliuretano) que ofrecen la mejor aislación térmica, y paneles con núcleo de lana de roca que brindan mayor resistencia al fuego. Cada tipo tiene sus ventajas según el uso previsto.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Paneles Sándwich para Construcción Industrial"
        description="Aislación térmica superior, instalación rápida y fabricación a medida para cámaras frigoríficas, naves industriales y más."
      />

      {/* Beneficios Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            ¿Por qué elegir nuestros paneles sándwich?
          </h2>
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

      {/* Tipos de Panel Section */}
      <section id="usos" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Usos principales de nuestros paneles sándwich
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Nuestros paneles sándwich están diseñados para adaptarse a diversas aplicaciones industriales y comerciales, permitiendo resolver necesidades de aislamiento, eficiencia energética y rápida instalación en diferentes entornos.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            <Card
              title="Cámaras Frigoríficas"
              description="Paneles aptos para cámaras frigoríficas y otros sistemas de refrigeración, pensados para responder a diferentes exigencias térmicas y operativas."
              href="/paneles-sandwich/usos/camaras-frigorificas"
              image="/images/home/paneles-para-camaras-frigorificas.jpg"
              imageAlt="paneles para camaras frigorificas"
              imageHeight="h-64"
            />
            <Card
              title="Congelados"
              description="Paneles sándwich para cámaras de congelado, diseñados para ofrecer máxima aislación térmica y un control eficiente de temperaturas bajo cero."
              href="/paneles-sandwich/usos/congelados"
              image="/images/home/paneles-sandwich-para-camaras-de-congelado.jpg"
              imageAlt="paneles sandwich para camaras de congelado"
              imageHeight="h-64"
            />
            <Card
              title="Instalaciones industriales"
              description="Construcción rápida y eficiente de naves / galpones industriales"
              href="/paneles-sandwich/usos/naves-industriales"
              image="/images/home/paneles-para-naves-industriales.jpg"
              imageAlt="paneles para naves industriales"
              imageHeight="h-64"
            />
            <Card
              title="Techos"
              description="Sistemas de techado con paneles sándwich, pensados para aislamiento térmico, resistencia y rápida instalación."
              href="/paneles-sandwich/usos/techos"
              image="/images/home/paneles-sandwich-para-techos.jpg"
              imageAlt="paneles sandwich para techos"
              imageHeight="h-64"
            />
            <Card
              title="Muros"
              description="Muros exteriores e interiores con paneles sándwich, ideales para cerramientos industriales y comerciales."
              href="/paneles-sandwich/usos/muros"
              image="/images/home/paneles-sandwich-para-muro.jpg"
              imageAlt="paneles sandwich para muro"
              imageHeight="h-64"
            />
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
                    {/* Badge numérico en esquina superior derecha */}
                    <div className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-bl-2xl rounded-tr-2xl bg-gradient-to-br from-primary-600 to-primary-700 text-sm font-bold text-white shadow-md">
                      {paso.step}
                    </div>
                    
                    {/* Icono grande */}
                    <div className="mb-4 text-5xl">
                      {paso.icon}
                    </div>
                    
                    <h3 className="mb-2 text-lg font-bold text-gray-900">
                      {paso.title}
                    </h3>
                    <p className="mt-auto text-sm leading-relaxed text-gray-600">
                      {paso.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos Destacados Section */}
      <section className="section-padding bg-gray-50">
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

      {/* FAQ Section */}
      <FAQ items={homeFAQs} />
      <FAQSchema items={homeFAQs} />

      {/* CTA Final Section */}
      <CTA
        title="¿Listo para tu proyecto?"
        description="Contactanos y recibe una cotización personalizada para tus paneles sándwich"
      />
    </>
  )
}

