import { projects } from "@content/projects";
import { experience } from "@content/experience";
import { about } from "@content/about";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { ProjectCard } from "@/components/site/ProjectCard";
import { ExperienceItem } from "@/components/site/ExperienceItem";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-10 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>

      <Hero />

      <main>
        <Section id="projects" eyebrow="Selected work">
          <div className="flex flex-col gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Experience">
          <div className="flex flex-col gap-12">
            {experience.map((item) => (
              <ExperienceItem key={item.company} item={item} />
            ))}
          </div>
        </Section>

        <Section id="about" eyebrow="About">
          <div className="flex max-w-xl flex-col gap-4 text-muted">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact">
          <Contact />
        </Section>
      </main>

      <Footer />
    </>
  );
}
