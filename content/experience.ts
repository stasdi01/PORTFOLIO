import type { Experience } from "@/lib/types";

// Real roles, dates, and bullets from the résumé. Bullets lead with what was
// built and its impact.
export const experience: Experience[] = [
  {
    company: "Mayo Clinic",
    role: "Software Engineer Intern",
    period: "Feb 2026 – Present",
    location: "Rochester, MN",
    bullets: [
      "Built a browser-based DICOM PHI anonymizer applying 300+ de-identification rules per HIPAA standards.",
      "Extended the open-source OHIF medical imaging viewer with a custom React radiology assessment panel.",
      "Developed a FastAPI and React user-management system with JWT auth, RBAC, and multi-tenant data isolation.",
    ],
  },
  {
    company: "SkyIT",
    role: "Backend Developer Intern",
    // TODO(dimi): add SkyIT's start date (currently just "Present") and location.
    period: "Present",
    bullets: [
      "TODO(dimi): what you're building on the SkyIT backend and its impact (~25 words).",
      "TODO(dimi): a second concrete contribution (~25 words).",
    ],
  },
  {
    company: "Jaka Lounge Human Capital",
    role: "Software Engineer Intern",
    period: "Jul 2025 – Sep 2025",
    location: "Belgrade, Serbia",
    bullets: [
      "Contributed to backend development of a career-verification platform, building database records in Kotlin.",
      "Developed company-management features and REST API integrations under senior-engineer supervision.",
      "Adopted team coding standards and Git version-control practices in a professional development environment.",
    ],
  },
  {
    company: "WEBX Team",
    role: "Software Engineer Intern",
    period: "Apr 2025 – Jun 2025",
    location: "Belgrade, Serbia",
    bullets: [
      "Built RESTful APIs with Spring Boot and PostgreSQL, improving backend response times for client applications.",
      "Tested and debugged backend modules using JUnit, reducing production bugs and improving release stability.",
      "Deployed APIs via Docker in a staging environment, accelerating cross-team integration testing.",
    ],
  },
];
