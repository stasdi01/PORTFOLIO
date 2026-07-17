import type { Project } from "@/lib/types";

// Real projects. DormSy is the flagship (featured card + case study). Impostor
// League is intentionally left off the site.
export const projects: Project[] = [
  {
    name: "DormSy",
    tagline:
      "Graduating students throw out usable dorm furniture every May while first-years buy the same things new in August. DormSy is a campus marketplace that connects the two.",
    stack: ["Next.js", "TypeScript", "Express", "Supabase", "PostgreSQL", "Railway"],
    // Short, true facts drawn from the résumé and case study. Not metrics.
    facts: ["Launched at Luther College", "Solo build", "Realtime in-app chat"],
    featured: true,
    caseStudyUrl: "/projects/dormsy",
    // TODO(dimi): add the live custom-domain URL and the repo URL (if public).
    liveUrl: undefined,
    repoUrl: undefined,
    screenshot: {
      src: "/screenshots/dormsy-home.png",
      alt: "DormSy marketplace home screen",
      caption: "TODO(dimi): drop a real DormSy screenshot into /public/screenshots.",
      // TODO(dimi): set this to the real domain once confirmed, e.g. "dormsy.app".
      url: undefined,
    },
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
