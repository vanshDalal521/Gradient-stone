import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#B8860B",
          borderRadius: 6,
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
            fill="white"
            fillOpacity="0.15"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
