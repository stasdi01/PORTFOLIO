import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/types";
import { StackList } from "./StackList";
import { ExternalLinkIcon, GithubIcon } from "./icons";

// Visual header for a card: the real screenshot when one exists, otherwise a
// tinted placeholder carrying the project's initial (never a broken image).
function CardMedia({ project }: { project: Project }) {
  const { name, status, screenshot } = project;
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-accent/5">
      {screenshot ? (
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover object-top"
        />
      ) : (
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-sage to-accent/15">
          <span className="text-5xl font-semibold text-sage-fg">
            {name.charAt(0)}
          </span>
        </div>
      )}
      {status ? (
        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-card/90 px-3 py-1 text-xs font-medium text-ink shadow-sm backdrop-blur">
          <span aria-hidden className="h-2 w-2 rounded-full bg-dot" />
          {status}
        </span>
      ) : null}
    </div>
  );
}

const buttonBase =
  "inline-flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-colors";
const filledButton = `${buttonBase} bg-accent text-sidebar-fg hover:bg-accent-strong`;
const outlineButton = `${buttonBase} border border-line bg-card text-ink hover:border-ink`;

// A project card matching the reference: media header, name, one-sentence
// problem statement, tech pills, and action buttons. The featured project uses
// a wide horizontal layout; others stack vertically in the grid.
export function ProjectCard({ project }: { project: Project }) {
  const { name, tagline, stack, liveUrl, repoUrl, caseStudyUrl, featured } =
    project;

  const hasLinks = Boolean(caseStudyUrl || liveUrl || repoUrl);

  const actions = hasLinks ? (
    <div className="mt-6 flex flex-wrap gap-3">
      {caseStudyUrl ? (
        <Link href={caseStudyUrl} className={filledButton}>
          Read case study
        </Link>
      ) : null}
      {repoUrl ? (
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={caseStudyUrl ? outlineButton : filledButton}
        >
          <GithubIcon className="h-4 w-4" />
          Code
        </a>
      ) : null}
      {liveUrl ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={caseStudyUrl || repoUrl ? outlineButton : filledButton}
        >
          <ExternalLinkIcon className="h-4 w-4" />
          Live
        </a>
      ) : null}
    </div>
  ) : (
    <p className="mt-6 text-sm text-subtle">Private project</p>
  );

  const body = (
    <div className="flex flex-1 flex-col p-6">
      <h3 className="font-sans text-2xl font-normal text-ink">{name}</h3>
      <p className="mt-3 flex-1 text-muted">{tagline}</p>
      <StackList stack={stack} variant="pills" className="mt-4" />
      {actions}
    </div>
  );

  if (featured) {
    return (
      <article className="grid overflow-hidden rounded-card border border-line bg-card shadow-md lg:grid-cols-2">
        <CardMedia project={project} />
        {body}
      </article>
    );
  }

  return (
    <article className="flex flex-col overflow-hidden rounded-card border border-line bg-card shadow-md">
      <CardMedia project={project} />
      {body}
    </article>
  );
}
