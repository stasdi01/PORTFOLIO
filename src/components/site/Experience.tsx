"use client";

import { motion } from "motion/react";
import { experience } from "@content/experience";
import { SectionHeading } from "./SectionHeading";
import { LogoTile } from "./LogoTile";
import { fadeUp, revealViewport, stagger } from "./motion";

/**
 * The roles, most recent first. Each card hangs off a rose left rule that
 * brightens on hover, which is what carries the sense of a timeline without
 * drawing an actual spine.
 */
export function Experience() {
  return (
    <section id="experience" className="px-4 py-14 sm:px-6 md:py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading>Experience</SectionHeading>

        <motion.div
          className="space-y-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          {experience.map((item) => (
            <motion.article
              key={`${item.company}-${item.period}`}
              className="experience-card rounded-r-xl px-4 py-4 sm:px-6 sm:py-5"
              variants={fadeUp}
            >
              <div className="mb-3 flex items-start gap-3">
                <LogoTile
                  src={item.logo}
                  name={item.company}
                  size={44}
                  className="h-11 w-11"
                />
                <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {item.role}
                    </h3>
                    <p className="text-sm text-foreground/60">
                      {item.company}
                      {item.location ? ` · ${item.location}` : ""}
                    </p>
                  </div>
                  <span className="text-gradient-cosmic text-sm font-medium whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
              </div>

              <ul className="mb-4 space-y-1.5">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet.slice(0, 40)}
                    className="flex items-start gap-2 text-sm leading-relaxed text-foreground/70"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.4em] h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="experience-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
