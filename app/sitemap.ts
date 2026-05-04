import { MetadataRoute } from 'next'
import { SITE_CONFIG, USOS } from '@/lib/constants'

/**
 * Solo URLs indexables (no incluir páginas con robots noindex).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  const usosPages: MetadataRoute.Sitemap = USOS.map((uso) => ({
    url: `${baseUrl}${uso.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const tiposPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/paneles-sandwich/tipos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  return [...staticPages, ...usosPages, ...tiposPages]
}
