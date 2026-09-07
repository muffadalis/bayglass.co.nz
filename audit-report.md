# Audit: bayglass.co.nz · 6 Sep 2026 · 11 pages · owner mode

### [x] 1. Add a robots.txt · Google and the AI crawlers had no instructions
Done 6 Sep. `enableRobotsTXT` on + `layouts/robots.txt`: allows everyone, names GPTBot/OAI-SearchBot/ClaudeBot/PerplexityBot/Google-Extended, points to the sitemap.

### [x] 2. Add an llms.txt
Done 6 Sep. `static/llms.txt` — summary, service list with links, contact block.

### [x] 3. Add a canonical tag to every page
Done 6 Sep. Self-referencing `<link rel="canonical">` in `head.html`. Verified on all 11 pages + 404.

### [x] 4. Write a meta description for every page · 10 of 11 had none
Done 6 Sep. `description` added to every page's front matter, 152–164 characters, keyword-front, one CTA. No body copy touched.

### [x] 5. Rewrite the title tags · too short, no keyword, no location
Done 6 Sep. Every title now 49–60 chars, keyword-front, with Kerikeri / Northland / Bay of Islands. Before/after in the copy report below. No body copy touched.

### [x] 6. Add Open Graph + Twitter tags
Done 6 Sep. Full OG + `summary_large_image` Twitter card in `head.html`, image pulled from each page's hero.

### [x] 7. Add a favicon + theme colour
Done 6 Sep. `static/favicon.svg` (the Bay Glass pane motif) + `theme-color #023047`.

### [x] 8. Add LocalBusiness / Service / WebSite schema
Done 6 Sep. `layouts/partials/schema.html` — JSON-LD `@graph`: Glazier (NAP, geo, hours, priceRange, sameAs → Facebook + Google profile, aggregateRating **4.9 / 57**), WebSite on home, Service on each service page, BreadcrumbList on every non-home page. Validates clean. Data from `hugo.toml` params only.

### [x] 9. Add a `<main>` landmark + breadcrumbs
Done 6 Sep. `<main id="main">` in `baseof.html`; BreadcrumbList schema on every non-home page (Home › Services › Page).

### [x] 10. Compress the images · 27.8 MB → 13.7 MB published
Done 6 Sep. All 29 cinema images re-encoded (sharp): capped at 1920px, WebP generated for every one, JPG/PNG fallbacks optimised. Originals archived in `assets/images/cinema-originals/` (not published). New `partials/picture.html` outputs `<picture>` + `<source webp>` + width/height. LCP hero images now `loading="eager" fetchpriority="high"`; everything else lazy. `.jpeg`/`.JPG` refs normalised to `.jpg` (would have 404'd on the Linux build server).

### [x] 11. Fix the font loading
Done 6 Sep. Google Fonts moved from a CSS `@import` to a `<link>` in `head.html` with `preconnect` to fonts.googleapis.com and fonts.gstatic.com. All 5 families kept.

### [x] 12. Write alt text for ~25 images
Done 6 Sep. Bento cards, carousels and the About photo all carry descriptive alt now; decorative-only backgrounds carry `role="img"` + `aria-label`.

### [x] 13. Add internal links between service pages
Done 6 Sep. `partials/related-services.html` at the foot of every service page: links to the six sibling services, up to `/services/`, across to `/about/`. Template component — no body sentences touched.

### [x] 14. Redirect the dead old WordPress URLs
Done 6 Sep (partial). `aliases` added: `/splashbacks/` → splashbacks, `/showers/` → glass-showers, `/testimonials/` and `/home/` → home. **You still need to** pull the full "Crawled – not indexed" / 404 list from Search Console so the rest can be mapped.

### [x] 15. Add a custom 404 page
Done 6 Sep. `layouts/404.html` — branded, `noindex`, links back to home/services/about/contact + the phone number.

### [x] 16. Standardise name, address and phone
Done 6 Sep. Site now uses "Bay Glass", `09 407 9035`, "40 Klinac Lane, Waipapa 0230" everywhere (via `hugo.toml` params → footer, contact page, schema). Legal name "Bay Glass Northland Ltd." kept in the copyright line only. **Your Google profile is still named "Bay Glass Kerikeri" — reconcile in `/gbp`.**

### [x] 17. Add an H1 to the homepage · it had none
Done 6 Sep. Added `<h1 class="sr-only">Glass, glazing and glazing repairs — Kerikeri & the Bay of Islands</h1>` at the top of `main`. Screen-reader / crawler only, so the cinematic hero is untouched. **This is the one new line of text — change the wording any time, or promote it to a visible heading via `/service-page`.**

### [ ] 18. Route: thin service pages + empty About → `/service-page`
7 service pages run 70–90 words of body; About is one sentence. Fix is real depth (process, price bands, real jobs, FAQ, per-page proof) — that's writing, so it leaves this command. Do NOT pad to a word count.
**Who:** you, via `/service-page` (×8)

### [ ] 19. Route: Google Business Profile → `/gbp`
Categories 5→10, services 13→50, service areas 0→20, products 0→20, write the description, set attributes, reconcile the "Bay Glass Kerikeri" profile name.
**Who:** you, via `/gbp`

### [ ] 20. Route: reviews cadence → `/review-generator`
57 reviews at 4.9 is strong. Keep recency and reply rate up — both are ranking factors.
**Who:** you, via `/review-generator`

### [ ] 21. You: connect Semrush units + export Search Console
Semrush MCP is out of API units (semrush.com/mcp-access) and no Search Console property was found. Both unlock the 5 "not measured" lines.
**Who:** you

### [ ] 22. You: run the live AI-surface test · month-1 baseline
Paste into ChatGPT, Perplexity and Google (AI Mode), record who gets named:
1. "best glazier in Kerikeri"
2. "who can retrofit double glazing in the Bay of Islands"
3. "emergency glass repair Kerikeri"
4. "glass splashback installer Northland"
5. "frameless shower installer Kerikeri"
6. "who is Bay Glass Kerikeri"
**Who:** you. Log results in the baseline table below.

---

## Copy report · 6 Sep 2026

**Body sentences altered: 0.** One new heading added (item 17, homepage H1, screen-reader only). Titles and meta descriptions are head tags, not body copy.

### Title tags — before → after
| Page | Before (chars) | After (chars) |
|---|---|---|
| Home | Bay Glass — More than just glass (31) | Glass & Glazing, Kerikeri \| Bay Glass, Bay of Islands (53) |
| Services | Everything we make, made to measure. · Bay Glass Northland (56) | Glass & Glazing Services in Kerikeri & Northland \| Bay Glass (58) |
| Glass & glazing | Glass & glazing · Bay Glass Northland (36) | Glass Repairs & Glazing in Kerikeri \| Bay Glass, Northland (57) |
| Retrofit double glazing | Retrofit double glazing · Bay Glass Northland (44) | Retrofit Double Glazing, Kerikeri & Northland \| Bay Glass (57) |
| Splashbacks | Coloured glass splashbacks · Bay Glass Northland (47) | Glass Splashbacks, Kerikeri & Bay of Islands \| Bay Glass (56) |
| Glass showers | Frameless glass showers · Bay Glass Northland (44) | Frameless Glass Showers, Kerikeri \| Bay Glass, Northland (56) |
| Balustrades & pool fences | Balustrades & pool fences · Bay Glass Northland (46) | Glass Balustrades & Pool Fences, Northland \| Bay Glass (54) |
| Security & insect screens | Security & insect screens · Bay Glass Northland (46) | Security & Insect Screens, Kerikeri \| Bay Glass, Northland (58) |
| Outdoor room & louvre roofs | Outdoor room & louvre roofs · Bay Glass Northland (48) | Louvre Roofs & Outdoor Rooms, Northland \| Bay Glass (51) |
| About | Craftsmanship you can see straight through. · Bay Glass Northland (63) | About Bay Glass — Glaziers in Waipapa, Kerikeri (49) |
| Contact | Talk to us · Bay Glass Northland (31) | Contact Bay Glass — Glaziers in Kerikeri, Northland (53) |

### New heading (item 17)
- Homepage: added `<h1 class="sr-only">Glass, glazing and glazing repairs — Kerikeri & the Bay of Islands</h1>`. Nothing removed or reworded.

## Undo · 6 Sep 2026

```
cd D:/sources/bayglass.co.nz && git checkout -- . && git clean -fd layouts static assets data && mv assets/images/cinema-originals/* static/images/cinema/ 2>/dev/null; rmdir assets/images/cinema-originals assets/images 2>/dev/null; git checkout -- static/images
```
(Or simply `git stash` / `git checkout .` before anything is committed — nothing has been committed.)

## AI-surface baseline · 6 Sep 2026

Not yet run — no access to ChatGPT / Perplexity / Google AI Mode from the audit environment. Prompts in item 22. First run establishes the baseline; re-run monthly and add a dated row.

| Date | Surface | Prompt | Cited? | Who was named |
|---|---|---|---|---|
| _pending_ | | | | |

## What this audit did NOT measure · 6 Sep 2026

- **Semrush Site Health** — skipped. Semrush MCP is out of API units. Close: top up at semrush.com/mcp-access.
- **Backlinks & authority** — skipped. Same cause, no free substitute.
- **Competitor benchmark (keywords, traffic, referring domains ×3 rivals)** — skipped. Semrush out of units; NZ local SERPs not reachable from here.
- **Lighthouse scores per template** — not measured. No local Chrome; Google PageSpeed API daily quota exhausted. Close: run PageSpeed Insights from your machine on the deployed site.
- **Core Web Vitals field data** — not measured. Comes from Search Console / CrUX. Close: export the 4 GSC reports.
- **Search Console: positions, indexed count, manual actions** — inferred, not measured. You chose the inferred run; no property found. Close: run `/gsc`, then export.
- **Live AI-surface test** — not run. No access from here. Close: item 22.
- **`site:` index count** — inconclusive. US-based web search doesn't return NZ results. Close: run `site:bayglass.co.nz` in Google yourself.
- **Keyword reality check (what you actually rank for)** — inferred from services vs pages. Close: Semrush units or GSC export.

## Waived · 6 Sep 2026

- **Platform limit** — true server-side 301s for the old WordPress URLs. GitHub Pages is a static host with no `.htaccess` / `_redirects` (evidence: `curl` shows only http→https is redirected). Workaround applied in item 14: Hugo `aliases` generate client-side redirect + `rel=canonical` stubs, which Google honours as 301-equivalent.
