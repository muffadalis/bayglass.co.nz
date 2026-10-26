# Audit: bayglass.co.nz · 6 Sep 2026 · re-run 25 Oct 2026 · 11 pages · owner mode

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
**25 Oct:** reconciled by you. Site name changed to "Bay Glass Kerikeri" (`hugo.toml` `businessName`, homepage title, schema), now matching the Google profile.

### [x] 17. Add an H1 to the homepage · it had none
Done 6 Sep. Added `<h1 class="sr-only">Glass, glazing and glazing repairs — Kerikeri & the Bay of Islands</h1>` at the top of `main`. Screen-reader / crawler only, so the cinematic hero is untouched. **This is the one new line of text — change the wording any time, or promote it to a visible heading via `/service-page`.**

### [ ] 18. Route: thin service pages + empty About → `/service-page`
7 service pages run 70–90 words of body; About is one sentence. Fix is real depth (process, price bands, real jobs, FAQ, per-page proof) — that's writing, so it leaves this command. Do NOT pad to a word count.
**Who:** you, via `/service-page` (×8)
**26 Oct, in progress (retrofit first):** plan approved; new optional page sections built (answer, steps, tables, recent jobs, FAQ + FAQ schema); retrofit draft now has answer, steps, suitability table, "what affects the price" (no prices), 7-question FAQ + FAQ schema, from your facts (26 Oct). ~55 → ~550 words. Recent jobs: none supplied, section hidden. Lab mobile: 100 / 100 / 79 / 100. Awaiting your approval; not published.
**27 Oct, showers:** draft built from your facts (all 4 types, repair/replacement, NZ standards, any finish, measure ~1 week, price factors only, 1-year workmanship warranty, 7-question FAQ + schema). ~60 → ~600 words. Existing 6 photos kept in the slideshow. Published 27 Oct (57a7605).
**27 Oct, splashbacks:** draft from your facts (mostly kitchens; plain / any colour / custom artwork / own photo with cost order; cut-outs; over existing tiles OK; 9-question FAQ + schema). ~60 → ~700 words. Lab mobile 100 / 100 / 79 / 100 (2 runs). Published 27 Oct (7b63370).
**27 Oct, balustrades & pool fences:** draft from existing page facts + your general answers (timing, price factors, warranty); council consent left out per you. 7-question FAQ + schema, ~60 → ~650 words. Lab mobile 99 / 100 / 79 / 100 (2 runs). Aluminium in any colour (you). Approved as is 27 Oct; published.
**27 Oct, glass & glazing:** draft from your facts (commercial/shopfront, board-ups, walk-in cut to size, mirrors + splashback glass for trades) + general answers. Steps for a broken window, "What we do" table, price factors (no prices), 9-question FAQ + schema; no after-hours wording. ~60 → ~720 words. Lab mobile 99-100 / 100 / 79 / 100. Published 27 Oct.
**27 Oct, security & insect screens:** draft from your facts (doors and windows, retractable insect screens, repairs) + existing page facts + general answers. Screen types table, price factors (no prices), 8-question FAQ + schema. Published 27 Oct. Page photo is still the Waipapa shopfront, not a screen.
**27 Oct, louvre roof:** draft from your facts (Bask only; sensors/remotes available; glass + louvre walls) + Bask product pages + Bask louvre roof FAQ (rewritten; consent and snow left out). Roof table, add-ons table, price factors (no prices), 15-question FAQ + schema. Label "Outdoor living" → "louvre roof" (menu, footer, cards). Lab mobile 99 / 100 / 79 / 100. Published 27 Oct.
**27 Oct, NEW pergola roofs page** (`/services/pergola-roof/`, your request): Bask VelaSun, text rewritten from Bask, 4 Bask photos (credited; 3 computer renders removed at your request 27 Oct: polycarbonate patio, polycarbonate deck, dusk LED), 9-question FAQ + schema; in menu, footer, services page, homepage cards + slideshow, sitemap, llms.txt. Lab mobile 100 / 100 / 79 / 100. Published 27 Oct; photo use confirmed by you.

### [x] 19. Google Business Profile · categories, services, description, service areas
Done 25 Oct by you. Categories 5 → 10, "Glass Splash Back" duplicate removed, services added from the list (no town names), 670-character description written, service areas added (up to 20 towns, Kerikeri to Whangārei). Products and attributes moved to item 38. (Profile name: done 25 Oct.)

### [ ] 20. Route: reviews cadence → `/review-generator`
57 reviews at 4.9 is strong. Keep recency and reply rate up — both are ranking factors.
**Who:** you, via `/review-generator`

### [x] 21. You: export Search Console
Done 25 Oct. Property found (already verified via DNS), 4 reports supplied. Semrush dropped: cost too high.

### [ ] 22. You: run the live AI-surface test · month-1 baseline
Paste into ChatGPT, Perplexity and Google (AI Mode), record who gets named:
1. "best glazier in Kerikeri"
2. "who can retrofit double glazing in the Bay of Islands"
3. "emergency glass repair Kerikeri"
4. "glass splashback installer Northland"
5. "frameless shower installer Kerikeri"
6. "who is Bay Glass Kerikeri"
**Who:** you. Log results in the baseline table below.

### [x] 23. Redirect the old website addresses · 57 showing "not found"
Done 25 Oct. Search Console listed 56 "Not found (404)"; the old site archive gave 57. 54 now redirect via `aliases` (showers → showers, balustrades → balustrades, galleries → home, etc.). `/user`, `/user/login`, `/user/password` left as 404 on purpose (old admin pages). `/category/bayglass/` had 190 search views at ~position 3.

### [x] 24. Phone-sized images
Done 25 Oct. 640px and 1080px WebP copies made for all 28 photos (`-640w` / `-1080w`); `partials/picture.html` now lists them in `srcset`. Hero background slides use the 1080px copy on screens up to 1080px.

### [x] 25. Hidden hero slides load after the page
Done 25 Oct. The 6 hidden slideshow backgrounds now get their image after page load (`data-bg-class` in `hero-carousel.html` + `site.js`). Homepage mobile LCP 12.3 s → 3.2 s (lab).

### [x] 26. Fonts stop blocking the page
Done 25 Oct. Font stylesheet loads non-blocking; Archivo + Cormorant Garamond only requested on the homepage (the only page using them).

### [x] 27. Fix 2 meta description lengths
Done 25 Oct. Glass & glazing 121 → 159 chars; Security & insect screens 162 → 155 chars.

### [x] 28. Services page heading levels
Done 25 Oct. Card titles on `/services/` are now H2 (were H3 straight under the H1). Homepage cards unchanged. Tags only, no words changed.

### [x] 29. Star rating label + carousel dot tap size
Done 25 Oct. `role="img"` on the star rating; carousel dots now sit in a 24px tap area, so they're spaced slightly wider.

### [x] 30. Tell Google the 404s are fixed
Done 25 Oct by you. Validate fix started on "Not found (404)" (56 pages). Expect 1-4 weeks; 3 old login pages will stay failed on purpose.

### [ ] 37. Optional: export the 404 list · confirms nothing is missed
Search Console → Indexing → Pages → "Not found (404)" → **Export** → Download CSV → drop it in `google-data/`. Checks Google's 56 against the 57 redirected/left from the old site archive.
**Who:** you · **Time:** 1 min · **Changes:** none to the site.

### [x] 31. Fix the website link and check the postcode on your Google profile
Done 25 Oct by you. Website link now `https://bayglass.co.nz/` (was http://www.). Postcode confirmed 0230, matching the site.

### [x] 32. Windscreen repair page · not needed
Closed 26 Oct: you don't do windscreens. Remove "Windshield Repair Service" (category) and "Windscreen Repairs" (service) from the Google profile if still there. Old `/windscreens` address keeps redirecting to Glass & glazing.

### [x] 33. Brand blue text contrast
Done 26 Oct on your yes. New `--color-primary-text` = marine-600 `#1a7f97` (4.64:1 on white, was 3.14:1) for eyebrow text only (`.eyebrow`, `.eyebrow-xs`, bento card eyebrow). Buttons, gradients and backgrounds keep `#219ebc`. Dark mode uses marine-400 `#4fb3d1` for the same text. Also review-card date text `text-heading/55` → `/70` (3.49:1 → 5.45:1), which was the next contrast fail. Accessibility now 100 on Home, Services, Glass & glazing, About, Contact (lab, mobile, 26 Oct).

### [x] 34. Microsoft Clarity cookies · keeping
Decided 26 Oct: keep Clarity. Best Practices stays at 79; waived as an owner decision (see Waived · 26 Oct).

### [x] 35. Your title rewrite + name change + 24-hour claim removed
Done 25 Oct by you. 9 titles rewritten to "… Northland & Bay of Islands | Bay Glass Kerikeri" (table in "Title tags · 25 Oct 2026" below). "24-hour emergency callouts" removed from the banner (`hugo.toml`) and `llms.txt`; none left anywhere on the site.

### [x] 36. Tidy the new titles · typo + length
Done 25 Oct. "Bay of Island" typo fixed (6 titles), "louvers" → "louvre roofs" on the homepage (lowercase "louvre roof" everywhere, per you), all 9 titles now 54-60 chars; About lengthened 49 → 57 and now uses "Bay Glass Kerikeri". Your wording kept: service first, then one area (Northland or Bay of Islands), then "| Bay Glass Kerikeri". 9 title tags only, no body copy.

### [x] 38. Google profile · products + attributes
Done 25-26 Oct by you. Products added (from `gbp-products.md` / the 7 service pages), attributes set.

### [ ] 39. Close the review gap with Wilkinson Glass · 57 vs 81
ChatGPT (25 Oct) puts Wilkinson Glass Bay of Islands at 5.0 from **81** reviews against your 4.9 from **57**. Reviews are the #1 local ranking factor. Ask every happy customer for a Google review (a short link + QR card at job sign-off) and reply to every review.
**Who:** you · **Time:** ongoing · **Changes:** none to the site.

### [x] 40. Point the site at the current Facebook page
Done 25 Oct. `hugo.toml` `params.social.facebook` → `https://www.facebook.com/profile.php?id=61578672983400` (schema sameAs on every page). The old `facebook.com/bayglass.kerikeri/` page is inaccessible, per you.

### [x] 41. Fix Facebook on your Google profile + deal with the old page
Done 26 Oct by you. Google profile now links the current Facebook page; old `bayglass.kerikeri` account recovered for deletion (check it isn't a Page admin first; 30-day wait). Current page username: **bayglassnz**. Reviews link: `https://www.facebook.com/bayglassnz/reviews`.

### [x] 42. Short Facebook link on the website
Done 26 Oct. `hugo.toml` `social.facebook` → `https://www.facebook.com/bayglassnz` (schema sameAs on every page).

### [x] 43. Remove the after-hours claim
Done 26 Oct on your instruction. Glass & glazing page: removed "A smashed window doesn't wait for business hours — and neither do we." Rest of the paragraph unchanged. No other 24-hour / after-hours / emergency wording left on the site.

### [x] 44. Retrofit double glazing is aluminium only
Done 26 Oct on your correction. Removed "or timber" from the retrofit page (meta description, summary, first paragraph), `llms.txt`, `gbp-products.md` (product 7 now aluminium sliding doors) and the page plan in `project_specs.md`.

### [x] 45. Remove timber from the Google profile
Done 26 Oct by you: description replaced (aluminium only), timber service/product removed.

### [x] 46. Service page slideshows load hidden photos after the page
Done 27 Oct. Same fix as the homepage hero (item 25), in `service-carousel.html`: hidden slides get a 1080px copy on phones and load after the page. Lab mobile, before → after: showers 94 → 100, balustrades 98 → 100, louvre roofs 96 → 98, splashbacks 99 → 100.

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
| 25 Oct 2026 | ChatGPT | "best glazier in Kerikeri" | **Yes, #1** | 1. Bay Glass Kerikeri (4.9, 57 reviews - details accurate, source Birdeye +1, not bayglass.co.nz). 2. Wilkinson Glass Bay of Islands (5.0, 81 reviews, 3 General Gates Ave, Kerikeri). 3. Waipapa Glass (5.0, 6 reviews, 399D Puketotara Rd). 4. Glass & Balustrade Solutions (no rating shown, "17+ years"). Verdict: Bay Glass + Wilkinson "strongest starting points". |

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

---

## Copy report · 25 Oct 2026

**Body sentences altered: 0.** Changed: 2 meta descriptions (head tags), 54 redirect lines in front matter, 7 card heading tags on `/services/` (H3 → H2, same words).

| Page | Meta before (chars) | Meta after (chars) |
|---|---|---|
| Glass & glazing | Glass repairs and new glazing in Kerikeri and the Bay of Islands: broken windows, cut-to-size glass, mirrors. Free quote. (121) | Glass repairs and new glazing in Kerikeri and the Bay of Islands — broken windows replaced, glass cut to size, mirrors and safety glass. Call for a free quote. (159) |
| Security & insect screens | …— custom-made, fitted to your existing doors and windows… (162) | …— custom-made for your existing doors and windows… (155) |

## Title tags · 25 Oct 2026 (your edit)

Rendered titles from the build. ⚠ = over 60 characters, ✎ = "Bay of Island" typo.

| Page | Before (6 Sep, chars) | Your edit (25 Oct, chars) | Final, item 36 (chars) |
|---|---|---|---|
| Home | Glass & Glazing, Kerikeri \| Bay Glass, Bay of Islands (53) | Glass, Showers, Outdoor louvers, Northland & Bay of Islands \| Bay Glass Kerikeri (80) ⚠ | Glass, Showers & louvre roofs Northland \| Bay Glass Kerikeri (60) |
| Services | Glass & Glazing Services in Kerikeri & Northland \| Bay Glass (58) | Glass & Glazing Services Northland & Bay of Island \| Bay Glass Kerikeri (71) ⚠ ✎ | Glass & Glazing Services, Northland \| Bay Glass Kerikeri (56) |
| Glass & glazing | Glass Repairs & Glazing in Kerikeri \| Bay Glass, Northland (57) | Glass Repairs & Glazing in Northland & Bay of Island \| Bay Glass Kerikeri (73) ⚠ ✎ | Glass Repairs & Glazing, Bay of Islands \| Bay Glass Kerikeri (60) |
| Retrofit double glazing | Retrofit Double Glazing, Kerikeri & Northland \| Bay Glass (57) | Retrofit Double Glazing Northland & Bay of Island \| Bay Glass Kerikeri (70) ⚠ ✎ | Retrofit Double Glazing, Northland \| Bay Glass Kerikeri (55) |
| Splashbacks | Glass Splashbacks, Kerikeri & Bay of Islands \| Bay Glass (56) | Glass Splashbacks Northland & Bay of Islands \| Bay Glass Kerikeri (65) ⚠ | Glass Splashbacks, Bay of Islands \| Bay Glass Kerikeri (54) |
| Glass showers | Frameless Glass Showers, Kerikeri \| Bay Glass, Northland (56) | Frameless Glass Showers, Northland & Bay of Island \| Bay Glass Kerikeri (71) ⚠ ✎ | Frameless Glass Showers, Bay of Islands \| Bay Glass Kerikeri (60) |
| Balustrades & pool fences | Glass Balustrades & Pool Fences, Northland \| Bay Glass (54) | Glass Balustrades & Pool Fences, Northland & Bay of Island \| Bay Glass Kerikeri (79) ⚠ ✎ | Balustrades & Pool Fences, Northland \| Bay Glass Kerikeri (57) |
| Security & insect screens | Security & Insect Screens, Kerikeri \| Bay Glass, Northland (58) | Security & Insect Screens, Northland & Bay of Islands \| Bay Glass Kerikeri (74) ⚠ | Security & Insect Screens, Northland \| Bay Glass Kerikeri (57) |
| Outdoor room & louvre roofs | Louvre Roofs & Outdoor Rooms, Northland \| Bay Glass (51) | Louvre Roofs & Outdoor Rooms, Northland & Bay of Island \| Bay Glass Kerikeri (76) ⚠ ✎ | louvre roofs & Outdoor Rooms, Northland \| Bay Glass Kerikeri (60) |
| About | About Bay Glass — Glaziers in Waipapa, Kerikeri (49) | unchanged (49) | About Bay Glass Kerikeri — Glaziers in Waipapa, Northland (57) |
| Contact | Contact Bay Glass — Glaziers in Kerikeri, Northland (53) | unchanged (53) | unchanged (53) |

On-page check "Title tag 50-60 characters": your edit took it to 1 of 11; after item 36 (About lengthened to 57 on your request) it is 11 of 11.

## Undo · 25 Oct 2026

```
cd D:/sources/bayglass.co.nz && git checkout -- content layouts assets audit-report.md audit-report.html && rm -f static/images/cinema/*-640w.webp static/images/cinema/*-1080w.webp
```
⚠ Until committed, this also throws away your own 25 Oct title edits in `content/` and `layouts/partials/head.html`. Commit those first if you only want to undo mine.

## Search Console baseline · 25 Oct 2026 (last 6 months)

| Clicks | Views | Avg position | Indexed | Not indexed | Manual actions | Field speed |
|---|---|---|---|---|---|---|
| 182 | 2,692 | 8.7 | 11 (= sitemap) | 96 (56 not found, 35 crawled-not-indexed, 3 redirect, 2 duplicate) | none | not enough data |

Brand searches ("bay glass kerikeri", "bay glass", "bayglass"…) = ~77% of clicks with a known query. Close to page 1 but not there yet: "double glazing northland" (pos 18.6, 49 views), "windscreen repair kerikeri" (10.6), "aluminium joinery kerikeri" (15.3).

## Lighthouse · 25 Oct 2026 (lab data, mobile, 2 runs each, local copy of the new build)

| Page | Before (perf/a11y/bp/seo) | After |
|---|---|---|
| Home `/` | 65 / 87 / 79 / 100 | 93 / 96 / 79 / 100 |
| Service `/services/retrofit-double-glazing/` | 69 / 96 / 79 / 100 | 100 / 96 / 79 / 100 |
| Services `/services/` | 70 / 93 / 79 / 100 | 100 / 95 / 79 / 100 |
| Contact `/contact/` | 87 / 95 / 79 / 100 (live) | 100 / 95 / 79 / 100 |
| About `/about/` | - | 100 / 100 / 79 / 100 |

Remaining: accessibility = brand blue (item 33); best practices = Clarity cookies (item 34); homepage perf 93 = main image shares the phone connection with the Google tag script.

## What this audit did NOT measure · 25 Oct 2026

- **Site health crawl, backlinks, competitor keywords/traffic:** skipped. No paid SEO tool (Semrush dropped, cost).
- **Map pack + competitor reviews:** skipped. NZ Google Maps not reachable from here. Close: search "glazier Kerikeri" on Maps, note the top 3.
- **Exact 404 list:** inferred from the old site archive (57 vs Search Console's 56). Close: item 30 export.
- **Field speed:** Search Console has too few visits yet.
- **Live AI test:** not run. Close: item 22.
- **Business Profile products:** not pasted.

## Waived · 25 Oct 2026

- **Platform limit:** server-side 301s. Still GitHub Pages (static host, no redirect config); Hugo aliases used instead (evidence: `curl -I` on an old URL returns 200 + meta refresh + canonical).

## Copy report · 26 Oct 2026

**Body sentences altered: 1, at your request.** Glass & glazing page, first paragraph:
- Before: "A smashed window doesn't wait for business hours — and neither do we. Whether it's a cracked pane at home, a broken shopfront, or a full glazing package for a new build, our team measures, cuts and installs it on site."
- After: "Whether it's a cracked pane at home, a broken shopfront, or a full glazing package for a new build, our team measures, cuts and installs it on site."

## Waived · 26 Oct 2026

- **Owner decision:** Microsoft Clarity's 8 third-party cookies (Best Practices 79). Evidence: your "34 - yes" (keep), 26 Oct.

**26 Oct, second change (your correction):** retrofit page, first paragraph: "slots into your existing aluminium or timber joinery" → "slots into your existing aluminium joinery". Body sentences altered today: 2, both at your request.

## Waived · 26 Oct 2026 (2)

- **Owner decision:** no prices anywhere on the site or profile products. Checks that ask for pricing tables / explicit prices (GEO 3.6, 6.2 pricing part) are waived. Evidence: "never put prices on the site", 26 Oct.

**26 Oct, retrofit page, your wording (approved "yes"):**
- Bullet: "Fits into your existing window and door frames — no reframing" → "Fits into your existing aluminium frames — usually no reframing"
- First paragraph: "…a warmer, drier, healthier home without replacing a single frame." → "…a warmer, drier, healthier home, usually without replacing a single frame."
Reason: reframing usually isn't needed but depends on the age of the joinery (owner, 26 Oct). Timing per owner: measure usually within a week; install time depends on size, complexity and distance.

**27 Oct, showers page, your wording (fact correction: coating is Diamond Fusion, optional, extra cost):**
- Bullet: "Toughened safety glass with easy-clean coating options" → "Toughened safety glass, with optional Diamond Fusion easy-clean coating"
- Second paragraph: "Toughened safety glass and easy-clean coatings keep it looking sharp…" → "Toughened safety glass and an optional Diamond Fusion easy-clean coating keep it looking sharp…"
- Meta: "…toughened safety glass, easy-clean coatings. Free quote." → "…toughened glass, optional easy-clean coating. Free quote." (157 chars)
- 1-year workmanship warranty covers all work (owner, 27 Oct): added to showers + retrofit FAQs and llms.txt.

Brand spelling per supplier (diamondfusion.co.nz): **Diamond Fusion**.

**27 Oct, your job photos added:** louvre roof page +4 (open roof over deck, courtyard deck, entry with screen, sliding screens closed), pergola page +3 (glass roof over spa pool = new main photo, 2 aerials). Web copies with descriptive names, 640/1080px sizes; originals left in place (5 Facebook-named files + 1 exact duplicate) pending your OK to remove. Lab mobile: pergola 99, louvre roof 99, home 93 (3 runs).

**27 Oct, pergola photos:** you deleted 2 blurry Bask photos (louvre screens, backyard); references removed. Added 9 high-res photos from the ArchiPro VelaSun (Juralco) listing: 7 new + sharper copies of the spa pool and restaurant deck photos. Pergola slideshow now 11 photos; credit line names Bask and Juralco. Lab mobile: pergola 98-100, home 93.

**27 Oct, approved by you:** glass & glazing, security & insect screens, louvre roof, pergola roofs published. Photo use (Bask / Juralco) confirmed. 8 unused original photo files deleted on your OK. Title "Louvre roofs & outdoor room" kept with capital L (your choice). Same-day wording on glass & glazing left as is.
