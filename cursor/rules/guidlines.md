PROJECT: "Wayfar" – a static travel website (brand name is a placeholder, keep it in one config file).

STACK
- Vite + React 19 + TypeScript (strict), Tailwind CSS v4 (CSS-first config with @theme), shadcn/ui, Aceternity UI components where they fit, `motion` (framer-motion) only for light animation, lucide-react icons.
- Fully static: no backend. All content lives in typed data files under /src/data.

DESIGN DIRECTION: "Retro travel poster meets analog print"
- Warm paper-white grainy background (like an old risograph print) across the whole page.
- Content sits on top of it, in a centered column with WIDE empty side gutters so the grain stays visible.
- Typography-led layout, huge display type, small monospace metadata labels (poster-style: "Title – / Date – / Time –").
- Minimal motion. Respect prefers-reduced-motion everywhere.

COLOR TOKENS (define in @theme, never hard-code hex in components)
- --color-paper:      #E8E6E1   (page background, matches the RETRO poster)
- --color-paper-deep: #DAD7D0   (cards/sections, subtle contrast)
- --color-ink:        #151515   (text)
- --color-ink-soft:   #5B5A56   (secondary text)
- --color-sky:        #5B87C9   (primary, retro poster blue)
- --color-sky-deep:   #2F5597
- --color-valley:     #2E9E84   (secondary, teal-green from the valley image)
- --color-meadow:     #7DBE3F   (small accents only)
- --color-ochre:      #C98A2B   (CTA/accent, the utility pole yellow)
- --color-clay:       #B5573A   (rare highlight, roof terracotta)

FONTS (Google Fonts, via @fontsource packages, no external CDN link)
- Display: "Archivo" (weights 800/900, wide-ish, heavy, uppercase headings, tight tracking)
- Body: "DM Sans"
- Mono labels: "IBM Plex Mono" (small, uppercase or lowercase, letter-spaced)
Expose as --font-display, --font-body, --font-mono.

CODE QUALITY RULES (strict)
- Every file 100–150 lines MAX. Split anything bigger into components/hooks/data files.
- One component per file, named exports, PascalCase files for components, camelCase for hooks/utils.
- Presentational components are dumb and take typed props. Content comes from /src/data/*.ts, never inline in JSX.
- Reusable primitives first (Section, SectionHeading, MonoLabel, Container, StatBlock), then compose.
- No `any`. Shared types in /src/types. Use `cn()` helper for class merging.
- Accessible: semantic landmarks, alt text, focus-visible styles, keyboard-navigable nav/accordion/form.
- Images: lazy load below the fold, explicit width/height, WebP.

FOLDER STRUCTURE
src/
  assets/ (images, fonts)
  components/
    ui/            (shadcn + aceternity primitives)
    layout/        (SiteShell, Navbar, Footer, GutterLines, GrainBackground)
    common/        (Section, SectionHeading, MonoLabel, Container, Reveal)
    hero/          (Hero, HeroTitle, MountainLayer, Clouds, HeroQuote, HeroStats)
    destinations/  (DestinationsSection, DestinationCard, DestinationGrid)
    packages/      (PackagesSection, PackageCard, ServiceList, PriceTag)
    about/         (AboutSection, WhyChooseUs, Testimonials, FaqList)
    contact/       (ContactSection, ContactForm, ContactInfo)
  data/            (nav.ts, hero.ts, destinations.ts, packages.ts, services.ts, testimonials.ts, faq.ts)
  hooks/           (useReducedMotion, useCountUp, useScrollSpy)
  lib/             (utils.ts, constants.ts)
  styles/          (globals.css, grain.css)
  types/           (index.ts)
  App.tsx, main.tsx