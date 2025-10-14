import type { MetadataRoute } from "next";

function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return fromEnv && /^https?:\/\//.test(fromEnv)
    ? fromEnv
    : "http://localhost:3000";
}

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [`${siteUrl}/sitemap.xml`],
    host: siteUrl,
  };
}
