import { projects } from "@content/projects";
import { experience, education } from "@content/experience";
import { about } from "@content/about";
import { site, siteUrl } from "@content/site";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { FocusCards } from "@/components/site/FocusCards";
import { SkillsGrid } from "@/components/site/SkillsGrid";
import { ProjectCard } from "@/components/site/ProjectCard";
import { ExperienceItem } from "@/components/site/ExperienceItem";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: siteUrl,
  jobTitle: "Software Engineer",
  email: `mailto:${site.email}`,
  alumniOf: { "@type": "CollegeOrUniversity", name: "Luther College" },
  sameAs: [site.github, site.linkedin],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sidebar-fg"
      >
        Skip to content
      </a>

      <Hero />

      <main id="main">
        <Section
          id="about"
          title="About Me"
          subtitle="A little on where I come from and what I care about building."
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-4 text-muted">
              {about.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <FocusCards />
          </div>
        </Section>

        <Section
          id="skills"
          title="Skills & Technologies"
          subtitle="The languages, frameworks, and tools I reach for."
        >
          <SkillsGrid />
        </Section>

        <Section
          id="projects"
          title="Projects"
          subtitle="Things I've built end to end: one live in production, the rest along the way."
        >
          <div className="grid gap-8 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          title="Experience & Education"
          subtitle="Four software-engineering internships, most recent first."
        >
          <div className="relative flex flex-col gap-6">
            <span
              aria-hidden
              className="absolute bottom-2 left-0 top-2 w-px bg-line"
            />
            {experience.map((item) => (
              <ExperienceItem key={item.company} item={item} />
            ))}
          </div>

          <h3 className="mt-16 font-sans text-2xl font-normal text-heading">
            Education
          </h3>
          <div className="mt-6 flex flex-col gap-6">
            {education.map((item) => (
              <article
                key={item.school}
                className="rounded-card border border-line bg-card p-6 shadow-md transition-shadow duration-150 hover:shadow-xl"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h4 className="font-sans text-xl font-normal text-ink">
                      {item.degree}
                    </h4>
                    <p className="mt-1 text-muted">
                      {item.school} · {item.location}
                    </p>
                  </div>
                  <span className="rounded-lg bg-sage px-4 py-2 text-xs font-medium text-sage-fg">
                    {item.period}
                  </span>
                </div>
                <ul className="mt-4 flex flex-col gap-2">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-muted">
                      <span
                        aria-hidden
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60"
                      />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          title="Get in Touch"
          subtitle="Whether it's a role, a question, or something you're building, I read everything and reply."
        >
          <Contact />
        </Section>
      </main>

      <Footer />
    </>
  );
}
