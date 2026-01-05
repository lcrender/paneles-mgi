import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Hero from '@/components/ui/Hero'
import CTA from '@/components/ui/CTA'
import FAQ from '@/components/ui/FAQ'
import { especificacionesContent } from '@/lib/content/especificaciones'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

const slugs = ['espesores', 'precio-m2', 'aislacion-termica'] as const

export async function generateStaticParams() {
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const content = especificacionesContent[slug as keyof typeof especificacionesContent]

  if (!content) {
    return {
      title: 'Especificación no encontrada',
    }
  }

  return {
    title: content.title,
    description: content.description,
    openGraph: {
      title: content.title,
      description: content.description,
      type: 'website',
    },
  }
}

export default async function EspecificacionPage({ params }: PageProps) {
  const { slug } = await params
  const content = especificacionesContent[slug as keyof typeof especificacionesContent]

  if (!content) {
    notFound()
  }

  return (
    <>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h1 className="mb-8 text-4xl font-bold text-gray-900 sm:text-5xl">{content.h1}</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <article className="prose prose-lg mx-auto max-w-4xl">
            <div
              dangerouslySetInnerHTML={{ __html: content.content }}
              className="prose-headings:font-bold prose-headings:text-gray-900 prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-3xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-2xl prose-p:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:mb-4 prose-li:text-gray-700 prose-strong:text-gray-900 prose-em:text-gray-600"
            />
          </article>
        </div>
      </section>

      {content.faqs && content.faqs.length > 0 && (
        <FAQ items={content.faqs} title="Preguntas Frecuentes" />
      )}

      <CTA
        title="¿Necesitas más información técnica?"
        description="Contactanos y nuestros especialistas te ayudarán con todas tus dudas"
      />
    </>
  )
}

