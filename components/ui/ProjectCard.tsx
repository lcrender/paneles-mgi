'use client'

import { useState } from 'react'
import Image from 'next/image'
import VideoModal from './VideoModal'

interface ProjectCardProps {
  id: string
  title: string
  description: string | React.ReactNode
  videoSrc: string
  thumbnail: string
  thumbnailAlt: string
}

export default function ProjectCard({
  title,
  description,
  videoSrc,
  thumbnail,
  thumbnailAlt,
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div
        className="card group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Thumbnail con overlay de play */}
        <div className="relative mb-4 h-64 w-full overflow-hidden rounded-lg bg-gray-200">
          <Image
            src={thumbnail}
            alt={thumbnailAlt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay con ícono de play */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg">
              <svg
                className="ml-1 h-8 w-8 text-primary-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
        <div className="text-gray-600">{description}</div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoSrc={videoSrc}
        title={title}
      />
    </>
  )
}

