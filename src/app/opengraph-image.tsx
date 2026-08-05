import { ImageResponse } from "next/og";
import { site } from "@content/site";

// Social share card. Rendered with next/og; this file is the one place inline
// styles are required (ImageResponse only accepts them), so the design token
// hex values are repeated here literally.
export const alt = `${site.name} · ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const colors = {
  bg: "#0a0a0b",
  foreground: "#fafafa",
  muted: "rgba(250, 250, 250, 0.6)",
  accent: "#e11d48",
  purple: "#7c3aed",
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
          color: colors.foreground,
          // The hero's nebulae, flattened into two soft washes.
          backgroundImage: `radial-gradient(at 20% 20%, rgba(225,29,72,0.28) 0%, transparent 55%), radial-gradient(at 85% 80%, rgba(124,58,237,0.22) 0%, transparent 50%)`,
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
          <div style={{ display: "flex", fontSize: 118, lineHeight: 1.05 }}>
            {site.name}
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
          <span
            style={{
              width: 80,
              height: 4,
              borderRadius: 2,
              backgroundImage: `linear-gradient(90deg, ${colors.accent}, ${colors.purple})`,
            }}
          />
          {site.email}
        </div>
      </div>
    ),
    { ...size }
  );
}
