import type { Project } from "@/lib/types";

// Real projects. DormSy is the flagship (first card + the only case study).
//
// TODO(dimi): drop 80x80 transparent PNGs under /public/icons and point each
// `hero.iconSrc` at one to replace the monogram tiles floating in the hero.
export const projects: Project[] = [
  {
    name: "DormSy",
    slug: "dormsy",
    year: "2026",
    tagline:
      "Graduating students throw out usable dorm furniture every May while first-years buy the same things new in August. DormSy is a campus marketplace that connects the two.",
    stack: [
      "Next.js",
      "TypeScript",
      "Express",
      "Supabase",
      "PostgreSQL",
      "Railway",
    ],
    status: "Active",
    // Short, true facts drawn from the résumé and case study. Not metrics.
    facts: ["Solo build", "Realtime in-app chat", "Cross-device auth"],
    featured: true,
    caseStudyUrl: "/projects/dormsy",
    liveUrl: "https://getdormsy.com",
    repoUrl: "https://github.com/stasdi01/dormsy-web",
    screenshot: {
      src: "/screenshots/dormsy-home.png",
      alt: "DormSy landing page: a marketplace just for your campus, live at Luther College",
      url: "getdormsy.com",
      width: 2000,
      height: 1097,
    },
    hero: {
      iconSrc: "/icons/dormsy.png",
      monogram: "DS",
      accent: "emerald",
      position: "top-[14%] left-[7%]",
      tooltipBelow: true,
      parallaxFactor: -18,
      drift: {
        y: -10,
        yDuration: 6.2,
        yRepeatDelay: 0.9,
        x: 9,
        xDuration: 7.4,
        xRepeatDelay: 0.4,
        delay: 0,
      },
    },
  },
  {
    name: "Impostor League",
    slug: "impostor-league",
    year: "2026",
    tagline:
      "A party game born from a night of playing Spy with friends: we're all sports fans, so I remade it around sports players and clubs instead of everyday places, with two AI-driven modes that generate the words through an OpenAI-backed Supabase Edge Function.",
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "OpenAI"],
    status: "Completed",
    repoUrl: "https://github.com/stasdi01/ImpostorLeague",
    hero: {
      // TODO(dimi): set iconSrc: "/icons/impostor-league.png".
      monogram: "IL",
      accent: "violet",
      position: "top-[17%] right-[8%]",
      tooltipBelow: true,
      parallaxFactor: 14,
      drift: {
        y: -7,
        yDuration: 5.1,
        yRepeatDelay: 0,
        x: -12,
        xDuration: 8.3,
        xRepeatDelay: 1.2,
        delay: 0.8,
      },
    },
  },
  {
    name: "Clinic Management Web App",
    slug: "clinic-management",
    year: "2025",
    tagline:
      "A full-stack platform for a small medical practice: role-based staff access, patient records, scheduling, and automated reporting.",
    stack: ["React", "Node.js", "Express", "PostgreSQL"],
    status: "Completed",
    // TODO(dimi): add a live/demo URL and repo URL if you want to link them.
    hero: {
      // TODO(dimi): set iconSrc: "/icons/clinic-management.png".
      monogram: "CM",
      accent: "blue",
      position: "bottom-[20%] right-[10%]",
      parallaxFactor: -11,
      drift: {
        y: -9,
        yDuration: 7.7,
        yRepeatDelay: 0.6,
        x: 7,
        xDuration: 6.5,
        xRepeatDelay: 0.9,
        delay: 1.6,
      },
    },
  },
];

/** The three cards shown on the home page, flagship first. */
export const featuredProjects = projects;
