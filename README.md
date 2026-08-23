# QBCore Website

This is the marketing/spec site for **qbcore.org** — QBCore's evolution from a FiveM
framework into a cross-platform open-source roleplay ecosystem (FiveM → RedM → Roblox → UEFN).
It's built with [Next.js](https://nextjs.org) and deploys to GitHub Pages as a static export.

## Local development

Install dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## GitHub Pages deployment

- `next.config.ts` uses `output: "export"` so `npm run build` writes a static site to `out/`
- `.github/workflows/deploy-pages.yml` builds that static export and deploys it to GitHub Pages
  on every push to `main`
- `public/CNAME` pins the site to the custom domain **qbcore.org**. Because this is an apex/root
  custom domain, the workflow does **not** set a `basePath` — the site is built to serve from `/`.
  In your repo settings (Settings → Pages), make sure the custom domain is set to `qbcore.org` and
  your DNS points the apex record at GitHub Pages.
- If you ever need to fall back to the default `https://<user>.github.io/<repo>/` URL instead
  (no custom domain), remove `public/CNAME` and set `GITHUB_PAGES_BASE_PATH: /${{ github.event.repository.name }}`
  as an env var on the build step again.

## Production build

```bash
npm run build
```

After the build finishes, the static output is available in `out/`.

## SEO / social

- `app/robots.ts` and `app/sitemap.ts` generate `robots.txt` and `sitemap.xml` at build time
- `app/icon.svg`, `app/favicon.ico`, and `app/apple-icon.png` provide the site favicon/touch icon
- `public/og-image.png` is used for Open Graph / Twitter card previews (see `app/layout.tsx`)

## Notes

- Static export means Pages serves prebuilt HTML, CSS, and JS only
- Features that require a Next.js server runtime are not available on GitHub Pages
