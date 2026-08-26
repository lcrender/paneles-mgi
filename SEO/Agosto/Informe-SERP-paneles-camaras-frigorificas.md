# Informe SERP — `paneles para camaras frigorificas`

**Fecha:** 26 de agosto de 2026  
**Mercado simulado:** Argentina (`gl=ar` / `cc=AR` / `kl=ar-es`)  
**Query:** `paneles para camaras frigorificas` (sin tilde, como suele tipearse)  
**Objetivo:** entender contra quién competimos para mejorar clics y posición de MGI Paneles.

### Propiedades propias en el SERP (importante)

| Dominio | Rol | Nota |
|---------|-----|------|
| **mgipaneles.com.ar** | Fabricación/venta de **paneles** (este proyecto) | Foco actual: paneles para cámaras frigoríficas |
| **mgzerosrl.com.ar** | Empresa del mismo grupo: fabrica **cámaras frigoríficas** y también vende **paneles sueltos** | Aparece en el top 10; **no es competencia externa** |

En el ranking hay **dos resultados propios** (#4 MGZERO y #6 MGI). Eso es visibilidad de grupo, pero también riesgo de **canibalización de clics** si ambas páginas pelean la misma intención sin roles claros.

---

## 1. Metodología y límite importante

Se intentó consultar **Google Argentina** (`google.com.ar`, `hl=es-AR`, `gl=ar`) vía HTTP y Chrome headless. Google respondió con **página de captcha / anti-bot**, sin devolver orgánicos parseables.

Ante eso, el ranking se reconstruyó cruzando:

| Fuente | Parámetros | Resultado |
|--------|------------|-----------|
| **Bing Argentina** | `cc=AR`, `setlang=es-AR` | Top 10 orgánico estable |
| **DuckDuckGo** | `kl=ar-es` | Mismo orden casi idéntico (sin contar ads) |
| **Web search** | sesgo Argentina / `.com.ar` | Validación de actores locales |
| **Fetch on-page** | title, H1, meta, señales | Análisis de cada URL del top |

> **Nota:** Bing/DDG no son Google. En nichos B2B locales suelen correlacionar, pero las posiciones exactas en Google pueden variar ±2–3 puestos. El valor del informe está en **quién aparece, con qué ángulo y qué señales usan** — suficiente para competir.

**Posición propia hoy (Bing/DDG AR):**
- **MGZERO ~#4** — `https://mgzerosrl.com.ar/paneles-para-camaras-frigorificas/`
- **MGI ~#6** — `https://mgipaneles.com.ar/paneles-sandwich/usos/camaras-frigorificas`

---

## 2. Top 10 (Argentina — Bing/DDG cruzados)

| Pos. | Dominio | Página / título aparente | Tipo | País / nota |
|------|---------|--------------------------|------|-------------|
| 1 | mercadolibre.com.ar | Listado *Paneles Camaras Frigorificas* | Marketplace | AR — competencia |
| 2 | mercadolibre.com.ar | Listado *Paneles Para Camara Frigorificas* | Marketplace | AR — competencia |
| 3 | panelsandwich.ar | *Precio Panel Sandwich Frigorífico* | Comercial + precio | AR — competencia |
| **4** | **mgzerosrl.com.ar** | **Paneles para Cámaras Frigoríficas** | **Cámaras + paneles sueltos** | **AR — propio (grupo)** |
| 5 | friopanel.com.ar | *Paneles aislantes* / fábrica de cámaras | Producto + fabricante cámaras | AR — competencia |
| **6** | **mgipaneles.com.ar** | **Paneles sándwich para cámaras frigoríficas** | **Especialista paneles** | **AR — propio (este sitio)** |
| 7 | panelpur.com | *Paneles para Cámaras Frigoríficas* | Fabricante + instalación | AR/regional — competencia |
| 8 | dippanel.com | *Paneles sándwich frigoríficos* | Catálogo técnico | ES — competencia |
| 9 | mthsrl.com.ar | *Paneles aislantes / Autoportantes* | Fabricante paneles | AR — competencia |
| 10 | panelfix.es | *Panel Sandwich Frigorífico* | E-commerce paneles | ES — competencia |

URLs de referencia:

1. https://listado.mercadolibre.com.ar/paneles-camaras-frigorificas  
2. https://listado.mercadolibre.com.ar/paneles-para-camara-frigorificas  
3. https://panelsandwich.ar/panel-sandwich-frigorifico  
4. https://mgzerosrl.com.ar/paneles-para-camaras-frigorificas/  
5. https://friopanel.com.ar/producto/paneles/ (también rankea home friopanel.com.ar)  
6. https://mgipaneles.com.ar/paneles-sandwich/usos/camaras-frigorificas  
7. https://www.panelpur.com/paneles/  
8. https://dippanel.com/camaras-frigorificas/paneles-sandwich-frigorificos/  
9. https://mthsrl.com.ar/paneles-aislantes/  
10. https://panelfix.es/collections/panel-frigorifico  

---

## 3. Lectura rápida del SERP

### Qué gana arriba
1. **Intención de compra / precio** — Mercado Libre (#1–2) y Panel Sandwich Group (#3, title con “Precio”).
2. **Match exacto del H1** — varios usan literalmente *Paneles para Cámaras Frigoríficas*.
3. **Oferta completa / llave en mano** — Friopanel, Panel Pur; en el grupo, **MGZERO** cubre cámaras + paneles.
4. **Autoridad de catálogo** — sitios ES (Dippanel, Panelfix) entran al SERP AR por contenido denso y dominio fuerte, aunque no sean locales.

### Dónde está el grupo (MGI + MGZERO)
- **Dos slots propios** en el top 10 (#4 y #6): buena cobertura de marca/grupo.
- Competencia externa real a superar en clic/posición: **ML, Panel Sandwich Group, Friopanel, Panel Pur, MTH**, más los ES.
- El problema de MGI en GSC (muchas impresiones, CTR bajo) sigue siendo **ganar el clic** frente a ML/PSG (precio) y Friopanel (fábrica de cámaras), no “vencer” a MGZERO.

### Roles recomendados entre dominios propios
| Sitio | Debe ganar | No debe pelear igual |
|-------|------------|----------------------|
| **mgipaneles.com.ar** | *Paneles / placas / panelería para cámaras*, specs, espesores, cotización de panel | Query seca *cámaras frigoríficas* (cámara armada) |
| **mgzerosrl.com.ar** | *Cámaras frigoríficas*, instalación llave en mano; paneles como complemento del proyecto | No duplicar el mismo ángulo “especialista solo paneles” que MGI |

Si ambas páginas venden “paneles para cámaras” con el mismo mensaje, **se restan clics entre sí**. Mejor: enlaces cruzados claros (“¿Solo paneles? → MGI” / “¿Cámara completa? → MGZERO”).

---

## 4. Fichas del SERP (propios + competencia)

### #1–2 Mercado Libre — competencia
- **Por qué rankean:** marca + intención comercial + volumen de listings.
- **Snippet:** “envíos”, “cuotas”, “ofertas”.
- **Cómo competir:** no les ganás el listado; sí podés robar clics a usuarios B2B que buscan **fábrica / asesoramiento / espesor / cotización formal** con un title/meta más claro y confianza industrial.

### #3 Panel Sandwich Group (`panelsandwich.ar`) — competencia
- **Title:** `Precio Panel Sandwich Frigorífico…` ← palabra *precio* en SERP.
- **H1:** `Paneles para Cámaras Frigoríficas` (match exacto).
- **Meta:** temperaturas hasta -30ºC, techo/muro, CTA consultar.
- **Señales:** precio, espesores, -30ºC, cotización.
- **Amenaza:** muy alineado a CTR + keyword comercial. Prioridad #1 externa para MGI.

### #4 MGZERO Ingeniería — propio (grupo)
- **Rol real:** fabrica **cámaras frigoríficas** y también vende **paneles sueltos**.
- **Title/H1:** exact match *Paneles para Cámaras Frigoríficas*.
- **URL:** `/paneles-para-camaras-frigorificas/` (slug limpio; referencia útil para MGI).
- **Contenido:** ~1700+ palabras; instalación; envíos; ángulo cámara + panel.
- **Qué hacer (no “competir”):**
  - Diferenciar mensajes: MGZERO = cámara / proyecto completo; MGI = especialista en paneles.
  - Enlaces cruzados entre ambos sitios para que el usuario elija según intención.
  - Evitar dos landing casi iguales que se resten CTR en la misma query.
  - Lo que MGZERO hace bien en profundidad/URL se puede **replicar el nivel** en MGI, con ángulo solo paneles.

### #5 Friopanel — competencia
- Página producto corta (specs PUR, espesores 60/100, acero inox).
- Home posiciona como **fábrica de cámaras frigoríficas** (compite más con MGZERO en cámaras; en paneles, contenido flojo).
- **Oportunidad MGI:** superarlos en profundidad técnica de paneles.

### #6 MGI Paneles — propio (este sitio)
- **Title:** `Paneles sándwich para cámaras frigoríficas | Paneles Sándwich MGI`
- **H1:** `Paneles para Cámaras Frigoríficas` (bien)
- **Meta:** técnica/genérica; **no vende precio ni cotización** en el snippet.
- **Contenido:** sólido (~800 palabras), espesores, PIR/EPS, hermeticidad.
- **Gap vs competencia externa (ML/PSG/Friopanel):** gancho de CTR (cotización/Argentina/fábrica), slug más claro, y posicionarse como **la opción paneles** del grupo (vs cámara completa en MGZERO).

### #7 Panel Pur — competencia
- H1 exact match; copy comercial; fabricación + instalación.
- Buena densidad de frase clave.
- Competidor de contenido similar al que MGI debería superar en claridad técnica + local AR.

### #8 Dippanel (España) — competencia
- Catálogo técnico largo; “comprar panel frigorífico”.
- Entra por autoridad/contenido, no por local. El usuario AR puede descartarlos por logística; igual **ocupan un slot**.

### #9 MTH SRL (Argentina) — competencia
- Fabricante serio; H1 más genérico (*Paneles aislantes*).
- Menos optimizado a la query exacta → más fácil de superar con foco semántico.

### #10 Panelfix (España) — competencia
- E-commerce + “mejor aislamiento”; precio.
- Mismo patrón que Dippanel: autoridad internacional.

---

## 5. Patrones que hoy ganan el SERP

| Patrón | Quién lo usa | Implicancia para MGI |
|--------|--------------|----------------------|
| Title con **Precio** o compra | PSG, Panelfix, Dippanel | Incluir “cotización” / “precio” / “fábrica de paneles” + “Argentina” (separados; no “fábrica argentina”) |
| **H1 = query exacta** | PSG, MGZERO (propio), Panel Pur, MGI | Mantener en MGI; coordinar copy con MGZERO |
| **URL corta** con keyword | MGZERO (propio) `/paneles-para-camaras-frigorificas/` | Evaluar a futuro en MGI (redirect desde `/usos/...`) |
| **Instalación + envío país** | MGZERO (propio), Panel Pur, Friopanel | En MGI: entrega/asesoramiento; instalación de cámara → derivar a MGZERO |
| **Temperatura / espesores** en above-the-fold | PSG, Friopanel, MGI | Reforzar tabla refrigeración vs congelado |
| Marketplace | ML | Diferenciarse: B2B, fábrica, ficha técnica, proyecto |
| Oferta cámara completa | Friopanel (comp.), MGZERO (propio) | En MGI no copiar: “paneles para construir tu cámara”; link a MGZERO si quieren cámara armada |

---

## 6. Conclusiones para competir (prioridad)

### Ya tenés base (grupo)
Dos URLs propias en top 10. El cuello de botella de **MGI** (GSC: muchas impresiones, CTR ~1%) es ganar clic frente a **ML / PSG / Friopanel / Panel Pur**, y **coordinar** con MGZERO para no canibalizarse.

### Movimientos de mayor impacto
1. **CTR en SERP (MGI):** reescribir title/meta con *Paneles para cámaras frigoríficas*, *fábrica de paneles*, *Argentina* (separados), *cotización* / *precio a consulta*. No usar “fabricación argentina”.
2. **Above the fold comercial (MGI):** espesores por °C + CTA cotización/WhatsApp (sin inventar precios si no querés).
3. **Diferenciación vs ML y vs “llave en mano” externo:** MGI = especialista paneles + fichas + proyectos; cámara completa = MGZERO.
4. **Coordinación MGI ↔ MGZERO:** mismos grupo, roles distintos; enlaces cruzados; evitar dos landings idénticas de “paneles para cámaras”.
5. **Profundidad de contenido en MGI:** acercarse al nivel de la página MGZERO (FAQ, espesores, sellados) pero con ángulo solo paneles + queries GSC de 0 clics.
6. **Home MGI:** priorizar paneles para cámaras; no pelear aún la query seca `cámaras frigoríficas` en este dominio (eso es territorio natural de MGZERO).

### KPIs a mirar en 2–4 semanas
- CTR y posición de la pilar **MGI** en el cluster *panel(es) … cámara(s) frigorífica(s)*.
- Clics compartidos MGI vs MGZERO en la misma query (ideal: MGI sube en “paneles…”, MGZERO sostiene “cámaras…” / proyecto).
- Clics no-marca vs marca (`mgi…`).

---

## 7. Anexo — Query cercanas del cluster (desde GSC Agosto)

Alta impresión / bajo clic (prioridad de copy y FAQ):

- paneles de camara frigorifica  
- paneles camara frigorifica  
- panel para camara frigorifica  
- paneles para camaras frigorificas  
- placas para camaras frigorificas  
- paneles para cámaras frigoríficas precios  
- paneleria sandwich / paneles sandwich (genéricas relacionadas)

---

## 8. Fuentes del informe

- Intento Google.com.ar (bloqueado por captcha) — 26/08/2026  
- Bing `cc=AR` + DuckDuckGo `kl=ar-es` — 26/08/2026  
- Análisis HTML on-page de las URLs del top 10 — 26/08/2026  
- Search Console export en esta carpeta (`Consultas.csv`, `Páginas.csv`) — últimos 28 días  

*Cuando puedas, validá el top 10 real entrando a Google desde una IP/dispositivo en Argentina (o VPN AR) en modo incógnito y anotá diferencias; si querés, actualizamos este archivo con el pantallazo real.*
