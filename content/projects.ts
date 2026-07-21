import type { Project } from "@/lib/types";

// Real projects. DormSy is the flagship (featured card + case study). Impostor
// League is intentionally left off the site.
export const projects: Project[] = [
  {
    name: "DormSy",
    tagline:
      "Graduating students throw out usable dorm furniture every May while first-years buy the same things new in August. DormSy is a campus marketplace that connects the two.",
    stack: ["Next.js", "TypeScript", "Express", "Supabase", "PostgreSQL", "Railway"],
    status: "Live at Luther College",
    // Short, true facts drawn from the résumé and case study. Not metrics.
    facts: ["Solo build", "Realtime in-app chat", "Cross-device auth"],
    featured: true,
    caseStudyUrl: "/projects/dormsy",
    liveUrl: "https://getdormsy.com",
    // TODO(dimi): add the repo URL if the repository is public.
    repoUrl: undefined,
    screenshot: {
      src: "/screenshots/dormsy-home.png",
      alt: "DormSy landing page: a marketplace just for your campus, live at Luther College",
      url: "getdormsy.com",
    },
  },
  {
    name: "Impostor League",
    tagline:
      "A party game born from a night of playing Spy with friends: we're all sports fans, so I remade it around sports players and clubs instead of everyday places, with two AI-driven modes that generate the words through an OpenAI-backed Supabase Edge Function.",
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "OpenAI"],
    liveUrl: undefined,
    repoUrl: "https://github.com/stasdi01/ImpostorLeague",
  },
  {
    name: "Clinic Management Web App",
    tagline:
      "A full-stack platform for a small medical practice: role-based staff access, patient records, scheduling, and automated reporting.",
    stack: ["React", "Node.js", "Express", "PostgreSQL"],
    // TODO(dimi): add a live/demo URL and repo URL if you want to link them.
    liveUrl: undefined,
    repoUrl: undefined,
  },
];
