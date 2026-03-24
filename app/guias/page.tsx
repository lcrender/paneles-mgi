import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guías y artículos',
  description:
    'Guías y recursos sobre paneles sándwich, construcción industrial y aislación térmica.',
  alternates: {
    canonical: '/guias',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function GuiasPage() {
  return (
    <>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h1 className="mb-8 text-4xl font-bold text-gray-900 sm:text-5xl">Guías y Artículos</h1>
          <div className="prose prose-lg max-w-3xl">
            <p className="text-lg text-gray-600">
              Contenido pendiente. Aquí se publicarán guías, artículos y recursos útiles sobre
              paneles sándwich, construcción industrial y aislación térmica para SEO y contenido
              educativo.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

