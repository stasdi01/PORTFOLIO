import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@content/site";
import { BackLink } from "@/components/site/BackLink";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Résumé for ${site.name}: ${site.positioning}`,
};

// Pixel size of public/resume.png, rasterised from public/resume.pdf at 3x so
// it stays sharp on retina displays. Next/Image needs the intrinsic dimensions
// to reserve the right box before the file loads.
const PAGE_WIDTH = 1836;
const PAGE_HEIGHT = 2376;

/**
 * The résumé itself, shown as a rendered page image rather than retyped as
 * markup, with the PDF one click away. Inline PDF viewers are unreliable on
 * mobile Safari, so the image is what every visitor actually sees.
 */
export default function ResumePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 pt-28 pb-20 sm:px-6 md:pt-32">
      <h1 className="sr-only">{site.name} — Résumé</h1>

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
          src="/resume.png"
          alt={`Résumé of ${site.name}`}
          width={PAGE_WIDTH}
          height={PAGE_HEIGHT}
          priority
          sizes="(max-width: 896px) 100vw, 896px"
          className="h-auto w-full rounded-lg"
        />
      </div>
    </main>
  );
}
