import type { Metadata } from 'next'
import FAQ from '@/components/ui/FAQ'
import FAQSchema from '@/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes - Paneles Sándwich',
  description:
    'Responde tus dudas sobre paneles sándwich: tipos, espesores, precios, instalación y más.',
}

const generalFAQs = [
  {
    question: '¿Qué es un panel sándwich?',
    answer:
      'Un panel sándwich es un sistema constructivo formado por dos chapas metálicas que encierran un núcleo aislante (PIR/PUR, lana de roca o EPS). Ofrece excelente aislación térmica, resistencia estructural y rapidez de montaje.',
  },
  {
    question: '¿Para qué se usan los paneles sándwich?',
    answer:
      'Los paneles sándwich se usan para construcción de cámaras frigoríficas, naves industriales, techos, muros exteriores e interiores, y cualquier aplicación que requiera aislación térmica eficiente.',
  },
  {
    question: '¿Qué tipo de panel sándwich es mejor?',
    answer:
      'La elección depende del proyecto. Los paneles PIR/PUR ofrecen la mejor aislación térmica. Los paneles de lana de roca ofrecen mejor resistencia al fuego. Nuestros especialistas pueden asesorarte según tus necesidades.',
  },
  {
    question: '¿Cuánto tiempo tarda la fabricación?',
    answer:
      'El tiempo de fabricación depende de la cantidad y complejidad del pedido. Generalmente, para proyectos estándar, el tiempo oscila entre 2 a 4 semanas. Contactanos para una estimación precisa.',
  },
  {
    question: '¿Ofrecen instalación?',
    answer:
      'Sí, además de la fabricación, ofrecemos servicios de instalación. Nuestro equipo cuenta con experiencia en montaje de paneles sándwich para diversos tipos de proyectos.',
  },
  {
    question: '¿Qué espesor necesito?',
    answer:
      'El espesor necesario depende de varios factores: temperatura objetivo, normativas locales, clima y uso del espacio. Para proyectos estándar recomendamos 80-100mm, pero para cámaras frigoríficas puede requerirse 150-200mm. Contactanos para asesoramiento específico.',
  },
  {
    question: '¿Cómo solicito una cotización?',
    answer:
      'Puedes solicitar una cotización completando nuestro formulario de contacto, llamándonos por teléfono, o contactándonos por WhatsApp. Necesitaremos algunos detalles básicos sobre tu proyecto.',
  },
]

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Preguntas Frecuentes
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Responde tus dudas sobre paneles sándwich, tipos, especificaciones, precios e
              instalación.
            </p>
          </div>
        </div>
      </section>

      <FAQ items={generalFAQs} />
      <FAQSchema items={generalFAQs} />
    </>
  )
}

