import { site } from "@content/site";
import { MailIcon, DownloadIcon } from "./icons";

// Opening statement. An availability pill, a name greeting, the positioning
// line, the credential summary, and the two primary calls to action. Sits in
// the "home" section and fills most of the first viewport.
export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[85vh] items-center px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <p className="inline-flex items-center gap-2 rounded-full bg-sage px-3 py-1 text-sm font-medium text-sage-fg">
          <span aria-hidden className="h-2 w-2 rounded-full bg-dot" />
          {site.availabilityShort}
        </p>

        <h1 className="mt-6 max-w-3xl font-sans text-display font-normal text-heading">
          Hi, I&rsquo;m {site.name}
        </h1>
        <p className="mt-4 font-sans text-4xl font-normal text-pill-dark">
          {site.headline}
        </p>

        <p className="mt-6 max-w-xl text-subtitle text-muted">{site.summary}</p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-medium text-sidebar-fg transition-colors hover:bg-accent-strong"
          >
            <MailIcon className="h-4 w-4" />
            Get in Touch
          </a>
          <a
            href={site.resumePdfPath}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-card px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            <DownloadIcon className="h-4 w-4" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
