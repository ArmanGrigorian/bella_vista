import Navbar from "@/components/layout/navbar/Navbar";
import ServiceWorkerRegister from "@/components/layout/ServiceWorkerRegister";
import { cn } from "@/utils";
import type { Metadata, Viewport } from "next";
import { Geist, Italianno } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const italiannoCursive = Italianno({
  variable: "--font-italianno-cursive",
  weight: "400",
});

function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return fromEnv && /^https?:\/\//.test(fromEnv)
    ? fromEnv
    : "http://localhost:3000";
}

const siteName = "Bella Vista";
const siteUrl = getSiteUrl();
const defaultDescription =
  "Bella Vista — authentic cuisine, cozy ambiance, and memorable dining.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "Bella Vista",
    "restaurant",
    "dining",
    "menu",
    "contact",
    "authentic cuisine",
  ],
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: siteName,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: siteName,
    description: defaultDescription,
    images: [
      {
        url: "/images/restaurant-inside.webp",
        width: 1200,
        height: 630,
        alt: `${siteName} interior`,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: defaultDescription,
    images: ["/images/restaurant-inside.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  other: {
    "theme-color": "#14532D",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14532D",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(geistSans.variable, italiannoCursive.variable)}>
        <Navbar />
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}
