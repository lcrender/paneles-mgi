import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Hero from '@/components/ui/Hero'
import CTA from '@/components/ui/CTA'
import FAQ from '@/components/ui/FAQ'
import { tiposContent } from '@/lib/content/tipos'
import { TIPOS } from '@/lib/constants'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return TIPOS.map((tipo) => ({
    slug: tipo.id,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const content = tiposContent[slug as keyof typeof tiposContent]

  if (!content) {
    return {
      title: 'Tipo de panel no encontrado',
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

export default async function TipoPage({ params }: PageProps) {
  const { slug } = await params
  const content = tiposContent[slug as keyof typeof tiposContent]

  if (!content) {
    notFound()
  }

  const tipo = TIPOS.find((t) => t.id === slug)

  return (
    <>
      <Hero
        title={content.h1}
        description={content.description}
        image={tipo?.image}
        imageAlt={content.title}
      />

      <section className="section-padding">
        <div className="container-custom">
          <article className="prose prose-lg mx-auto max-w-4xl">
            <div
              dangerouslySetInnerHTML={{ __html: content.content }}
              className="prose-headings:font-bold prose-headings:text-gray-900 prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-3xl prose-p:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:mb-4 prose-li:text-gray-700 prose-strong:text-gray-900"
            />
          </article>
        </div>
      </section>

      {content.faqs && content.faqs.length > 0 && (
        <FAQ items={content.faqs} title="Preguntas Frecuentes sobre este Tipo de Panel" />
      )}

      <CTA
        title={`¿Necesitas paneles ${tipo?.title.toLowerCase()}?`}
        description="Contactanos y recibe una cotización personalizada para tu proyecto"
      />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: content.title,
            description: content.description,
            brand: {
              '@type': 'Brand',
              name: 'Paneles Sándwich MGI',
            },
            category: 'Panel sándwich',
          }),
        }}
      />
    </>
  )
}

