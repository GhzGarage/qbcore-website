import type { Metadata, Viewport } from "next";
import "./globals.css";
import JsonLd from "./JsonLd";
import PreloadResources from "./PreloadResources";

// Trailing slash matches `trailingSlash: true` in next.config.ts, so the
// canonical, og:url and sitemap all resolve to the exact same URL.
const siteUrl = "https://qbcore.org/";
const title = "QBCore — One philosophy. Multiple platforms. Built for roleplay.";

// Search engines truncate the description around 155-160 characters, so the
// meta description is kept short enough to survive intact. Open Graph has no
// such limit and keeps the longer narrative version below.
const description =
  "Cross-platform open-source roleplay framework. One specification across FiveM, RedM and Roblox, with UEFN next. Built for user-generated content.";

const socialDescription =
  "QBCore is a cross-platform open-source framework ecosystem for building roleplay experiences across UGC platforms. FiveM built the foundation. RedM followed. Roblox is the first expansion. UEFN is next.";

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
    "RedM framework",
    "Roblox roleplay",
    "UEFN Verse",
    "roleplay framework",
    "open-source game framework",
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
    locale: "en_US",
    title,
    description: socialDescription,
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
    description: socialDescription,
    images: ["/og-image.png"],
  },
  // No `robots` key on purpose. `index, follow` is already the default when
  // nothing is declared, and setting it here also stamped it onto the
  // not-found page, which emits its own `noindex` — leaving every error
  // document carrying two contradictory robots directives.
};

export const viewport: Viewport = {
  themeColor: "#17140f",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <PreloadResources />
        <JsonLd />
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
