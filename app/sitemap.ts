import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Fixed build-time date (rather than `new Date()`) keeps this output
// deterministic across static export builds.
const lastModified = new Date("2026-08-19T00:00:00Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://qbcore.org",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
