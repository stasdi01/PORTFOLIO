import { projects } from "@content/projects";
import { experience } from "@content/experience";
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

const featuredProject = projects.find((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

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
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
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
          subtitle="Things I've built end to end — one live in production, the rest along the way."
        >
          <div className="flex flex-col gap-6">
            {featuredProject ? (
              <ProjectCard project={featuredProject} />
            ) : null}
            {otherProjects.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2">
                {otherProjects.map((project) => (
                  <ProjectCard key={project.name} project={project} />
                ))}
              </div>
            ) : null}
          </div>
        </Section>

        <Section
          id="experience"
          title="Experience"
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
