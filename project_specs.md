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
| Retrofit Double Glazing | `/services/retrofit-double-glazing/` | Retrofitting double glazing into existing aluminium joinery (aluminium only) |
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
  Viridian, Opus, APL)
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

---

# Task: Retrofit double glazing page, fuller version (26 Oct 2026)

## What and why
Turn `/services/retrofit-double-glazing/` from ~55 words into a full page that
answers what a Northland homeowner asks before booking. Today Google shows it
for "double glazing northland" at position ~18.6 (49 views, 0 clicks, Search
Console, last 6 months), and ChatGPT quotes review sites about us rather than
this page. Audit items 18 + the keyword findings.

**Who reads it:** homeowners in Kerikeri, the Bay of Islands and Northland with
cold, damp or noisy rooms and existing **aluminium** windows and doors (we do not retrofit timber).

## Target searches (from Search Console)
- Main: **double glazing northland**, **retrofit double glazing** (+ Kerikeri / Bay of Islands)
- Also: retrofit double glazing cost, double glazing aluminium windows,
  double glazed windows, retrofit double glazing whangarei

## Page outline (same URL, same template look, new sections below the intro)
1. **Intro** — keep the current two paragraphs; add a 40-60 word direct answer:
   what retrofit double glazing is and who it suits (answer-first, for Google + AI)
2. **How it works** — 4-5 numbered steps: free measure → quote → make → install day → tidy-up
3. **Is my window suitable?** — aluminium only: which aluminium windows and doors work, and what to do if yours are timber (answer honestly, e.g. we can't retrofit timber)
4. **What affects the price** — NO prices or ranges, ever (owner rule, 26 Oct): what
   changes the cost (number and size of windows, glass type, access), ending in "free measure and quote"
5. **Benefits** — warmer, drier, quieter, less condensation; real numbers only if you
   have them (e.g. a customer's before/after, glass spec)
6. **Recent jobs** — 2-3 real Northland jobs: suburb, house type, what we did, photo
7. **FAQ** — 5-6 real customer questions, each answered in 2-3 plain sentences
8. **Get a free measure** — existing CTA

## Tech changes
- `content/services/retrofit-double-glazing.md`: new front matter fields
  `answer`, `steps`, `compare`, `prices`, `jobs`, `faq` (data lives here, not in the template)
- `layouts/services/single.html`: render each new block **only if the field exists**,
  so the other 6 service pages look exactly as they do now and can reuse it later
- `layouts/partials/schema.html`: add FAQPage JSON-LD when `faq` exists
- No new libraries, no new top-level folders. Photos go in `static/images/cinema/`

## What I need from you (facts only; I write the words, you approve)
1. What changes the cost of a job (sizes, number of windows, glass type, access)? No numbers needed
2. How long from measure to install? How long does an install day take?
3. Glass you use (e.g. Low-E, argon) and joinery types you can and can't do
4. 2-3 recent retrofit jobs: town, house type, what changed for the owner; a photo each if possible
5. The questions customers ask you most about double glazing
6. Anything that sets you apart (own team, warranty length, years doing retrofit)

## Done looks like
- Page drafted from your facts; **you approve the wording before it goes live**
- `hugo` builds clean; `hugo server -D` shows no errors
- Checked on phone and desktop width; other 6 service pages unchanged
- Lighthouse mobile stays 100 performance / 100 accessibility on the page
- Title stays "Retrofit Double Glazing, Northland | Bay Glass Kerikeri"; **no prices on the
  site, ever**; no invented jobs, numbers or claims

---

# Task: Frameless glass showers page, fuller version (26 Oct 2026)

## What and why
Same approach as the retrofit page (live 26 Oct): grow `/services/glass-showers/`
from ~60 words into a page that answers what a Bay of Islands homeowner asks
before booking. Search Console (last 6 months): the page averages position ~17
with 76 views; most shower views come from Auckland suburbs (Albany, Northcote,
Beach Haven) we don't serve, so the page needs a clearer local focus.

**Who reads it:** Kerikeri / Bay of Islands / Northland homeowners renovating a
bathroom or replacing an old shower.

## Target searches
- Main: **frameless glass showers** + Kerikeri / Bay of Islands / Northland
- Also: glass shower screen, frameless shower panel, shower glass installers,
  semi-frameless shower, shower glass replacement (only if we do it)

## Page outline (same template look; sections only appear if filled)
1. **What is a frameless glass shower?** — 40-60 word direct answer
2. Existing intro paragraphs + bullet points (unchanged unless you correct a fact)
3. **How it works** — steps from measure to install, with your real timing
4. **Frameless or semi-frameless?** — small comparison table, only facts you give me
5. **What affects the price?** — factors only, **no prices** (site rule)
6. **Recent jobs / gallery** — the 5 shower photos already on the site (`showers.jpg`,
   `showers1-4.jpg`, `cubicle_shower_pakiri-1080-2.jpg`), with a line each if you
   can tell me the town or job; photos alone otherwise
7. **FAQ** — 5-7 questions from your answers
8. Existing "Get a quote" button

## Tech changes
None to templates: the sections built for the retrofit page are reused. Only
`content/services/glass-showers.md` changes (front matter + any fact corrections).
The photo carousel at the top can show all 5 shower photos (gallery field).

## What I need from you (facts only; I write, you approve)
1. Which do you do: frameless, semi-frameless, fully framed? Over-bath screens?
   Shower glass/door **repair or replacement**?
2. Glass: thickness options? Easy-clean coating (brand, if any)? Hardware finishes
   (chrome, black, brushed)?
3. Timing: how soon do you measure, and how long until it's installed?
4. What changes the cost (no numbers)?
5. Do you work with the customer's tiler/plumber? Who handles waterproofing / old
   shower removal?
6. After-sales: any warranty or follow-up you offer?
7. Questions customers ask you most about showers
8. OK to use the 5 shower photos on this page? Any town/job detail for them?

## Done looks like
- Drafted from your facts; **you approve the wording before it goes live**
- `hugo` builds clean; `hugo server -D` no errors; phone + desktop checked
- Lighthouse mobile stays 100 performance / 100 accessibility
- No prices; no invented jobs, numbers or claims; title unchanged

---

# Task: Glass splashbacks page, fuller version (27 Oct 2026)

## What and why
Same approach as retrofit (live 26 Oct) and showers (live 27 Oct). `/services/splashbacks/`
has ~60 words. Search Console (last 6 months): 203 views, **0 clicks**, average
position ~15. Most views are other regions (Lower Hutt, Rotorua, Dunedin, Auckland),
so the page needs a clear Kerikeri / Bay of Islands / Northland focus.

**Who reads it:** Northland homeowners and builders doing a kitchen, bathroom or
laundry, choosing between glass, tiles or other splashbacks.

## Target searches
- Main: **glass splashbacks** + Kerikeri / Bay of Islands / Northland
- Also: coloured glass splashback, printed glass splashback, kitchen splashbacks,
  toughened / tempered glass splashback

## Page outline (reuses existing sections; no template changes)
1. **What is a glass splashback?** — 40-60 word direct answer
2. Existing intro paragraphs + bullet points (unchanged unless you correct a fact)
3. **How it works** — measure → choose colour/print → made to fit → install
4. **Coloured, clear or printed?** — table, only facts you give me
5. **What affects the price?** — factors only, **no prices**
6. **FAQ** — from your answers; 1-year workmanship warranty included
7. The 5 splashback photos already on the site stay in the top slideshow

## What I need from you (facts only)
1. Rooms: kitchens, bathrooms, laundries, feature walls? Anything you don't do?
2. Glass options: any colour? Colour-matched to paint (e.g. Resene)? Printed with
   the customer's own photo? Clear, low-iron (extra clear), mirrored or metallic?
3. Do you cut holes for power points and switches?
4. When do you measure: after the benchtop is in? How soon, and lead time to install?
5. What changes the cost (no numbers)?
6. Can glass go over existing tiles, or does the wall need to be flat/bare?

## Done looks like
- Drafted from your facts; **you approve before it goes live**
- Clean build, no server errors, phone + desktop checked
- Lighthouse mobile 100 accessibility, performance 98+
- No prices; no invented jobs, numbers or claims; title unchanged

---

# Task: Balustrades & pool fences page, fuller version (27 Oct 2026)

## What and why
Same approach as retrofit, showers and splashbacks (all live). `/services/balustrades-pool-fences/`
has ~60 words. Search Console (last 6 months): 78 views, 1 click, average position ~12,
the closest of our service pages to page one. Searches seen: pool fencing whangarei,
balustrades for pools, pool balustrades.

**Who reads it:** Northland homeowners and builders with a deck, balcony, stairs or
pool that needs a balustrade, handrail or pool fence.

**Extra care:** pool fencing and balustrades are Building Code / safety topics. The page
states only what you confirm; no compliance claim goes in unless you confirm it.

## Target searches
- Main: **glass balustrades** + **pool fencing** with Kerikeri / Bay of Islands / Northland / Whangarei
- Also: frameless glass balustrade, aluminium balustrade, deck balustrade, stair
  handrail, glass pool fence, pool gates

## Page outline (reuses existing sections; no template changes)
1. **What is a glass balustrade?** — 40-60 word direct answer
2. Existing intro paragraphs + bullet points (unchanged unless you correct a fact)
3. **How it works** — measure → choose system and finish → made to fit → install
4. **Which system is right for you?** — table of the types you do
5. **What affects the price?** — factors only, **no prices**
6. **FAQ** — from your answers; 1-year workmanship warranty included
7. The 6 balustrade photos already on the site stay in the top slideshow

## What I need from you (facts only)
1. Types you do: frameless glass, glass with posts, aluminium (glass infill / pickets /
   slats)? Inside stairs as well as outside? Handrails on their own?
2. Pool fences: glass, aluminium or both? Self-closing, self-latching gates?
3. Compliance: is all your work built to the NZ Building Code (pool fences to the pool
   rules)? Do you help with council consent or inspections, or is that the owner's job?
4. Aluminium finishes: any powder-coat colour, or a set range?
5. What changes the cost (no numbers)? e.g. metres, glass vs aluminium, gates, fixing type
6. Timing: same as other pages (measure usually within a week; install depends on size,
   complexity, distance)?

## Done looks like
- Drafted from your facts; **you approve before it goes live**
- Clean build, no server errors, phone + desktop checked
- Lighthouse mobile 100 accessibility, performance 98+
- No prices; no compliance claim you haven't confirmed; title unchanged
