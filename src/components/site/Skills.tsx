"use client";

import { motion } from "motion/react";
import { skills } from "@content/skills";
import { SectionHeading } from "./SectionHeading";
import { fadeUp, revealViewport, stagger } from "./motion";

/**
 * Skills grouped by what the work is. Each pill carries the technology's own
 * brand colour on the glyph only — the label stays in the page's type colour so
 * the grid doesn't turn into confetti.
 */
export function Skills() {
  return (
    <section
      id="skills"
      className="cosmic-surface gradient-divider relative px-4 py-14 sm:px-6 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading>Skills &amp; Technologies</SectionHeading>

        <motion.div
          className="space-y-8 md:space-y-10"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          {skills.map((group) => (
            <motion.div key={group.title} variants={fadeUp}>
              <h3 className="mb-4 text-lg font-bold text-foreground/90 md:text-xl">
                {group.title}
              </h3>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
                {group.items.map(({ name, Icon, color }) => (
                  <div
                    key={`${group.title}-${name}`}
                    className="skill-pill flex items-center gap-2 overflow-hidden rounded-xl border border-[var(--border)] bg-background/50 p-3 text-sm font-semibold md:gap-3 md:p-5 md:text-base"
                  >
                    <Icon
                      size={22}
                      color={color}
                      aria-hidden
                      className="shrink-0"
                    />
                    {name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
