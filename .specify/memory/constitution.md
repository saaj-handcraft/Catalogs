<!--
Sync Impact Report
- Version change: none -> 1.0.0 (initial constitution)
- Modified principles: none; established seven initial principles
- Added sections: Technology and Architecture Constraints; Development Workflow and Quality Gates
- Removed sections: none
- Follow-up TODOs: Confirm the original ratification date in RATIFICATION_DATE.
-->

# Handcrafts Brand Website Constitution

## Core Principles

### I. Simplicity First

The project MUST choose the smallest solution that satisfies the product requirement. It MUST
avoid unnecessary dependencies, abstractions, state management, and infrastructure. Every added
complexity MUST have a documented purpose, and speculative Phase 2 functionality MUST NOT enter
Phase 1 implementation. This keeps a small static showcase understandable and inexpensive to
operate.

### II. Static-First Architecture

Phase 1 MUST be a static informational product showcase built with Next.js App Router, React, and
strict TypeScript. Product and collection data MUST remain local TypeScript or JSON data, and the
site MUST use Next.js static export. Phase 1 MUST NOT include a backend, database, authentication,
customer accounts, API, customer input, cart, checkout, payment, or order workflow. External
Instagram, email, and WhatsApp links are the only supported contact actions. This boundary makes
deployment predictable while leaving a clear path for future services.

### III. Performance Is a Feature

Pages MUST ship only the assets and JavaScript they need. Images MUST use Next.js image
optimization-compatible practices, explicit dimensions or stable aspect ratios, appropriate formats,
responsive sizing, and meaningful loading priorities. Server Components MUST be preferred, and
`use client` MUST be limited to interactions that require browser state. Changes MUST preserve fast
static loading, avoid layout shift, and pass the project's available build and lint checks.

### IV. Mobile-First User Experience

The interface MUST be designed from small screens upward and remain usable across supported mobile,
tablet, and desktop widths. Content MUST prioritize product imagery, names, descriptions, categories,
and optional prices without requiring horizontal scrolling. Responsive behavior MUST be implemented
with simple, reusable layout rules and tested at representative viewport sizes.

### V. Accessibility by Default

The site MUST use semantic HTML, logical heading structure, keyboard-operable controls, visible
focus states, sufficient color contrast, and descriptive image alt text. Decorative images MUST have
empty alt text, while product and brand imagery MUST communicate its subject in text alternatives.
Accessibility regressions MUST be corrected before deployment, not deferred as polish.

### VI. Maintainable Components and Types

Reusable components MUST own repeated presentation patterns, including Navbar, Hero, ProductCard,
ProductGrid, CollectionCard, About, Contact, and Footer where those surfaces are needed. Product
and collection shapes MUST be explicit TypeScript types; unnecessary `any` is prohibited. Components
MUST have clear responsibilities, and data/content MUST remain separate from presentation where
that improves reuse. This structure keeps content changes inexpensive without introducing a heavy
framework.

### VII. Extensible Without Over-Engineering

The Phase 1 architecture MUST leave stable boundaries for future CMS, enquiry, cart, checkout, and
payment work, but MUST NOT implement those capabilities early. Local catalog data, component
interfaces, routing, and contact links MUST be organized so a later data source or workflow can be
introduced without rewriting the presentation layer. Future extensibility is a design constraint,
not permission to add unused infrastructure.

## Technology and Architecture Constraints

The application MUST use Next.js App Router, React, and strict TypeScript with Next.js static
export. The deployment output MUST be compatible with GitHub Pages. The project MUST use semantic
HTML and reusable components, with Server Components as the default rendering model. Dependencies
MUST be kept minimal and justified by a concrete user or engineering need. Product and collection
records MUST include images, names, descriptions, and categories; pricing MAY be present when
applicable. No server runtime or runtime data service may be required to render Phase 1 pages.

Basic SEO MUST be implemented through descriptive page titles, metadata, canonical or deployment
URL handling where applicable, crawlable semantic content, and descriptive image alternatives.
Interactive behavior MUST remain limited to navigation and external contact links unless a future
constitution amendment explicitly expands Phase 1 scope.

## Development Workflow and Quality Gates

GitHub MUST use a main production branch and short-lived feature branches. Changes MUST be reviewed
against this constitution before merging. Every feature branch MUST pass the project's successful
build and lint checks before deployment; deployment MUST occur through GitHub Actions to GitHub
Pages from the approved production branch. A change that breaks static export, accessibility,
responsive layout, or SEO requirements MUST NOT be deployed.

The Phase 1 definition of done is: all required showcase pages and reusable components are present;
catalog content renders from local typed data; product images and optional prices behave correctly;
mobile and desktop layouts are usable; external contact links work; semantic HTML, alt text,
metadata, and basic SEO are present; no prohibited backend or commerce capability exists; and the
production build and lint checks pass in CI.

## Governance

This constitution is the governing standard for the project and takes precedence over informal
practice. Amendments MUST state the affected principles or sections, rationale, compatibility impact,
and any migration or follow-up work. Amendments require review before merging and MUST update the
Sync Impact Report and Last Amended date.

Versions use semantic versioning: MAJOR for backward-incompatible governance or principle changes,
MINOR for new principles or materially expanded requirements, and PATCH for clarifications and
non-semantic corrections. Every pull request and release review MUST verify the relevant principles,
static export, build/lint status, accessibility, responsive behavior, and deployment target. Any
intentional exception MUST be recorded in the change rationale and approved with the amendment.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): confirm original adoption date | **Last Amended**: 2026-09-23
