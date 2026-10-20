import { ImageResponse } from "next/og";
import { site } from "@content/site";

// Social share card for the Dr Anamneza case study. Inline styles are required
// by next/og (ImageResponse), so the design token hex values are repeated here.
// Same layout and palette as the DormSy card so the two read as a set.
export const alt = "Dr Anamneza: a personal health record app, case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const colors = {
  bg: "#0a0a0b",
  ink: "#fafafa",
  muted: "rgba(250, 250, 250, 0.6)",
  accent: "#e11d48",
  purple: "#7c3aed",
};

export default function DrAnamnezaOpengraphImage() {
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
          backgroundImage: `radial-gradient(at 20% 20%, rgba(225,29,72,0.28) 0%, transparent 55%), radial-gradient(at 85% 80%, rgba(124,58,237,0.22) 0%, transparent 50%)`,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: colors.accent,
          }}
        >
          <span
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              backgroundColor: colors.accent,
            }}
          />
          In development
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 120, lineHeight: 1 }}>
            Dr Anamneza
            <span style={{ color: colors.accent }}>.</span>
          </div>
          <div style={{ marginTop: 28, fontSize: 38, color: colors.muted, maxWidth: 980 }}>
            A personal health record app for patients in Serbia, and a case
            study on the bug that silently lost sessions.
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
          Case study · {site.name}
        </div>
      </div>
    ),
    { ...size },
  );
}
