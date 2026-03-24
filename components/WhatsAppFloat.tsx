'use client'

import { useEffect, useState } from 'react'
import { SITE_CONFIG } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/utils'

const AUTO_OPEN_MS = 10_000
const DEFAULT_MESSAGE = 'Hola, tengo una consulta sobre paneles sándwich MGI'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function WhatsAppFloat() {
  const [panelOpen, setPanelOpen] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const id = window.setTimeout(() => setPanelOpen(true), AUTO_OPEN_MS)
    return () => window.clearTimeout(id)
  }, [])

  const trimmed = message.trim()
  const waHref = generateWhatsAppLink(
    SITE_CONFIG.whatsapp,
    trimmed || DEFAULT_MESSAGE
  )

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {panelOpen && (
        <div
          className="w-[min(calc(100vw-2.5rem),22rem)] rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-gray-200"
          role="dialog"
          aria-labelledby="whatsapp-float-title"
        >
          <div className="mb-3 flex items-start justify-between gap-2">
            <div>
              <p
                id="whatsapp-float-title"
                className="text-sm font-semibold text-gray-900"
              >
                Escribinos por WhatsApp
              </p>
              <p className="mt-0.5 text-xs text-gray-500">
                Contanos tu consulta y te respondemos a la brevedad.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setPanelOpen(false)}
              className="rounded-lg p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
              aria-label="Cerrar"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <label htmlFor="whatsapp-float-message" className="sr-only">
            Tu consulta
          </label>
          <textarea
            id="whatsapp-float-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Escribí tu consulta aquí…"
            className="mb-3 w-full resize-none rounded-xl border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
          />
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex w-full items-center justify-center gap-2 text-sm"
          >
            <WhatsAppIcon className="h-5 w-5 shrink-0" />
            Abrir WhatsApp
          </a>
        </div>
      )}
      <button
        type="button"
        onClick={() => setPanelOpen((o) => !o)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#20BA5A] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        aria-label={panelOpen ? 'Ocultar chat de WhatsApp' : 'Abrir chat de WhatsApp'}
        aria-expanded={panelOpen}
      >
        <WhatsAppIcon className="h-7 w-7" />
      </button>
    </div>
  )
}
