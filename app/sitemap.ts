import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Fixed build-time date (rather than `new Date()`) keeps this output
// deterministic across static export builds.
const lastModified = new Date("2026-08-19T00:00:00Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      // Trailing slash required: `trailingSlash: true` in next.config.ts makes
      // the canonical https://qbcore.org/, and a sitemap entry without the
      // slash makes Google choose between two candidate URLs.
      url: "https://qbcore.org/",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
