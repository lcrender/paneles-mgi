# Referencia: implementaciones del proyecto

Resumen de **cambios técnicos** que fueron sumando al repo (no es la lista de eventos de analytics).

> Documento vivo: al sumar una feature relevante, agregar una fila breve.

**Eventos `dataLayer` / GTM:** [`referencia-eventos-data-layer.md`](./referencia-eventos-data-layer.md).

---

## Tabla resumida

| Tema | Descripción breve | Archivos / comandos útiles |
|------|-------------------|----------------------------|
| Imágenes WebP | Assets `.webp` en `public/images`; rutas `.webp` en contenido y componentes donde aplica. | `public/images/**/*.webp` |
| `next/image` | Uso de `next/image` en héroes, sliders, secciones y formulario de producto para optimización en build. | `components/ui/*`, `components/paneles/panel-product-sections.tsx` |
| Conversión JPG/PNG → WebP | Script que recorre `public/images` y genera `.webp` (salta si ya existe). | `npm run images:webp`, `scripts/convert-images-to-webp.js` |
| Helper `dataLayer` | Push tipado desde el cliente sin duplicar lógica. | `lib/push-data-layer.ts` |
| Formulario de contacto + SMTP | Envío por `POST /api/contact` con Nodemailer; variables de entorno SMTP. | `app/api/contact/route.ts`, `lib/send-contact-email.ts`, `components/forms/ContactForm.tsx` |
| Docker local | Desarrollo con hot reload o build local sin Traefik. | `docker-compose.dev.yml`, `docker-compose.local.yml` |
| Docker producción | Stack pensado para Traefik y red externa. | `docker-compose.yml` — requiere red `root_default` |

---

## Notas Docker

- **Desarrollo (hot reload):** `docker compose -f docker-compose.dev.yml up --build`
- **Local tipo producción (puerto 3000, sin Traefik):** `docker compose -f docker-compose.local.yml up -d --build`
- **Producción con Traefik:** `docker-compose.yml`; si falta la red: `docker network create root_default` (o el nombre que use tu stack).
