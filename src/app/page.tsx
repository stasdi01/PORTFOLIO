import { site } from "@content/site";

// Placeholder home. The full single-scroll page (hero, projects, experience,
// about, contact) lands in the next step; this exercises the design tokens.
export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <p className="text-eyebrow font-medium uppercase text-accent">
        Design system
      </p>
      <h1 className="mt-4 text-display font-serif">{site.shortName}</h1>
      <p className="mt-6 max-w-prose text-muted">{site.positioning}</p>
    </main>
  );
}
