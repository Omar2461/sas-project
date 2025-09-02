import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Turbopack configuration (stable)
  turbopack: {
    // Add any Turbopack-specific rules here
  } as Record<string, unknown>,
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  eslint: {
    dirs: ["app", "components", "lib"],
    ignoreDuringBuilds: process.env.NODE_ENV !== "production",
  },
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV !== "production",
  },
  // Only apply Webpack config when not using Turbopack
  ...(process.env.TURBOPACK
    ? {}
    : {
        webpack: (config, { dev }) => {
          if (dev) {
            config.cache = {
              type: "filesystem",
              buildDependencies: {
                config: [__filename],
              },
            };
          }
          return config;
        },
      }),
};

export default nextConfig;
