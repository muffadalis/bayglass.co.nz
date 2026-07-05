# Project Overview


Build a lightweight web application. This guide is instructions to get Claude Code to behave the way I want.
Each feature does one thing, the code is easy to follow, and the app is easy to run locally and deploy.


---


# Design
You are a senior UI designer and frontend developer. Build premium, modern, elegant interfaces. Use subtle animations, proper spacing, and visual hierarchy. No emoji icons. No generic gradients.
Claude Code to behave the way I want. Each feature does one thing, the code is easy to follow, and the app is easy to run locally and deploy.




# Development Rules


**Rule 1: Always read first**
Before taking any action, always read:
- `CLAUDE.md`
- `project_specs.md`


If either file doesn't exist, create it before doing anything else.


**Rule 2: Define before you build**
Before writing any code:
1. Create or update `project_specs.md` and define:
  - What the app does and who uses it
  - Tech stack (framework, database, auth, hosting)
  - Pages and user flows (public vs authenticated)
  - Data models and where data is stored
  - Third-party services being used (Stripe, Supabase, etc.)
  - What "done" looks like for this task
2. Show the file
3. Wait for approval


No code should be written before this file is approved.


**Rule 3: Look before you create**
Always look at existing files before creating new ones. Don't start building until you understand what's being asked. If anything is unclear, ask before starting.


**Rule 4: Test before you respond**
After making any code changes, run the relevant tests or start the dev server to check for errors before responding. Never say "done" if the code is untested.


**Core Rule**
Do exactly what is asked. Nothing more, nothing less. If something is unclear, ask before starting.


---


# How to Respond


Always explain like you're talking to a 15 year old with no coding background.


For every response, include:
- **What I just did** — plain English, no jargon
- **What you need to do** — step by step, assume they've never seen this before
- **Why** — one sentence explaining what it does or why it matters
- **Next step** — one clear action
- **Errors** — if something went wrong, explain it simply and say exactly how to fix it


When a task involves external tools or technical elements that a non-coder wouldn’t know (Supabase, Vercel, Stripe, localhost:3000, etc.):
- Walk through exactly where to find what they need (e.g. "go to your Supabase dashboard → Settings → API")
- Describe what each key or setting does in one plain sentence
- If there's SQL to run, explain what it's doing before they run it
- If there's a bucket, folder, or config to create manually, explain what it is and why it exists
- Be as concise as possible. Do not ramble. Less is more


---


# Tech Stack


- **Framework:** Hugo (static site generator). This is a marketing/brochure site — no
  database, no auth, no server-rendered app framework needed.
- **Templating:** Hugo's Go templates (`html/template`) + partials
- **Styling:** Tailwind CSS, compiled via the Tailwind CLI/PostCSS and fed into Hugo
  through Hugo Pipes; design tokens (colours, type, spacing) map onto Tailwind's
  `theme.extend` config so classes stay consistent with the Bayglass design system
- **Deployment:** GitHub Pages (via a GitHub Actions workflow that builds the Hugo
  site and Tailwind CSS, then publishes to the `gh-pages`/Pages branch)
- **Key libraries:** `tailwindcss` (dev dependency only, for the CSS build — no
  client-side JS framework)


---


# Running the Project


1. Install Hugo (extended version): https://gohugo.io/installation/
2. Install Node dependencies (for Tailwind): `npm install`
3. Run: `hugo server -D`
4. Open your browser at `http://localhost:1313`


---


# File Structure


- `/content/` → The actual pages, written as Markdown with front matter (one file per page)
- `/content/services/` → One file per service (Glass & Glazing, Splashbacks, etc.)
- `/layouts/` → The Go templates that turn content into HTML
- `/layouts/_default/` → Fallback templates (single page, list page, base page)
- `/layouts/partials/` → Reusable chunks of template (navbar, footer, service card, button)
- `/layouts/services/` → Template specifically for service pages
- `/assets/css/` → Tailwind entry stylesheet + design tokens, processed by Hugo Pipes
- `/static/` → Images and other files copied to the site as-is
- `/data/` → Structured content (e.g. the list of services) Hugo can loop over
- `/.github/workflows/` → The GitHub Actions script that builds and deploys to Pages
- `hugo.toml` → Site configuration (title, base URL, menus)
- `tailwind.config.js` → Tailwind theme config (Bayglass colours, fonts, spacing)
- `project_specs.md` → The blueprint Claude reads before doing anything


**Code organisation rules:**
- Keep templates thin — one partial per reusable component (button, card, navbar, footer)
- Page-specific content lives in front matter or `/data/`, not hardcoded in templates
- Don't create new top-level folders without asking first


---


# How the App Is Built


Think of the app like a series of requests and responses:


1. A user visits a page or clicks a button — that's the **input**
2. A route or server action receives the request and calls the right service
3. The service does **one job** and returns a result
4. The route sends the result back to the user — that's the **output**
5. If something fails, show a clear error — don't silently break


---


# How to Write Code


- Write simple, readable code — clarity matters more than cleverness
- Make one change at a time
- Don't change code that isn't related to the current task
- Don't over-engineer — build exactly what's needed, nothing more
- Add a `console.log` at the start and end of each API route so it's easy to follow what's happening


If a big structural change is needed, explain why before making it.


---


# Secrets & Safety


- This is a static site with no database or auth — there's no `service_role` key or
  user data to protect, but still never put API keys directly in code
- Ask before deleting or renaming any important files


---


# Testing


Before marking any task as done:
- Run `hugo` (a full build) and fix any template or build errors
- Start `hugo server -D` and check for errors in the terminal output
- Manually verify the page works end-to-end in the browser
- Check that existing pages weren't broken by the change (nav links, footer links)

When building a new page:
- Test that it renders correctly on desktop and mobile widths
- Test every link on the page actually goes somewhere (no dead `#` links left in)

Never say "done" if:
- The build is failing
- There are errors in the Hugo server output
- The feature hasn't been tested in the browser


---


# Scope


Only build what is described in `project_specs.md`.
If anything is unclear, ask before starting.





