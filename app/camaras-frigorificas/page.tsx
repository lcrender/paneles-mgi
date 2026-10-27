import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/ui/Hero'
import FAQ from '@/components/ui/FAQ'
import FAQSchema from '@/components/seo/FAQSchema'
import CTA from '@/components/ui/CTA'
import ProjectCard from '@/components/ui/ProjectCard'
import { SITE_CONFIG } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/utils'
import { camarasProductoContent, camarasProductoSeo } from '@/lib/content/camaras-producto'
import { PROYECTOS } from '@/lib/content/proyectos'

export const metadata: Metadata = {
  title: { absolute: camarasProductoSeo.title },
  description: camarasProductoSeo.description,
  alternates: {
    canonical: '/camaras-frigorificas',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: camarasProductoSeo.title,
    description: camarasProductoSeo.description,
    type: 'website',
    url: '/camaras-frigorificas',
  },
}

export default function CamarasFrigorificasProductoPage() {
  const content = camarasProductoContent
  const showWhatsApp = SITE_CONFIG.contactVisibility.showWhatsApp
  const whatsappLink = generateWhatsAppLink(SITE_CONFIG.whatsapp, content.cta.whatsappMessage)

  return (
    <>
      <Hero
        title={content.hero.h1}
        description={
          <>
            <p>{content.hero.subtitle}</p>
            <p>{content.hero.intro}</p>
          </>
        }
        image="/images/hero-paneles.webp"
        imageAlt="Cámaras frigoríficas MGI"
        rightImage="/images/camaras-frigorificas-hero.webp"
        rightImageAlt="Cámara frigorífica MGI con puerta abierta y técnico"
        rightImageLarge
        primaryCta={{ text: 'Cotizar', href: '/contacto' }}
        secondaryCta={showWhatsApp ? { text: 'WhatsApp', href: whatsappLink } : undefined}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">{content.incluye.h2}</h2>
            <p className="text-lg text-gray-600">{content.incluye.intro}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.incluye.items.map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">{content.tipos.h2}</h2>
            <p className="text-lg text-gray-600">{content.tipos.intro}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {content.tipos.items.map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8">
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">{content.proceso.h2}</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {content.proceso.steps.map((paso) => (
              <div key={paso.step} className="rounded-2xl bg-gray-50 p-6 text-center">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">
                  {paso.step}
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{paso.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{paso.text}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-2xl text-center">
            <p className="mb-4 text-gray-600">{content.panelesLinks.text}</p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8">
              {content.panelesLinks.items.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-semibold text-primary-600 hover:text-primary-700"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">{content.obras.h2}</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">{content.obras.intro}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROYECTOS.map((proyecto) => (
              <ProjectCard
                key={proyecto.id}
                id={proyecto.id}
                title={
                  (content.obras.titulos as Record<string, string>)[proyecto.id] ?? proyecto.title
                }
                description={proyecto.description}
                videoSrc={proyecto.videoSrc}
                thumbnail={proyecto.thumbnail}
                thumbnailAlt={proyecto.thumbnailAlt}
              />
            ))}
          </div>
        </div>
      </section>

      <FAQ items={content.faqs} title="Preguntas sobre cámaras frigoríficas" className="bg-gray-50" />
      <FAQSchema items={content.faqs} />

      <CTA
        title={content.cta.title}
        description={content.cta.description}
        primaryButton={{ text: 'Cotizar', href: '/contacto' }}
        secondaryButton={showWhatsApp ? { text: 'WhatsApp', href: whatsappLink } : undefined}
      />
    </>
  )
}
