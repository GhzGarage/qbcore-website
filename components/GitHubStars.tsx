"use client";
import { useEffect, useState } from "react";

const ORGS = ["qbcore-framework", "qbcore-redm-framework"];

type Repo = { stargazers_count: number; fork: boolean };

/**
 * Total stars across the QBCore GitHub orgs (FiveM + RedM), fetched live
 * from the visitor's browser (each visitor uses their own IP's
 * unauthenticated GitHub API quota, so this doesn't share a rate limit
 * across visitors the way a build-time or server-side fetch from a
 * single CI/host IP would). Forked repos are excluded so the number
 * reflects QBCore's own work, not stars accrued on the upstream project
 * a fork points to.
 *
 * Renders nothing until at least one org's real number is available, and
 * nothing at all if every fetch fails (offline, GitHub API down, rate
 * limited) — never a fake, zero, or stuck-loading state. If only one org
 * succeeds, its total is shown rather than blocking on the other.
 */
export default function GitHubStars() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchOrgStars(org: string): Promise<number> {
      let total = 0;
      let page = 1;
      // Each org has well under 100 repos, so this normally resolves in
      // a single request; the loop just keeps it correct if either org
      // grows past one page.
      while (page <= 5) {
        const res = await fetch(
          `https://api.github.com/orgs/${org}/repos?per_page=100&page=${page}`,
          { headers: { Accept: "application/vnd.github+json" } }
        );
        if (!res.ok) throw new Error(`GitHub API ${res.status}`);
        const batch: Repo[] = await res.json();
        total += batch.filter((r) => !r.fork).reduce((sum, r) => sum + r.stargazers_count, 0);
        if (batch.length < 100) break;
        page += 1;
      }
      return total;
    }

    Promise.allSettled(ORGS.map(fetchOrgStars)).then((results) => {
      if (cancelled) return;
      const fulfilled = results.filter(
        (r): r is PromiseFulfilledResult<number> => r.status === "fulfilled"
      );
      if (fulfilled.length === 0) return; // every org failed — render nothing
      const total = fulfilled.reduce((sum, r) => sum + r.value, 0);
      setStars(total);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  if (stars === null) return null;

  return (
    <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5">
      <span className="text-accent text-sm leading-none">★</span>
      <span className="font-mono text-xs text-zinc-300 tracking-wide">
        <span className="text-white font-semibold">{stars.toLocaleString("en-US")}</span> stars
        across the QBCore ecosystem
      </span>
    </div>
  );
}
