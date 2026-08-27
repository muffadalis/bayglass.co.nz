# Project Specs — Bay Glass Kerikeri website

## What the app does and who uses it
A marketing/brochure website for **Bay Glass Kerikeri**, a glass and glazing
specialist in Waipapa/Kerikeri, Northland, NZ. Visitors are homeowners and
tradespeople researching or requesting glass, glazing, shower, splashback,
balustrade, screen and outdoor-room work. There is no login, no account, no
user-submitted data stored by the site itself — it's read-only content plus
"get a quote" calls to action.

Design source: the imported **Bayglass Design System** handoff
(`Bayglass Design System-handoff.zip`) — a Radiant-template-based brand system
(navy/sky-blue/gold palette, Space Grotesk headings, Work Sans body, pill
buttons, soft bento cards, one navy "always on call" section).

## Tech stack
- **Site generator:** Hugo (extended), static output, no server/database/auth
- **Templating:** Hugo Go templates + partials
- **Styling:** Tailwind CSS, compiled via Tailwind CLI and fed through Hugo
  Pipes; `tailwind.config.js` theme extended with the Bayglass tokens (colours,
  fonts, radii, shadows) pulled from the design system's `tokens/*.css`
- **Fonts:** Google Fonts CDN — Michroma (logo only), Space Grotesk (headings),
  Work Sans (body) — same `@import` as the design system
- **Deployment:** GitHub Pages, built and published via a GitHub Actions
  workflow (`hugo` + `tailwindcss build` on push to main)
- **No database, no auth, no third-party services** — "Get a quote" and
  "Get a free quote" buttons link to a simple `/contact/` page with phone
  (09-407 9035) and email, not a form backend (no service currently
  specified for form submission — flagging this as an assumption)

## Pages and user flows
All pages public, no auth split.

| Page | Path | Purpose |
|---|---|---|
| Home | `/` | Recreation of the design-system homepage: hero (gradient panel, nav, heading, 2 CTAs), supplier logo strip, craftsmanship showcase, 3-up services teaser (linking to the services index), navy "always on call" emergencies/retrofit section, closing CTA + footer |
| Services index | `/services/` | Grid of all 7 service cards (bento style), each linking to its own page — extends the homepage's 3-card teaser into the full list, and gives the navbar's "Services" link somewhere to go |
| Glass & Glazing | `/services/glass-glazing/` | General glazing: broken window/glass replacement, new glazing, mirrors |
| Retrofit Double Glazing | `/services/retrofit-double-glazing/` | Retrofitting double glazing into existing aluminium/timber joinery |
| Splashbacks | `/services/splashbacks/` | Coloured/printed glass splashbacks |
| Glass Showers | `/services/glass-showers/` | Frameless shower enclosures |
| Balustrades & Pool Fences | `/services/balustrades-pool-fences/` | Glass/aluminium balustrades, handrails, pool fencing |
| Security & Insect Screens | `/services/security-insect-screens/` | Security screens and insect screens |
| Outdoor Room & Louvre Roofs | `/services/outdoor-room-louvre-roofs/` | Louvre roof systems, outdoor living areas |
| Contact | `/contact/` | Phone/email/address, referenced by CTA buttons |

Shared chrome (every page): Navbar (logo, "24-hour emergency callouts" pill,
Services/Testimonials/About/Contact links, "Get a quote" button) and Footer
(logo + Services/Company/Support columns + legal/contact row), per the design
system's `Navbar`/`Footer` components.

Each individual service page uses one consistent layout: small gradient-panel
header (eyebrow + heading + one-line lead), a lead paragraph, an image, 3–4
feature bullet points, and a closing CTA — built once as a Hugo template
(`layouts/services/single.html`) driven by per-page front matter, not
hand-duplicated per page.

## Data models and where data is stored
No database. Content lives in the repo:
- `/content/services/*.md` — one Markdown file per service, front matter holds
  `title`, `eyebrow`, `summary`, `image`, `features` (list); body holds the
  long-form copy
- `/content/_index.md`, `/content/services/_index.md`, `/content/contact.md` —
  home, services-index and contact page content
- `/data/suppliers.yaml` — logo-cloud supplier names (Bask, Metro Glass,
  Viridian, Insulglass, Houzz — as in the handoff)
- Images: the handoff hot-links images from `bayglass.co.nz/wp-content/uploads/…`.
  I'll use those same hot-linked URLs to start (matches the design system
  exactly); downloading local copies into `/static/images/` can be a fast
  follow-up if you'd rather not depend on the live WordPress site for images.

## Third-party services
None. No Stripe, no Supabase, no form backend, no analytics — flag if you want
any of these added (e.g. a real quote-request form, Google Analytics/Plausible).

## What "done" looks like for this task
- Homepage + services index + 7 service pages + contact page all built and
  linked (nav, footer, homepage teaser, services index all point to the right
  places — no dead `#` links for pages that now exist)
- Visual output matches the Bayglass Design System tokens (colours, type
  scale, spacing, radii, shadows, gradient) — Tailwind config carries those
  tokens rather than default Tailwind values
- `hugo` builds cleanly with no errors
- `hugo server -D` runs locally with no console/template errors
- Manually checked in the browser at desktop and mobile widths
- Every service listed in the request has its own page; copy is written in
  the brand voice (warm, plain-spoken, NZ English, no emoji) for the 5
  services not already scripted in the handoff (Glass & Glazing, Retrofit
  Double Glazing, Security & Insect Screens, Outdoor Room & Louvre Roofs —
  Splashbacks/Showers/Balustrades have handoff copy to draw from directly)
