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
    title: 'Paneles para Cámaras Frigoríficas',
    slug: '/paneles-sandwich/usos/camaras-frigorificas',
    description: 'Soluciones térmicas para conservación y refrigeración con núcleos PIR o EPS. Alta estanqueidad y control preciso de temperatura.',
    image: '/images/usos/camaras-frigorificas.jpg',
    homeImage: '/images/home/paneles-para-camaras-frigorificas.jpg',
  },
  {
    id: 'congelados',
    title: 'Paneles para Cámaras de Congelado',
    slug: '/paneles-sandwich/usos/congelados',
    description: 'Espesores superiores para aplicaciones bajo cero (-18°C y menores). Óptimo comportamiento térmico y mínima pérdida energética.',
    image: '/images/usos/congelados.jpg',
    homeImage: '/images/home/paneles-sandwich-para-camaras-de-congelado.jpg',
  },
  {
    id: 'naves-industriales',
    title: 'Instalaciones Industriales y Galpones',
    slug: '/paneles-sandwich/usos/naves-industriales',
    description: 'Construcción eficiente de naves industriales, depósitos y centros logísticos con excelente relación costo-beneficio.',
    image: '/images/usos/naves-industriales.jpg',
    homeImage: '/images/home/paneles-para-naves-industriales.jpg',
  },
  {
    id: 'techos',
    title: 'Paneles para Techos',
    slug: '/paneles-sandwich/usos/techos',
    description: 'Cubiertas autoportantes con aislación térmica integrada, ideales para reducir transferencia térmica y condensación.',
    image: '/images/usos/techos.jpg',
    homeImage: '/images/home/paneles-sandwich-para-techos.jpg',
  },
  {
    id: 'muros',
    title: 'Paneles para Muros y Cerramientos',
    slug: '/paneles-sandwich/usos/muros',
    description: 'Cerramientos exteriores e interiores con fijaciones ocultas y terminación arquitectónica limpia.',
    image: '/images/usos/muros.jpg',
    homeImage: '/images/home/paneles-sandwich-para-muro.jpg',
  },
] as const

export const TIPOS = [
  {
    id: 'pir',
    title: 'Paneles PIR',
    slug: '/paneles-sandwich/tipos/pir',
    description: 'Paneles con núcleo de poliisocianurato, máxima aislación térmica y mejor resistencia al fuego',
    image: '/images/tipos/paneles-pir.jpg',
  },
  {
    id: 'pur',
    title: 'Paneles PUR',
    slug: '/paneles-sandwich/tipos/pur',
    description: 'Paneles con núcleo de poliuretano, excelente aislación térmica y eficiencia energética',
    image: '/images/tipos/paneles-pur.jpg',
  },
] as const

export const BENEFICIOS = [
  {
    title: 'Aislación Térmica Superior',
    description: 'Núcleos con conductividades térmicas desde 0,020 W/m·K, ideales para proyectos que requieren control de temperatura y eficiencia energética sostenida.',
    icon: '🔥',
  },
  {
    title: 'Sistema de Montaje Rápido',
    description: 'Sistema de encastre tipo macho-hembra que garantiza sellado hermético, alineación precisa y reducción significativa en tiempos de obra.',
    icon: '⚡',
  },
  {
    title: 'Ahorro Energético Real',
    description: 'La aislación continua reduce la demanda de climatización y refrigeración, optimizando costos operativos en el largo plazo.',
    icon: '💰',
  },
  {
    title: 'Espesores Adaptados a Cada Uso',
    description: 'Disponibles en múltiples espesores desde 50 mm hasta 200 mm, según requerimiento térmico y estructural.',
    icon: '📏',
  },
  {
    title: 'Durabilidad y Resistencia',
    description: 'Chapas galvanizadas y prepintadas con tratamiento anticorrosivo, diseñadas para entornos industriales exigentes.',
    icon: '🛡️',
  },
  {
    title: 'Cobertura Nacional',
    description: 'Despachamos paneles sándwich a todo el país, coordinando logística eficiente y soporte técnico en cada etapa.',
    icon: '🚚',
  },
] as const

export const PROCESO_TRABAJO = [
  {
    step: 1,
    title: 'Consulta técnica',
    description: 'Analizamos requerimientos térmicos, estructurales y normativos.',
    icon: '💬',
  },
  {
    step: 2,
    title: 'Asesoramiento Especializado',
    description: 'Definimos núcleo, espesor y sistema constructivo adecuado.',
    icon: '👨‍💼',
  },
  {
    step: 3,
    title: 'Producción y Preparación',
    description: 'Coordinación técnica y logística del pedido.',
    icon: '🏭',
  },
  {
    step: 4,
    title: 'Entrega y Montaje',
    description: 'Entrega en obra en todo el país. Equipo propio disponible para instalación.',
    icon: '🚚',
  },
  {
    step: 5,
    title: 'Soporte Postventa',
    description: 'Acompañamiento técnico y mantenimiento preventivo si el proyecto lo requiere.',
    icon: '🛠️',
  },
] as const

