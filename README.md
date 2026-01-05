# Paneles Sándwich MGI - Sitio Web

Sitio web moderno, rápido y optimizado para SEO orientado a la venta y cotización de paneles sándwich para múltiples usos industriales y comerciales.

## 🚀 Características

- **Framework:** Next.js 14 (App Router) con React y TypeScript
- **Estilos:** Tailwind CSS con diseño responsive mobile-first
- **SEO:** Optimización completa con metadata dinámica, Schema.org, sitemap.xml y robots.txt
- **Performance:** Optimizado para Core Web Vitals (LCP, CLS, INP)
- **Escalable:** Estructura preparada para integración con CMS headless

## 📁 Estructura del Proyecto

```
/
├── app/                      # App Router de Next.js
│   ├── layout.tsx           # Layout principal con metadata
│   ├── page.tsx             # Página de inicio
│   ├── contacto/            # Página de contacto
│   ├── paneles-sandwich/    # Cluster principal de paneles
│   │   ├── usos/            # Páginas de usos
│   │   ├── tipos/           # Páginas de tipos
│   │   └── especificaciones/# Páginas de especificaciones
│   ├── nosotros/            # Página sobre nosotros
│   ├── proyectos/           # Galería de proyectos
│   ├── preguntas-frecuentes/# FAQ general
│   ├── guias/               # Blog/guías (SEO)
│   ├── zonas/               # SEO local
│   ├── sitemap.ts           # Sitemap automático
│   └── robots.ts            # robots.txt
├── components/              # Componentes reutilizables
│   ├── layout/              # Header, Footer
│   ├── ui/                  # Hero, Card, CTA, FAQ
│   ├── forms/               # Formularios
│   └── seo/                 # Componentes Schema.org
├── lib/                     # Utilidades y constantes
│   ├── constants.ts         # Configuración y datos
│   ├── utils.ts             # Funciones utilitarias
│   └── content/             # Contenido SEO por página
└── public/                  # Archivos estáticos
```

## 🛠️ Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Configurar variables de entorno (si es necesario):
```bash
# Crear archivo .env.local si se necesita
```

3. Ejecutar en desarrollo:
```bash
npm run dev
```

4. Construir para producción:
```bash
npm run build
npm start
```

## 📝 Configuración

### Datos de la Empresa

Editar `lib/constants.ts` para actualizar:
- Información de contacto (teléfono, email, WhatsApp)
- Dirección de la empresa
- URLs y nombres

### Metadata SEO

El sitio incluye metadata optimizada por página. Las páginas principales ya tienen:
- Títulos únicos y descriptivos
- Meta descriptions optimizadas
- Open Graph y Twitter Cards
- Schema.org (Organization, Product, Service, FAQ)

### Imágenes

Colocar imágenes en `public/images/` con la siguiente estructura:
- `/images/hero-paneles.jpg` - Hero principal
- `/images/usos/` - Imágenes de usos
- `/images/tipos/` - Imágenes de tipos
- `/images/proyectos/` - Imágenes de proyectos
- `/og-image.jpg` - Imagen para Open Graph (1200x630px)

## 📄 Páginas Principales

### Páginas Base
- `/` - Inicio con hero, beneficios, usos, tipos, proceso, proyectos y FAQ
- `/contacto` - Formulario de contacto y datos de contacto
- `/nosotros` - Información sobre la empresa
- `/proyectos` - Galería de proyectos realizados
- `/preguntas-frecuentes` - FAQ general
- `/guias` - Guías y artículos (para SEO)
- `/zonas` - Zonas de cobertura (SEO local)

### Cluster Paneles Sándwich

#### Usos (`/paneles-sandwich/usos/`)
- `/paneles-sandwich/usos/` - Índice de usos
- `/paneles-sandwich/usos/camaras-frigorificas/`
- `/paneles-sandwich/usos/congelados/`
- `/paneles-sandwich/usos/naves-industriales/`
- `/paneles-sandwich/usos/techos/`
- `/paneles-sandwich/usos/muros/`

#### Tipos (`/paneles-sandwich/tipos/`)
- `/paneles-sandwich/tipos/` - Índice de tipos
- `/paneles-sandwich/tipos/pir-pur/`
- `/paneles-sandwich/tipos/lana-de-roca/`

#### Especificaciones (`/paneles-sandwich/especificaciones/`)
- `/paneles-sandwich/especificaciones/` - Índice de especificaciones
- `/paneles-sandwich/especificaciones/espesores/`
- `/paneles-sandwich/especificaciones/precio-m2/`
- `/paneles-sandwich/especificaciones/aislacion-termica/`

## 🎨 Componentes Reutilizables

- `Hero` - Sección hero con imagen de fondo y CTAs
- `Card` - Tarjetas para mostrar usos, tipos, etc.
- `CTA` - Sección de llamada a la acción
- `FAQ` - Componente de preguntas frecuentes acordeón
- `ContactForm` - Formulario de contacto
- `Header` - Navegación principal con menú responsive
- `Footer` - Footer con links SEO y contacto

## 🔍 SEO Técnico

### Implementado
- ✅ Metadata dinámica por página
- ✅ Open Graph y Twitter Cards
- ✅ Canonical URLs (automático en Next.js)
- ✅ Sitemap.xml automático
- ✅ robots.txt configurable
- ✅ Schema.org (Organization, Product, Service, FAQ)
- ✅ URLs limpias y semánticas
- ✅ Optimización de imágenes (next/image)
- ✅ Estructura HTML semántica

### Para Implementar
- [ ] Integración con Google Analytics
- [ ] Google Search Console
- [ ] Códigos de verificación (Google, Yandex) en metadata
- [ ] Integración con CMS headless (opcional)

## 🚀 Deploy

### Vercel (Recomendado)

1. Conectar repositorio a Vercel
2. El deploy es automático en cada push

### Otro Servidor Node

1. Construir el proyecto: `npm run build`
2. Ejecutar: `npm start`
3. Configurar proxy reverso si es necesario

## 📱 Responsive Design

El sitio está diseñado mobile-first y es completamente responsive:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Próximos Pasos

1. Agregar imágenes reales de productos y proyectos
2. Configurar servicio de email para formulario de contacto
3. Integrar Google Analytics
4. Agregar contenido real a páginas vacías (nosotros, proyectos, guías)
5. Configurar dominio y actualizar URLs en constants.ts
6. Agregar códigos de verificación SEO

## 📞 Soporte

Para preguntas o soporte, contactar al equipo de desarrollo.

## 📄 Licencia

Propietario - Paneles Sándwich MGI

