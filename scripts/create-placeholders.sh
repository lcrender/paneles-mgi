#!/bin/bash

# Script para crear imágenes placeholder simples
# Usa ImageMagick si está disponible, sino crea archivos vacíos que Next.js manejará

create_placeholder() {
  local file=$1
  local width=${2:-1200}
  local height=${3:-800}
  
  if command -v convert &> /dev/null; then
    # Usar ImageMagick si está disponible
    convert -size ${width}x${height} xc:#f3f4f6 -pointsize 24 -fill "#9ca3af" -gravity center -annotate +0+0 "Placeholder ${width}x${height}" "$file"
  else
    # Crear un archivo SVG simple como placeholder
    cat > "$file" << EOF
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f3f4f6"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="#9ca3af" text-anchor="middle" dominant-baseline="middle">Placeholder</text>
</svg>
EOF
  fi
}

# Crear directorios si no existen
mkdir -p public/images/usos
mkdir -p public/images/tipos
mkdir -p public/images/proyectos

# Crear imágenes placeholder
create_placeholder "public/images/hero-paneles.jpg" 1920 1080
create_placeholder "public/images/og-image.jpg" 1200 630

# Usos
create_placeholder "public/images/usos/camaras-frigorificas.jpg"
create_placeholder "public/images/usos/congelados.jpg"
create_placeholder "public/images/usos/naves-industriales.jpg"
create_placeholder "public/images/usos/techos.jpg"
create_placeholder "public/images/usos/muros.jpg"

# Tipos
create_placeholder "public/images/tipos/pir-pur.jpg"
create_placeholder "public/images/tipos/lana-de-roca.jpg"

# Proyectos
create_placeholder "public/images/proyectos/proyecto-1.jpg"

echo "Placeholders creados exitosamente"

