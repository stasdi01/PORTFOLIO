"use client";

import { motion } from "motion/react";
import type { Project } from "@/lib/types";
import { ProjectCard } from "./ProjectCard";
import { revealViewport, stagger } from "./motion";

/** The full project grid, walked in one card at a time as it scrolls into view. */
export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <motion.div
      className="mt-10 grid gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
    >
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </motion.div>
  );
}
