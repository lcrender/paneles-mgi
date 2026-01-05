import type { Metadata } from 'next'
import Card from '@/components/ui/Card'
import { TIPOS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Tipos de Paneles Sándwich - PIR, PUR y Lana de Roca',
  description:
    'Conoce los diferentes tipos de paneles sándwich: PIR/PUR para máxima aislación térmica y lana de roca para resistencia al fuego. Encuentra el ideal para tu proyecto.',
}

export default function TiposPage() {
  return (
    <>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-12">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Tipos de Paneles Sándwich
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Ofrecemos diferentes tipos de paneles sándwich según las necesidades específicas de
              tu proyecto. Cada tipo tiene características únicas que lo hacen ideal para ciertas
              aplicaciones.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {TIPOS.map((tipo) => (
              <Card
                key={tipo.id}
                title={tipo.title}
                description={tipo.description}
                href={tipo.slug}
                image={tipo.image}
                imageAlt={`Panel sándwich tipo ${tipo.title.toLowerCase()}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

