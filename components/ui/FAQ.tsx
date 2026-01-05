'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[] | readonly FAQItem[]
  title?: string
  className?: string
}

export default function FAQ({ items, title = 'Preguntas Frecuentes', className = '' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className={className}>
      <div className="container-custom section-padding">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          {title}
        </h2>

        <div className="mx-auto max-w-3xl space-y-4">
          {items.map((item, index) => (
            <div key={index} className="rounded-lg border border-gray-200 bg-white">
              <button
                className="flex w-full items-center justify-between p-6 text-left"
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                <svg
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="border-t border-gray-200 p-6 text-gray-600"
                  role="region"
                >
                  <p className="leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

