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

## Fonts

The site's brand face is **Gilroy** (Radomir Tinkov), applied through the
`font-brand` utility — headings and the wordmark only. Body copy uses the
system sans stack.

- `fonts-src/` holds the licensed originals. Nothing loads them; they are the
  master copies.
- `app/fonts/` holds subset copies, and is what `next/font/local` reads in
  `app/layout.tsx`. Gilroy ships 466 codepoints and the site renders 74, so
  the four weights are trimmed from 172 KB to 76 KB with identical rendering.
- `scripts/subset-fonts.py` regenerates the subsets.

Using `next/font/local` (rather than `@font-face` against `/public`) is what
gets the fonts fingerprinted into `_next/static/media`, where they are served
with a one-year immutable cache. Files in `public/` inherit GitHub Pages'
10-minute default.

**If a heading ever needs a character outside the subset** — a non-Latin
script, unusual punctuation, a maths symbol — it will silently fall back to
the system face and look wrong next to its neighbours. Add it to `EXTRA` in
the script and regenerate:

```bash
pip install fonttools brotli
python scripts/subset-fonts.py
```

The set already covers printable ASCII, common typographic marks, and
Western-European accented letters, so ordinary copy edits and most partner or
person names are safe without regenerating.

## Notes

- Static export means Pages serves prebuilt HTML, CSS, and JS only
- Features that require a Next.js server runtime are not available on GitHub Pages
