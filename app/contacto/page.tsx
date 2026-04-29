import type { Metadata } from 'next'
import ContactForm from '@/components/forms/ContactForm'
import { SITE_CONFIG } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Contacto - Solicita tu Cotización',
  description:
    'Contacta con nosotros para solicitar una cotización de paneles sándwich. Estamos para ayudarte con tu proyecto.',
  alternates: {
    canonical: '/contacto',
  },
}

export default function ContactPage() {
  const whatsappLink = generateWhatsAppLink(
    SITE_CONFIG.whatsapp,
    'Hola, estoy interesado en paneles sándwich y quisiera solicitar una cotización'
  )

  return (
    <>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">Contacto</h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Estamos para ayudarte con tu proyecto. Completa el formulario o contáctanos
              directamente.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Información de Contacto */}
              <div>
                <h2 className="mb-6 text-2xl font-semibold text-gray-900">Información de Contacto</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">Teléfono</h3>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-gray-600 hover:text-primary-600"
                    >
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">Dirección</h3>
                    <p className="text-gray-600">
                      {SITE_CONFIG.address.street}
                      <br />
                      {SITE_CONFIG.address.city}, {SITE_CONFIG.address.province}
                      <br />
                      {SITE_CONFIG.address.country}
                    </p>
                    <a
                      href={SITE_CONFIG.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-primary-600 hover:text-primary-700"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                  <div className="pt-4">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp inline-block"
                    >
                      Contactar por WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Formulario */}
              <div className="card">
                <h2 className="mb-6 text-2xl font-semibold text-gray-900">Envíanos un Mensaje</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

