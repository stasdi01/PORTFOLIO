import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@content/site";
import { BackLink } from "@/components/site/BackLink";
// Imported as a module rather than referenced as "/resume.png" so the build
// fingerprints it. Swapping in a new résumé changes the emitted filename,
// which retires the old image from every cache instead of leaving a stale
// copy behind a URL that never changes. The import also carries the intrinsic
// dimensions, so nothing has to be kept in sync by hand.
import resumePage from "../../../public/resume.png";

/**
 * The résumé itself, shown as a rendered page image rather than retyped as
 * markup, with the PDF one click away. Inline PDF viewers are unreliable on
 * mobile Safari, so the image is what every visitor actually sees.
 */
export default function ResumePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 pt-28 pb-20 sm:px-6 md:pt-32">
      <h1 className="sr-only">Résumé of {site.name}</h1>

      <div className="flex items-center justify-between gap-4">
        <BackLink href="/">Back home</BackLink>
        <a
          href={site.resumePdfPath}
          download
          className="btn-cosmic rounded-lg px-4 py-2 text-sm font-semibold"
        >
          <span>Download PDF ↓</span>
        </a>
      </div>

      <div className="cosmic-card mt-8 overflow-hidden rounded-2xl p-2 sm:mt-12 sm:p-4">
        <Image
          src={resumePage}
          alt={`Résumé of ${site.name}`}
          priority
          sizes="(max-width: 896px) 100vw, 896px"
          className="h-auto w-full rounded-lg"
        />
      </div>
    </main>
  );
}
