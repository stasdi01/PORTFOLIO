import type { Experience } from "@/lib/types";

// Real roles, dates, and bullets from the résumé, most recent first. Bullets
// lead with what was built and its impact.
export const experience: Experience[] = [
  {
    company: "SkyIT / GBCS Group",
    role: "Backend Developer Intern",
    period: "Jun 2026 – Present",
    bullets: [
      "Contributed to a multi-tenant enterprise ESG and greenhouse-gas emissions platform (Django REST Framework, MySQL, Docker) that serves three branded frontends from one shared backend.",
      "Built REST APIs for the emissions engine (Scope 1–4 calculations, AI recommendations) on a DTO-service architecture with JWT authentication and standardized response schemas.",
      "Implemented multi-tenant company isolation: derived tenant context from the authenticated user and scoped every database read and write so no company can access another's data, proving it with automated two-tenant isolation tests against a Dockerized MySQL.",
      "Developed AI recommendation APIs as a rule-based engine with company-scoped persistence, audit logging, and a documented integration contract for a teammate's module.",
    ],
  },
  {
    company: "Mayo Clinic",
    role: "Software Engineer Intern",
    period: "Feb 2026 – May 2026",
    location: "Rochester, MN",
    bullets: [
      "Built a browser-based DICOM PHI anonymizer applying 300+ de-identification rules per HIPAA standards.",
      "Extended the open-source OHIF medical imaging viewer with a custom React radiology assessment panel.",
      "Developed a FastAPI and React user-management system with JWT auth, RBAC, and multi-tenant data isolation.",
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
