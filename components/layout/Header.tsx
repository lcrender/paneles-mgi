'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { SITE_CONFIG, USOS } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/utils'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [usosMenuOpen, setUsosMenuOpen] = useState(false)

  const whatsappMessage = 'Hola, estoy interesado en paneles sándwich'
  const whatsappLink = generateWhatsAppLink(SITE_CONFIG.whatsapp, whatsappMessage)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container-custom" aria-label="Navegación principal">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/paneles-mgi.png"
              alt={SITE_CONFIG.name}
              width={180}
              height={60}
              className="h-auto w-auto max-h-12 object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link
              href="/"
              className="text-base font-medium text-gray-700 transition-colors hover:text-primary-600"
            >
              Inicio
            </Link>

            {/* Usos Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setUsosMenuOpen(true)}
              onMouseLeave={() => setUsosMenuOpen(false)}
            >
              <Link
                href="/#usos"
                className="flex items-center space-x-1 text-base font-medium text-gray-700 transition-colors hover:text-primary-600"
              >
                <span>Usos</span>
                <svg
                  className={`h-4 w-4 transition-transform ${usosMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {usosMenuOpen && (
                <div className="absolute left-0 top-full pt-2 w-64">
                  <div className="rounded-lg bg-white shadow-lg py-2">
                    {USOS.map((uso) => (
                      <Link
                        key={uso.id}
                        href={uso.slug}
                        className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary-600"
                      >
                        {uso.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/paneles-sandwich/tipos"
              className="text-base font-medium text-gray-700 transition-colors hover:text-primary-600"
            >
              Tipos
            </Link>

            <Link
              href="/proyectos"
              className="text-base font-medium text-gray-700 transition-colors hover:text-primary-600"
            >
              Proyectos
            </Link>

            <Link
              href="/guias"
              className="text-base font-medium text-gray-700 transition-colors hover:text-primary-600"
            >
              Guías
            </Link>

            <Link
              href="/contacto"
              className="text-base font-medium text-gray-700 transition-colors hover:text-primary-600"
            >
              Contacto
            </Link>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 border-t border-gray-200 py-4">
              <Link
                href="/"
                className="block px-4 py-2 text-base font-medium text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </Link>

              <Link
                href="/#usos"
                className="block px-4 py-2 text-base font-medium text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Usos
              </Link>
              <div className="px-4 py-2">
                <div className="ml-4 space-y-1">
                  {USOS.map((uso) => (
                    <Link
                      key={uso.id}
                      href={uso.slug}
                      className="block py-2 text-sm text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {uso.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/paneles-sandwich/tipos"
                className="block px-4 py-2 text-base font-medium text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tipos
              </Link>

              <Link
                href="/proyectos"
                className="block px-4 py-2 text-base font-medium text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Proyectos
              </Link>

              <Link
                href="/guias"
                className="block px-4 py-2 text-base font-medium text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Guías
              </Link>

              <Link
                href="/contacto"
                className="block px-4 py-2 text-base font-medium text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mx-4 block text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

