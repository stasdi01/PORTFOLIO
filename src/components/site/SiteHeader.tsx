import Link from "next/link";
import { site, primaryLinks } from "@content/site";

// Slim persistent header: name links home, nav links sit right in mono.
export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-6">
        <Link
          href="/"
          className="font-serif text-lg text-ink transition-colors hover:text-accent-strong"
        >
          {site.name}
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-1">
            {primaryLinks.map(({ label, href }) => {
              const isExternal = href.startsWith("http");
              const isMail = href.startsWith("mailto:");
              const className =
                "link-underline font-mono text-xs uppercase tracking-wide text-muted transition-colors hover:text-accent-strong";

              return (
                <li key={label}>
                  {isExternal || isMail ? (
                    <a
                      href={href}
                      className={className}
                      {...(isExternal
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {label}
                    </a>
                  ) : (
                    <Link href={href} className={className}>
                      {label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
