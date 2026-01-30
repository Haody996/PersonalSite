import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",      // 👈 required for static site
  reactCompiler: true,   // 👈 fine to keep
};

export default nextConfig;
