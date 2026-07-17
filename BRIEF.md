# Portfolio Site — Build Brief

Read this entire file before writing any code.

## About me

- Dimi — junior Computer Science student at Luther College (Decorah, Iowa), Class of 2027
- From Serbia, studying in the US
- Backend-leaning developer; interested in healthtech, medical software, and product thinking
- Software Developer Intern, Mayo Clinic Digital Health Division (Spring 2026)
- Backend Developer Intern, SkyIT / GBCS Group (current)

Applying for internships and new-grad roles soon. This site's job: make a
recruiter who already saw my resume think "this person actually builds things."

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Deploy target: Vercel
- `next/font` for fonts, no FOUT
- No CMS, no database. Content lives in typed TS/MDX files under `/content` so
  it's easy to edit without touching components.
- Dependencies: minimal. Framer Motion only if genuinely needed.

## Design direction

Commit to ONE strong idea and keep everything else quiet. Do not build a
generic template.

- **Type carries the design.** A characterful heading face (e.g. Instrument
  Serif or Fraunces) paired with a plain body face (Inter / Inter Tight).
  Large size contrast — headings ~56px desktop, body 16–17px.
- **Color.** Off-white background (#faf9f7 range), near-black text, ONE
  saturated accent used sparingly (links, hover states, small marks). Avoid
  default blue — deep green, burnt orange, or electric violet.
- **Spacing.** Consistent scale only: 4/8/16/24/48/96. No arbitrary values.
  Generous whitespace, more than feels comfortable.
- **Motion confirms actions, never performs.** 150ms transitions, subtle lift
  on cards, underline animations. NO scroll-jacking, NO fade-in-on-scroll
  sequences, NO custom cursors, NO parallax.
- **Performance.** Under 1s load, zero layout shift, mobile-first and flawless
  on mobile.
- Light mode only unless dark mode is trivially clean.
- **Accessible.** Semantic HTML, real focus states, keyboard navigable, WCAG AA
  contrast.

## Structure

### 1. Home — single scroll page

- **Hero** — name, one-line positioning ("CS junior at Luther College. Backend
  developer. Building healthtech."), links to GitHub, LinkedIn, email, resume PDF.
- **Projects** — max 3 cards. Each: one-sentence problem statement, stack,
  screenshot slot, live link + repo link. DormSy card gets a
  "Read the case study →" link.
- **Experience** — Mayo Clinic and SkyIT. 2–3 bullets each, focused on what I
  built and its impact. Leave bullet text as clearly-marked placeholders.
- **About** — short. Serbia → Iowa, what I want to work on.
- **Contact** — plain email link. NO contact form.

Do NOT include: skill bars or percentage ratings, an exhaustive tech list, a
blog, testimonials.

### 2. `/projects/dormsy` — case study

The centerpiece. Long-form, structured, readable. Build as MDX with custom
components so I can extend it.

Tone throughout: technical, honest, first person, no marketing voice. Include
what didn't work — that's what makes it credible.

Screenshot slots throughout with captions.

---

#### Section 1 — Overview

DormSy is a campus marketplace web app for Luther College students. Built with
Next.js, Supabase, Node.js/Express, and Tailwind CSS.

One paragraph, plus a quick-facts sidebar: role, timeline, stack, links.

---

#### Section 2 — The idea (real content, use this)

Write as first-person narrative prose, ~150–200 words, from these facts:

At the end of the year, senior friends were moving out and trying to sell their
stuff — furniture, mini-fridges, desk lamps, things they'd bought new and used
for a year or two. There was no way to reach the people who actually wanted it.
Facebook groups were dead, group chats were noise, and the timing window was
days. Most of it ended up thrown out. Expensive, usable things, in a dumpster.

I'm a junior. Next year that's me. And if it happened to my friends, it's
happening to every graduating class, every May, at every college — while
first-years arrive in August buying the same things new.

The problem isn't that students don't want to buy or sell. It's that supply and
demand at a college are separated by four months and no channel connects them.

Tone: plain, first person, no startup language. State the observation, then the
inference. Do not embellish or add facts.

---

#### Section 3 — The problem

Expand on the timing gap and the absence of a channel. Keep it short and
grounded — no market-size language.

TODO(dimi): add any specifics about how Luther students currently handle this
(Facebook groups, GroupMe, word of mouth) — 2–3 sentences.

---

#### Section 4 — Architecture & technical decisions

Stack: Next.js (App Router) frontend, Supabase (Postgres + auth + storage),
Node.js/Express backend on Railway, Tailwind CSS.

Include a simple architecture diagram component — inline SVG or clean CSS
boxes, not an image file.

Include a "decisions and tradeoffs" section formatted as:
decision → why → what I'd reconsider.

TODO(dimi): fill in 3–4 real decisions. Candidates: why Supabase over rolling
auth, why a separate Express backend alongside Next.js, why Railway.

---

#### Section 5 — Problems I hit (real content, use this)

Render each as a problem / diagnosis / fix component. First person, plain
technical prose. Do not add metrics or facts beyond what is written here.

**Entry 1 — iPhone photos wouldn't upload (HEIC across browsers)**

_Problem:_ Students on iPhones couldn't post listings. iOS saves camera photos
as `.heic`, which browsers can't display or upload directly — and phone photos
were the primary way listings get created, so this broke the main path into the
product. Roughly eight commits over two days iterating on it.

_Diagnosis:_ No single approach worked everywhere. Backend conversion with
`sharp` failed in the deploy environment. `heic2any` (WASM) works on
Chrome/Firefox but needed CSP changes (`worker-src blob:`, `unsafe-eval`) to
run its web workers — and it fell over on Safari/iOS, the exact devices
generating the files.

_Fix:_ A two-strategy client-side converter (`convertHeic.ts`). Try `heic2any`
first for Chrome/Firefox, fall back to a `<canvas>` re-encode, which works on
Safari/iOS because iOS renders HEIC natively. Both paths output JPEG before
upload, with a clean error only if both fail.

**Entry 2 — Email verification broke across devices**

_Problem:_ Users signed up on a laptop, opened the confirmation email on their
phone, and verification failed.

_Diagnosis:_ The callback only handled Supabase's PKCE `code` flow, which
requires the `code_verifier` stored in the originating browser. Open the link
anywhere else and there's no verifier, so it fails. Signing up on one device
and checking email on another is normal behavior, not an edge case.

_Fix:_ The callback (`auth/callback/route.ts`) now handles both flows — a
`token_hash` + `type` flow via `verifyOtp`, which needs no verifier and works
cross-device, alongside the existing PKCE path, sharing one `handleSession`
helper.

_Aside within this entry:_ session cookies also weren't being detected, because
Supabase SSR splits large auth tokens into chunks (`sb-...-auth-token.0`, `.1`)
and the proxy guard matched with `endsWith("-auth-token")` instead of
`includes()`.

**Entry 3 — Rate limiting was silently ineffective behind the proxy**

_Problem:_ The Express rate limiter wasn't limiting per user. It looked
configured correctly and appeared to work.

_Diagnosis:_ Behind Railway's reverse proxy every request carried the proxy's
IP, so the limiter keyed every user into one shared bucket. Nothing errored —
the protection just wasn't there.

_Fix:_ `app.set("trust proxy", 1)` in `server.js` so Express reads the real
client IP from `X-Forwarded-For`.

Note in the prose that this was a one-line fix. The point isn't the size of the
change — it's that the failure was silent, and finding it meant understanding
how proxies and `X-Forwarded-For` interact.

**Framing:** Two of these three bugs failed silently — nothing errored, the
behavior was just wrong. Draw that thread out somewhere in the case study (a
short pull quote, or a sentence in the intro). It's the most interesting thing
about this set: the hard bugs weren't the ones that crashed.

TODO(dimi): link each entry to the real file or commit on GitHub if the repo is
public.

---

#### Section 6 — Going to market (real content, use this)

I did outreach to campus offices: the Center for Sustainable Communities,
International Admissions, Student Senate, and the student newspaper. The
sustainability coordinator had already created an account before we met.

Growth was constrained by two things: thin listings (an empty marketplace gives
nobody a reason to return) and passive marketing (announcements don't create
users).

Honest reflection section on what I learned: marketplaces need seeded supply and
in-person distribution, not announcements. Write this without spin — the
lessons are the value here.

---

#### Section 7 — What's next

TODO(dimi): fill in future direction. Structure it as a short list with a
sentence each.

---

### 3. `/resume`

Serve the PDF, or a clean HTML version plus download link. Keep it simple.

## Content handling

Anywhere you don't have real information from me, insert a clearly marked
placeholder: `{/* TODO(dimi): ... */}` with a note on what to write and roughly
how long.

NEVER invent facts about me, metrics, dates, or achievements. Never use Lorem
Ipsum — write plausible structural placeholders in real English.

## Deliverables

1. Full working Next.js project, `npm run dev` clean, no console errors
2. All content separated into `/content` so I can edit without touching components
3. SEO: metadata, OG image, sitemap, favicon
4. README: how to run, where to edit content, and a checklist of every TODO
   placeholder I need to fill
5. Deploy notes for Vercel + custom domain

## How to work

- Show me the file structure and design decisions (font, palette, spacing)
  BEFORE writing all the code. Wait for my approval.
- Then build in order: design system → home → case study → polish.
- Run type checks and the build at the end.
