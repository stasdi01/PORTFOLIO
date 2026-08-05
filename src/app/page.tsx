import { site, siteUrl } from "@content/site";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Education } from "@/components/site/Education";
import { Experience } from "@/components/site/Experience";
import { Projects } from "@/components/site/Projects";
import { Skills } from "@/components/site/Skills";
import { Contact } from "@/components/site/Contact";

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
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-6 focus:left-6 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
