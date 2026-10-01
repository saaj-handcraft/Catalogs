---
description: "Executable task list for implementing the Sajira static showcase"
---

# Tasks: Sajira Handmade Showcase

**Input**: Design documents from `specs/001-sajira-handmade-showcase/`

**Prerequisites**: `plan.md`, `spec.md`

**Tests**: No dedicated test suite is required by the specification. Build, lint, type, link,
accessibility, and browser checks are included as implementation gates.

**Organization**: Tasks are grouped by user story to support incremental delivery. Every task names
its primary files and states a concrete acceptance result. Complete prerequisite phases first.

## Phase 1: Setup

**Purpose**: Initialize the single Next.js application and establish its repeatable local workflow.

- [x] T001 Configuration: Initialize the root project with Next.js App Router, React, strict TypeScript, and npm scripts in `package.json`, `tsconfig.json`, `next-env.d.ts`, and `app/`; acceptance: `npm run dev` starts the app and `npm run build` runs.
- [x] T002 Configuration: Configure ESLint for the chosen Next.js and TypeScript versions in `eslint.config.mjs` and `package.json`; acceptance: `npm run lint` is available and reports no initial scaffold errors.
- [x] T003 [P] Configuration: Add repository ignore rules for dependencies, build output, and local environment files in `.gitignore`; acceptance: generated output and local secrets are not tracked.
- [x] T004 [P] Documentation: Replace the starter README with prerequisites, install, development, lint, type-check, and build commands in `README.md`; acceptance: a developer can start the site from a clean checkout using only these instructions.

---

## Phase 2: Foundational Design and Data

**Purpose**: Establish static-export configuration, design tokens, shared data contracts, and local
assets required before user-facing story work.

- [x] T005 Configuration: Configure static export, trailing-slash behavior, and an environment-driven GitHub Pages base path in `next.config.ts`; acceptance: local builds use the root path and repository deployments can set a base path without hard-coded asset URLs.
- [x] T006 Configuration: Configure Tailwind CSS and its PostCSS integration in `tailwind.config.ts`, `postcss.config.mjs`, and `package.json`; acceptance: utilities compile in the app stylesheet with no additional component or animation library.
- [x] T007 Structure: Create the planned `app/`, `components/`, `data/`, `types/`, `public/products/`, `public/collections/`, and `public/images/` paths; acceptance: the project follows the root-level structure documented in `plan.md`.
- [x] T008 Styling: Define CSS variables for warm neutral backgrounds, restrained festive accents, readable text, spacing, content width, focus ring, and responsive layout tokens in `app/globals.css`; acceptance: shared tokens are usable by pages and components and meet readable contrast targets.
- [x] T009 Styling: Add reusable container, section, button, and focus-visible styles in `app/globals.css`; acceptance: page sections align consistently and links/buttons expose a visible keyboard focus state.
- [x] T010 Data: Define strict `Product`, `Collection`, and contact/site information types in `types/catalog.ts`; acceptance: required product fields are `id`, `name`, `description`, `image`, `category`, and `collection`, while `price`, `availability`, and selected-product `slug` are optional and no `any` is used.
- [x] T011 Data: Add initial typed showcase data in `data/products.ts`, `data/collections.ts`, and `data/site.ts`; acceptance: at least three products and one collection can render the homepage and no runtime data service is required.
- [ ] T012 Assets: Add clearly named, replaceable placeholder hero, product, and collection images under `public/images/`, `public/products/`, and `public/collections/`; acceptance: all initial local data image paths resolve and each image has a documented descriptive alt-text value in its data entry.
- [x] T013 Validation: Verify the foundation with `npm run lint`, `npx tsc --noEmit`, and `npm run build`; acceptance: strict typing, lint, and static export all pass before user-story work begins.

---

## Phase 3: User Story 1 - Discover the Sajira Brand (Priority: P1)

**Goal**: A first-time visitor understands Sajira's handmade focus and can reach product discovery.

**Independent Test**: Start at `/`, identify the brand and product focus, view hero and featured
content, and reach `/products` from a touch or keyboard interaction at mobile and desktop widths.

### Implementation

- [x] T014 [P] [US1] Frontend: Build the responsive site navigation and desktop links for Home, Products, Collections, About, and Contact in `components/Navbar.tsx`; acceptance: all primary routes are reachable with semantic links.
- [x] T015 [P] [US1] Frontend: Build an accessible mobile navigation toggle in `components/MobileMenu.tsx`; acceptance: the menu button has an accessible name and expanded state, supports keyboard open/close, and does not overflow a narrow viewport.
- [x] T016 [P] [US1] Frontend: Build the brand introduction and responsive hero image with a Products call to action in `components/Hero.tsx`; acceptance: meaningful alt text, stable image proportions, and a visible product route are present.
- [x] T017 [P] [US1] Frontend: Build the shared footer with primary navigation and configured social/contact links in `components/Footer.tsx`; acceptance: links use descriptive text and omit unavailable contact methods.
- [x] T018 [US1] Frontend: Compose the homepage shell, metadata, hero, featured product and collection previews, brand-story teaser, craft values, and contact teaser in `app/page.tsx`; acceptance: the page follows the required section order and uses shared components/local data rather than duplicated catalog markup. Depends on T014-T017.
- [x] T019 [US1] SEO/accessibility: Add semantic landmarks, one page-level heading, descriptive section headings, and home metadata in `app/page.tsx` and `app/layout.tsx`; acceptance: heading levels are logical and the browser tab title and description identify Sajira.
- [ ] T020 [US1] Validation: Verify the homepage discovery journey and navigation at phone, tablet, and desktop widths in `README.md` validation notes; acceptance: Products is reachable within three interactions, layout has no horizontal scrolling, and keyboard focus remains visible.

---

## Phase 4: User Story 2 - Browse Products and Collections (Priority: P1)

**Goal**: Visitors browse catalog cards and collections, with detail pages only for selected products.

**Independent Test**: Open Products and Collections, inspect multiple entries, add a data entry
without changing presentation components, and open a selected product's static detail page.

### Implementation

- [x] T021 [P] [US2] Data: Expand `data/products.ts` with the initial showcase catalog and optional price, availability, image alt text, and detail-page slug values; acceptance: adding or editing a product changes data only and unselected products have no detail route.
- [x] T022 [P] [US2] Data: Populate `data/collections.ts` with Festive, Navratri, Diwali, Christmas, New Year, Chhath, Wedding, Hair Accessories, Gifts, and Home Decor; acceptance: each entry has a stable id, name, description, image, and optional slug.
- [x] T023 [P] [US2] Frontend: Build the reusable responsive product card in `components/ProductCard.tsx`; acceptance: it shows image, name, description, category, and only provided price/availability, and links to a detail page only when a product slug exists.
- [x] T024 [P] [US2] Frontend: Build the responsive product grid in `components/ProductGrid.tsx`; acceptance: it accepts typed products and adapts column count to viewport width without horizontal overflow.
- [x] T025 [P] [US2] Frontend: Build reusable collection cards and grid in `components/CollectionCard.tsx` and `components/CollectionGrid.tsx`; acceptance: new collection data renders without modifying either component.
- [x] T026 [US2] Frontend/SEO: Implement the Products route using `ProductGrid` and local product data in `app/products/page.tsx`; acceptance: every product is browseable and the page has a descriptive title, meta description, and single page-level heading. Depends on T021, T023, and T024.
- [x] T027 [US2] Frontend/SEO: Implement the Collections route using `CollectionGrid` and local collection data in `app/collections/page.tsx`; acceptance: all ten initial collections display with valid images and useful text alternatives. Depends on T022 and T025.
- [x] T028 [US2] Frontend: Generate static product detail routes for entries with a slug in `app/products/[slug]/page.tsx`; acceptance: static params are generated only for selected products and each page renders fuller available product information without a runtime server.
- [x] T029 [US2] SEO/navigation: Add product detail metadata and a return-to-catalogue path in `app/products/[slug]/page.tsx`; acceptance: each generated page has a product-specific title/description, valid heading hierarchy, and a working Products link.
- [ ] T030 [US2] Validation: Check all product and collection image paths, descriptive alt text, optional fields, and absent-image layout behavior in `data/products.ts`, `data/collections.ts`, and `public/`; acceptance: no broken local images or invented optional values appear and missing images do not collapse card layout.
- [ ] T031 [US2] Validation: Verify catalog navigation, collection display, and selected/unselected product routes in `README.md` validation notes; acceptance: every selected product opens its detail page, unselected products remain cards, and all collection links/cards behave as specified.

---

## Phase 5: User Story 3 - Find a Way to Contact Sajira (Priority: P2)

**Goal**: Visitors learn the brand story and find available external contact methods without submitting
information to the site.

**Independent Test**: Open About and Contact, review the brand content, activate configured external
links, and confirm no input form or customer-data flow is present.

### Implementation

- [x] T032 [P] [US3] Frontend: Build the reusable brand story and craftsmanship section in `components/AboutSection.tsx`; acceptance: content supports story, handmade philosophy, inspiration, and values without unsupported claims.
- [x] T033 [P] [US3] Frontend: Build the reusable external contact links in `components/ContactSection.tsx`; acceptance: Instagram/email and configured WhatsApp/location are shown with appropriate external destinations, descriptive labels, and no form controls.
- [x] T034 [US3] Frontend/SEO: Implement the About route using `AboutSection` in `app/about/page.tsx`; acceptance: story content is readable, semantically structured, and has page-specific metadata. Depends on T032.
- [x] T035 [US3] Frontend/SEO: Implement the Contact route using `ContactSection` and `data/site.ts` in `app/contact/page.tsx`; acceptance: absent optional contact details are omitted and all configured contact links open their appropriate external destinations. Depends on T033.
- [x] T036 [US3] Validation: Verify About/Contact content and confirm the Wave 1 boundary in `app/about/page.tsx`, `app/contact/page.tsx`, and `components/ContactSection.tsx`; acceptance: no contact form, customer-input field, account, cart, checkout, or transaction control exists.

---

## Phase 6: Polish, Quality Gates, and GitHub Pages

**Purpose**: Complete cross-cutting SEO, responsive, accessibility, performance, static export, and
deployment checks before production publishing.

- [x] T037 [P] [Polish] SEO: Add shared metadata defaults and Open Graph values in `app/layout.tsx` and `data/site.ts`; acceptance: homepage and every primary route have meaningful titles/descriptions and social previews use the correct Sajira identity.
- [ ] T038 [P] [Polish] Accessibility: Review semantic landmarks, heading order, image alternatives, external-link labels, keyboard focus, and contrast in `app/`, `components/`, and `app/globals.css`; acceptance: all primary flows are usable with keyboard navigation and meaningful imagery has descriptive alt text.
- [x] T039 [Polish] Performance: Review image sizing, stable aspect ratios, loading priority, and placeholder replacement instructions in `components/`, `data/`, `public/`, and `README.md`; acceptance: page layout remains stable while images load and replacing photography requires only asset/data edits.
- [x] T040 [Polish] Validation: Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` from `package.json` scripts; acceptance: all quality gates pass and Next.js emits a static `out/` directory.
- [ ] T041 [Polish] Validation: Inspect exported HTML and assets for broken internal links, missing images, and client-side console errors in `out/`; acceptance: all primary navigation, selected detail routes, and local images resolve in the generated site.
- [ ] T042 [Polish] Validation: Perform responsive and mobile-menu checks at representative phone, tablet, laptop, and desktop widths and record results in `README.md`; acceptance: no horizontal scrolling, clipped content, unusable tap targets, or inaccessible menu state remains.
- [x] T043 Configuration: Add the GitHub Pages Actions workflow in `.github/workflows/deploy.yml`; acceptance: pushes to `main` install dependencies, run lint/type/build checks, upload the static `out/` artifact, and deploy it with Pages permissions.
- [x] T044 Configuration: Document GitHub Pages source, repository base-path value, and branch protection expectations in `README.md`; acceptance: deployment configuration identifies `main` as production and feature branches as the change path.
- [ ] T045 Deployment: Configure GitHub repository Pages settings and environment for `.github/workflows/deploy.yml`; acceptance: Pages uses GitHub Actions and the required deployment permissions are enabled.
- [ ] T046 Deployment: Push the approved changes to `main` and verify the Actions run and deployed Sajira URL; acceptance: workflow succeeds, homepage and all primary routes load, selected detail pages load, and images/CSS resolve under the repository URL.
- [ ] T047 [Polish] Documentation: Record the final local/deployed verification results and known content replacements in `README.md`; acceptance: release notes identify successful build, lint, static export, responsive, accessibility, link, image, and Pages checks.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 Setup**: No feature dependencies; initializes the project and local developer commands.
- **Phase 2 Foundation**: Depends on setup; static export, styling, types, initial data, and assets
  block all user stories.
- **Phase 3 US1**: Depends on the foundation; delivers brand discovery and the MVP homepage.
- **Phase 4 US2**: Depends on the foundation; catalog components/data can be developed independently
  of US1, then integrated into the homepage previews.
- **Phase 5 US3**: Depends on the foundation; About and Contact can be developed independently of
  catalog routes.
- **Phase 6 Polish/Deployment**: Start cross-cutting checks after the related stories are implemented;
  production deployment depends on all required stories and successful lint, type, and build checks.

### User Story Dependencies

- **US1 (P1)**: Requires Phase 2 and delivers the recommended MVP discovery journey.
- **US2 (P1)**: Requires Phase 2. It is independently testable; integrate featured catalog content
  into US1 once both are complete.
- **US3 (P2)**: Requires Phase 2 and is independently testable. Homepage preview integration can
  follow US1 without making About or Contact depend on catalog routes.

### Parallel Opportunities

- In Phase 1, T003 and T004 can run in parallel after T001 establishes the project.
- In Phase 2, T008 and T010 can proceed in parallel after T007; T011 depends on T010, and T012 can
  proceed alongside type/data work if file names are coordinated.
- In US1, T014, T016, and T017 edit separate component files and can proceed in parallel; T015 is
  separate but navigation integration should wait for T014.
- In US2, T021/T022 and T023/T024/T025 use separate files and can proceed in parallel after Phase 2;
  route tasks T026-T029 depend on their relevant data/components.
- In US3, T032 and T033 are independent component tasks; T034 and T035 can then proceed in parallel.
- In Polish, metadata, accessibility, and image review can proceed in parallel after their target
  routes/components exist; deployment tasks remain sequential after checks pass.

## Independent Test Criteria

- **US1**: A visitor identifies Sajira, sees the hero and homepage discovery sections, and reaches
  Products within three interactions on phone and desktop; keyboard navigation works and no
  horizontal scrolling occurs.
- **US2**: Products and all ten collections display correctly; product data changes do not require
  component edits; selected products have static detail pages, while unselected products remain
  catalogue cards.
- **US3**: About communicates the brand story; configured Instagram/email/WhatsApp destinations work;
  optional unavailable contacts are omitted; no customer input or transaction flow is present.

## Implementation Strategy

### MVP First

Complete Phase 1 and Phase 2, then Phase 3 (US1). Validate the homepage locally before proceeding.
The homepage may use the small initial typed catalog prepared in the foundation.

### Incremental Delivery

1. Add US2 catalog browsing, collections, and selected product detail pages; validate routes and data.
2. Add US3 About and Contact journeys; verify external links and the no-input boundary.
3. Complete Phase 6 quality gates and GitHub Pages publishing only after all required stories pass.

### Out of Scope

Do not create tasks for backend, database, API, authentication, CMS, customer forms/accounts, cart,
checkout, payments, order management, customer data storage, or a server-side runtime.

## Notes

- Every executable task begins with a checkbox and sequential task ID; story-phase tasks include the
  matching `[US1]`, `[US2]`, or `[US3]` label.
- `[P]` is reserved for tasks that edit separate files and have no unfinished prerequisite.
- Run local checks before deployment; GitHub Actions repeats the required gates on the production
  branch.
