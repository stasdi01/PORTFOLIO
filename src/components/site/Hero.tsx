import { site } from "@content/site";
import { SocialLinks } from "./SocialLinks";

// Opening statement. Type carries it: the name in large Fraunces, the
// positioning line beneath in body face, then the link row.
export function Hero() {
  return (
    <header className="mx-auto max-w-3xl px-6 pt-24 pb-12">
      <p className="text-eyebrow font-semibold uppercase text-subtle">
        {site.location}
      </p>
      <h1 className="mt-6 text-display font-serif">
        {site.name}
        <span className="text-accent">.</span>
      </h1>
      <p className="mt-6 max-w-xl text-subtitle text-muted">
        {site.positioning}
      </p>
      <div className="mt-12">
        <SocialLinks />
      </div>
    </header>
  );
}
