import Link from 'next/link'
import { SITE_CONFIG, USOS } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/utils'

export default function Footer() {
  const whatsappMessage = 'Hola, estoy interesado en paneles sándwich'
  const whatsappLink = generateWhatsAppLink(SITE_CONFIG.whatsapp, whatsappMessage)

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Información de la empresa */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">{SITE_CONFIG.name}</h3>
            <p className="mb-4 text-sm">
              Fabricación y venta de paneles sándwich para construcción industrial,
              cámaras frigoríficas y aislación térmica.
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Teléfono:</strong>{' '}
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-primary-400">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </p>
              <p>
                <strong>Dirección:</strong>
                <br />
                {SITE_CONFIG.address.street}
                <br />
                {SITE_CONFIG.address.city}, {SITE_CONFIG.address.province}
                <br />
                {SITE_CONFIG.address.country}
              </p>
            </div>
          </div>

          {/* Links SEO - Usos */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Usos</h3>
            <ul className="space-y-2 text-sm">
              {USOS.map((uso) => (
                <li key={uso.id}>
                  <Link
                    href={uso.slug}
                    className="transition-colors hover:text-primary-400"
                  >
                    {uso.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links SEO - Información */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Información</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/paneles-sandwich/tipos" className="transition-colors hover:text-primary-400">
                  Tipos de Paneles
                </Link>
              </li>
              <li>
                <Link
                  href="/paneles-sandwich/especificaciones"
                  className="transition-colors hover:text-primary-400"
                >
                  Especificaciones
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="transition-colors hover:text-primary-400">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="transition-colors hover:text-primary-400">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" className="transition-colors hover:text-primary-400">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA y Contacto */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contacto" className="transition-colors hover:text-primary-400">
                  Formulario de Contacto
                </Link>
              </li>
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary-400"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-block w-full text-center"
              >
                Solicitar Cotización
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            © {currentYear} {SITE_CONFIG.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

