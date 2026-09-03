import { execFileSync } from "node:child_process";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Used when git isn't available at build time (a source tarball rather than a
// checkout). Matches the date this file previously hardcoded.
const fallbackLastModified = "2026-08-19T00:00:00Z";

// The committer date of the commit being built, rather than `new Date()`: a new
// commit tells crawlers the page changed, while rebuilding the same commit
// still produces byte-identical output.
function lastCommitDate(): Date {
  let iso: string;

  try {
    iso = execFileSync("git", ["log", "-1", "--format=%cI"], {
      cwd: process.cwd(),
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    iso = fallbackLastModified;
  }

  const date = new Date(iso || fallbackLastModified);
  return Number.isNaN(date.getTime()) ? new Date(fallbackLastModified) : date;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      // Trailing slash required: `trailingSlash: true` in next.config.ts makes
      // the canonical https://qbcore.org/, and a sitemap entry without the
      // slash makes Google choose between two candidate URLs.
      url: "https://qbcore.org/",
      lastModified: lastCommitDate(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
