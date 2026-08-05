// Shared content types. Content files under /content are authored against these.

import type { IconType } from "react-icons";

import type { LogoTone } from "@/components/site/LogoTile";

export type Screenshot = {
  /** Path under /public, e.g. "/screenshots/dormsy-home.png". */
  src: string;
  alt: string;
  caption?: string;
  /** Address shown in the browser-frame bar, e.g. "dormsy.app". Optional. */
  url?: string;
  /** Intrinsic pixel dimensions, so next/image reserves the right aspect ratio. */
  width: number;
  height: number;
};

/** Lifecycle badge shown on project cards and hero-icon tooltips. */
export type ProjectStatus = "Active" | "Maintained" | "Completed";

export type Project = {
  name: string;
  /** URL segment under /projects, e.g. "dormsy". */
  slug: string;
  /** One-sentence problem statement: what this solves, plainly. */
  tagline: string;
  stack: string[];
  status: ProjectStatus;
  /** Year shipped, shown top-right on the card. Omitted until confirmed. */
  year?: string;
  /** Short, true facts shown as chips (e.g. "Solo build"). Never invented metrics. */
  facts?: string[];
  liveUrl?: string;
  repoUrl?: string;
  /** Internal route to a long-form case study, if one exists. */
  caseStudyUrl?: string;
  /** Marks the flagship project rendered first in the featured grid. */
  featured?: boolean;
  /** Card cover art. Falls back to a gradient panel when absent. */
  screenshot?: Screenshot;
  /** Floating hero icon: 80x80 art, plus the halo colour behind it. */
  hero?: HeroIcon;
};

/** Halo colour for a floating hero icon. Each maps to a set of CSS classes. */
export type HeroAccent = "emerald" | "violet" | "blue";

/**
 * A project rendered as a drifting icon in the hero. `iconSrc` is optional —
 * without it the icon renders as a monogram tile in the same glow.
 */
export type HeroIcon = {
  iconSrc?: string;
  /** Two or three letters shown when `iconSrc` is absent. */
  monogram: string;
  accent: HeroAccent;
  /** Tailwind position utilities, e.g. "top-[14%] left-[7%]". */
  position: string;
  /** Places the tooltip under the icon instead of above it. */
  tooltipBelow?: boolean;
  /** Ambient drift, in px and seconds, kept prime-ish so loops never sync up. */
  drift: {
    y: number;
    yDuration: number;
    yRepeatDelay: number;
    x: number;
    xDuration: number;
    xRepeatDelay: number;
    delay: number;
  };
  /** How far the icon leads the cursor. Negative values trail it. */
  parallaxFactor: number;
};

export type Experience = {
  company: string;
  role: string;
  /** Human-readable date range, e.g. "Spring 2026". */
  period: string;
  location?: string;
  bullets: string[];
  /** Technologies named in the bullets above, shown as pills under them. */
  tags: string[];
  /** Company mark under /public/logos. Falls back to initials. */
  logo?: string;
  /** Set to "light" when the mark is dark-on-white. Defaults to dark. */
  logoTone?: LogoTone;
};

export type Education = {
  school: string;
  degree: string;
  period: string;
  location: string;
  /** One line of supporting detail, e.g. coursework or honours. */
  details: string;
  /** Campus photo under /public/schools. Falls back to a gradient panel. */
  image?: string;
  /** School mark under /public/logos. Falls back to initials. */
  logo?: string;
  /** Set to "light" when the mark is dark-on-white. Defaults to the surface tint. */
  logoTone?: LogoTone;
};

export type SkillGroup = {
  title: string;
  items: Skill[];
};

export type Skill = {
  name: string;
  Icon: IconType;
  /** Brand colour, applied to the glyph only. */
  color: string;
};
