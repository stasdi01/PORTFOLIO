import Link from "next/link";
import type { Project } from "@/lib/types";
import { ScreenshotSlot } from "./ScreenshotSlot";

// One project: optional screenshot, name, one-sentence problem statement,
// stack, and links. Subtle lift on hover — motion confirms, never performs.
export function ProjectCard({ project }: { project: Project }) {
  const { name, tagline, stack, liveUrl, repoUrl, caseStudyUrl, screenshot } =
    project;

  return (
    <article className="rounded-lg border border-line bg-card p-6 transition duration-150 hover:-translate-y-0.5 hover:shadow-md">
      {screenshot ? (
        <ScreenshotSlot
          label={screenshot.alt}
          caption={screenshot.caption}
          className="mb-6"
        />
      ) : null}

      <h3 className="text-title font-serif">{name}</h3>
      <p className="mt-4 text-muted">{tagline}</p>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
        {stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-line px-2 py-1 text-sm text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {caseStudyUrl ? (
          <Link
            href={caseStudyUrl}
            className="link-underline font-medium text-accent-strong"
          >
            Read the case study →
          </Link>
        ) : null}
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-ink hover:text-accent-strong"
          >
            Live ↗
          </a>
        ) : null}
        {repoUrl ? (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-ink hover:text-accent-strong"
          >
            Repo ↗
          </a>
        ) : null}
      </div>
    </article>
  );
}
