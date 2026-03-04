/**
 * Contenido específico para la página de cámaras frigoríficas
 */

export const camarasFrigorificasContent = {
  hero: {
    h1: 'Paneles para Cámaras Frigoríficas',
    subtitle:
      'Máxima aislación térmica y hermeticidad garantizada para cámaras de refrigeración y congelado.',
    intro:
      'Soluciones técnicas para construcción de cámaras de frío industriales y comerciales, con eficiencia energética y montaje rápido.',
    bullets: [
      'Control térmico preciso',
      'Reducción del consumo eléctrico',
      'Superficies higiénicas y lavables',
      'Sistema de encastre hermético',
    ],
    footerLine: 'Distribución en todo el país',
  },
  /** Sección inmediatamente debajo del hero: "Sistemas de Paneles Frigoríficos..." */
  seccionSistemas: {
    h2: 'Sistemas de Paneles Frigoríficos para Construcción Industrial',
    intro:
      'En MGI Paneles desarrollamos paneles sándwich especialmente diseñados para la construcción de cámaras frigoríficas industriales y comerciales.',
    p2:
      'Nuestros paneles frigoríficos están compuestos por chapas de acero prepintado de alta resistencia y núcleos aislantes de alto rendimiento (PIR o EPS), permitiendo:',
    bullets: [
      'Mantener temperaturas estables',
      'Minimizar pérdidas de frío',
      'Cumplir exigencias sanitarias',
      'Optimizar el rendimiento del sistema de refrigeración',
    ],
    cierre:
      'La combinación de aislación térmica continua y sistema de encastre hermético garantiza máxima eficiencia energética y larga vida útil en entornos de trabajo exigentes.',
  },
  explicacionTecnica: {
    h2: '¿Qué son los paneles sándwich para cámaras frigoríficas?',
    intro: 'Un panel frigorífico es un sistema constructivo compuesto por:',
    composicion: [
      'Dos chapas metálicas exteriores',
      'Un núcleo aislante térmico de alto desempeño',
      'Sistema de encastre macho-hembra hermético',
    ],
    p2: 'En aplicaciones de refrigeración, estos paneles permiten:',
    bullets: [
      'Mantener temperaturas estables (0°C a -25°C o inferiores)',
      'Reducir pérdidas de frío',
      'Evitar condensación',
      'Cumplir exigencias sanitarias e industriales',
      'Optimizar el consumo del equipo de frío',
    ],
  },
  ventajas: {
    h2: 'Ventajas Técnicas de Nuestros Paneles Frigoríficos',
    cards: [
      {
        icon: '🔥',
        h3: 'Aislación térmica de alto rendimiento',
        paragraphs: [
          'PIR: conductividad aproximada de 0,020–0,022 W/m·K',
          'EPS: conductividad aproximada de 0,035 W/m·K',
          'Esto permite reducir la carga térmica y mejorar la eficiencia del sistema de refrigeración.',
        ],
      },
      {
        icon: '🔒',
        h3: 'Hermeticidad y control de condensación',
        paragraphs: [
          'El sistema de encastre continuo tipo macho-hembra garantiza un sellado preciso entre paneles, minimizando infiltraciones de aire y vapor de agua.',
          'Ideal para cámaras de alto tránsito y uso intensivo.',
        ],
      },
      {
        icon: '⚡',
        h3: 'Montaje rápido y modular',
        paragraphs: ['Sistema industrializado que permite:'],
        bullets: [
          'Reducción de tiempos de obra',
          'Menor interferencia operativa',
          'Posibilidad de ampliación futura',
        ],
      },
      {
        icon: '🧼',
        h3: 'Superficies higiénicas y resistentes',
        bullets: [
          'Acero prepintado sanitario',
          'Fácil limpieza',
          'Resistencia a humedad y lavado frecuente',
          'Apto para industria alimentaria y farmacéutica',
        ],
      },
    ],
  },
  aplicaciones: {
    h2: 'Aplicaciones de los Paneles para Cámaras de Frío',
    intro: 'Nuestros paneles se utilizan en:',
    items: [
      { emoji: '🥩', label: 'Carnicerías y frigoríficos', description: 'Cámaras de conservación y prefrío.' },
      { emoji: '🛒', label: 'Supermercados', description: 'Salas de almacenamiento refrigerado.' },
      { emoji: '🚚', label: 'Depósitos y logística', description: 'Centros de distribución con control térmico.' },
      { emoji: '🍽', label: 'Industria alimentaria', description: 'Plantas de procesamiento con control sanitario.' },
      { emoji: '💊', label: 'Industria farmacéutica', description: 'Cámaras de temperatura controlada.' },
      { emoji: '🧊', label: 'Cámaras de congelado', description: 'Aplicaciones bajo cero con espesores mayores.' },
    ],
  },
  tiposEspesores: {
    h2: 'Paneles para Cámaras de Refrigeración vs Congelado',
    intro: 'No todas las cámaras requieren el mismo espesor.',
    rangos: [
      { titulo: 'Refrigeración positiva (0°C a -5°C)', texto: 'Espesores recomendados: 80 mm a 120 mm.' },
      { titulo: 'Congelado (-5°C a -25°C)', texto: 'Espesores recomendados: 120 mm a 200 mm.' },
      { titulo: 'Ultracongelado (inferior a -25°C)', texto: 'Espesores superiores según cálculo térmico.' },
    ],
    dependeDe: 'La selección depende de:',
    dependeBullets: [
      'Temperatura objetivo',
      'Frecuencia de apertura',
      'Dimensiones de la cámara',
      'Zona climática',
      'Nivel de eficiencia buscado',
    ],
    asesoramiento: 'Te asesoramos para evitar sobredimensionar costos y optimizar el rendimiento térmico.',
    ctaText: 'Consultar espesor recomendado',
    ctaHref: '/contacto',
    especificaciones: {
      h3: 'Especificaciones Técnicas Generales',
      items: [
        'Ancho útil estándar: 1100 mm / 1150 mm',
        'Espesores disponibles: 50 mm, 70 mm, 100 mm, 120 mm, 150 mm y 200 mm',
        'Sistema de encastre hermético',
        'Chapas de acero prepintado galvanizado',
        'Opción acero inoxidable en aplicaciones sanitarias',
      ],
    },
  },
}

