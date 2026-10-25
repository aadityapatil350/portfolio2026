import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NODE_ENV === "production" ? "standalone" : undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/hire",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
