import { site } from "@content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-6 py-10 text-center text-sm text-subtle sm:px-10 lg:px-16">
      <p>Built with Next.js &amp; Tailwind CSS.</p>
      <p className="mt-1">
        © {year} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
