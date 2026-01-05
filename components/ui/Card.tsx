import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  title: string
  description: string
  href: string
  image?: string
  imageAlt?: string
  className?: string
}

export default function Card({
  title,
  description,
  href,
  image,
  imageAlt,
  className = '',
}: CardProps) {
  return (
    <Link href={href} className={`card group block ${className}`}>
      {image && (
        <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  )
}

