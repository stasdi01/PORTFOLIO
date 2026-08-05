"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { education } from "@content/education";
import { SectionHeading } from "./SectionHeading";
import { LogoTile } from "./LogoTile";
import { fadeUp, revealViewport, stagger } from "./motion";

/**
 * Schools as cover-image cards, with the institution's mark tucked into the
 * bottom-left of the image and the dates set in the cosmic gradient.
 */
export function Education() {
  return (
    <section id="education" className="px-4 py-14 sm:px-6 md:py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading>Education</SectionHeading>

        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          {education.map((item) => (
            <motion.div
              key={item.school}
              className="cosmic-card card-hover flex h-full flex-col overflow-hidden rounded-xl"
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-foreground/10 to-foreground/5">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={`${item.school} campus`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <LogoTile
                    src={item.logo}
                    name={item.school}
                    size={48}
                    tone={item.logoTone ?? "surface"}
                    className="h-12 w-12 border-2 border-white/15 shadow-lg"
                  />
                </div>
              </div>

              <div className="flex flex-grow flex-col p-4 md:p-6">
                <div className="mb-1 flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-foreground md:text-xl">
                    {item.school}
                  </h3>
                  <span className="text-gradient-cosmic text-sm font-medium whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
                <p className="mb-1 text-sm text-foreground/70">{item.degree}</p>
                <p className="mb-3 text-xs text-foreground/50">
                  {item.location}
                </p>
                <p className="text-sm leading-relaxed text-foreground/70">
                  {item.details}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
