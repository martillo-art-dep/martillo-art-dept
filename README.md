# Martillo Art Dept — Sitio web

Sitio de portafolio **bilingüe (ES/EN)** para **Martillo Art Dept**, estudio de diseño de producción y dirección de arte para cine, series, comerciales y videoclips.

- **Sitio en producción:** _[PENDIENTE: dominio de Cloudflare]_
- **Hosting / deploy:** Netlify (publicación automática al hacer push a `main`)
- **Dominio / DNS:** Cloudflare

---

## Stack

| Área | Tecnología |
|------|------------|
| UI | React 19 + TypeScript |
| Bundler / dev server | Vite 7 |
| Estilos | Tailwind CSS v4 (plugin oficial de Vite) + CSS/estilos inline por página |
| Ruteo | React Router v7 |
| i18n | i18next + react-i18next + browser-languagedetector |
| SEO | react-helmet-async |
| Video | @vimeo/player |
| Formularios | Netlify Forms |

No hay variables de entorno ni secretos en el repo (no existe `.env`).

---

## Requisitos

- **Node.js 20+** y **npm**

## Puesta en marcha

```bash
# 1. Clonar
git clone https://github.com/<owner>/martillo-art-dept.git
cd martillo-art-dept

# 2. Instalar dependencias
npm install

# 3. Servidor de desarrollo (http://localhost:5173)
npm run dev
```

> `<owner>` es `carolinadelabarrera` hasta que el repo se transfiera a la organización `martillo-art-dep`.

### Scripts

| Comando | Qué hace |
|---------|----------|
| `npm run dev` | Servidor de desarrollo con recarga en caliente (Vite). |
| `npm run build` | Compila TypeScript (`tsc -b`) y genera el build de producción en `dist/`. |
| `npm run preview` | Sirve localmente el build de producción para verificarlo. |
| `npm run lint` | Ejecuta ESLint sobre el proyecto. |

---

## Estructura del proyecto

```
├─ index.html              # HTML base + <form> oculto de detección de Netlify Forms
├─ vite.config.ts          # Config Vite (plugins react + tailwind)
├─ public/
│  ├─ _redirects           # Regla SPA de Netlify:  /* /index.html 200
│  ├─ _headers             # Headers por ruta (descarga de CVs en PDF)
│  ├─ favicon.png
│  └─ assets/              # Estáticos servidos tal cual
│     ├─ projects/<id>/    # Imágenes por proyecto (.webp)
│     ├─ logos/            # Logos de productoras (.png)
│     ├─ team/             # Fotos del equipo (.jpg)
│     └─ cvs/              # CVs en PDF (ES/EN por socio)
└─ src/
   ├─ main.tsx             # Entry point (React + HelmetProvider + i18n + estilos globales)
   ├─ App.tsx              # Definición de rutas
   ├─ index.css            # Estilos globales / capa Tailwind
   ├─ i18n/
   │  ├─ index.ts          # Init de i18next (fallback 'es', detección por localStorage/navigator)
   │  └─ locales/
   │     ├─ es.json        # Textos en español
   │     └─ en.json        # Textos en inglés (misma estructura de llaves que es.json)
   ├─ data/
   │  └─ projects.ts       # FUENTE ÚNICA del portafolio (interfaces + array `projects`)
   ├─ components/          # Layout, Header, Footer, SEO, LanguageSwitcher, HeroSection, LogoMarquee, MartilloLogo
   └─ pages/               # Home, Portfolio, ProjectDetail, Services, ServiceDetail, About, TeamMember, Contact
```

### Rutas (`src/App.tsx`)

Todas envueltas en `<Layout>` y cargadas con `React.lazy`:

`/` · `/portfolio` · `/portfolio/:id` · `/services` · `/services/:id` · `/about` · `/about/:memberId` · `/contact`

---

## Cómo editar contenido

> El contenido de texto vive en **dos sistemas**. Es importante conocer ambos.

### 1. Textos generales → `src/i18n/locales/es.json` y `en.json`
Nav, home, servicios, historia y **bios largas** del equipo (`team.carry.*`, `team.pache.*`).
Se editan con `t('clave.anidada')` en los componentes. **Toda llave nueva debe existir en `es.json` Y `en.json`** con la misma ruta; si falta en uno, i18next cae al `fallbackLng` (`es`).

### 2. Proyectos → `src/data/projects.ts`
Array `projects: ProjectFull[]`, fuente única del portafolio. Cada proyecto es un objeto con, entre otros:

- `id` (slug de la ruta `/portfolio/:id`, único, minúsculas, sin espacios)
- `title`, `year`, `category` (`largometrajes | series | comerciales | videoclips`)
- `description`/`descriptionEn`, `synopsis`/`synopsisEn`, `productionDesignText`/…`En`
- `credits[]`, `nominations[]`, `logos[]`
- `image`, `heroImage`, `posterImage`, `galleries[]` (con `imageRotations?` opcional)
- `trailerUrl` (Vimeo, opcional)
- `hidden?: boolean` → despublica un proyecto sin borrarlo

Los textos de proyectos NO usan i18n: se guardan como pares `campo`/`campoEn` y se seleccionan por idioma en el componente.

### 3. Bios cortas del equipo → `src/pages/About.tsx`
El array `TEAM` tiene bios **cortas** hardcodeadas (`bioEs`/`bioEn`). Las bios **largas** están en i18n. Al editar una bio, revisar **ambos** lugares.

### 4. Imágenes → `public/assets/…`
- Proyectos: `public/assets/projects/<id>/`, en **`.webp`**.
- Convención de nombres: minúsculas, sin espacios ni acentos (`hero.webp`, `poster.webp`, `galeria-01.webp`). Deben coincidir **exactamente** con las rutas escritas en `projects.ts`.
- ⚠️ **No hay optimización de imágenes en el build.** Los assets deben pre-optimizarse (WebP, tamaño razonable) antes de subir.

---

## Deploy (Netlify)

Netlify observa la rama **`main`**. Cada push dispara un build y publica automáticamente.

**Build settings (confirmados en el panel de Netlify):**

| Ajuste | Valor |
|--------|-------|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Base directory | `/` |
| Functions directory | `netlify/functions` (sin funciones en uso actualmente) |

- **SPA:** `public/_redirects` (`/* /index.html 200`) es imprescindible para que React Router funcione en deep-links y recargas. Sin él, cualquier ruta ≠ `/` daría 404.
- **Headers:** `public/_headers` fuerza descarga de los CVs PDF. Netlify `_headers` **no soporta wildcards de path**, por eso cada CV se lista explícitamente. Al agregar CVs, añadir su ruta a mano.
- **Formularios:** el formulario `contacto-martillo` se detecta desde el `<form>` oculto en `index.html`. Las submissions llegan a **Netlify → Forms**.
- No hay `netlify.toml`; la configuración vive en el panel de Netlify. _(Recomendado: versionar un `netlify.toml` para reproducibilidad.)_

---

## Servicios externos

- **Vimeo** (titular: Martillo Art Dept, `vimeo.com/user255726939`): aloja los tráilers; el sitio los incrusta vía `trailerUrl` en `projects.ts`.
- **Cloudflare**: dominio y DNS.
- **Google Analytics 4**: ⚠️ **no configurado actualmente** (no hay snippet en el código ni en Netlify Snippet injection). Pendiente de activar.

---

## Deuda técnica / pendientes

- [ ] Transferir el repo a la organización `martillo-art-dep` y reconectar en Netlify.
- [ ] Configurar GA4 (crear propiedad + inyectar tag vía Netlify Snippet injection).
- [ ] Versionar `netlify.toml`.
- [ ] Añadir optimización de imágenes al pipeline (p. ej. `vite-imagetools`).
- [ ] Unificar criterio de copy (i18n JSON vs. textos inline en `About.tsx` / `projects.ts`).
- [ ] Sin tests ni CI más allá del build de Netlify.

---

## Convenciones

- **No tocar sin criterio técnico:** `vite.config.ts`, `tsconfig*.json`, `eslint.config.js`, `package.json`, `src/main.tsx`, `src/App.tsx`, `src/components/*`, `src/i18n/index.ts`, `public/_redirects`, `public/_headers`.
- **Colores de marca:** fondo `#1b1b1b`, acento naranja `#FB5000`. Tipografías: `Inter` (Google Fonts) y `Martillo Completa` (propia).
- Cada push a `main` publica en producción. Para cambios de riesgo, usar una rama y Deploy Preview.
