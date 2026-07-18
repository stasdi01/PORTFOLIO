import Link from "next/link";
import type { Project } from "@/lib/types";
import { ScreenshotSlot } from "./ScreenshotSlot";

// The flagship project as a dark anchor card: a live-status pill, the product
// shot beside a fuller write-up, fact chips, stack, and links. Uses ink and the
// single accent only — no new colors.
export function FeaturedProject({ project }: { project: Project }) {
  const { name, tagline, stack, facts, status, liveUrl, repoUrl, caseStudyUrl, screenshot } =
    project;

  return (
    <article className="rounded-lg bg-ink p-6 text-bg transition duration-150 hover:-translate-y-0.5 hover:shadow-md">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          {status ? (
            <p className="inline-flex items-center gap-2 rounded-full border border-bg/20 px-2 py-1 font-mono text-xs uppercase tracking-wide text-bg/80">
              <span aria-hidden className="h-2 w-2 rounded-full bg-accent" />
              {status}
            </p>
          ) : (
            <p className="eyebrow text-accent">Featured project</p>
          )}

          <h3 className="mt-4 text-title font-serif text-bg">{name}</h3>
          <p className="mt-4 text-bg/70">{tagline}</p>

          {facts && facts.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-2">
              {facts.map((fact) => (
                <li
                  key={fact}
                  className="rounded-full border border-bg/20 px-2 py-1 font-mono text-xs text-bg/80"
                >
                  {fact}
                </li>
              ))}
            </ul>
          ) : null}

          <p className="mt-6 font-mono text-sm text-bg/50">{stack.join(" · ")}</p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {caseStudyUrl ? (
              <Link
                href={caseStudyUrl}
                className="link-underline font-medium text-accent"
              >
                Read the case study →
              </Link>
            ) : null}
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-mono text-bg hover:text-accent"
              >
                Live ↗
              </a>
            ) : null}
            {repoUrl ? (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-mono text-bg hover:text-accent"
              >
                Repo ↗
              </a>
            ) : null}
          </div>
        </div>

        {screenshot ? (
          <ScreenshotSlot
            label={screenshot.alt}
            caption={screenshot.caption}
            url={screenshot.url}
            onDark
          />
        ) : null}
      </div>
    </article>
  );
}
