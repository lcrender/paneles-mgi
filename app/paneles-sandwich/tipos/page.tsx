import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tipos de Paneles Sándwich - PIR, EPS y Lana de Roca',
  description:
    'Conoce los tipos de paneles sándwich disponibles: PIR, EPS y Lana de Roca. Especificaciones técnicas y aplicaciones.',
}

export default function TiposPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h1 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Tipos de Paneles Sándwich Disponibles
        </h1>

        <div className="space-y-10">
          {/* 3 columnas en desktop */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* PIR */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900 sm:text-2xl">
                <span aria-hidden>🔵</span> Paneles con Núcleo PIR
              </h2>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>Conductividad térmica aproximada: 0,020 – 0,022 W/m·K</li>
                <li>Excelente reacción al fuego (Clasificación II-A)</li>
                <li>Máximo rendimiento térmico</li>
                <li>Ideales para refrigeración y cámaras de congelado</li>
              </ul>
            </div>

            {/* EPS */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900 sm:text-2xl">
                <span aria-hidden>🟢</span> Paneles con Núcleo EPS
              </h2>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>Conductividad térmica aproximada: 0,035 W/m·K</li>
                <li>Alternativa eficiente y económica</li>
                <li>Excelente comportamiento para refrigeración estándar</li>
              </ul>
            </div>

            {/* Lana de Roca */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900 sm:text-2xl">
                <span aria-hidden>🔴</span> Paneles con Lana de Roca
              </h2>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>Material incombustible</li>
                <li>Alta resistencia al fuego</li>
                <li>Buen desempeño acústico</li>
                <li>Aplicaciones industriales con exigencia normativa RF</li>
              </ul>
            </div>
          </div>

          {/* Especificaciones Técnicas Generales - una columna */}
          <div className="rounded-xl border-2 border-primary-200 bg-primary-50/50 p-6 sm:p-8">
            <h2 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl">
              Especificaciones Técnicas Generales
            </h2>
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
  )
}
