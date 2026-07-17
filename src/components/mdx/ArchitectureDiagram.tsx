import { Fragment } from "react";

// Inline architecture diagram built from CSS boxes (no image file).
// Flows vertically on mobile, horizontally on wider screens.
const nodes = [
  { title: "Next.js", sub: "App Router frontend" },
  { title: "Express API", sub: "Node.js on Railway" },
  { title: "Supabase", sub: "Postgres · Auth · Storage" },
];

export function ArchitectureDiagram() {
  return (
    <figure className="my-12">
      <div
        role="img"
        aria-label="Request flow: the Next.js frontend calls a Node.js and Express API on Railway, which reads and writes Supabase for Postgres, auth, and storage."
        className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
      >
        {nodes.map((node, i) => (
          <Fragment key={node.title}>
            <div className="flex-1 rounded-lg border border-line bg-card p-6 text-center">
              <p className="font-serif text-subtitle text-ink">{node.title}</p>
              <p className="mt-2 text-sm text-muted">{node.sub}</p>
            </div>
            {i < nodes.length - 1 ? (
              <span aria-hidden className="self-center text-accent">
                <span className="sm:hidden">↓</span>
                <span className="hidden sm:inline">→</span>
              </span>
            ) : null}
          </Fragment>
        ))}
      </div>
      <figcaption className="mt-4 text-sm text-subtle">
        The frontend and API deploy separately; Supabase backs data, auth, and
        uploaded photos.
      </figcaption>
    </figure>
  );
}
