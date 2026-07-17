import type { Project } from "@/lib/types";

// Up to three projects. DormSy is real and links to its case study.
// The other two are structural placeholders; replace or delete them.
export const projects: Project[] = [
  {
    name: "DormSy",
    tagline:
      "Graduating students throw out usable dorm furniture every May while first-years buy the same things new in August. DormSy is a campus marketplace that connects the two.",
    stack: ["Next.js", "Supabase", "Node.js / Express", "Railway", "Tailwind CSS"],
    // Short, true facts (drawn from the case study). Not metrics, no invented numbers.
    facts: ["Solo build", "Client-side HEIC upload", "Cross-device auth"],
    featured: true,
    caseStudyUrl: "/projects/dormsy",
    // TODO(dimi): add the live URL and repo URL (or remove the ones you don't have).
    liveUrl: undefined,
    repoUrl: undefined,
    screenshot: {
      src: "/screenshots/dormsy-home.png",
      alt: "DormSy marketplace home screen",
      caption: "TODO(dimi): drop a real DormSy screenshot into /public/screenshots.",
      // TODO(dimi): set this to the real domain once live, e.g. "dormsy.app".
      url: undefined,
    },
  },
  {
    // TODO(dimi): replace this whole entry with a second real project, or delete it.
    name: "Project two",
    tagline:
      "TODO(dimi): one sentence: the problem this project solves, in plain language (~20 words).",
    stack: ["TODO", "stack", "here"],
    liveUrl: undefined,
    repoUrl: undefined,
  },
  {
    // TODO(dimi): replace this whole entry with a third real project, or delete it.
    name: "Project three",
    tagline:
      "TODO(dimi): one sentence: the problem this project solves, in plain language (~20 words).",
    stack: ["TODO", "stack", "here"],
    liveUrl: undefined,
    repoUrl: undefined,
  },
];
