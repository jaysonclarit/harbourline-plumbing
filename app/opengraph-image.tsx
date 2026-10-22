import { ImageResponse } from "next/og";
import { hero } from "@/lib/content";
import { site } from "@/lib/site";

// Social share card, built at build time. Uses the default sans: next/og needs
// TTF/OTF files and next/font only ships woff2.
export const alt = `${site.name}: plumber in ${site.area}. Call ${site.phone.display}.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          padding: 72,
          background: "#fbf6ee",
          color: "#1b2a33",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="72" height="72" viewBox="0 0 40 40">
            <rect width="40" height="40" rx="11" fill="#b4471f" />
            <path
              d="M9 22c2.8-3 5.6-3 8.4 0s5.6 3 8.4 0 3.6-2.4 5.2-1.2"
              fill="none"
              stroke="#fff"
              strokeWidth="2.75"
              strokeLinecap="round"
            />
            <path d="M11 14h18" stroke="#fff" strokeWidth="2.75" strokeLinecap="round" opacity=".55" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 40, fontWeight: 700 }}>Harbourline</span>
            <span style={{ fontSize: 22, letterSpacing: 4, color: "#2f6f73" }}>PLUMBING</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>
          {hero.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 30, color: "#5b5148" }}>{site.area}</span>
          <span
            style={{
              display: "flex",
              fontSize: 34,
              fontWeight: 700,
              color: "#fff",
              background: "#b4471f",
              borderRadius: 14,
              padding: "14px 28px",
            }}
          >
            Call {site.phone.display}
          </span>
        </div>
      </div>
    ),
    size,
  );
}
