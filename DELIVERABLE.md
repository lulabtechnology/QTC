# FASE 0

## Dirección creativa y técnica
Landing page one-page premium, industrial y autoritaria, construida con composición editorial oscura, hero full screen, capas de overlay elegantes, motion fino con Framer Motion y assets locales separados desktop/mobile para que puedas reemplazarlos sin romper el layout.

## Mapa de secciones
1. Header / Navbar sticky  
2. Hero full screen  
3. Barra de confianza / logos  
4. Problema + propuesta de valor  
5. Soluciones / servicios principales  
6. Beneficios  
7. Industrias  
8. Fabricantes / marcas bandera  
9. Cómo funciona  
10. Por qué Quality Techno Services  
11. FAQ  
12. Formulario de leads  
13. CTA final  
14. Footer  
15. Botón fijo de WhatsApp  

## Decisiones visuales clave
- Fondo navy industrial con gradientes técnicos
- Cards con brillo sutil, blur y bordes premium
- Hero cinematográfico con capas dinámicas
- Marquee elegante para fabricantes
- Fallback visual listo si falta una imagen
- Copy 100% en español y tono B2B industrial
- Arquitectura simple para GitHub Web + Vercel

## Animaciones implementadas
- Entrada cinematográfica del hero
- Sticky navbar con blur al hacer scroll
- Scroll reveal con stagger en secciones
- Hover premium en cards
- Marquee continuo de logos
- FAQ con apertura suave e icono rotando
- CTA final con brillo animado
- Botón flotante de WhatsApp con microanimación

---

# FASE 1

## Árbol completo de archivos y carpetas

```text
├── app
│   ├── api
│   │   └── contact
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components
│   ├── sections
│   │   ├── benefits.tsx
│   │   ├── contact-form.tsx
│   │   ├── faq.tsx
│   │   ├── final-cta.tsx
│   │   ├── footer.tsx
│   │   ├── hero.tsx
│   │   ├── industries.tsx
│   │   ├── logo-strip.tsx
│   │   ├── manufacturers.tsx
│   │   ├── navbar.tsx
│   │   ├── process.tsx
│   │   ├── solutions.tsx
│   │   ├── value-proposition.tsx
│   │   └── why-qts.tsx
│   ├── ui
│   │   ├── ambient-image-panel.tsx
│   │   ├── premium-card.tsx
│   │   ├── reveal.tsx
│   │   └── section-heading.tsx
│   └── floating-whatsapp.tsx
├── lib
│   ├── contact.ts
│   └── site.ts
├── public
│   ├── brand
│   │   ├── manufacturers
│   │   │   ├── agi.svg
│   │   │   ├── flowserve.svg
│   │   │   ├── nov.svg
│   │   │   └── unique-polymer-systems.svg
│   │   ├── logo-qts-white.png
│   │   └── logo-qts.png
│   └── images
│       ├── cta
│       │   ├── cta-desktop.webp
│       │   └── cta-mobile.webp
│       ├── hero
│       │   ├── hero-desktop.webp
│       │   └── hero-mobile.webp
│       ├── industries
│       │   ├── energy-desktop.webp
│       │   ├── energy-mobile.webp
│       │   ├── food-desktop.webp
│       │   ├── food-mobile.webp
│       │   ├── marine-desktop.webp
│       │   ├── marine-mobile.webp
│       │   ├── mining-desktop.webp
│       │   ├── mining-mobile.webp
│       │   ├── oil-gas-desktop.webp
│       │   ├── oil-gas-mobile.webp
│       │   ├── water-desktop.webp
│       │   └── water-mobile.webp
│       ├── manufacturers
│       │   ├── agi-desktop.webp
│       │   ├── agi-mobile.webp
│       │   ├── flowserve-desktop.webp
│       │   ├── flowserve-mobile.webp
│       │   ├── nov-desktop.webp
│       │   ├── nov-mobile.webp
│       │   ├── ups-desktop.webp
│       │   └── ups-mobile.webp
│       └── services
│           ├── protection-desktop.webp
│           ├── protection-mobile.webp
│           ├── pumping-desktop.webp
│           ├── pumping-mobile.webp
│           ├── specialized-desktop.webp
│           └── specialized-mobile.webp
├── .env.example
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

---

# FASE 2

## Código completo
Todo el código está dentro de esta carpeta del proyecto y listo para subir:

- `app/`
- `components/`
- `lib/`
- `public/`
- `tailwind.config.ts`
- `package.json`
- `.env.example`

Los archivos clave que normalmente editarás primero son:

- `app/page.tsx`
- `components/sections/hero.tsx`
- `components/sections/contact-form.tsx`
- `lib/site.ts`
- `app/api/contact/route.ts`

---

# FASE 3

## Dependencias
Incluidas en `package.json`:

- next
- react
- react-dom
- framer-motion
- lucide-react
- resend

## Dev dependencies
- typescript
- tailwindcss
- postcss
- autoprefixer
- eslint
- eslint-config-next
- @types/react
- @types/react-dom
- @types/node

## Configuración para Vercel
Variables sugeridas:
- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`
- `WHATSAPP_NUMBER`
- `LINKEDIN_URL`
- `SITE_URL`

---

# FASE 4

## GitHub Web paso a paso
1. Crea un repositorio nuevo en GitHub.
2. Entra al repo y pulsa **Add file > Upload files**.
3. Arrastra **todo el contenido** de esta carpeta, no una carpeta encima de otra.
4. Verifica que en la raíz se vean:
   - `package.json`
   - `app/`
   - `components/`
   - `lib/`
   - `public/`
5. Pulsa **Commit changes**.

## Vercel paso a paso
1. Entra a Vercel.
2. Pulsa **Add New > Project**.
3. Importa el repositorio de GitHub.
4. En **Framework Preset** debe detectar **Next.js**.
5. En **Root Directory** deja la raíz del proyecto.
6. Antes de desplegar, agrega las variables de entorno:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL`
   - `WHATSAPP_NUMBER`
   - `LINKEDIN_URL`
   - `SITE_URL`
7. Pulsa **Deploy**.

## Cambiar imágenes y textos
### Textos
- Edita `lib/site.ts` para:
  - títulos
  - bullets
  - FAQs
  - fabricantes
  - industrias
  - beneficios

### Hero
- Reemplaza:
  - `public/images/hero/hero-desktop.webp`
  - `public/images/hero/hero-mobile.webp`

### CTA final
- Reemplaza:
  - `public/images/cta/cta-desktop.webp`
  - `public/images/cta/cta-mobile.webp`

### Logos
- Reemplaza:
  - `public/brand/logo-qts.png`
  - `public/brand/logo-qts-white.png`
  - `public/brand/manufacturers/*.svg`

## Variables de entorno
### En Vercel
1. Abre tu proyecto.
2. Ve a **Settings > Environment Variables**.
3. Crea cada variable con su valor.
4. Guarda.
5. Ve a **Deployments**.
6. Haz **Redeploy** del último deployment.

---

# FASE 5

## Rutas de imágenes localizadas

### Logo
- `public/brand/logo-qts.png` → logo principal
- `public/brand/logo-qts-white.png` → logo blanco para fondos oscuros

### Hero
- `public/images/hero/hero-desktop.webp` → hero desktop
- `public/images/hero/hero-mobile.webp` → hero mobile

### Soluciones / servicios
- `public/images/services/pumping-desktop.webp` → bombeo desktop
- `public/images/services/pumping-mobile.webp` → bombeo mobile
- `public/images/services/protection-desktop.webp` → protección desktop
- `public/images/services/protection-mobile.webp` → protección mobile
- `public/images/services/specialized-desktop.webp` → especializados desktop
- `public/images/services/specialized-mobile.webp` → especializados mobile

### Industrias
- `public/images/industries/energy-desktop.webp` → energía desktop
- `public/images/industries/energy-mobile.webp` → energía mobile
- `public/images/industries/oil-gas-desktop.webp` → oil & gas desktop
- `public/images/industries/oil-gas-mobile.webp` → oil & gas mobile
- `public/images/industries/mining-desktop.webp` → minería desktop
- `public/images/industries/mining-mobile.webp` → minería mobile
- `public/images/industries/water-desktop.webp` → agua desktop
- `public/images/industries/water-mobile.webp` → agua mobile
- `public/images/industries/marine-desktop.webp` → marítimo desktop
- `public/images/industries/marine-mobile.webp` → marítimo mobile
- `public/images/industries/food-desktop.webp` → alimentos desktop
- `public/images/industries/food-mobile.webp` → alimentos mobile

### Fabricantes
- `public/images/manufacturers/flowserve-desktop.webp` → Flowserve desktop
- `public/images/manufacturers/flowserve-mobile.webp` → Flowserve mobile
- `public/images/manufacturers/agi-desktop.webp` → AGI desktop
- `public/images/manufacturers/agi-mobile.webp` → AGI mobile
- `public/images/manufacturers/nov-desktop.webp` → NOV desktop
- `public/images/manufacturers/nov-mobile.webp` → NOV mobile
- `public/images/manufacturers/ups-desktop.webp` → UPS desktop
- `public/images/manufacturers/ups-mobile.webp` → UPS mobile

### CTA final
- `public/images/cta/cta-desktop.webp` → CTA desktop
- `public/images/cta/cta-mobile.webp` → CTA mobile

### Logos de fabricantes
- `public/brand/manufacturers/flowserve.svg`
- `public/brand/manufacturers/agi.svg`
- `public/brand/manufacturers/nov.svg`
- `public/brand/manufacturers/unique-polymer-systems.svg`