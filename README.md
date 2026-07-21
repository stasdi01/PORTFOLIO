# Portfolio · Dimitrije Stašić

A fast, type-and-content-driven personal site. Single-scroll home, a long-form
DormSy case study, and a résumé page. Built with Next.js (App Router), Tailwind
CSS v4, and MDX. No CMS, no database; all copy lives in typed files under
`/content`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # production build
npm run start      # serve the production build
npx tsc --noEmit   # type check
```

Requires Node 20+ (Node 24 LTS recommended, matching Vercel).

## Where to edit content

All copy is separated from components. You can change everything below without
touching JSX.

| File | What it controls |
| --- | --- |
| `content/site.ts` | Name, positioning line, location, email, GitHub/LinkedIn URLs, résumé paths. Feeds the hero, footer, résumé, metadata, and OG image. |
| `content/projects.ts` | The project cards (max 3). DormSy is real; two placeholder entries are there to fill or delete. |
| `content/experience.ts` | Roles at Mayo Clinic and SkyIT. Dates are real; bullets are placeholders. |
| `content/about.ts` | The short About paragraphs. |
| `content/dormsy.mdx` | The full DormSy case study. Prose is Markdown; the boxed sections are React components imported at the top of the file. |

**Screenshots:** drop image files into `public/screenshots/`, then point
`ScreenshotSlot` at them (or swap it for `next/image`). Until then, slots render
as labelled placeholder frames.

**Résumé PDF:** replace `public/resume.pdf` (currently a placeholder) with your
real file. The `/resume` page also renders a clean HTML version from the same
content files.

## Design system

- **Type:** Fraunces (display) + Inter (body), self-hosted via `next/font`.
- **Color:** off-white background, near-black ink, one burnt-orange accent.
- **Tokens:** defined once in `src/app/globals.css` under `@theme` (Tailwind v4
  is CSS-first, so there is no `tailwind.config`). Spacing sticks to the
  4 / 8 / 16 / 24 / 48 / 96 scale.
- Custom case-study components live in `src/components/mdx/`; site components in
  `src/components/site/`.

## TODO checklist (fill these before publishing)

Search the codebase for `TODO(dimi)` to jump to each. Grouped by file:

**`content/site.ts`**
- [x] Set your real GitHub URL.
- [x] Set your real LinkedIn URL.

**`content/experience.ts`**
- [x] Real roles and bullets (Mayo Clinic, Jaka Lounge, WEBX).
- [ ] SkyIT (Backend Developer Intern): add the start date and two real bullets.

**`content/projects.ts`**
- [x] Real projects: DormSy (featured), Impostor League, Clinic Management.
- [ ] Add DormSy's live custom-domain URL and repo URL (or remove them).
- [ ] Optional: add a live/demo and repo link for Clinic Management Web App.
- [ ] Add a DormSy screenshot to `public/screenshots/`.

**`content/about.ts`**
- [x] Personal detail added (basketball at Luther College).

**`content/dormsy.mdx`**
- [x] QuickFacts timeline set (March – April 2026).
- [ ] QuickFacts: add the live/repo links.
- [ ] The problem: 2–3 sentences on how Luther students currently handle move-out.
- [ ] Architecture: fill in the three decision "why" and "reconsider" cells.
- [ ] Problems: link each bug to a real file/commit if the repo is public
      (add a `source={{ href, label }}` prop to `ProblemFix`).
- [ ] What's next: replace the three placeholder list items.
- [ ] Add a case-study screenshot.

**`content/skills.ts`** and **`src/app/resume/page.tsx`**
- [x] Education (B.A. Computer Science, 2023–2027) and Technical Skills from the résumé.

**Assets**
- [ ] Replace `public/resume.pdf` with your real résumé.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, **Add New → Project** and import the repo. Framework preset
   (Next.js) and build settings are detected automatically.
3. Add an environment variable so metadata, the sitemap, robots, and the OG
   image use absolute production URLs:

   ```
   NEXT_PUBLIC_SITE_URL = https://your-domain.com
   ```

   (Without it, these fall back to `http://localhost:3000`.)
4. Deploy.

### Custom domain

1. Vercel project → **Settings → Domains → Add**, enter your domain.
2. At your registrar, add the DNS records Vercel shows: an `A` record for the
   apex (`@`) and/or a `CNAME` for `www` pointing to `cname.vercel-dns.com`.
3. Wait for DNS to verify; Vercel issues the SSL certificate automatically.
4. Update `NEXT_PUBLIC_SITE_URL` to the custom domain and redeploy so metadata
   URLs match.
