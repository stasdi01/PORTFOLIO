import { ImageResponse } from "next/og";

// Social share card for the DormSy case study. Inline styles are required by
// next/og (ImageResponse), so the design token hex values are repeated here.
export const alt = "DormSy — a campus marketplace, case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const colors = {
  bg: "#faf9f7",
  ink: "#1a1a1a",
  muted: "#6b6a67",
  accent: "#c65a2e",
};

export default function DormsyOpengraphImage() {
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
          Live at Luther College
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 132, lineHeight: 1 }}>
            DormSy
            <span style={{ color: colors.accent }}>.</span>
          </div>
          <div style={{ marginTop: 28, fontSize: 40, color: colors.muted, maxWidth: 940 }}>
            A campus marketplace for Luther College, and a case study on the bugs
            that failed silently.
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
          getdormsy.com
        </div>
      </div>
    ),
    { ...size },
  );
}
