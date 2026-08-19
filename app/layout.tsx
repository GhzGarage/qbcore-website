import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://qbcore.org";
const title = "QBCore — One philosophy. Multiple platforms. Built for roleplay.";
const description =
  "QBCore is a cross-platform open-source framework ecosystem for building roleplay experiences across UGC platforms. FiveM built the foundation. Roblox is the first expansion. UEFN is next.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — QBCore",
  },
  description,
  keywords: [
    "QBCore",
    "QBCore Specification",
    "FiveM framework",
    "Roblox roleplay",
    "UEFN Verse",
    "roleplay framework",
    "open source game framework",
    "UGC platform development",
  ],
  authors: [{ name: "QBCore" }],
  category: "technology",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "QBCore",
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QBCore — One philosophy. Multiple platforms. Built for roleplay.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0f",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-[#e8e8e8]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:border focus:border-accent/40 focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:text-accent"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
