import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ADE1EF",
          color: "#0f172a",
          fontSize: 64,
          fontWeight: 700,
        }}
      >
        SkyPrep Courses
      </div>
    ),
    { ...size }
  );
}




