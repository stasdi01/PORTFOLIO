import type { Metadata } from "next";
import { resume } from "@content/resume";
import { site } from "@content/site";
import { BackLink } from "@/components/site/BackLink";
import { StackList } from "@/components/site/StackList";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Résumé for ${site.name}: ${site.positioning}`,
};

function SectionTitle({ id, children }: { id: string; children: string }) {
  return (
    <h2
      id={id}
      className="border-b border-foreground/10 pb-2 text-sm font-semibold tracking-widest uppercase"
    >
      <span className="text-gradient-cosmic">{children}</span>
    </h2>
  );
}

/** Left and right halves of an entry line, wrapping under each other on phones. */
function EntryLine({
  left,
  right,
  className,
}: {
  left: React.ReactNode;
  right: string;
  className: string;
}) {
  return (
    <div
      className={`flex flex-wrap items-baseline justify-between gap-x-4 ${className}`}
    >
      {left}
      <span className="whitespace-nowrap">{right}</span>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-relaxed text-foreground/70 marker:text-accent">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

/**
 * The résumé as real markup: selectable, searchable, and readable by screen
 * readers, laid out in the same order as the PDF. Content comes from
 * content/resume.ts, which mirrors public/resume.pdf, so the two stay in step.
 */
export default function ResumePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 pt-28 pb-20 sm:px-6 md:pt-32">
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

      <div className="cosmic-card mt-6 rounded-2xl p-6 sm:mt-12 sm:p-12">
        <header className="text-center">
          <h1 className="heading-gradient text-4xl font-bold md:text-5xl">
            {resume.name}
          </h1>
          <ul className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-foreground/60">
            {resume.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </header>

        <section className="mt-12" aria-labelledby="resume-education">
          <SectionTitle id="resume-education">Education</SectionTitle>
          {resume.education.map((item) => (
            <div key={item.school} className="mt-4">
              <EntryLine
                left={
                  <h3 className="font-bold text-foreground">{item.school}</h3>
                }
                right={item.location}
                className="text-foreground"
              />
              <EntryLine
                left={<p>{item.degree}</p>}
                right={item.period}
                className="text-sm text-foreground/60 italic"
              />
            </div>
          ))}
        </section>

        <section className="mt-12" aria-labelledby="resume-experience">
          <SectionTitle id="resume-experience">Experience</SectionTitle>
          {resume.experience.map((role) => (
            <article key={`${role.company}-${role.period}`} className="mt-6">
              <EntryLine
                left={
                  <h3 className="font-bold text-foreground">{role.title}</h3>
                }
                right={role.period}
                className="text-foreground"
              />
              <EntryLine
                left={<p>{role.company}</p>}
                right={role.location}
                className="text-sm text-foreground/60 italic"
              />
              <Bullets items={role.bullets} />
            </article>
          ))}
        </section>

        <section className="mt-12" aria-labelledby="resume-projects">
          <SectionTitle id="resume-projects">Projects</SectionTitle>
          {resume.projects.map((project) => (
            <article key={project.name} className="mt-6">
              <EntryLine
                left={
                  <h3 className="font-bold text-foreground">
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent transition-colors hover:text-accent-hover"
                      >
                        {project.name}
                      </a>
                    ) : (
                      project.name
                    )}
                  </h3>
                }
                right={project.period}
                className="text-foreground"
              />
              <StackList stack={project.stack} className="mt-1" />
              <Bullets items={project.bullets} />
            </article>
          ))}
        </section>

        <section className="mt-12" aria-labelledby="resume-skills">
          <SectionTitle id="resume-skills">Technical Skills</SectionTitle>
          <dl className="mt-4 space-y-2 text-sm leading-relaxed">
            {resume.skills.map((row) => (
              <div key={row.label}>
                <dt className="inline font-semibold text-foreground">
                  {row.label}:
                </dt>{" "}
                <dd className="inline text-foreground/70">
                  {row.items.join(", ")}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </main>
  );
}
