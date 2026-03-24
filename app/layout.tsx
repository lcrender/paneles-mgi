import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import OrganizationSchema from '@/components/seo/OrganizationSchema'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { SITE_CONFIG } from '@/lib/constants'

const siteUrl = new URL(SITE_CONFIG.url)

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: 'Paneles Sándwich MGI - Aislación Térmica y Construcción Industrial',
    template: '%s | Paneles Sándwich MGI',
  },
  description:
    'Fabricación y venta de paneles sándwich para cámaras frigoríficas, naves industriales, techos y muros. Aislación térmica superior con paneles PIR y PUR.',
  keywords: ['paneles sándwich', 'paneles frigoríficos', 'aislación térmica', 'cámaras frigoríficas', 'naves industriales'],
  authors: [{ name: 'Paneles MGI' }],
  creator: 'Paneles MGI',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: SITE_CONFIG.url,
    siteName: 'Paneles Sándwich MGI',
    title: 'Paneles Sándwich MGI - Aislación Térmica y Construcción Industrial',
    description: 'Fabricación y venta de paneles sándwich para cámaras frigoríficas, naves industriales, techos y muros.',
    images: [
      {
        url: '/images/MGI-Paneles.png',
        width: 1200,
        height: 630,
        alt: 'Paneles Sándwich MGI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paneles Sándwich MGI - Aislación Térmica y Construcción Industrial',
    description: 'Fabricación y venta de paneles sándwich para cámaras frigoríficas, naves industriales, techos y muros.',
    images: ['/images/MGI-Paneles.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Agregar códigos de verificación cuando estén disponibles
    // google: 'verification-code',
    // yandex: 'verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>
        <OrganizationSchema />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}

