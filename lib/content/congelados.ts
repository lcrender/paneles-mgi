/**
 * Contenido específico para la página de cámaras de congelado
 */

export const congeladosContent = {
  hero: {
    h1: 'Paneles Sándwich para Cámaras de Congelado',
    subtitle:
      'Aislación térmica reforzada para temperaturas bajo cero, máxima hermeticidad y eficiencia energética sostenida.',
    secondaryLine:
      'Las cámaras de congelado trabajan en condiciones extremas, generalmente entre -18°C y -30°C o inferiores. En estos entornos, el sistema de panelería no solo debe aislar: debe controlar condensación, minimizar puentes térmicos y garantizar estabilidad térmica constante.',
    introBeforeBullets:
      'En MGI Paneles ofrecemos paneles sándwich de alto rendimiento diseñados específicamente para aplicaciones de congelado industrial y logístico.',
    bullets: [
      'Aislación reforzada',
      'Sistema de encastre hermético',
      'Reducción de escarcha y condensación',
      'Montaje modular rápido y seguro',
    ],
    footerLine: 'Distribución en toda Argentina',
  },
  explicacionTecnica: {
    h2: '¿Qué requieren las cámaras de congelado a nivel de aislación?',
    intro: 'A diferencia de una cámara de refrigeración positiva, el congelado exige:',
    exigeBullets: [
      'Mayor espesor de aislación',
      'Mejor coeficiente térmico',
      'Juntas de alta hermeticidad',
      'Control de infiltraciones de aire húmedo',
      'Reducción de puentes térmicos',
    ],
    malaSeleccion: 'Una mala selección de panel puede generar:',
    malaSeleccionBullets: [
      'Formación de hielo en juntas',
      'Sobrecarga del equipo de frío',
      'Aumento del consumo eléctrico',
      'Pérdida de rendimiento térmico',
    ],
    cierre: 'Por eso, el tipo de núcleo aislante y el espesor correcto son determinantes.',
  },
  ventajas: {
    h2: 'Ventajas Técnicas de Nuestros Paneles para Congelado',
    cards: [
      {
        icon: '❄',
        h3: 'Aislación térmica reforzada',
        paragraphs: [
          'Paneles con núcleo PIR de alto rendimiento:',
          'Conductividad aproximada: 0,020–0,022 W/m·K',
          'Excelente estabilidad térmica',
          'Reducción significativa de pérdidas de frío',
          'Ideales para congelado profundo y uso intensivo.',
        ],
      },
      {
        icon: '🔒',
        h3: 'Hermeticidad y control de infiltraciones',
        paragraphs: [
          'Sistema de encastre continuo tipo macho-hembra que:',
          'Minimiza ingreso de aire exterior',
          'Reduce formación de escarcha',
          'Mejora estabilidad térmica interna',
        ],
      },
      {
        icon: '💧',
        h3: 'Control de condensación y puentes térmicos',
        paragraphs: [
          'La correcta selección de espesor y una instalación profesional permiten:',
          'Disminuir condensación superficial',
          'Evitar acumulación de hielo en juntas',
          'Proteger la estructura de la cámara',
        ],
      },
      {
        icon: '⚙',
        h3: 'Montaje modular y mantenimiento simple',
        bullets: [
          'Instalación industrializada',
          'Posibilidad de ampliaciones futuras',
          'Superficies resistentes y fáciles de limpiar',
          'Preparado para uso intensivo diario',
        ],
      },
    ],
  },
  aplicaciones: {
    h2: 'Aplicaciones de Paneles para Cámaras de Congelado',
    intro: 'Nuestros paneles sándwich se utilizan en:',
    items: [
      { emoji: '🥩', label: 'Frigoríficos y plantas cárnicas', description: 'Conservación de carnes y productos procesados.' },
      { emoji: '🍤', label: 'Pescados y mariscos', description: 'Cámaras de congelado rápido.' },
      { emoji: '🥦', label: 'Industria alimentaria', description: 'Alimentos congelados y ultracongelados.' },
      { emoji: '🚚', label: 'Logística de frío', description: 'Depósitos y centros de distribución.' },
      { emoji: '🏬', label: 'Centros de almacenamiento mayorista', description: 'Operación continua con alto tránsito.' },
    ],
  },
  tiposEspesores: {
    h2: 'Espesores Recomendados para Congelado',
    intro: 'La selección depende de temperatura, frecuencia de apertura y zona climática.',
    rangos: [
      { titulo: 'Congelado estándar (-18°C a -25°C)', texto: 'Recomendado: 150 mm a 200 mm.' },
      { titulo: 'Congelado profundo (inferior a -25°C)', texto: 'Espesores superiores según cálculo térmico.' },
    ],
    dependeDe: 'Factores que influyen en la elección:',
    dependeBullets: [
      'Tamaño de la cámara',
      'Tipo de producto almacenado',
      'Tiempo de permanencia',
      'Carga térmica diaria',
      'Nivel de eficiencia energética requerido',
    ],
    asesoramiento: 'Nuestro equipo técnico analiza cada proyecto para optimizar rendimiento sin sobredimensionar costos.',
    ctaText: 'Consultar espesor recomendado para mi cámara',
    ctaHref: '/contacto',
    especificaciones: {
      h3: 'Especificaciones Técnicas Generales',
      items: [
        'Ancho útil: 1100 mm / 1150 mm',
        'Espesores disponibles: 100 mm, 120 mm, 150 mm y 200 mm',
        'Núcleo recomendado para congelado: PIR',
        'Sistema de encastre hermético continuo',
        'Chapas prepintadas galvanizadas de alta resistencia',
        'Opción acero inoxidable en aplicaciones sanitarias',
      ],
    },
  },
}
