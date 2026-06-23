import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)",
          padding: 60,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 30,
          }}
        >
          <div
            style={{
              width: 70,
              height: 70,
              borderRadius: 14,
              background: "#B8860B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
                fill="white"
                fillOpacity="0.15"
              />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "white",
                fontSize: 36,
                fontWeight: 700,
                letterSpacing: 4,
                fontFamily: "serif",
              }}
            >
              SUNDARAM
            </span>
            <span
              style={{
                color: "#B8860B",
                fontSize: 14,
                letterSpacing: 8,
                fontWeight: 500,
              }}
            >
              GRANITES
            </span>
          </div>
        </div>
        <span
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: 20,
            letterSpacing: 2,
          }}
        >
          Premium Indian Granite Manufacturer &amp; Exporter
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
