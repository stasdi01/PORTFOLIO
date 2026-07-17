// Central site config: identity, positioning, and links.
// Edit this file to change what appears in the hero, footer, and metadata.

export type SiteLink = {
  label: string;
  href: string;
};

export const site = {
  name: "Dimitrije Stašić",
  shortName: "Dimi",
  // One-line positioning shown in the hero and used as the meta description base.
  positioning: "CS junior at Luther College. Backend developer. Building healthtech.",
  location: "Decorah, Iowa",
  email: "stasic.dimitrije17@gmail.com",

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
