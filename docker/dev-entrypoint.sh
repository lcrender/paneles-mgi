#!/bin/sh
set -e
cd /app
if [ ! -d node_modules/next ]; then
  echo "[dev] Instalando dependencias (primera vez o volumen vacío)..."
  npm ci
fi
exec npm run dev -- --hostname 0.0.0.0 --port 3000
