// Shared content types. Content files under /content are authored against these.

export type Screenshot = {
  /** Path under /public, e.g. "/screenshots/dormsy-home.png". */
  src: string;
  alt: string;
  caption?: string;
  /** Address shown in the browser-frame bar, e.g. "dormsy.app". Optional. */
  url?: string;
};

export type Project = {
  name: string;
  /** One-sentence problem statement — what this solves, plainly. */
  tagline: string;
  stack: string[];
  /** Short, true facts shown as chips (e.g. "Solo build"). Never invented metrics. */
  facts?: string[];
  liveUrl?: string;
  repoUrl?: string;
  /** Internal route to a long-form case study, if one exists. */
  caseStudyUrl?: string;
  /** Marks the flagship project rendered as a large featured card. */
  featured?: boolean;
  screenshot?: Screenshot;
};

export type Experience = {
  company: string;
  role: string;
  /** Human-readable date range, e.g. "Spring 2026". */
  period: string;
  location?: string;
  bullets: string[];
};
