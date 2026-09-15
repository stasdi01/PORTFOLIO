// Central site config: identity, positioning, and links.
// Edit this file to change what appears in the hero, footer, and metadata.

// Absolute production origin, from NEXT_PUBLIC_SITE_URL (set in Vercel), with any
// trailing slash stripped so URL joins never double up (e.g. sitemap entries).
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/+$/, "");

export type SiteLink = {
  label: string;
  href: string;
};

export const site = {
  name: "Dimitrije Stasic",
  shortName: "Dimi",
  // Short role label used in metadata and the résumé header.
  role: "Full-Stack Developer",
  // One-line positioning used as the meta description base and OG image subtitle.
  positioning:
    "CS senior at Luther College. Full-stack developer. Building healthtech.",

  // Hero: the line under the name, then a short blurb. Both stay short enough
  // to hold the centre of the first viewport without wrapping past two lines.
  headline: "Full-Stack Developer · Healthtech",
  heroBlurb:
    "Computer science senior at Luther College with four software-engineering internships, most recently at SkyIT and Mayo Clinic's Biomedical Imaging Resource Core (BIRC). Building systems where the details matter.",

  // Longer summary used on the résumé page and in structured data.
  summary:
    "I'm a computer science senior at Luther College with four software-engineering internships, currently at SkyIT and previously at Mayo Clinic's Biomedical Imaging Resource Core (BIRC). On the side I built DormSy, a campus marketplace now live in production.",

  availability:
    "Seeking full-time software engineering roles & master's programs · Graduating May 2027",
  availabilityShort: "Available for work",

  location: "Decorah, Iowa",
  // Primary (school) email used for the nav/hero CTA and OG image; personal shown alongside.
  email: "stasdi01@luther.edu",
  personalEmail: "stasic.dimitrije17@gmail.com",

  github: "https://github.com/stasdi01",
  linkedin: "https://www.linkedin.com/in/dimitrije-stasic-a225ab35b/",

  // /resume renders content/resume.ts as markup; /resume.pdf is the download.
  resumePath: "/resume",
  resumePdfPath: "/resume.pdf",
} as const;

// Single-page anchor targets, in the order they appear down the page. The
// navbar renders these labels and scroll-spies their lowercased ids.
export const navSections = [
  "Home",
  "About",
  "Education",
  "Experience",
  "Projects",
  "Skills",
  "Contact",
] as const;

// Ordered links used by the hero and footer.
export const primaryLinks: SiteLink[] = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Email", href: `mailto:${site.email}` },
  { label: "Résumé", href: site.resumePath },
];
