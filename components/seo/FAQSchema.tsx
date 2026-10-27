interface FAQSchemaProps {
  items: Array<{
    question: string
    answer: string
    link?: {
      href: string
      label: string
    }
  }> | ReadonlyArray<{
    question: string
    answer: string
    link?: {
      href: string
      label: string
    }
  }>
}

export default function FAQSchema({ items }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.link
          ? `${item.answer} ${item.link.label}: ${item.link.href}`
          : item.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

