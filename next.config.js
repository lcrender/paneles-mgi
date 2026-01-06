/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output standalone para Docker
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: process.env.NODE_ENV === 'development', // Desactivar optimización en desarrollo para mayor velocidad
  },
  // Optimizaciones de performance
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig

