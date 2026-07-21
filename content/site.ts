// Central site config: identity, positioning, and links.
// Edit this file to change what appears in the hero, footer, and metadata.

export type SiteLink = {
  label: string;
  href: string;
};

export const site = {
  name: "Dimitrije Stašić",
  shortName: "Dimi",
  // One-line positioning used as the meta description base and OG image subtitle.
  positioning: "CS junior at Luther College. Backend developer. Building healthtech.",

  // Hero: an availability eyebrow, a statement headline (the accent period is
  // added in the component), and a credential-citing summary.
  availability: "Seeking full-time software engineering roles & master's programs · Graduating May 2027",
  headline: "I build backend systems for healthtech",
  summary:
    "I'm a computer science junior at Luther College with four software-engineering internships, most recently at Mayo Clinic's Digital Health division. On the side I built DormSy, a campus marketplace now live in production.",

  location: "Decorah, Iowa",
  // Primary (school) email used for the nav/hero CTA and OG image; personal shown alongside.
  email: "stasdi01@luther.edu",
  personalEmail: "stasic.dimitrije17@gmail.com",

  github: "https://github.com/stasdi01",
  linkedin: "https://www.linkedin.com/in/dimitrije-stasic-a225ab35b/",

  // Resume is served at /resume (HTML) with a downloadable PDF at /resume.pdf.
  resumePath: "/resume",
  resumePdfPath: "/resume.pdf",
} as const;

// Ordered links used by the hero and footer.
export const primaryLinks: SiteLink[] = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Email", href: `mailto:${site.email}` },
  { label: "Résumé", href: site.resumePath },
];
