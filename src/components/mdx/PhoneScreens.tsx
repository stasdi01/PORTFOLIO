import Image from "next/image";
import { PhoneFrame } from "@/components/site/PhoneFrame";
import type { Screenshot } from "@/lib/types";

// A row of framed phone screenshots for mobile case studies, the portrait
// counterpart to ScreenshotSlot. Two columns on phones, up to three wider.
export function PhoneScreens({
  screens,
  caption,
}: {
  screens: Screenshot[];
  caption?: string;
}) {
  return (
    <figure className="my-12">
      {/* A pair keeps the same phone width as a row of three, centred. */}
      <div
        className={`grid grid-cols-2 gap-4 sm:gap-6 ${
          screens.length === 2 ? "sm:mx-auto sm:w-2/3" : "sm:grid-cols-3"
        }`}
      >
        {screens.map((screen) => (
          <PhoneFrame key={screen.src}>
            <Image
              src={screen.src}
              alt={screen.alt}
              width={screen.width}
              height={screen.height}
              sizes="(min-width: 640px) 240px, 45vw"
              className="h-auto w-full"
            />
          </PhoneFrame>
        ))}
      </div>
      {caption ? (
        <figcaption className="mt-4 text-sm text-foreground/40">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
