import { NAVBAR_LINKS } from "@/lib/mockData";
import type { MetadataRoute } from "next";

function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return fromEnv && /^https?:\/\//.test(fromEnv)
    ? fromEnv
    : "http://localhost:3000";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  const uniquePaths = Array.from(new Set(NAVBAR_LINKS.map((l) => l.href)));

  const routes: MetadataRoute.Sitemap = uniquePaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  return routes;
}
