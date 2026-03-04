import type { Metadata } from 'next'
import ProjectCard from '@/components/ui/ProjectCard'
import { PROYECTOS } from '@/lib/content/proyectos'

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
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">Proyectos</h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Galería de proyectos realizados con nuestros paneles sándwich. Cada proyecto es único
              y demuestra la calidad y versatilidad de nuestros productos.
            </p>
          </div>

          {PROYECTOS.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {PROYECTOS.map((proyecto) => (
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
              <p>No hay proyectos disponibles en este momento.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
