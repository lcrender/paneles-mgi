#!/usr/bin/env node

const fs = require('fs/promises')
const path = require('path')
const sharp = require('sharp')

const ROOT = process.cwd()
const INPUT_DIR = path.join(ROOT, 'public', 'images')
const SUPPORTED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png'])
const QUALITY = 82

async function collectImageFiles(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name)

    if (entry.isDirectory()) {
      const nested = await collectImageFiles(fullPath)
      files.push(...nested)
      continue
    }

    const ext = path.extname(entry.name).toLowerCase()
    if (SUPPORTED_EXTENSIONS.has(ext)) {
      files.push(fullPath)
    }
  }

  return files
}

async function toWebp(filePath) {
  const targetPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp')

  try {
    await fs.access(targetPath)
    return { status: 'skipped', source: filePath, target: targetPath }
  } catch {
    await sharp(filePath).webp({ quality: QUALITY }).toFile(targetPath)
    return { status: 'created', source: filePath, target: targetPath }
  }
}

async function run() {
  try {
    await fs.access(INPUT_DIR)
  } catch {
    console.error(`No existe el directorio: ${INPUT_DIR}`)
    process.exit(1)
  }

  const files = await collectImageFiles(INPUT_DIR)
  if (files.length === 0) {
    console.log('No se encontraron imágenes JPG/JPEG/PNG para convertir.')
    return
  }

  const results = await Promise.all(files.map((file) => toWebp(file)))
  const created = results.filter((item) => item.status === 'created').length
  const skipped = results.filter((item) => item.status === 'skipped').length

  console.log(`Conversión finalizada.`)
  console.log(`- Generadas: ${created}`)
  console.log(`- Omitidas (ya existían): ${skipped}`)
}

run().catch((error) => {
  console.error('Error al convertir imágenes a WebP:', error)
  process.exit(1)
})
