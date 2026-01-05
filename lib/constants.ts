/**
 * Constantes del sitio
 */

export const SITE_CONFIG = {
  name: 'Paneles Sándwich MGI',
  url: 'https://panelesmgi.com',
  phone: '+5491123456789', // Reemplazar con teléfono real
  email: 'contacto@panelesmgi.com', // Reemplazar con email real
  whatsapp: '+5491123456789', // Reemplazar con WhatsApp real
  address: {
    street: 'Dirección de la empresa',
    city: 'Buenos Aires',
    province: 'Buenos Aires',
    country: 'Argentina',
  },
} as const

export const USOS = [
  {
    id: 'camaras-frigorificas',
    title: 'Cámaras Frigoríficas',
    slug: '/paneles-sandwich/usos/camaras-frigorificas',
    description: 'Paneles aptos para cámaras frigoríficas y otros sistemas de refrigeración, pensados para responder a diferentes exigencias térmicas y operativas.',
    image: '/images/usos/camaras-frigorificas.jpg',
  },
  {
    id: 'congelados',
    title: 'Congelados',
    slug: '/paneles-sandwich/usos/congelados',
    description: 'Paneles sándwich para cámaras de congelado, diseñados para ofrecer máxima aislación térmica y un control eficiente de temperaturas bajo cero.',
    image: '/images/usos/congelados.jpg',
  },
  {
    id: 'naves-industriales',
    title: 'Instalaciones industriales',
    slug: '/paneles-sandwich/usos/naves-industriales',
    description: 'Construcción rápida y eficiente de naves / galpones industriales',
    image: '/images/usos/naves-industriales.jpg',
  },
  {
    id: 'techos',
    title: 'Techos',
    slug: '/paneles-sandwich/usos/techos',
    description: 'Sistemas de techado con paneles sándwich, pensados para aislamiento térmico, resistencia y rápida instalación.',
    image: '/images/usos/techos.jpg',
  },
  {
    id: 'muros',
    title: 'Muros',
    slug: '/paneles-sandwich/usos/muros',
    description: 'Muros exteriores e interiores con paneles sándwich, ideales para cerramientos industriales y comerciales.',
    image: '/images/usos/muros.jpg',
  },
] as const

export const TIPOS = [
  {
    id: 'pir-pur',
    title: 'PIR / PUR',
    slug: '/paneles-sandwich/tipos/pir-pur',
    description: 'Paneles con núcleo de poliuretano, máxima aislación térmica',
    image: '/images/tipos/pir-pur.jpg',
  },
  {
    id: 'lana-de-roca',
    title: 'Lana de Roca',
    slug: '/paneles-sandwich/tipos/lana-de-roca',
    description: 'Paneles con núcleo de lana de roca, resistencia al fuego',
    image: '/images/tipos/lana-de-roca.jpg',
  },
] as const

export const BENEFICIOS = [
  {
    title: 'Aislación Térmica Superior',
    description: 'Excelente coeficiente de conductividad térmica, reduciendo costos de energía',
    icon: '🌡️',
  },
  {
    title: 'Instalación Rápida',
    description: 'Montaje sencillo que acelera los tiempos de construcción',
    icon: '⚡',
  },
  {
    title: 'Ahorro Energético',
    description: 'Reducción significativa en el consumo de energía eléctrica',
    icon: '💰',
  },
  {
    title: 'Espesores adaptados a cada uso',
    description: 'Diferentes espesores y tipos de paneles para proponerte la solución ideal para tu proyecto.',
    icon: '📏',
  },
  {
    title: 'Durabilidad',
    description: 'Materiales de alta calidad con larga vida útil',
    icon: '🛡️',
  },
  {
    title: 'Entrega a Todo el País',
    description: 'Llegamos a todas las provincias con nuestro servicio de distribución nacional',
    icon: '🚚',
  },
] as const

export const PROCESO_TRABAJO = [
  {
    step: 1,
    title: 'Consulta',
    description: 'Contactanos y contanos sobre tu proyecto',
    icon: '💬',
  },
  {
    step: 2,
    title: 'Asesoramiento',
    description: 'Nuestros expertos te brindan la mejor solución',
    icon: '👨‍💼',
  },
  {
    step: 3,
    title: 'Fabricación',
    description: 'Fabricamos tus paneles según especificaciones',
    icon: '🏭',
  },
  {
    step: 4,
    title: 'Entrega / Instalación',
    description: 'Coordinamos la entrega y ofrecemos instalación opcional del producto',
    icon: '🚚',
  },
  {
    step: 5,
    title: 'Servicio Post Venta',
    description: 'Acompañamiento continuo y soporte técnico permanente',
    icon: '🛠️',
  },
] as const

