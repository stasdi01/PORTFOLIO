import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@content/site";
import { education } from "@content/education";
import { experience } from "@content/experience";
import { projects } from "@content/projects";
import { skills } from "@content/skills";
import { BackLink } from "@/components/site/BackLink";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Résumé for ${site.name}: ${site.positioning}`,
};

const contactLinks = [
  { label: site.email, href: `mailto:${site.email}` },
  { label: site.personalEmail, href: `mailto:${site.personalEmail}` },
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
];

function SectionTitle({ id, children }: { id: string; children: string }) {
  return (
    <h2
      id={id}
      className="text-gradient-cosmic font-mono text-xs font-semibold tracking-[0.18em] uppercase"
    >
      {children}
    </h2>
  );
}

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pt-28 pb-20 sm:px-6 md:pt-32">
      <div className="flex items-center justify-between gap-4">
        <BackLink href="/">Back home</BackLink>
        <a
          href={site.resumePdfPath}
          download
          className="btn-cosmic rounded-lg px-4 py-2 text-sm font-semibold"
        >
          <span>Download PDF ↓</span>
        </a>
      </div>

      <header className="mt-12">
        <h1 className="heading-gradient text-4xl font-bold md:text-5xl">
          {site.name}
        </h1>
        <p className="mt-5 text-lg text-foreground/70">{site.positioning}</p>
        <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/50">
          <span>{site.location}</span>
          {contactLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </p>
      </header>

      <section className="mt-16" aria-labelledby="resume-education">
        <SectionTitle id="resume-education">Education</SectionTitle>
        <div className="mt-6 flex flex-col gap-6">
          {education.map((item) => (
            <div key={item.school}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-lg font-bold text-foreground">
                  {item.school}
                </h3>
                <p className="text-sm text-foreground/50">
                  {item.location} · {item.period}
                </p>
              </div>
              <p className="mt-2 text-foreground/70">{item.degree}</p>
              <p className="mt-1 text-sm text-foreground/60">{item.details}</p>
            </div>
          ))}
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-lg font-bold text-foreground">
                The Kiski School
              </h3>
              <p className="text-sm text-foreground/50">
                Saltsburg, PA · May 2023
              </p>
            </div>
            <p className="mt-2 text-foreground/70">High School Diploma</p>
          </div>
        </div>
      </section>

      <section className="mt-16" aria-labelledby="resume-experience">
        <SectionTitle id="resume-experience">Experience</SectionTitle>
        <div className="mt-6 flex flex-col gap-10">
          {experience.map((item) => (
            <article key={`${item.company}-${item.period}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-lg font-bold text-foreground">
                  {item.role}
                  <span className="font-normal text-foreground/60">
                    {" "}
                    · {item.company}
                  </span>
                </h3>
                <p className="text-sm text-foreground/50">
                  {item.location ? `${item.location} · ` : ""}
                  {item.period}
                </p>
              </div>
              <ul className="mt-4 flex flex-col gap-2">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet.slice(0, 40)}
                    className="flex gap-2 text-sm leading-relaxed text-foreground/70"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.5em] h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16" aria-labelledby="resume-projects">
        <SectionTitle id="resume-projects">Projects</SectionTitle>
        <div className="mt-6 flex flex-col gap-6">
          {projects.map((project) => (
            <article key={project.slug}>
              <div className="flex flex-wrap items-baseline gap-x-4">
                <h3 className="text-lg font-bold text-foreground">
                  {project.name}
                </h3>
                {project.caseStudyUrl ? (
                  <Link
                    href={project.caseStudyUrl}
                    className="text-sm text-accent transition-colors hover:text-accent-hover"
                  >
                    Case study →
                  </Link>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-foreground/70">
                {project.tagline}
              </p>
              <p className="mt-2 font-mono text-xs text-foreground/50">
                {project.stack.join(" · ")}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16" aria-labelledby="resume-skills">
        <SectionTitle id="resume-skills">Technical Skills</SectionTitle>
        <dl className="mt-6 flex flex-col gap-4">
          {skills.map((group) => (
            <div
              key={group.title}
              className="grid gap-1 sm:grid-cols-[180px_1fr] sm:gap-6"
            >
              <dt className="font-mono text-sm text-foreground">
                {group.title}
              </dt>
              <dd className="text-sm text-foreground/70">
                {group.items.map((item) => item.name).join(", ")}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
