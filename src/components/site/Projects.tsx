"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { featuredProjects } from "@content/projects";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { fadeUp, revealViewport, stagger } from "./motion";

/** The featured grid, plus the way through to the full project list. */
export function Projects() {
  return (
    <section id="projects" className="px-4 py-14 sm:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading>Featured Projects</SectionHeading>

        <motion.div
          className="mb-10 grid gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-3 md:mb-12"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          <Link
            href="/projects"
            className="btn-outline inline-block rounded-xl px-8 py-3 font-semibold"
          >
            See All Projects →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
