# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # start dev server (http://localhost:3000)
npm run build        # production build
npm run lint         # ESLint
npm run cypress:open # open Cypress Test Runner (interactive)
npm run cypress:run  # headless Cypress run against https://kumar-ten.vercel.app
```

Node ≥ 20.18.0 required.

## Architecture

Single-page portfolio site — Next.js 16 App Router, React 19, Tailwind CSS 4.

**`app/page.jsx`** composes all sections in order:
`Header → Hero → About → Skills → Experience → Resume → Projects → Education → Contact → Footer`

Each section lives as its own component in `app/components/`. All content is hard-coded in these components — no CMS or data layer.

**`app/components/ThemeProvider.jsx`** wraps the entire app for dark/light theme. Applied in `app/layout.jsx` alongside Geist font variables.

`public/Kumarresume.pdf` is the downloadable resume served by the Resume section.

## Testing

E2E only via Cypress. Test file: `cypress/e2e/home.cy.js`. `cypress.config.js` targets `https://kumar-ten.vercel.app` (production URL) — there is no local baseUrl configured.

## CI/CD

`.github/workflows/e2e.yml` runs on push/PR to `main`/`master`:
1. Polls Vercel REST API until the commit's deployment reaches `READY` (10-min cap)
2. Runs Cypress against that deployment URL

Required repo secrets: `VERCEL_TOKEN`, `VERCEL_PROJECT_ID`. `GITHUB_TOKEN` is auto-injected and does not need manual configuration.
