"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { about } from "@content/about";
import { SectionHeading } from "./SectionHeading";
import { fadeUp, revealViewport, stagger } from "./motion";

/**
 * Prose on the left, portrait on the right. Sits on a tinted band with hairline
 * gradient rules top and bottom, so it separates from the sections either side.
 */
export function About() {
  return (
    <section
      id="about"
      className="cosmic-surface gradient-divider relative px-4 py-14 sm:px-6 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading>About Me</SectionHeading>

        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <motion.div
            className="flex-1 space-y-5 text-base leading-relaxed text-foreground/80 md:space-y-6 md:text-lg"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
          >
            {about.paragraphs.map((paragraph) => (
              <motion.p key={paragraph.slice(0, 40)} variants={fadeUp}>
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            className="w-full flex-1 md:w-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
          >
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-xl border border-white/10 shadow-[0_0_40px_rgba(225,29,72,0.08),0_16px_48px_rgba(0,0,0,0.5)]">
              <Image
                src={about.portrait.src}
                alt={about.portrait.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
