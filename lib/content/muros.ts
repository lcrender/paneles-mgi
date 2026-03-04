/**
 * Contenido específico para la página de paneles para muros
 */

export const murosContent = {
  hero: {
    h1: 'Paneles Sándwich para Muros',
    subtitle: 'Cerramientos térmicos eficientes para construcción industrial y comercial en Argentina',
    secondaryLine:
      'En MGI Paneles ofrecemos paneles sándwich para muros diseñados para lograr aislación térmica, rapidez de ejecución y excelente terminación arquitectónica en naves industriales, depósitos, plantas productivas y edificios comerciales.',
    introBeforeBullets: 'Nuestros sistemas permiten reemplazar mampostería tradicional integrando en una sola solución:',
    bullets: [
      'Cerramiento exterior',
      'Aislación térmica continua',
      'Resistencia estructural',
      'Terminación final lista para uso',
    ],
    footerLine: 'Distribución en todo el país',
  },
  explicacionTecnica: {
    h2: '¿Qué es un panel sándwich para muro?',
    intro: 'Un panel sándwich para pared está compuesto por:',
    composicion: [
      'Dos chapas de acero galvanizado prepintado',
      'Núcleo aislante térmico (PIR, EPS o Lana de Roca)',
      'Sistema de encastre tipo macho-hembra',
    ],
    cierre:
      'Este sistema crea una envolvente térmica continua que mejora la eficiencia energética y reduce tiempos de obra.',
  },
  ventajas: {
    h2: 'Ventajas de los Paneles para Muros Industriales',
    cards: [
      {
        icon: '🔥',
        h3: 'Aislación térmica integrada',
        paragraphs: [
          'Con núcleos de alto rendimiento:',
          'PIR → 0,020–0,022 W/m·K',
          'EPS → 0,035 W/m·K',
          'Lana de Roca → aislación térmica + resistencia al fuego',
          'Permite mantener temperatura interior estable y reducir consumo energético.',
        ],
      },
      {
        icon: '⚡',
        h3: 'Construcción rápida y seca',
        bullets: [
          'Montaje modular',
          'Reducción de tiempos comparado con mampostería',
          'Menor interferencia en obra',
          'Posibilidad de ampliaciones futuras',
          'Ideal para proyectos industriales con plazos definidos.',
        ],
      },
      {
        icon: '🛡',
        h3: 'Alta resistencia y durabilidad',
        bullets: [
          'Chapas prepintadas con tratamiento anticorrosivo',
          'Excelente comportamiento frente a impacto',
          'Larga vida útil en entornos industriales exigentes',
        ],
      },
      {
        icon: '🎨',
        h3: 'Terminación estética y profesional',
        bullets: [
          'Fijaciones ocultas según sistema',
          'Superficie lisa y uniforme',
          'Opciones de colores y acabados',
          'Adecuado para fachadas industriales y cerramientos visibles.',
        ],
      },
    ],
  },
  aplicaciones: {
    h2: 'Aplicaciones de Paneles Sándwich para Muros',
    intro: 'Nuestros paneles se utilizan en:',
    items: [
      { emoji: '🏭', label: 'Naves industriales', description: 'Cerramientos exteriores e interiores con aislación integrada.' },
      { emoji: '📦', label: 'Depósitos logísticos', description: 'Envolvente térmica para almacenamiento eficiente.' },
      { emoji: '🏬', label: 'Galpones comerciales', description: 'Solución rápida para grandes superficies.' },
      { emoji: '🏢', label: 'Edificios industriales', description: 'Fachadas técnicas y cerramientos laterales.' },
      { emoji: '❄', label: 'Áreas con control térmico', description: 'Integración con sistemas de refrigeración o climatización.' },
    ],
  },
  tiposPanel: {
    h2: 'Tipos de Núcleo Disponibles',
    items: [
      {
        emoji: '🔵',
        titulo: 'Panel Muro PIR',
        descripcion: 'Máxima eficiencia térmica. Ideal para proyectos que buscan reducir costos energéticos.',
      },
      {
        emoji: '🟢',
        titulo: 'Panel Muro EPS',
        descripcion: 'Alternativa eficiente para aplicaciones industriales estándar.',
      },
      {
        emoji: '🔴',
        titulo: 'Panel Muro Lana de Roca',
        descripcion: 'Recomendado cuando se requiere mayor resistencia al fuego y mejor aislación acústica.',
      },
    ],
  },
  especificaciones: {
    h3: 'Especificaciones Técnicas Generales',
    items: [
      'Ancho útil estándar: 1100 mm / 1150 mm',
      'Espesores disponibles: 50 mm, 70 mm, 100 mm, 120 mm, 150 mm',
      'Espesores mayores según requerimiento',
      'Sistema de encastre hermético',
      'Largos a medida según proyecto',
    ],
  },
  espesor: {
    h3: '¿Qué espesor elegir para un muro industrial?',
    intro: 'Depende de:',
    factores: [
      'Uso interior de la nave',
      'Zona climática',
      'Necesidad de climatización',
      'Exigencias normativas',
    ],
    texto:
      'Para construcciones sin control térmico estricto pueden utilizarse espesores menores. Para plantas industriales o depósitos climatizados se recomiendan espesores superiores.',
    asesoramiento: 'Te asesoramos para definir la opción más eficiente.',
  },
  ctaFinal: {
    title: 'Optimiza tu Cerramiento Industrial',
    description:
      'En MGI Paneles desarrollamos soluciones de panelería sándwich para muros industriales que combinan eficiencia térmica, rapidez de ejecución y durabilidad estructural.',
    cta1: { text: 'Solicitar cotización', href: '/contacto' },
    cta2: { text: 'WhatsApp', href: 'whatsapp' },
  },
}
