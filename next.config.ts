import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["img.clerk.com"], // Add Clerk's image domain
  },
};

export default nextConfig;
