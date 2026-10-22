import { ImageResponse } from "next/og";

// Home-screen icon: the logo badge as a 180px PNG (iOS doesn't use SVG icons).
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#b4471f",
        }}
      >
        <svg width="140" height="140" viewBox="0 0 40 40">
          <path
            d="M9 22c2.8-3 5.6-3 8.4 0s5.6 3 8.4 0 3.6-2.4 5.2-1.2"
            fill="none"
            stroke="#fff"
            strokeWidth="2.75"
            strokeLinecap="round"
          />
          <path d="M11 14h18" stroke="#fff" strokeWidth="2.75" strokeLinecap="round" opacity=".55" />
        </svg>
      </div>
    ),
    size,
  );
}
