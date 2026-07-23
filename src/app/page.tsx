import Image from "next/image";
import { projects } from "@content/projects";
import { experience } from "@content/experience";
import { about } from "@content/about";
import { site, siteUrl } from "@content/site";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { FeaturedProject } from "@/components/site/FeaturedProject";
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
        href="#projects"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-10 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>

      <Hero />

      <main>
        <Section id="projects" eyebrow="Selected work">
          <div className="flex flex-col gap-6">
            {featuredProject ? (
              <FeaturedProject project={featuredProject} />
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

        <Section id="experience" eyebrow="Experience">
          <div className="flex flex-col divide-y divide-line border-t border-line">
            {experience.map((item) => (
              <div key={item.company} className="py-12">
                <ExperienceItem item={item} />
              </div>
            ))}
          </div>
        </Section>

        <Section id="about" eyebrow="About">
          <div className="grid gap-12 sm:grid-cols-[1fr_260px] sm:items-start">
            <div className="flex flex-col gap-4 text-muted">
              {about.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <Image
              src="/dimi.jpg"
              alt={site.name}
              width={260}
              height={347}
              className="rounded-lg border border-line"
            />
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
