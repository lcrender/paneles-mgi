import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import OrganizationSchema from '@/components/seo/OrganizationSchema'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { SITE_CONFIG } from '@/lib/constants'

const siteUrl = new URL(SITE_CONFIG.url)

export const metadata: Metadata = {
  metadataBase: siteUrl,
  alternates: {
    languages: {
      'es-AR': SITE_CONFIG.url,
      'x-default': SITE_CONFIG.url,
    },
  },
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
    <html lang="es-AR" className="scroll-smooth">
      <head>
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MQDR2G22');`,
          }}
        />
        <Script
          id="whatsapp-click-tracker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function () {
  var WA_REGEX = /(wa\\.me|api\\.whatsapp\\.com|whatsapp\\.com\\/send)/i;
  document.addEventListener('click', function (event) {
    var target = event.target;
    if (!target || typeof target.closest !== 'function') return;
    var link = target.closest('a[href]');
    if (!link) return;
    var href = link.getAttribute('href') || '';
    if (!WA_REGEX.test(href)) return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'whatsapp_click',
      whatsapp_url: href,
      whatsapp_text: (link.textContent || '').trim(),
      page_location: window.location.href
    });
  }, true);
})();`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MQDR2G22"
            height="0"
            width="0"
            className="gtm-noscript-frame"
          />
        </noscript>
        <OrganizationSchema />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}

