import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  experimental: {
    optimizePackageImports: ["@fidely-ui/react"]
  }
};

export default nextConfig;
