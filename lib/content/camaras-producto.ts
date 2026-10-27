/**
 * Landing de cámaras frigoríficas completas (producto).
 * No mezclar con lib/content/camaras-frigorificas.ts, que es la página de paneles.
 */

export const camarasProductoSeo = {
  title: 'Cámaras frigoríficas industriales | Fábrica en Argentina',
  description:
    'Armado y montaje de cámaras frigoríficas modulares e industriales. Diseño, puertas, pisos y equipos. Fábrica en Argentina. MGI.',
} as const

export const camarasProductoContent = {
  hero: {
    h1: 'Cámaras frigoríficas',
    subtitle: 'Fábrica de cámaras frigoríficas en Argentina. Armado y montaje de la cámara completa.',
    intro:
      'Diseñamos y fabricamos cámaras de frío industriales y modulares: paneles, puertas, pisos, equipos y montaje.',
  },
  incluye: {
    h2: 'Qué incluye el armado de cámaras frigoríficas',
    intro: 'Nos encargamos del desarrollo, el diseño, el montaje y el servicio postventa de la cámara.',
    items: [
      {
        title: 'Diseño y desarrollo',
        text: 'Definimos medidas, temperatura y layout según el producto que vas a conservar.',
      },
      {
        title: 'Paneles MGI',
        text: 'La envolvente se arma con nuestros paneles sándwich, con el espesor que pide la cámara.',
      },
      {
        title: 'Puertas y pisos',
        text: 'Incluimos puertas frigoríficas y el piso aislado para cerrar la cámara.',
      },
      {
        title: 'Equipos de frío',
        text: 'Seleccionamos e integramos el equipo de refrigeración o congelado del proyecto.',
      },
      {
        title: 'Montaje',
        text: 'Montaje de cámaras frigoríficas en obra, con la cámara lista para operar.',
      },
      {
        title: 'Servicio postventa',
        text: 'Después del montaje seguimos con asistencia técnica para que la cámara siga en temperatura.',
      },
    ],
  },
  tipos: {
    h2: 'Cámaras frigoríficas industriales y modulares',
    intro: 'Fabricamos la cámara a la medida del uso. Cotización según temperatura, tamaño y equipamiento.',
    items: [
      {
        title: 'Cámaras frigoríficas industriales',
        text: 'Para frigoríficos, plantas de faena, depósitos de carne y centros de distribución.',
      },
      {
        title: 'Cámaras frigoríficas modulares',
        text: 'Para carnicerías, verdulerías y comercios que necesitan ampliar la cámara más adelante.',
      },
      {
        title: 'Cámaras de refrigeración',
        text: 'Para frutas, verduras, lácteos y bebidas que se conservan en frío positivo.',
      },
      {
        title: 'Cámaras de congelado',
        text: 'Para carne, helados y productos congelados que requieren baja temperatura.',
      },
    ],
  },
  proceso: {
    h2: 'Cómo es el montaje de cámaras frigoríficas',
    steps: [
      { step: '1', title: 'Relevamiento', text: 'Vemos el espacio, el producto y la temperatura que necesitás.' },
      { step: '2', title: 'Diseño', text: 'Definimos medidas, paneles, puertas, piso y equipo de frío.' },
      { step: '3', title: 'Fabricación', text: 'Fabricamos la cámara y preparamos cada parte del conjunto.' },
      { step: '4', title: 'Montaje', text: 'Armamos la cámara en obra y la dejamos lista para usar.' },
    ],
  },
  panelesLinks: {
    text: 'Si solo necesitás los paneles, sin la cámara armada, cotizalos aparte.',
    items: [
      {
        href: '/paneles-sandwich/usos/camaras-frigorificas',
        label: 'Paneles para cámaras frigoríficas',
      },
      {
        href: '/paneles-sandwich/usos/congelados',
        label: 'Paneles para cámaras de congelado',
      },
    ],
  },
  faqs: [
    {
      question: '¿Fabrican cámaras frigoríficas en Argentina?',
      answer:
        'Sí. Somos fábrica de cámaras frigoríficas en Argentina. Diseñamos, fabricamos y montamos la cámara completa.',
    },
    {
      question: '¿Qué incluye el armado de una cámara frigorífica?',
      answer:
        'Diseño, paneles, puertas, pisos, equipos de frío y montaje. Te entregamos la cámara, no solo los paneles.',
    },
    {
      question: '¿Hacen cámaras frigoríficas industriales y modulares?',
      answer:
        'Sí. Hacemos cámaras frigoríficas industriales y cámaras frigoríficas modulares, de refrigeración o de congelado, a medida del proyecto.',
    },
    {
      question: '¿Hacen cámaras de frío industriales y cámaras de refrigeración?',
      answer:
        'Sí. Armamos cámaras de frío industriales y cámaras de refrigeración para comercio e industria, con la temperatura que defina el producto.',
    },
    {
      question: '¿El montaje de cámaras frigoríficas está incluido?',
      answer:
        'Sí. El montaje forma parte del proyecto: relevamos, diseñamos, fabricamos y armamos la cámara en obra.',
    },
    {
      question: '¿Tienen servicio postventa?',
      answer:
        'Sí. Después del montaje ofrecemos servicio postventa y asistencia técnica para el funcionamiento de la cámara.',
    },
    {
      question: '¿Puedo comprar solo los paneles?',
      answer:
        'Sí. Si no necesitás la cámara completa, podés cotizar solo los paneles sándwich para cámaras frigoríficas.',
    },
  ],
  obras: {
    h2: 'Cámaras frigoríficas que ya armamos',
    intro:
      'Cámaras de conservación y congelado armadas por MGI con paneles propios, en funcionamiento.',
    titulos: {
      'camara-congelado-luccianos': 'Cámara de congelado de helados',
      'camara-chocolates': 'Cámara frigorífica de chocolates',
      'camara-zanahorias': 'Cámara frigorífica de zanahorias',
    },
  },
  cta: {
    title: '¿Necesitás una cámara frigorífica?',
    description: 'Pedí una cotización del diseño, el armado y el montaje. Trabajamos en toda Argentina.',
    whatsappMessage: 'Hola, quiero cotizar una cámara frigorífica',
  },
} as const
