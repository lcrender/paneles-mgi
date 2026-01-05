import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">Página no encontrada</h2>
        <p className="mb-8 text-gray-600">
          La página que buscas no existe o ha sido movida.
        </p>
        <Link href="/" className="btn-primary">
          Volver al Inicio
        </Link>
      </div>
    </div>
  )
}

