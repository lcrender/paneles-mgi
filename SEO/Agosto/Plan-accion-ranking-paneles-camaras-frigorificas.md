# Plan de acción SEO — Paneles para cámaras frigoríficas (MGI)

**Fecha:** 26 de agosto de 2026  
**Sitio objetivo:** `mgipaneles.com.ar`  
**Página pilar:** `/paneles-sandwich/usos/camaras-frigorificas`  
**Basado en:** `Informe-SERP-paneles-camaras-frigorificas.md` + Search Console (últimos 28 días)

---

## Objetivo

Mejorar **posición y clics** del cluster:

> *paneles / panel / placas / panelería para cámara(s) frigorífica(s)* (+ variantes con *precios*)

**No es objetivo de este plan** pelear la query seca `cámaras frigoríficas` en MGI (territorio natural de **MGZERO**).

### Roles del grupo (no negociable en este plan)

| Sitio | Gana | Deriva |
|-------|------|--------|
| **MGI** (`mgipaneles.com.ar`) | Paneles sueltos, specs, espesores, cotización de panel | Usuario que quiere cámara armada → MGZERO |
| **MGZERO** (`mgzerosrl.com.ar`) | Cámaras / proyecto llave en mano | Usuario que solo quiere paneles → MGI |

### Regla de copy: fábrica vs Argentina (obligatoria)

**Hecho interno (no para el copy público):** MGI no tiene planta en Argentina; opera como canal en el país de una fábrica ubicada en otro lado. Eso **no se explica** en title, meta ni hero.

**Objetivo de mensaje:** sonar a *fábrica de paneles* + *presencia/cobertura Argentina*, sin decir que fabrican acá **ni** que son “distribuidores” (esa palabra delata que no son fábrica).

| Prohibido (no usar) | Permitido (sí usar) |
|---------------------|---------------------|
| Fabricación Argentina / fabricación argentina | **Fábrica de paneles** (categoría / oferta) |
| Fábrica argentina / fabricantes en Argentina | **Argentina** solo (en title/ubicaciones) |
| Fabricamos en Argentina / fabricación local | **Envíos a todo el país** / **a toda Argentina** |
| Distribuidores oficiales / distribución oficial | **Atención en Argentina**, cotización, proyectos en el país |
| Hecho en Argentina (si implica planta local) | Cotización, espesores, PIR/EPS |

**Cómo lograr la ambigüedad sin mentir (ejemplos):**

- Title: `… | Fábrica de paneles | Argentina | MGI`  
  → “fábrica” y “Argentina” cerca; **nunca** “fábrica argentina” ni “distribuidores…”.
- Hero: *Fábrica de paneles para cámaras frigoríficas. Envíos a todo el país.*
- Meta: *… Cotizá en Argentina. Envíos a toda Argentina.*
- Footer/confianza: dirección, teléfono, *envíos a todo el país* — sin rol “distribuidor”.

No hace falta aclarar el modelo comercial en el sitio de venta.

### Meta (8–12 semanas)

| KPI | Hoy (aprox.) | Meta |
|-----|--------------|------|
| CTR página pilar (GSC) | ~1% | ≥ 3–4% |
| Posición media cluster paneles-cámara | ~8–12 | Top 5 sostenido |
| Clics orgánicos no-marca del cluster | bajos | +50% vs baseline Agosto |
| Canibalización MGI↔MGZERO | ambas en misma query | Roles claros + links cruzados |

---

## Fase 0 — Baseline (1 día)

Antes de tocar código, dejar medible el antes/después.

1. En Search Console, filtrar últimos 28 días:
   - Página: URL pilar cámaras
   - Consultas que contengan: `camara`, `frigor`, `panel`, `placa`
2. Anotar: clics, impresiones, CTR, posición media.
3. Screenshot del SERP Google AR (incógnito) para `paneles para camaras frigorificas` y guardarlo en esta carpeta.
4. Confirmar con el equipo el mensaje único de cada dominio (tabla de roles arriba).

**Done when:** números baseline guardados + roles acordados.

---

## Fase 1 — Ganar clics ya (semana 1)

Impacto alto, esfuerzo bajo. No espera a “subir de posición”.

### 1.1 Title y meta de la página pilar ✅ aplicado

**Archivo:** `app/paneles-sandwich/usos/[slug]/page.tsx` (metadata de `camaras-frigorificas`)

Publicado:

- **Title (exacto, sin sufijo de marca):** `Precio paneles para cámaras frigoríficas Directo de Fábrica`
- **Description (144 caracteres):** `Cotización precio de paneles para cámaras frigoríficas. Asesoramiento en espesores e instalación. Envíos a toda Argentina. Paneles Sándwich MGI.`

### 1.2 Title y meta de la home

Alinear home al objetivo comercial:

- Priorizar *paneles para cámaras frigoríficas* + *fábrica de paneles* + *Argentina* (separados).
- Mantener otros usos como secundarios en el copy, no en el title principal.
- Misma regla: nunca “fabricación argentina” ni “distribuidores…”.

### 1.3 Snippet / hero de la pilar

En above-the-fold:

- Mensaje: **fábrica de paneles para construir tu cámara** (no “hacemos la cámara”; no “fabricamos en Argentina”).
- CTA primario: Cotizar / WhatsApp con mensaje prearmado de paneles frigoríficos.
- Línea visible: *Envíos a todo el país* / *a toda Argentina* + link secundario “¿Necesitás la cámara completa? → MGZERO”.

### 1.4 Home: jerarquía visual

- Hero orientado a paneles para cámaras (H1 + imagen de cámara/obra + CTA).
- Usos: cámaras (y opcional congelado) destacados; techos/muros/naves secundarios.

**Done when:** title/meta/home/hero publicados y verificados en preview + producción.

---

## Fase 2 — Página pilar más competitiva (semanas 1–3)

Igualar o superar señales de PSG / Friopanel / Panel Pur, con ángulo **solo paneles**.

### 2.1 Bloque comercial arriba (antes del scroll largo)

Agregar sección corta con:

- Tabla **refrigeración vs congelado vs ultracongelado** + espesores (ya existe contenido; subirla).
- “Cómo cotizamos” (qué datos pedir: m², temperatura, espesor).
- Sin inventar precios fijos si no hay lista: *precio a consulta / cotización en 24–48 hs*.

### 2.2 FAQ alineada a Search Console (0 clics)

Incluir preguntas literales o cercanas a:

- paneles / placas para cámara frigorífica  
- qué espesor necesito  
- PIR vs EPS/PUR para frío  
- paneles para cámaras frigoríficas **precios**  
- diferencia refrigeración vs congelado  

Mantener FAQSchema actualizado.

### 2.3 Prueba social

- 2–4 proyectos reales de cámaras con paneles MGI (foto/video + espesor si se puede).
- Priorizar estos en home y en la pilar (no proyectos genéricos primero).

### 2.4 Descargables

- Link visible a ficha técnica / PDF del panel frigorífico (si existe; si no, priorizar crearlo).

### 2.5 Enlazado interno hacia la pilar

Desde:

- Home (primer CTA / primer uso)
- `/paneles-sandwich/tipos` (PIR/PUR → “ideal cámaras”)
- FAQ general
- Proyectos relacionados
- Congelado (relacionada, no caníbal)

Anchor text natural: *paneles para cámaras frigoríficas*, *paneles frigoríficos*, *placas para cámara*.

**Done when:** pilar tiene bloque comercial + FAQ GSC + proyectos + más links internos.

---

## Fase 3 — Coordinación MGI ↔ MGZERO (semana 2)

Evitar que dos landings propias se resten clics.

### 3.1 En MGI

- Bloque fijo: “¿Buscás la cámara frigorífica armada o llave en mano? Visitá MGZERO”.
- WhatsApp/copy de MGI: solo paneles.

### 3.2 En MGZERO (pedido al otro sitio)

- En la página de paneles: “¿Solo necesitás paneles sándwich? Cotizá en MGI Paneles”.
- Reforzar allí el ángulo **cámara / instalación / proyecto**.
- Evitar copiar el mismo H1 + mismo mensaje que MGI sin matices.

### 3.3 Qué no hacer

- No clonar contenido entre dominios.
- No apuntar ambos sites a la misma query seca `cámaras frigoríficas` con la misma landing de paneles.

**Done when:** links cruzados live en ambas webs + mensajes diferenciados.

---

## Fase 4 — Fortalecer relevancia del sitio (semanas 3–6)

### 4.1 Contenido de apoyo (1–2 piezas)

Ideas (publicar en `/guias` o similar si existe):

1. *Qué espesor de panel para cámara frigorífica según temperatura*  
2. *PIR vs PUR/EPS para cámaras de frío*  
3. *Errores al armar una cámara con paneles sándwich*

Cada una enlaza a la pilar y a contacto/cotización.

### 4.2 Evaluación de URL (opcional, después de Fase 1–2)

Hoy: `/paneles-sandwich/usos/camaras-frigorificas`  
MGZERO usa slug más limpio: `/paneles-para-camaras-frigorificas/`

Solo si Fase 1–2 ya están live y medibles:

- Valorar URL corta con **301** desde la actual.
- No hacer redirect antes de mejorar contenido/CTR (para no mezclar variables).

### 4.3 Señal local / confianza

- Datos NAP consistentes (dirección, teléfono, WhatsApp) en Argentina.
- En pilares y footer: *fábrica de paneles* + *Argentina* por separado, y *envíos a todo el país* / *a toda Argentina* — **nunca** “fabricación argentina” ni “distribuidores oficiales”.
- Schema Organization/Service revisado sin claim de planta local ni rol “distribuidor” en textos visibles.

**Done when:** al menos 1 guía publicada + NAP/schema OK; URL corta solo si se decide explícitamente.

---

## Fase 5 — Medición y ajuste (cada 2 semanas)

En GSC, comparar vs baseline Fase 0:

1. CTR y posición de la URL pilar.
2. Queries del cluster: ¿bajan impresiones sin clic? ¿suben clics?
3. ¿MGI gana share en “paneles…” y MGZERO en “cámaras…”?
4. Revisar SERP real Google AR (screenshot) vs competencia: PSG, Friopanel, Panel Pur, ML.

### Criterios de éxito parcial (semana 4)

- CTR pilar ≥ 2% **o** posición media del cluster mejorando de forma estable.
- Title nuevo visible en resultados (a veces tarda: usar Inspección de URL / solicitar indexación).

### Si a las 6–8 semanas no hay mejora

Revisar en este orden:

1. ¿El title/meta nuevo apareció en Google?  
2. ¿Hay soft-404 / canibalización con `/congelados` u otras URLs?  
3. ¿MGZERO sigue absorbiendo el clic de “paneles…”? Ajustar snippets de ambos.  
4. Competencia PSG: ¿sigue ganando con “precio”? Probar A/B de title más agresivo.

---

## Orden de ejecución (checklist)

| # | Paso | Fase | Prioridad |
|---|------|------|-----------|
| 1 | Baseline GSC + screenshot SERP AR | 0 | Alta |
| 2 | Title/meta pilar + home | 1 | Alta |
| 3 | Hero home + jerarquía usos (cámaras primero) | 1 | Alta |
| 4 | Hero/CTA pilar + link a MGZERO | 1 | Alta |
| 5 | Tabla espesores + cotización above the fold | 2 | Alta |
| 6 | FAQ con queries GSC + schema | 2 | Alta |
| 7 | Proyectos cámaras en pilar y home | 2 | Media |
| 8 | Links internos a la pilar | 2 | Alta |
| 9 | Links cruzados MGI ↔ MGZERO | 3 | Alta |
| 10 | Diferenciar copy MGZERO (paneles vs cámara) | 3 | Alta |
| 11 | 1–2 guías de apoyo | 4 | Media |
| 12 | Evaluar URL corta + 301 | 4 | Baja (después) |
| 13 | Revisión GSC quincenal | 5 | Alta |

---

## Fuera de alcance (por ahora)

- Publicar “hacemos cámaras frigoríficas” como producto principal en MGI.
- Afirmar o sugerir literalmente **fabricación / fábrica argentina**, o presentarse como **distribuidores** (delata el modelo).
- Competir de lleno con Mercado Libre en precio retail.
- Campañas Ads (puede ser refuerzo aparte; este plan es orgánico).
- Rediseño total del sitio.

---

## Referencias

- Informe SERP: `SEO/Agosto/Informe-SERP-paneles-camaras-frigorificas.md`
- Datos GSC: `SEO/Agosto/Consultas.csv`, `Páginas.csv`, `Gráfico.csv`
- URL pilar: https://mgipaneles.com.ar/paneles-sandwich/usos/camaras-frigorificas
- URL hermana: https://mgzerosrl.com.ar/paneles-para-camaras-frigorificas/
