import type { NextConfig } from "next";

const [owner, repository] = process.env.GITHUB_REPOSITORY?.split("/") ?? [];
const customDomain = process.env.GITHUB_PAGES_CUSTOM_DOMAIN === "true";
const userSite = owner && repository === `${owner}.github.io`;
const basePath = process.env.NODE_ENV === "production" && !customDomain && repository && !userSite
  ? `/${repository}`
  : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;