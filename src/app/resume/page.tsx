import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@content/site";
import { experience } from "@content/experience";
import { projects } from "@content/projects";
import { StackList } from "@/components/site/StackList";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Résumé for ${site.name}: ${site.positioning}`,
};

// Only show projects with real copy (skip the TODO placeholder cards).
const resumeProjects = projects.filter(
  (project) => !project.tagline.startsWith("TODO"),
);

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <div className="flex justify-end">
        <a
          href={site.resumePdfPath}
          className="link-underline font-mono text-sm text-accent-strong"
          download
        >
          Download PDF ↓
        </a>
      </div>

      <header className="mt-12">
        <h1 className="text-display font-serif">
          {site.name}
          <span className="text-accent">.</span>
        </h1>
        <p className="mt-6 text-subtitle text-muted">{site.positioning}</p>
        <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <span>{site.location}</span>
          <a href={`mailto:${site.email}`} className="link-underline hover:text-accent-strong">
            {site.email}
          </a>
          <a href={site.github} className="link-underline hover:text-accent-strong">
            GitHub
          </a>
          <a href={site.linkedin} className="link-underline hover:text-accent-strong">
            LinkedIn
          </a>
        </p>
      </header>

      <section className="mt-24" aria-labelledby="resume-education">
        <h2
          id="resume-education"
          className="eyebrow text-accent"
        >
          Education
        </h2>
        <div className="mt-6">
          <h3 className="text-subtitle font-serif">Luther College</h3>
          <p className="mt-2 text-muted">
            Computer Science · Decorah, Iowa · Expected 2027
          </p>
          {/* TODO(dimi): add degree type (B.A./B.S.), GPA, honors, or relevant
              coursework if you want them on the résumé (one short line). */}
        </div>
      </section>

      <section className="mt-24" aria-labelledby="resume-experience">
        <h2
          id="resume-experience"
          className="eyebrow text-accent"
        >
          Experience
        </h2>
        <div className="mt-6 flex flex-col gap-12">
          {experience.map((item) => (
            <article key={item.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-subtitle font-serif">
                  {item.role}
                  <span className="text-muted"> · {item.company}</span>
                </h3>
                <p className="text-sm text-subtle">{item.period}</p>
              </div>
              <ul className="mt-4 flex list-none flex-col gap-2 text-muted">
                {item.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2">
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-24" aria-labelledby="resume-projects">
        <h2
          id="resume-projects"
          className="eyebrow text-accent"
        >
          Projects
        </h2>
        <div className="mt-6 flex flex-col gap-6">
          {resumeProjects.map((project) => (
            <article key={project.name}>
              <div className="flex flex-wrap items-baseline gap-x-4">
                <h3 className="text-subtitle font-serif">{project.name}</h3>
                {project.caseStudyUrl ? (
                  <Link
                    href={project.caseStudyUrl}
                    className="link-underline text-sm text-accent-strong"
                  >
                    Case study →
                  </Link>
                ) : null}
              </div>
              <p className="mt-2 text-muted">{project.tagline}</p>
              <StackList stack={project.stack} className="mt-2" />

            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
