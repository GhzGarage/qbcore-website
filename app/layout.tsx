import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import JsonLd from "./JsonLd";

// Self-hosted through next/font/local rather than hand-written @font-face
// against /public. Next fingerprints these into _next/static, where they
// inherit the immutable one-year cache header; served from /public they got
// GitHub Pages' 10-minute default, which was the largest single item in
// PageSpeed's "use efficient cache lifetimes" audit.
//
// Preload tags are generated from this declaration, so there is no separate
// preload component to keep in sync.
const gilroy = localFont({
  src: [
    { path: "./fonts/gilroy-regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/gilroy-semibold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/gilroy-bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/gilroy-extrabold.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-gilroy",
  display: "swap",
  // `preload` is all-or-nothing — `src` entries take only {path, weight,
  // style}, so there is no way to preload just the two above-the-fold
  // weights. Preloading all four puts 176 KB of font on the critical path,
  // and only extrabold (wordmark) and regular (hero tagline) render above
  // the fold; semibold and bold are section headings further down.
  //
  // Off is the safer of the two available options: it takes bytes off the
  // critical path rather than adding them, and `display: swap` still paints
  // the hero text immediately in the fallback face, which is what LCP
  // measures. This is also the loading behaviour the site originally
  // shipped with.
  preload: false,
});

// Trailing slash matches `trailingSlash: true` in next.config.ts, so the
// canonical, og:url and sitemap all resolve to the exact same URL.
const siteUrl = "https://qbcore.org/";
const title = "QBCore — Built for roleplay. Built for Mantle.";

// Search engines truncate the description around 155-160 characters, so the
// meta description is kept short enough to survive intact. Open Graph has no
// such limit and keeps the longer narrative version below.
const description =
  "QBCore is the flagship open-source roleplay framework for Mantle. The new implementation is in development, with a public repository forthcoming.";

const socialDescription =
  "QBCore is the flagship open-source roleplay framework for Mantle. Development is underway, with a public repository to follow.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — QBCore",
  },
  description,
  keywords: ["QBCore", "Mantle", "roleplay framework", "open-source roleplay"],
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
  },
  twitter: {
    card: "summary",
    title,
    description: socialDescription,
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
    <html lang="en" className={`${gilroy.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
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
