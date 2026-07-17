import Link from "next/link";
import { site } from "@content/site";

// Opening statement. Type carries it: the name in large Fraunces, the
// positioning line beneath, then the two primary calls to action.
export function Hero() {
  return (
    <header className="mx-auto max-w-3xl px-6 pt-24 pb-12">
      <p className="eyebrow text-subtle">{site.location}</p>
      <h1 className="mt-6 text-display font-serif">
        {site.name}
        <span className="text-accent">.</span>
      </h1>
      <p className="mt-6 max-w-xl text-subtitle text-muted">
        {site.positioning}
      </p>
      <div className="mt-12 flex flex-wrap gap-4">
        <a
          href={`mailto:${site.email}`}
          className="rounded-full bg-ink px-4 py-2 text-bg transition-colors duration-150 hover:bg-accent-strong"
        >
          Email me
        </a>
        <Link
          href={site.resumePath}
          className="rounded-full border border-line px-4 py-2 text-ink transition-colors duration-150 hover:border-ink"
        >
          Résumé
        </Link>
      </div>
    </header>
  );
}
