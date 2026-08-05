"use client";

import { motion } from "motion/react";
import { fadeUp, revealViewport } from "./motion";

// Every section opens the same way: one gradient-filled heading with a short
// rose-to-violet rule centred beneath it, rising into place as it scrolls in.
export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      className="heading-gradient section-heading mb-8 text-3xl font-bold sm:text-4xl md:mb-12 md:text-5xl"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
    >
      {children}
    </motion.h2>
  );
}
