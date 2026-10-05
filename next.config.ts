import type { NextConfig } from "next";
import { URL } from "url";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://cdn.dummyjson.com/**")]
  }
};

export default nextConfig;
