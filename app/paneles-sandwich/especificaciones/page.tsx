import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Especificaciones Técnicas de Paneles Sándwich',
  description:
    'Información técnica completa sobre espesores, precios, aislación térmica y características de nuestros paneles sándwich.',
  alternates: {
    canonical: '/paneles-sandwich/especificaciones',
  },
  robots: {
    index: false,
    follow: false,
  },
}

const especificacionesLinks = [
  {
    title: 'Espesores',
    description: 'Conoce los diferentes espesores disponibles y cuál elegir para tu proyecto',
    href: '/paneles-sandwich/especificaciones/espesores',
  },
  {
    title: 'Precio por m²',
    description: 'Información sobre precios y factores que influyen en el costo',
    href: '/paneles-sandwich/especificaciones/precio-m2',
  },
  {
    title: 'Aislación Térmica',
    description: 'Especificaciones técnicas de conductividad térmica y valores lambda',
    href: '/paneles-sandwich/especificaciones/aislacion-termica',
  },
]

export default function EspecificacionesPage() {
  return (
    <>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-12">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Especificaciones Técnicas
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Toda la información técnica que necesitas sobre nuestros paneles sándwich: espesores,
              precios, aislación térmica y más.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {especificacionesLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="card block transition-transform hover:scale-105"
              >
                <h2 className="mb-2 text-xl font-semibold text-gray-900">{link.title}</h2>
                <p className="text-gray-600">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

