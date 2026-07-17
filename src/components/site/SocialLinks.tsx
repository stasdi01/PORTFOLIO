import Link from "next/link";
import { primaryLinks } from "@content/site";

// Hero/footer link row. External links (http, mailto) render as plain anchors;
// internal routes (the résumé page) use next/link for client navigation.
export function SocialLinks() {
  return (
    <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
      {primaryLinks.map(({ label, href }) => {
        const isExternal = href.startsWith("http");
        const isMail = href.startsWith("mailto:");
        const className =
          "link-underline inline-block text-ink transition-colors hover:text-accent-strong";

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
  );
}
