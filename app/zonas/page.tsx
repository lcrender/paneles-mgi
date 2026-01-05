import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zonas de Cobertura - Paneles Sándwich MGI',
  description:
    'Zonas donde ofrecemos servicios de paneles sándwich. Cobertura en múltiples ciudades y regiones.',
}

export default function ZonasPage() {
  return (
    <>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h1 className="mb-8 text-4xl font-bold text-gray-900 sm:text-5xl">Zonas de Cobertura</h1>
          <div className="prose prose-lg max-w-3xl">
            <p className="text-lg text-gray-600">
              Contenido pendiente. Aquí se incluirá información sobre zonas de cobertura para SEO
              local, incluyendo ciudades y regiones donde se ofrece el servicio.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

