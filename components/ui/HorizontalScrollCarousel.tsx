'use client'

import Image from 'next/image'

interface CarouselItem {
  label: string
  image: string
  alt: string
}

interface HorizontalScrollCarouselProps {
  items: CarouselItem[]
}

export default function HorizontalScrollCarousel({
  items,
}: HorizontalScrollCarouselProps) {
  return (
    <div className="relative">
      <div className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4">
        <div className="flex gap-6 lg:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group w-[min(90vw,320px)] flex-shrink-0 snap-start overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                {item.image.endsWith('.svg') ? (
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 90vw, 320px"
                    unoptimized
                  />
                ) : (
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 90vw, 320px"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{item.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

