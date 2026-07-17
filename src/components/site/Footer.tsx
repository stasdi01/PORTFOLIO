import { site } from "@content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-12">
      <div className="mx-auto flex max-w-3xl flex-wrap justify-between gap-4 px-6 text-sm text-subtle">
        <p>
          © {year} {site.name}
        </p>
        <p>Built with Next.js &amp; Tailwind CSS.</p>
      </div>
    </footer>
  );
}
