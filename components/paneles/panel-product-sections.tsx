import type { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'

/** Separador horizontal entre bloques de línea de producto (mismo patrón que usos/techos). */
export function PanelProductSectionDivider() {
  return (
    <div className="bg-white">
      <div className="container-custom">
        <hr className="my-8 border-gray-300" />
      </div>
    </div>
  )
}

/** Mismo patrón que entre Panel Muro y ECO en usos/naves-industriales. */
export function PanelProductSectionDividerLight() {
  return (
    <div className="bg-white">
      <div className="container-custom">
        <hr className="border-gray-200" />
      </div>
    </div>
  )
}

export function PanelFrigorificoSection({
  id,
  className = 'section-padding bg-white',
  headline,
}: {
  id?: string
  className?: string
  /** Contenido opcional encima del bloque de producto (p. ej. H1 de página tipos). */
  headline?: ReactNode
}) {
  return (
    <section id={id} className={className}>
      <div className="container-custom">
        {headline}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <h2 className="mb-6 inline-block border-b-2 border-gray-300 pb-2 text-2xl font-semibold text-gray-900 sm:text-3xl">
              Paneles frigoríficos
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>• Paneles aislantes frigoríficos</p>
              <p>• Núcleo PIR (Poliisocianurato)</p>
              <p>• Soluciones para cámaras, salas limpias y cerramientos térmicos</p>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              Panel metálico aislante fabricado en proceso de línea continua, con revestimiento en ambas
              caras en acero galvanizado prepintado o acero inoxidable AISI 304 mate, con sistema de
              unión de alto sellado que garantiza hermeticidad y aislamiento térmico.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              Núcleo PIR AP con densidad media de 28 a 35 kg/m³ y conductividad térmica de 0,022 W/m·K,
              ideal para aplicaciones que requieren control térmico, higiene y resistencia a la humedad.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl bg-gray-100 shadow-lg">
              <Image
                src="/images/panel-frigorifico-camara.webp"
                alt="Panel frigorífico para cámara"
                width={1600}
                height={1000}
                className="block h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <hr className="my-10 border-gray-200" />

        <div className="space-y-8">
          <div className="text-gray-700">
            <p className="text-lg leading-relaxed">
              Espesores disponibles: 32 / 40 / 50 / 70 / 100 / 120 / 150 / 200 mm
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Ancho útil: 1100 mm (PUMA) / 1130 mm (ROBOR)
            </p>
            <p className="mt-4 text-lg leading-relaxed">Longitud máxima: 12.000 mm</p>
          </div>

          <div className="grid gap-3 text-center text-gray-700 sm:grid-cols-2 lg:grid-cols-3">
            <p className="flex min-h-[88px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
              Alta aislación térmica.
            </p>
            <p className="flex min-h-[88px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
              Excelente estanqueidad y hermeticidad.
            </p>
            <p className="flex min-h-[88px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
              Apto para cámaras frigoríficas y salas sanitarias.
            </p>
            <p className="flex min-h-[88px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
              Superficie interior apta para limpieza e higiene.
            </p>
            <p className="flex min-h-[88px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
              Rápida instalación y bajo peso.
            </p>
            <p className="flex min-h-[88px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
              Disponible en acero prepintado o acero inoxidable.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/contacto" className="btn-primary">
              Solicitar presupuesto
            </Link>
            <a
              href="/pdfs/paneles-frigorificos.pdf"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargá ficha técnica
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function PanelTrapezoidalSection({
  variant = 'techos',
  id,
  className = 'section-padding bg-white',
}: {
  variant?: 'techos' | 'naves'
  id?: string
  className?: string
}) {
  const thirdBullet =
    variant === 'naves' ? (
      <p>• Para construcciones industriales</p>
    ) : (
      <p>• Para cubiertas y muros</p>
    )

  return (
    <section id={id} className={className}>
      <div className="container-custom">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <h2 className="mb-6 inline-block border-b-2 border-gray-300 pb-2 text-2xl font-semibold text-gray-900 sm:text-3xl">
              Paneles Trapezoidales
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>• Panel aislante trapezoidal</p>
              <p>• Núcleo PIR (Poliisocianurato)</p>
              {thirdBullet}
            </div>

            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              Panel metálico aislante fabricado en línea continua con cara exterior trapezoidal en acero
              galvanizado prepintado o aluminio prepintado, y cara interior en acero prepintado, aluminio
              o foil de aluminio blanco.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              Apto para cubiertas y cerramientos verticales en naves industriales, edificios comerciales y
              residenciales.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              Núcleo PIR de alta eficiencia térmica (λ 0,022 W/m·K), con densidad media de 28 a 35 kg/m³ y
              buena resistencia mecánica.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl bg-gray-100 shadow-lg">
              <Image
                src="/images/panel-trapezoidal-para-techo-negro.webp"
                alt="Panel trapezoidal para techo negro"
                width={1600}
                height={1000}
                className="block h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <hr className="my-10 border-gray-200" />

        <div className="space-y-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="text-gray-700">
              <p className="text-lg leading-relaxed">
                Espesores disponibles: 20 / 30 / 50 / 70 / 100 mm
              </p>
              <p className="mt-4 text-lg leading-relaxed">Ancho útil: 1000 mm</p>
              <p className="mt-4 text-lg leading-relaxed">Longitud máxima: hasta 12.000 mm</p>
            </div>

            <div className="text-gray-700 lg:text-right">
              <p className="mb-3 text-lg font-semibold text-gray-900">Colores disponibles:</p>
              <Image
                src="/images/colores-trapezoidal.webp"
                alt="Colores disponibles panel trapezoidal"
                width={440}
                height={220}
                className="mx-auto h-auto w-full max-w-[220px] rounded-lg border border-gray-200 bg-white shadow-sm lg:ml-auto lg:mr-0"
                sizes="220px"
              />
            </div>
          </div>

          <div className="grid gap-3 text-center text-gray-700 sm:grid-cols-2 lg:grid-cols-4">
            <p className="flex min-h-[88px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
              Bajo peso.
            </p>
            <p className="flex min-h-[88px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
              Rápida instalación.
            </p>
            <p className="flex min-h-[88px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
              Buen aislamiento térmico.
            </p>
            <p className="flex min-h-[88px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
              Terminación interior apta para dejar a la vista.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/contacto" className="btn-primary">
              Solicitar presupuesto
            </Link>
            <a
              href="/pdfs/panel-trapezoidal-ficha-tecnica.pdf"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargá ficha técnica
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function PanelMuroSection({ className = 'section-padding bg-white' }: { className?: string }) {
  return (
    <section className={className}>
      <div className="container-custom">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <h2 className="mb-6 inline-block border-b-2 border-gray-300 pb-2 text-2xl font-semibold text-gray-900 sm:text-3xl">
              Panel Muro
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>• Paneles aislantes arquitectónicos</p>
              <p>• Núcleo PIR (Poliisocianurato)</p>
              <p>• Soluciones para muros y cielos interiores</p>
              <p>• Varios colores disponibles</p>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              Panel metálico aislante fabricado en proceso de línea continua, con sistema de fijación
              oculta que proporciona excelente terminación estética en fachadas y cerramientos
              arquitectónicos. Revestido en ambas caras con acero galvanizado prepintado, apto para
              aplicaciones industriales, comerciales, residenciales y construcciones modulares.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              Núcleo PIR AP de alto rendimiento, con densidad media de 25 a 40 kg/m³ y conductividad
              térmica de 0,022 W/m·K, que garantiza excelente aislamiento térmico y buen comportamiento
              frente al fuego.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl bg-gray-100 shadow-lg">
              <Image
                src="/images/panel-sandwich-muro.webp"
                alt="Panel sándwich muro"
                width={1600}
                height={1000}
                className="block h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <hr className="my-10 border-gray-200" />

        <div className="space-y-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="text-gray-700">
              <p className="text-lg leading-relaxed">
                Espesores disponibles: 50 / 70 / 100 mm
              </p>
              <p className="mt-4 text-lg leading-relaxed">Ancho útil: 1040 mm</p>
            </div>

            <div className="text-gray-700 lg:text-right">
              <p className="mb-3 text-lg font-semibold text-gray-900">Colores disponibles:</p>
              <Image
                src="/images/colores-panel-muro.webp"
                alt="Colores disponibles panel muro"
                width={440}
                height={220}
                className="mx-auto h-auto w-full max-w-[220px] rounded-lg border border-gray-200 bg-white shadow-sm lg:ml-auto lg:mr-0"
                sizes="220px"
              />
            </div>
          </div>

          <div className="grid gap-3 text-center text-gray-700 sm:grid-cols-2 lg:grid-cols-3">
            <p className="flex min-h-[88px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
              Panel autoportante.
            </p>
            <p className="flex min-h-[88px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
              Excelente aislación térmica.
            </p>
            <p className="flex min-h-[88px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
              Fijación oculta para terminación arquitectónica.
            </p>
            <p className="flex min-h-[88px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
              Bajo peso y fácil manipulación.
            </p>
            <p className="flex min-h-[88px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
              Apto para muros, fachadas y cielos interiores.
            </p>
            <p className="flex min-h-[88px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
              Excelente acabado interior y exterior.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/contacto" className="btn-primary">
              Solicitar presupuesto
            </Link>
            <a
              href="/pdfs/panel-muro-ficha-tecnica.pdf"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargá ficha técnica
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function PanelEcoTrapezoidalSection({
  id,
  className = 'section-padding bg-white',
}: {
  id?: string
  className?: string
}) {
  return (
    <section id={id} className={className}>
      <div className="container-custom">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <h2 className="mb-6 inline-block border-b-2 border-gray-300 pb-2 text-2xl font-semibold text-gray-900 sm:text-3xl">
              Paneles ECO Trapezoidales
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>• Paneles aislantes trapezoidales económicos</p>
              <p>• Núcleo PIR (Poliisocianurato)</p>
              <p>• Soluciones para cubiertas y muros</p>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              Panel metálico aislante fabricado en proceso de línea continua, con cara exterior
              trapezoidal en acero galvanizado prepintado y cara interior en acero frizado. Sistema de
              encastre lateral que asegura buena estanqueidad y rápida instalación.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              Núcleo PIR AP con densidad media de 25 a 35 kg/m³ y conductividad térmica de 0,022 W/m·K,
              proporcionando buen aislamiento térmico y resistencia mecánica.
            </p>

            <div className="mt-6 rounded-xl border-2 border-primary-200 bg-primary-50/60 p-5 text-gray-700">
              <p className="text-lg leading-relaxed">Espesores disponibles: 20 / 30 mm</p>
              <p className="mt-3 text-lg leading-relaxed">Ancho útil: 1000 mm</p>
              <p className="mt-3 text-lg leading-relaxed">Longitud máxima: 8000 mm</p>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl bg-gray-100 shadow-lg">
              <Image
                src="/images/panel-sandwich-eco-trapezoidal.webp"
                alt="Panel sándwich ECO trapezoidal"
                width={1600}
                height={1000}
                className="block h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <hr className="my-10 border-gray-200" />

        <div className="space-y-8">
          <div className="grid gap-3 text-center text-gray-700 sm:grid-cols-2 lg:grid-cols-5">
            <p className="flex min-h-[88px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
              Panel liviano y económico.
            </p>
            <p className="flex min-h-[88px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
              Buen aislamiento térmico.
            </p>
            <p className="flex min-h-[88px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
              Rápida instalación.
            </p>
            <p className="flex min-h-[88px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
              Sistema de encastre lateral.
            </p>
            <p className="flex min-h-[88px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
              Apto para cubiertas y cerramientos.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/contacto" className="btn-primary">
              Solicitar presupuesto
            </Link>
            <a
              href="/pdfs/panel-eco-trapezoidal.pdf"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargá ficha técnica
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
