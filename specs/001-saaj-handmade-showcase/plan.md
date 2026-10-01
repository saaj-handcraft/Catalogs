# Implementation Plan: Saaj Handmade Showcase

**Branch**: `001-saaj-handmade-showcase` | **Date**: 2026-09-23 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-saaj-handmade-showcase/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command; its definition describes the execution workflow.

## Summary

Build Saaj's first online presence as a responsive, informational product showcase. The site
will use Next.js App Router, React, strict TypeScript, local typed catalogue data, reusable server
components, and static export to GitHub Pages. Products will render as reusable cards; only products
explicitly marked in content will receive generated static detail pages. No server, database, API,
customer input, authentication, or commerce workflow is included in Wave 1.

## Technical Context

**Language/Version**: TypeScript with strict mode; Node.js LTS and the repository's supported Next.js version

**Primary Dependencies**: Next.js App Router, React, Tailwind CSS, ESLint, and the framework's image and metadata APIs

**Storage**: Local TypeScript data files and static assets only; no runtime storage

**Testing**: TypeScript check, ESLint, production static build, link/image checks, responsive browser review, and keyboard/accessibility review

**Target Platform**: Modern mobile and desktop browsers; static files hosted on GitHub Pages

**Project Type**: Static Next.js web application

**Performance Goals**: Minimal client JavaScript, stable image dimensions, no avoidable layout shift, and fast first render for catalogue pages

**Constraints**: Static export only; no server runtime, backend, database, API, customer input, commerce workflow, or unsupported image optimization service

**Scale/Scope**: Five primary routes, reusable catalogue components, initial festive/product collections, and a small-to-medium local catalogue

## Constitution Check

_GATE: PASS. Re-check after Phase 1 design._

- **Simplicity**: PASS. One Next.js application, local data, and a small reusable component set;
  no backend or speculative service layer.
- **Static-first architecture**: PASS. App Router static export, local TypeScript data, and generated
  detail routes only for selected products.
- **Performance**: PASS. Server Components by default, minimal client code, stable image sizing, and
  responsive image handling compatible with static hosting.
- **Mobile-first UX**: PASS. Tailwind responsive utilities and mobile navigation are planned from the
  smallest supported viewport upward.
- **Accessibility**: PASS. Semantic landmarks, keyboard-accessible mobile menu, focus styles, alt text,
  heading hierarchy, and contrast review are explicit validation gates.
- **Maintainability and extensibility**: PASS. Typed data is separate from UI; future data sources can
  replace local modules without adding Wave 2 capabilities now.
- **Workflow and deployment**: PASS. Build and lint are required in GitHub Actions before GitHub Pages
  deployment from the main production branch.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output (/speckit-plan command)
├── data-model.md        # Phase 1 output (/speckit-plan command)
├── quickstart.md        # Phase 1 output (/speckit-plan command)
├── contracts/           # Phase 1 output (/speckit-plan command)
└── tasks.md             # Phase 2 output (/speckit-tasks command - NOT created by /speckit-plan)
```

### Source Code (repository root)

<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
app/
├── about/page.tsx
├── collections/page.tsx
├── contact/page.tsx
├── products/page.tsx
├── products/[slug]/page.tsx
├── layout.tsx
├── page.tsx
└── globals.css
components/
├── AboutSection.tsx
├── CollectionCard.tsx
├── CollectionGrid.tsx
├── ContactSection.tsx
├── Footer.tsx
├── Hero.tsx
├── MobileMenu.tsx
├── Navbar.tsx
├── ProductCard.tsx
└── ProductGrid.tsx
data/
├── collections.ts
├── products.ts
└── site.ts
types/
└── catalog.ts
public/
├── collections/
├── images/
└── products/
.github/workflows/deploy.yml
next.config.ts
postcss.config.mjs
tailwind.config.ts
tsconfig.json
```

**Structure Decision**: Use one App Router project at the repository root. Route files own page
composition and metadata; reusable components own repeated presentation; typed local data owns
catalogue content; `public/` owns replaceable static photography; and the workflow owns deployment.
About and Contact have dedicated routes because they are primary navigation destinations, while the
homepage reuses concise preview sections to support discovery.

## Complexity Tracking

No constitution violations. Tailwind is limited to responsive styling and design tokens; no component
library, state-management library, CMS, API client, or animation framework is planned.
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
