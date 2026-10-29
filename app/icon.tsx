import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const photo = await readFile(
    path.join(process.cwd(), "public", "profile.png"),
  );

  const src = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "64px",
        height: "64px",
        borderRadius: "50%",
        overflow: "hidden",
        border: "2px solid #c5ee76",
        boxSizing: "border-box",
        backgroundColor: "#171a19",
      }}
    >
      <img
        src={src}
        width="60"
        height="60"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />
    </div>,
    size,
  );
}
