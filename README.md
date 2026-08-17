# QBCore Website

This site is built with [Next.js](https://nextjs.org) and is configured to deploy to GitHub Pages as a static export.

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
- The workflow sets `GITHUB_PAGES_BASE_PATH` to the repository name so project pages work at `https://<user>.github.io/<repo>/`

If you switch to a custom domain or user site, update or remove the `GITHUB_PAGES_BASE_PATH` value in the workflow.

## Production build

```bash
npm run build
```

After the build finishes, the static output is available in `/home/runner/work/qbcore-website/qbcore-website/out`.

## Notes

- Static export means Pages serves prebuilt HTML, CSS, and JS only
- Features that require a Next.js server runtime are not available on GitHub Pages
