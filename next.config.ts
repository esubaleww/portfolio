import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "github.com", pathname: "/esubaleww.png" },
    ],
  },
};
export default nextConfig;
