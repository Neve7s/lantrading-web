# SAGAS Web — LAN TRADING S.A. | Astro + Bun

Landing + catálogo estático, estilo escandinavo (azul #1E40AF / rojo / blanco), Amazon-like grid, 100% responsive.

**Entregable actual:** 5 productos por categoría (demo) — 288 productos y 672 webp ya en `public/imagenes` (20.7 MB). Cambiar a catálogo completo es 1 línea.

## Stack
Astro 4 + React islands + Tailwind + Bun · Deploy en Vercel · Datos en `src/data/` (copia de `datos-sagas/`)

## Comandos
```bash
bun install
bun run dev      # http://localhost:4321
bun run build    # dist/ 296 páginas
bun run preview
```

## Estructura modular
```
src/
  styles/tokens.css      # azul blue-800 #1E40AF
  layouts/Layout.astro
  components/ui, catalog, layout  # ProductCard, ServiceCard, Gallery, Header, Footer, FloatingWhatsApp
  lib/whatsapp, related, format   # funciones reusables para futura DB
  data/productos.json (288) + categorias + empresa + servicios
  pages: index, catalogo, producto/[slug], servicios, servicio/[slug], nosotros, contacto
public/logos  # 2 logos SAGAS/LAN TRADING (cambian cada 3s) + favicon
```

## Deploy Vercel
1. Push a GitHub
2. Import en vercel.com → Framework: Astro → Build: `bun run build` → Output: `dist`
3. Env no requerida (estático)

## Mostrar catálogo completo (todos los productos)
En `src/pages/index.astro` y `src/pages/catalogo/index.astro` cambiar:
```ts
if (arr.length < 5) arr.push(p)  // demo
// a:
arr.push(p) // todos
```
Re-build y deploy.

## Imágenes
`public/imagenes/ <- 672 webp por código (id__n.webp) + mapa-codigos.json` — ya optimizadas 800px q80. Subir todas a GitHub/Vercel: sí, incluidas (20.7 MB). Vercel las sirve estático con cache.
