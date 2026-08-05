import type { Variants } from "motion/react";

// Shared entrance choreography. Every section on the page uses the same pair:
// a container that walks its children in, and a child that rises into place.
// Keeping them here means the rhythm stays identical section to section.

/** A block rising 28px into place. The only entrance used on the page. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/** Same, from slightly further down — for cards, which are larger objects. */
export const fadeUpCard: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/** Parent that releases its children 100ms apart. */
export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

/**
 * Reveal once, starting 80px before the block reaches the viewport edge, so
 * the animation has finished by the time the reader's eye arrives.
 */
export const revealViewport = { once: true, margin: "-80px" } as const;
