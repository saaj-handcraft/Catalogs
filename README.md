# Saaj

Static product showcase for Saaj, a handmade craft brand.

## Requirements

- Node.js 20 LTS or newer
- npm 10 or newer

## Local development

```sh
npm install
npm run dev
```

Open `http://localhost:3000` while the development server is running.

## Quality checks

```sh
npm run lint
npm run typecheck
npm run build
```

The production build is a static export in `out/`. No Node.js server is needed to host the exported
site.

## Catalog content and images

Product and collection records are in `data/products.ts` and `data/collections.ts`. Product image
paths and descriptive alt text live with each record. Add corresponding local images to `public/`
and update only the catalog data; reusable card components do not need edits. Use lowercase kebab-case
names such as `public/products/marigold-tassel-front.webp`, `public/collections/diwali.webp`, and
`public/images/hero-saaj.webp`. Keep descriptive alt text in the matching TypeScript data record.
Current remote demo
photography and sample product names/descriptions are temporary and should be replaced with
Saaj-approved product photography and copy before launch. Contact links remain intentionally
unconfigured until verified brand details are supplied.

## GitHub Pages

Deployments run from `main` through `.github/workflows/deploy.yml`. In repository settings, configure
Pages to use GitHub Actions. The workflow sets the repository base path for project sites; custom
domains use the root path when the repository variable `GITHUB_PAGES_CUSTOM_DOMAIN` is set to
`true`. Require successful lint, typecheck, and production build checks before merging or deploying.
