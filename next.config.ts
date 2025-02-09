import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  reactStrictMode: true,
  eslint: {
      ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,  // Ignora erros de TypeScript durante o build
  },
}



export default nextConfig;
