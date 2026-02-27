import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  ...(isGitHubPages && {
    basePath: "/feering-falcons-yfc",
    assetPrefix: "/feering-falcons-yfc/",
  }),
};

export default nextConfig;
