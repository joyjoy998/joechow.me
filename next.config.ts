import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["img.clerk.com", "i.imgur.com", "cdn.sanity.io"],
  },
};

export default nextConfig;
