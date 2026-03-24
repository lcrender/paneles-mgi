import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'Conocé Paneles Sándwich MGI: fabricación y venta de paneles sándwich para construcción industrial, cámaras frigoríficas y aislación térmica.',
  alternates: {
    canonical: '/nosotros',
  },
}

export default function NosotrosPage() {
  return (
    <>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h1 className="mb-8 text-4xl font-bold text-gray-900 sm:text-5xl">Nosotros</h1>
          <div className="prose prose-lg max-w-3xl">
            <p className="text-lg text-gray-600">
              Contenido pendiente. Aquí se incluirá información sobre la empresa, historia,
              valores, equipo y experiencia.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

