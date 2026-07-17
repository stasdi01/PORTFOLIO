# Working rules

## Commits

After completing any feature, fix, or self-contained change, STOP and show me
the commit message. Do not run `git commit` — print the message and wait. I'll
approve, edit, or reject it.

One commit per logical change. If you built three things, that's three messages,
shown one at a time as each is finished — not batched at the end.

### Format

    type(scope): imperative summary, lowercase, no trailing period

    Body in plain prose, wrapped at 72 characters. Explain what changed and
    why, in terms of behavior. Reference the specific functions, hooks, files,
    or endpoints involved. Describe intent, not a diff summary — I can read
    the diff.

Types: `feat`, `fix`, `refactor`, `style`, `chore`, `docs`, `perf`, `test`
Scope: the area touched — `hero`, `case-study`, `design-system`, `mdx`, `seo`

Summary line: under ~72 characters, imperative mood ("add", not "added" or
"adds").

Body: 2–4 lines. Always present unless the change is genuinely trivial (a typo,
a version bump). No bullet lists. No "This commit...". No emoji. No co-author
trailers or tool attribution.

### Reference example

    feat(survey-panel): show reviewer name and form-open timestamp in OHIF conclusion form

    Fetch /api/v1/auth/me on panel mount to resolve the doctor's display name.
    Capture the panel open time via useState initialiser. Render both as a
    read-only block above the questions so the doctor sees their identity and
    the review timestamp before submitting.

Note the level of detail: named endpoint, named hook, and the last clause
explains _why_ the change exists. Match that.

## Code

- TypeScript strict. No `any` — if you reach for it, tell me why instead.
- Named exports over default exports.
- Server Components by default; `"use client"` only where interactivity requires it.
- No new dependencies without asking first. State what it's for and what it costs.
- Tailwind only — no CSS modules, no styled-components, no inline `style` objects.
- Use the spacing scale (4/8/16/24/48/96) and theme tokens. No arbitrary values
  like `mt-[13px]` or hardcoded hex outside the theme config.

## Content

- Never invent facts about me, metrics, dates, or achievements.
- Missing information becomes `TODO(dimi): <what to write, roughly how long>`.
- Never Lorem Ipsum. Structural placeholders in real English.

## Process

- Before multi-file work, show the plan and wait for approval.
- After changes, run `npx tsc --noEmit` and `npm run build`. Report failures;
  don't paper over them.
- Don't refactor code I didn't ask you to touch.
- If a request is ambiguous, ask. Don't guess and build the wrong thing.
