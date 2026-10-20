import { Fragment } from "react";

type DiagramNode = { title: string; sub: string };

// Inline architecture diagram built from CSS boxes (no image file).
// Flows vertically on mobile, horizontally on wider screens. Defaults to
// DormSy's request flow; other case studies pass their own nodes.
const dormsyNodes: DiagramNode[] = [
  { title: "Next.js", sub: "App Router frontend" },
  { title: "Express API", sub: "Node.js on Railway" },
  { title: "Supabase", sub: "Postgres · Auth · Storage" },
];

export function ArchitectureDiagram({
  nodes = dormsyNodes,
  label = "Request flow: the Next.js frontend calls a Node.js and Express API on Railway, which reads and writes Supabase for Postgres, auth, and storage.",
  caption = "The frontend and API deploy separately; Supabase backs data, auth, and uploaded photos.",
}: {
  nodes?: DiagramNode[];
  /** Screen-reader description of the whole flow. */
  label?: string;
  caption?: string;
}) {
  return (
    <figure className="my-12">
      <div
        role="img"
        aria-label={label}
        className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
      >
        {nodes.map((node, i) => (
          <Fragment key={node.title}>
            <div className="cosmic-card flex-1 rounded-xl p-6 text-center">
              <p className="text-lg font-bold text-foreground">{node.title}</p>
              <p className="mt-2 text-sm text-foreground/70">{node.sub}</p>
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
      <figcaption className="mt-4 text-sm text-foreground/40">{caption}</figcaption>
    </figure>
  );
}
