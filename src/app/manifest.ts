import type { MetadataRoute } from "next";

function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return fromEnv && /^https?:\/\//.test(fromEnv)
    ? fromEnv
    : "http://localhost:3000";
}

export default function manifest(): MetadataRoute.Manifest {
  const siteUrl = getSiteUrl();

  return {
    name: "Bella Vista",
    short_name: "BellaVista",
    description:
      "Bella Vista — authentic cuisine, cozy ambiance, and memorable dining.",
    lang: "en",
    dir: "ltr",
    start_url: "/",
    scope: "/",
    id: siteUrl,
    display: "standalone",
    display_override: ["standalone", "minimal-ui", "browser"],
    orientation: "portrait-primary",
    background_color: "#f7f7f7",
    theme_color: "#14532D",
    icons: [
      {
        src: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["food", "drink", "restaurant", "lifestyle"],
    shortcuts: [
      {
        name: "View Menu",
        short_name: "Menu",
        url: "/menu",
        icons: [
          { src: "/favicon/android-chrome-192x192.png", sizes: "192x192" },
        ],
      },
      {
        name: "Contact Us",
        short_name: "Contact",
        url: "/contact",
        icons: [
          { src: "/favicon/android-chrome-192x192.png", sizes: "192x192" },
        ],
      },
    ],
  };
}
