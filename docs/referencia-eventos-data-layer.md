# Referencia: eventos `dataLayer` (GTM / GA4)

Listado de **nombres de eventos** y datos que llegan a `window.dataLayer` para configurar triggers en Google Tag Manager o enviar a GA4.

> Al agregar un evento nuevo en código, actualizar este documento.

**Relacionado:** cambios técnicos del repo (imágenes, Docker, etc.) → [`referencia-implementaciones.md`](./referencia-implementaciones.md).

---

## Google Tag Manager

- **Contenedor:** `GTM-MQDR2G22` (carga en `app/layout.tsx`).
- GTM y los pushes comparten el mismo `window.dataLayer`.

---

## Eventos personalizados

| Nombre del evento (`event`) | Cuándo se dispara | Campos típicos (además de `event`) | Origen en código |
|-----------------------------|-------------------|-------------------------------------|-------------------|
| `whatsapp_click` | Clic en un `<a href="...">` cuyo `href` coincide con WhatsApp (`wa.me`, `api.whatsapp.com`, `whatsapp.com/send`). **No** dispara al clic en un `<button>` sin enlace. | `whatsapp_url`, `whatsapp_text`, `page_location` | `app/layout.tsx` — script `whatsapp-click-tracker` |
| `contact_form_success` | El `POST` a `/api/contact` respondió **OK** y el correo se envió por SMTP. | `form_id` (`contacto`), `page_location` | `components/forms/ContactForm.tsx` vía `lib/push-data-layer.ts` |
| `contact_form_error` | Respuesta **no OK** del API (validación, 502 SMTP, 503 sin SMTP, etc.) **o** error de red / excepción en el cliente. | `form_id`, `page_location`; si hay respuesta HTTP: `http_status`, `error_message` (texto del JSON, sin datos del formulario); si falló el `fetch`: `error_type` = `network_or_client` | Mismo |

**Privacidad:** en éxito no se envían nombre, email, teléfono ni mensaje al `dataLayer`. En error, `error_message` es solo el mensaje genérico devuelto por la API.

---

## Triggers sugeridos en GTM

- **Evento personalizado** = `whatsapp_click`
- **Evento personalizado** = `contact_form_success`
- **Evento personalizado** = `contact_form_error`

En GA4 podés registrar cada uno con el mismo nombre de evento o renombrar en la etiqueta de GA4.
