import type { Resume } from "@/lib/types";
import { site } from "@content/site";

// The résumé rendered at /resume, transcribed word for word from
// public/resume.pdf. This file and the PDF are one document in two formats:
// whenever the PDF is replaced, update this file in the same change so the
// page never says something the download doesn't.
//
// Intentionally left out of the web version: the phone number (the PDF keeps
// it) and the PDF's "Portfolio" link, which would point at this site.
export const resume: Resume = {
  name: site.name,
  links: [
    { label: site.email, href: `mailto:${site.email}` },
    { label: "LinkedIn", href: site.linkedin },
    { label: "GitHub", href: site.github },
  ],
  education: [
    {
      school: "Luther College",
      degree: "Bachelor of Arts in Computer Science",
      period: "Aug. 2023 – May 2027",
      location: "Decorah, IA",
    },
  ],
  experience: [
    {
      title: "Backend Team Lead",
      company: "GBCS Group (SkyIT)",
      period: "Aug. 2026 – Present",
      location: "Alberta, Canada",
      bullets: [
        "Lead a team of 7 backend interns: task assignment, daily stand-ups, and weekly progress reports to the CEO.",
        "Own backend code review: merged 40+ PRs and 6,000+ lines across tenant isolation, auth, and migrations.",
        "Introduced CI test gating and protected branching after repeated branch breakages; green builds now gate merges.",
      ],
    },
    {
      title: "Backend Developer Intern",
      company: "GBCS Group (SkyIT)",
      period: "June 2026 – Aug. 2026",
      location: "Alberta, Canada",
      bullets: [
        "Scoped every Django ORM queryset to its tenant so no client sees another’s rows; proved it with 12 tenant tests.",
        "Modelled Scope 1–4 emissions calculations for an enterprise GHG engine in a service layer, unit-tested per rule.",
        "Traced a silent deploy failure to a Django settings override, then documented the fix for new engineers.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Mayo Clinic",
      period: "Feb. 2026 – May 2026",
      location: "Rochester, MN",
      bullets: [
        "Built a browser tool that strips patient identifiers from DICOM scans locally, so PHI never reaches a server.",
        "Implemented a 270-tag HIPAA de-identification engine with 3 rulesets, UID hashing, and output validation.",
        "Added a React assessment panel to OHIF, the open-source DICOM viewer, for structured radiology scoring.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Jaka Lounge Human Capital",
      period: "July 2025 – Sep. 2025",
      location: "Belgrade, Serbia",
      bullets: [
        "Wrote Kotlin service and persistence code modelling candidate employment records for a verification platform.",
        "Built company-side endpoints for submitting and tracking verification requests against external data providers.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "WEBX Team",
      period: "Apr. 2025 – June 2025",
      location: "Belgrade, Serbia",
      bullets: [
        "Built Spring Boot endpoints backed by PostgreSQL for client-facing web applications.",
      ],
    },
  ],
  projects: [
    {
      name: "Dormsy",
      href: "https://getdormsy.com",
      stack: [
        "Next.js",
        "TypeScript",
        "Express.js",
        "Supabase",
        "PostgreSQL",
        "Vercel",
        "Railway",
      ],
      period: "Mar. 2026 – Present",
      bullets: [
        "Launched and maintain a campus marketplace for Luther College students: deploys, support, and new features.",
        "Architected a 3-tier system with Next.js on Vercel, a dedicated Express REST API on Railway, and PostgreSQL.",
        "Integrated Supabase Realtime for live in-app chat with an email notification fallback for offline users.",
      ],
    },
    {
      name: "Clinic Management Web App",
      stack: ["React", "Node.js", "Express", "PostgreSQL"],
      period: "June 2025 – July 2025",
      bullets: [
        "Built a full-stack platform with JWT auth and role-based access control for 20+ clinic staff.",
        "Designed a normalized PostgreSQL schema for patients, appointments, and staff roles.",
        "Integrated Google Calendar API for scheduling and automated report generation, cutting report time by 70%.",
      ],
    },
  ],
  skills: [
    {
      label: "Languages",
      items: ["Python", "JavaScript/TypeScript", "Java", "Kotlin", "C/C++", "SQL"],
    },
    {
      label: "Frameworks",
      items: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "Django",
        "Flask",
        "FastAPI",
        "Spring Boot",
      ],
    },
    {
      label: "Testing & APIs",
      items: ["PyTest", "JUnit", "REST", "OpenAI API"],
    },
    {
      label: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
    },
    {
      label: "Tools & Cloud",
      items: [
        "Git",
        "Docker",
        "AWS",
        "Azure",
        "Vercel",
        "Railway",
        "Claude",
        "Cursor",
        "Jira",
        "Slack",
      ],
    },
  ],
};
