# CWA / Cannex Sales & Trust OS

Notion-style sales enablement workspace for Cannabis Warehouse Australia and
Cannex. Trust-led B2B model: pharmacies and sponsors as direct revenue,
prescribers as the influence and education stakeholder, products differentiated
by documentation and provenance.

## Quick start

```bash
cd apps/cwa-workspace
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## What's inside

14 pages organised into five groups:

- **Overview** — Executive Dashboard, Stakeholder CRM
- **Pipelines** — Pharmacy Sales, Prescriber Education, Sponsor Partnership
- **Trust & Product** — Product Trust Cards, Product Library, Trust Barrier Register
- **Enablement** — Website Resource Centre, Education Asset Library, Sales Scripts
- **Operations** — Compliance Review Queue, KPI Dashboard, Weekly Commercial Review

All content is embedded inline in `src/pages/*.tsx`. Page metadata
(navigation, routes, descriptions) lives in `src/lib/pages.ts`.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS (custom CWA palette in `tailwind.config.ts`)
- React Router (Hash router — works without server-side routing)

## Independence

This app is intentionally self-contained and does not participate in the AI
SDK monorepo's pnpm workspace. It uses its own `node_modules`, has no shared
build pipeline, and can be lifted into its own repo at any time without
refactoring.
