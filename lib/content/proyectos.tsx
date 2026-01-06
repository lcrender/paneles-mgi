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
    videoSrc: '/videos/paneles-para-camara-de-congelado-luccianos-low.mp4',
    thumbnail: '/images/placeholder.svg', // Se reemplazará con la imagen real
    thumbnailAlt: 'Cámara de congelado Lucciano\'s - Paneles MGI',
  },
]

