import type { Metadata } from 'next'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import { USOS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Usos de Paneles Sándwich - Aplicaciones Industriales y Comerciales',
  description:
    'Descubre los diferentes usos de los paneles sándwich: cámaras frigoríficas, naves industriales, techos, muros y más. Soluciones de aislación térmica para cada necesidad.',
  alternates: {
    canonical: '/paneles-sandwich/usos',
  },
}

export default function UsosPage() {
  return (
    <>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-12">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Usos de Paneles Sándwich
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Los paneles sándwich son versátiles y se adaptan a múltiples aplicaciones industriales
              y comerciales. Descubre cómo nuestros paneles pueden optimizar tu proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {USOS.map((uso) => (
              <Card
                key={uso.id}
                title={uso.title}
                description={uso.description}
                href={uso.slug}
                image={uso.image}
                imageAlt={`Paneles sándwich para ${uso.title.toLowerCase()}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

