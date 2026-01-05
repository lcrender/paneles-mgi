import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Proyectos - Galería de Obras Realizadas',
  description:
    'Conoce nuestros proyectos realizados con paneles sándwich: cámaras frigoríficas, naves industriales y más.',
}

export default function ProyectosPage() {
  return (
    <>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-12">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">Proyectos</h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Galería de proyectos realizados con nuestros paneles sándwich. Cada proyecto es único
              y demuestra la calidad y versatilidad de nuestros productos.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder para proyectos - se reemplazará con datos reales */}
            <div className="card">
              <div className="relative mb-4 h-64 w-full overflow-hidden rounded-lg bg-gray-200">
                <Image
                  src="/images/proyectos/proyecto-1.jpg"
                  alt="Proyecto destacado"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h2 className="mb-2 text-xl font-semibold text-gray-900">Proyecto Ejemplo 1</h2>
              <p className="text-gray-600">
                Descripción del proyecto realizado con paneles sándwich
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

