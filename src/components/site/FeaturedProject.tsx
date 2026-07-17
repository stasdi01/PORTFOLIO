import Link from "next/link";
import type { Project } from "@/lib/types";
import { ScreenshotSlot } from "./ScreenshotSlot";
import { StackList } from "./StackList";

// The flagship project, given weight: a large card with the product shot beside
// a fuller write-up, fact chips, stack, and links.
export function FeaturedProject({ project }: { project: Project }) {
  const { name, tagline, stack, facts, liveUrl, repoUrl, caseStudyUrl, screenshot } =
    project;

  return (
    <article className="rounded-lg border border-line bg-card p-6 transition duration-150 hover:-translate-y-0.5 hover:shadow-md">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow text-accent">Featured project</p>
          <h3 className="mt-4 text-title font-serif">{name}</h3>
          <p className="mt-4 text-muted">{tagline}</p>

          {facts && facts.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-2">
              {facts.map((fact) => (
                <li
                  key={fact}
                  className="rounded-full border border-line px-2 py-1 font-mono text-xs text-muted"
                >
                  {fact}
                </li>
              ))}
            </ul>
          ) : null}

          <StackList stack={stack} className="mt-6" />

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
                className="link-underline font-mono text-ink hover:text-accent-strong"
              >
                Live ↗
              </a>
            ) : null}
            {repoUrl ? (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-mono text-ink hover:text-accent-strong"
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
          />
        ) : null}
      </div>
    </article>
  );
}
