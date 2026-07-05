# Bayglass Design System

A brand & UI design system for **Bay Glass Kerikeri** — a glass and glazing
specialist in Waipapa / Kerikeri, Northland, New Zealand. *"More than just glass"*:
windscreens, broken windows, mirrors, splashbacks, frameless showers,
balustrades, retrofit double glazing, security & insect screens, plus 24-hour
emergency callouts.

This system dresses the layout language of the **Tailwind Plus "Radiant"**
marketing template in the Bayglass brand — big Space Grotesk display type, a
signature radiant gradient, generous rounding, soft cards, and a navy dark
section — using the real Bayglass palette, logo and photography.

## Sources
- **Brand site:** https://bayglass.co.nz (content, service copy, photography — images are
  hot-linked from `bayglass.co.nz/wp-content/uploads/…` in the UI kit).
- **Layout reference:** https://tailwindcss.com/plus/templates/radiant/preview
- **Palette:** `uploads/BGColours.png` → sampled to the 7 brand swatches (see Colors).
- **Logo:** `uploads/8f329f3d-…png` → `assets/bayglass-logo-navy.png` (wordmark on navy).
- **Fonts:** Michroma (logo), Space Grotesk (headings), Work Sans (body) — all loaded
  from Google Fonts, no substitution required.

## CONTENT FUNDAMENTALS
- **Voice:** warm, plain-spoken, local-tradesperson confidence. Practical over salesy.
  Short declaratives: *"More than just glass."* *"Custom made to your exact requirements."*
- **Person:** speaks to the customer as **you** ("your home", "yours can be too"); the
  company is **we / Bay Glass**. Never corporate first-person plural chest-beating.
- **Casing:** sentence case for body and most headings; the wordmark is all-caps Michroma
  (`BAYGLASS` / `KERIKERI`). Eyebrows are UPPERCASE, letter-spaced.
- **NZ English:** "colour", "metre", "fibre". Local references (Bay of Islands, Northland,
  Kerikeri, Waipapa) are on-brand and welcome.
- **Emoji:** none. Not part of the brand.
- **Tone examples:** *"A smashed window doesn't wait for business hours — and neither do we."*
  · *"Warmer, drier, healthier home."* · *"Imagine the possibilities."*

## VISUAL FOUNDATIONS
- **Colours:** the classic sky→navy / gold→orange palette. Cool blues do the structural
  work (navy `#023047` ink & dark sections, blue `#219ebc` primary); warm gold/orange
  (`#ffb703`→`#fb8500`) is the accent for CTAs and highlights. See `tokens/colors.css`.
- **Signature gradient:** `--gradient-radiant` sweeps sky-blue → teal → gold → orange at
  135°. It fills the rounded hero panel and reappears as a pale wash (`--gradient-radiant-soft`)
  behind the closing CTA + footer. This is the Bayglass answer to Radiant's pastel hero.
- **Type:** Space Grotesk for all headings — medium weight, tight tracking (−0.03em), low
  leading (0.95–1.15), balanced wrapping. Work Sans for body at 1.65 line-height. Michroma
  is reserved strictly for the wordmark.
- **Backgrounds:** mostly clean white / near-white (`--surface-page`) with real
  photography in cards and one full-bleed showcase image. One navy section for contrast.
  No textures or patterns; gradient is the only decorative surface.
- **Cards:** white, `--radius-xl` (24px) corners, hairline `--border-card` + soft
  navy-tinted ambient shadow (`--shadow-md`). Media sits flush at the top, copy below.
- **Corner radii:** small elements 8–12px, cards 16–24px, hero panel 32px, buttons/badges pill.
- **Shadows:** low-spread, navy-tinted, ambient (never hard/black). Hairline "ring" insets
  on gradient surfaces.
- **Borders:** hairline only — `rgba(2,48,71,.08)` on light, `rgba(255,255,255,.10)` on dark.
- **Buttons:** pill. Primary is solid navy (Radiant's black, warmed to brand); accent is
  orange; secondary is a soft navy tint; outline is a hairline.
- **Motion:** quick ease-out (`--ease-out`, 120–220ms). Hover = subtle brightness lift;
  press = 0.97 scale. No bounces, no infinite loops.
- **Transparency/blur:** sparingly — translucent navy tints for the nav announcement pill
  and image labels; no heavy glassmorphism.
- **Imagery vibe:** real project photography — natural daylight, cool-neutral, true colour
  (glass, water, homes). Warm only where the product is (coloured splashbacks).

## ICONOGRAPHY
The source Bayglass website is largely photographic and uses **no dedicated icon set** —
navigation and services are carried by imagery and text, not glyphs. This system follows
suit: it ships **no icon font**. Where a small glyph is unavoidable (nav chevron, social
marks), use plain Unicode (`›`) or link a CDN set that matches the calm, thin aesthetic —
**Lucide** (`https://unpkg.com/lucide-static`) is the recommended substitute if icons are
needed; flag any use so it can be reviewed. No emoji anywhere. The twin-parallelogram glyph
in the `Logo` component is a simplified typographic nod to the real mark — for anything
prominent use the raster logo in `assets/`.

## Components
Reusable React primitives live in `components/core/` (namespace `BayglassDesignSystem_405762`):
- **Button** — pill CTA; primary / accent / secondary / outline; sm / md / lg.
- **Container** — 1216px centered column.
- **Eyebrow** — uppercase letter-spaced kicker.
- **Heading** — Space Grotesk display heading, xl → sm, `dark` variant.
- **Lead** — large muted intro paragraph.
- **Gradient** — the signature radiant surface; `panel` (hero) / `soft` (wash).
- **Logo** — Michroma wordmark with twin-tile glyph, `dark` / light.
- **Navbar** — marketing top nav (wordmark, announcement pill, links, CTA).
- **Footer** — brand + link columns + legal/contact row.
- **BentoCard** — feature tile (media + eyebrow + heading + body), light / dark.
- **LogoCloud** — partner / supplier strip.

## UI kits
- **`ui_kits/website/`** — the full Bayglass marketing homepage recreated in the Radiant
  layout: hero gradient panel, supplier strip, craftsmanship showcase, services bento grid,
  navy emergencies section, and the CTA + footer band. Entry: `index.html`.

## Index / manifest
- `styles.css` — root entry (import lines only).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/core/` — the primitives above + their `@dsCard` cards.
- `ui_kits/website/` — the marketing site recreation.
- `assets/` — `bayglass-logo-navy.png`, `palette.png`.
- `SKILL.md` — Agent-Skill wrapper.

## Notes
- Fonts load via a Google Fonts `@import` in `tokens/fonts.css`; the compiler reports
  "0 fonts" because it doesn't fetch remote `@font-face`, but the webfonts do load for consumers.
- UI-kit imagery is hot-linked from `bayglass.co.nz`; download local copies for offline/production use.
