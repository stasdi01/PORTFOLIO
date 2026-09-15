import type { Metadata } from "next";
import localFont from "next/font/local";
import { resume } from "@content/resume";
import { site } from "@content/site";
import { BackLink } from "@/components/site/BackLink";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Résumé for ${site.name}: ${site.positioning}`,
};

// Latin Modern Roman, the OpenType release of LaTeX's Computer Modern that the
// PDF is set in, so the sheet reads as the same document. Sourced from CTAN
// (GUST Font License), subset to Latin and punctuation, and renamed as the
// licence asks of modified files. Declared here so only /resume loads it.
const latinModern = localFont({
  src: [
    { path: "./fonts/latin-modern-roman-regular-subset.woff", weight: "400", style: "normal" },
    { path: "./fonts/latin-modern-roman-italic-subset.woff", weight: "400", style: "italic" },
    { path: "./fonts/latin-modern-roman-bold-subset.woff", weight: "700", style: "normal" },
  ],
  fallback: ["Georgia", "serif"],
});

// The separate caps cut, for LaTeX's \scshape section headings.
const latinModernCaps = localFont({
  src: "./fonts/latin-modern-roman-caps-subset.woff",
  weight: "400",
  fallback: ["Georgia", "serif"],
});

function SectionTitle({ id, children }: { id: string; children: string }) {
  return (
    <h2
      id={id}
      className={`${latinModernCaps.className} mt-4 border-b border-ink text-lg leading-snug`}
    >
      {children}
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
    <ul className="mt-1 list-disc pl-6 text-sm leading-snug">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

const linkClassName = "text-ink-link hover:underline";

/**
 * The résumé as a sheet of paper: real, selectable markup laid out like the
 * LaTeX PDF it mirrors, down to the typeface and link colour. Content comes
 * from content/resume.ts, which is transcribed from public/resume.pdf.
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

      {/* 17/22 is US Letter (8.5 × 11). It's a minimum, so content never clips. */}
      <div
        className={`${latinModern.className} mt-6 rounded-sm bg-paper px-4 py-6 text-ink shadow-2xl selection:bg-ink-link/20 selection:text-ink sm:mt-12 sm:px-12 sm:py-12 md:aspect-17/22`}
      >
        <header className="text-center">
          <h1 className="text-4xl leading-tight font-bold">{resume.name}</h1>
          <ul className="flex flex-wrap justify-center text-sm">
            {resume.links.map((link, index) => (
              <li key={link.href}>
                {index > 0 ? (
                  <span aria-hidden className="px-1">
                    |
                  </span>
                ) : null}
                <a
                  href={link.href}
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={linkClassName}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </header>

        <section aria-labelledby="resume-education">
          <SectionTitle id="resume-education">Education</SectionTitle>
          {resume.education.map((item) => (
            <div key={item.school} className="mt-1 sm:pl-4">
              <EntryLine
                left={<h3 className="font-bold">{item.school}</h3>}
                right={item.location}
                className="text-base"
              />
              <EntryLine
                left={<p>{item.degree}</p>}
                right={item.period}
                className="text-sm italic"
              />
            </div>
          ))}
        </section>

        <section aria-labelledby="resume-experience">
          <SectionTitle id="resume-experience">Experience</SectionTitle>
          {resume.experience.map((role) => (
            <article
              key={`${role.company}-${role.period}`}
              className="mt-2 sm:pl-4"
            >
              <EntryLine
                left={<h3 className="font-bold">{role.title}</h3>}
                right={role.period}
                className="text-base"
              />
              <EntryLine
                left={<p>{role.company}</p>}
                right={role.location}
                className="text-sm italic"
              />
              <Bullets items={role.bullets} />
            </article>
          ))}
        </section>

        <section aria-labelledby="resume-projects">
          <SectionTitle id="resume-projects">Projects</SectionTitle>
          {resume.projects.map((project) => (
            <article key={project.name} className="mt-2 sm:pl-4">
              <EntryLine
                left={
                  <div>
                    <h3 className="inline font-bold">
                      {project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClassName}
                        >
                          {project.name}
                        </a>
                      ) : (
                        project.name
                      )}
                    </h3>
                    {" | "}
                    <span className="text-sm italic">
                      {project.stack.join(", ")}
                    </span>
                  </div>
                }
                right={project.period}
                className="text-base"
              />
              <Bullets items={project.bullets} />
            </article>
          ))}
        </section>

        <section aria-labelledby="resume-skills">
          <SectionTitle id="resume-skills">Technical Skills</SectionTitle>
          <dl className="mt-1 text-sm leading-relaxed sm:pl-4">
            {resume.skills.map((row) => (
              <div key={row.label}>
                <dt className="inline font-bold">{row.label}</dt>
                <dd className="inline">: {row.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </main>
  );
}
