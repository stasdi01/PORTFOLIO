import type { Metadata } from "next";
import { site } from "@content/site";
import { projects } from "@content/projects";
import { BackLink } from "@/components/site/BackLink";
import { ProjectList } from "@/components/site/ProjectList";

export const metadata: Metadata = {
  title: "Projects",
  description: `Everything ${site.name} has built end to end, most substantial first.`,
};

export default function ProjectsPage() {
  return (
    <main className="px-4 pt-28 pb-20 sm:px-6 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <BackLink href="/">Back home</BackLink>

        {/* `.section-heading` is inline-block, so it needs its own block line. */}
        <div className="mt-8">
          <h1 className="heading-gradient section-heading text-3xl font-bold sm:text-4xl md:text-5xl">
            All Projects
          </h1>
        </div>

        <p className="mt-8 max-w-2xl text-base text-foreground/60 md:text-lg">
          Everything I&rsquo;ve built end to end — one live in production, the
          rest along the way.
        </p>

        <ProjectList projects={projects} />
      </div>
    </main>
  );
}
