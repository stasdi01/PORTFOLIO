"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/lib/types";
import { fadeUpCard } from "./motion";

type Props = {
  project: Project;
  className?: string;
};

/**
 * A project as a cover-image card. The cover zooms and dims under a "View
 * Project" label on hover; the whole card lifts on a spring. Projects without
 * cover art fall back to the same gradient panel the image would sit on.
 */
export function ProjectCard({ project, className = "" }: Props) {
  const href = project.caseStudyUrl ?? project.liveUrl ?? project.repoUrl;

  return (
    <motion.article
      id={project.slug}
      className={`cosmic-card card-hover flex h-full flex-col overflow-hidden rounded-xl ${className}`}
      variants={fadeUpCard}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      <CardCover project={project} href={href} />

      <div className="flex flex-grow flex-col p-4 md:p-6">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="text-xl font-bold md:text-2xl">{project.name}</h3>
          {project.year ? (
            <span className="text-gradient-cosmic ml-2 text-sm font-medium whitespace-nowrap">
              {project.year}
            </span>
          ) : null}
        </div>

        <p className="mb-4 text-foreground/60">{project.tagline}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-foreground/5 px-3 py-1 text-sm text-foreground/70"
            >
              {tech}
            </span>
          ))}
        </div>

        {href ? (
          <div className="mt-auto">
            <CardLink href={href} internal={Boolean(project.caseStudyUrl)}>
              <span>
                {project.caseStudyUrl ? "Learn More →" : "View Repo →"}
              </span>
            </CardLink>
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

// The cover is its own link so the image can carry a hover treatment
// independent of the card's spring lift.
function CardCover({ project, href }: { project: Project; href?: string }) {
  const className =
    "group/img relative block aspect-video w-full overflow-hidden bg-gradient-to-br from-foreground/10 to-foreground/5";

  const cover = (
    <>
      {project.screenshot ? (
        <Image
          src={project.screenshot.src}
          alt={project.screenshot.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover/img:scale-105"
        />
      ) : (
        <div className="h-full w-full bg-gradient-to-br from-foreground/10 to-foreground/5 transition-transform duration-300 group-hover/img:scale-105" />
      )}
      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover/img:bg-black/30">
        <span className="font-semibold text-white opacity-0 transition-opacity duration-300 group-hover/img:opacity-100">
          View Project
        </span>
      </div>
    </>
  );

  if (!href) return <div className={className}>{cover}</div>;

  return project.caseStudyUrl ? (
    <Link href={href} className={`${className} cursor-pointer`}>
      {cover}
    </Link>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} cursor-pointer`}
    >
      {cover}
    </a>
  );
}

function CardLink({
  href,
  internal,
  children,
}: {
  href: string;
  internal: boolean;
  children: React.ReactNode;
}) {
  const className =
    "btn-cosmic inline-block w-full rounded-lg px-4 py-2 text-center font-semibold";

  return internal ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
