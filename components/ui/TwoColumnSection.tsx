interface TwoColumnSectionProps {
  title?: string
  children: React.ReactNode
  image: string
  imageAlt: string
  imagePosition?: 'left' | 'right'
  className?: string
}

export default function TwoColumnSection({
  title,
  children,
  image,
  imageAlt,
  imagePosition = 'right',
  className = '',
}: TwoColumnSectionProps) {
  const imageOrder = imagePosition === 'left' ? 'order-first' : 'order-last'
  const contentOrder = imagePosition === 'left' ? 'order-last' : 'order-first'

  return (
    <section className={`section-padding ${className}`}>
      <div className="container-custom">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Contenido */}
          <div className={contentOrder}>
            {title && (
              <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h2>
            )}
            <div className="prose prose-lg max-w-none text-gray-700">{children}</div>
          </div>

          {/* Imagen */}
          <div className={`relative ${imageOrder}`}>
            {image.endsWith('.svg') ? (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 shadow-lg">
                <img
                  src={image}
                  alt={imageAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="relative w-full overflow-hidden rounded-xl bg-gray-100 shadow-lg">
                <img
                  src={image}
                  alt={imageAlt}
                  className="block w-full h-auto"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

