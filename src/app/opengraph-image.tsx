import { ImageResponse } from "next/og";
import { site } from "@content/site";

// Social share card. Rendered with next/og; this file is the one place inline
// styles are required (ImageResponse only accepts them), so the design token
// hex values are repeated here literally.
export const alt = `${site.name} · Backend Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const colors = {
  bg: "#faf9f7",
  ink: "#1a1a1a",
  muted: "#6b6a67",
  accent: "#c65a2e",
  line: "#e7e5e0",
};

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "96px",
          backgroundColor: colors.bg,
          color: colors.ink,
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: colors.muted,
          }}
        >
          {site.location}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 128, lineHeight: 1 }}>
            {site.name}
            <span style={{ color: colors.accent }}>.</span>
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 40,
              color: colors.muted,
              maxWidth: 900,
            }}
          >
            {site.positioning}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            color: colors.muted,
          }}
        >
          <span style={{ width: 48, height: 4, backgroundColor: colors.accent }} />
          {site.email}
        </div>
      </div>
    ),
    { ...size },
  );
}
