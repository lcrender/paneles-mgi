/**
 * Contenido de proyectos
 */

import React from 'react'

export interface Proyecto {
  id: string
  title: string
  description: string | React.ReactNode
  videoSrc: string
  thumbnail: string
  thumbnailAlt: string
}

const mgZeroLink = (
  <a
    href="https://mgzerosrl.com.ar"
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary-600 hover:text-primary-700 underline"
  >
    MG Zero Ingeniería
  </a>
)

export const PROYECTOS: Proyecto[] = [
  {
    id: 'camara-congelado-luccianos',
    title: 'Cámara de congelado realizada con paneles MGI',
    description: (
      <>
        Proyecto ejecutado para Lucciano&apos;s
        <br />
        Soluciones de aislación para frío extremo por{' '}
        <a
          href="https://mgzerosrl.com.ar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 hover:text-primary-700 underline"
        >
          MG Zero
        </a>
        .
      </>
    ),
    videoSrc: '/videos/paneles-para-camara-frigorifica-de-helados-Luccianos-l.mp4',
    thumbnail: '/images/proyectos/luccianos.webp',
    thumbnailAlt: 'Cámara de congelado Lucciano\'s - Paneles MGI',
  },
  {
    id: 'camara-chocolates',
    title: 'Paneles para cámara de chocolates',
    description: (
      <>
        <p className="mb-3">
          Proyecto ejecutado para la conservación óptima de productos sensibles como el chocolate.
        </p>
        <p>
          Soluciones de aislación térmica con paneles MGI de alta precisión, desarrolladas por {mgZeroLink},
          garantizando control de temperatura y máxima eficiencia energética.
        </p>
      </>
    ),
    videoSrc: '/videos/paneles-para-camara-de-Chocolates-low.mp4',
    thumbnail: '/images/paneles-sandwich-para-camara-industrial.webp',
    thumbnailAlt: 'Cámara industrial de chocolates con paneles sándwich MGI',
  },
  {
    id: 'camara-zanahorias',
    title: 'Paneles sándwich para cámara de zanahorias',
    description: (
      <>
        <p className="mb-3">Proyecto orientado a la conservación de productos frescos en condiciones controladas.</p>
        <p>
          Implementación de paneles sándwich MGI de alto rendimiento por {mgZeroLink}, asegurando aislamiento
          térmico, durabilidad y eficiencia en almacenamiento hortícola.
        </p>
      </>
    ),
    videoSrc: '/videos/paneles-sandwich-para-camara-frigorifica-zanahorias-low.mp4',
    thumbnail: '/images/camara-zanahoria-paneles-sandwich.webp',
    thumbnailAlt: 'Cámara frigorífica de zanahorias con paneles sándwich MGI',
  },
]
