import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/feering-falcons-yfc" : "";
// Absolute site URL, used for share previews and share links. The test site
// gets its own, so a link pasted from it previews the test build, not live.
const siteUrl = isGitHubPages
  ? "https://adamcutting.github.io/feering-falcons-yfc"
  : "https://feeringfalcons.com";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
};

export default nextConfig;
