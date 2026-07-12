# Telnyx.com — Cypress UI Test Automation

## Summary

This repository contains an automated UI test suite for the public, unauthenticated
pages of [telnyx.com](https://telnyx.com), built with [Cypress](https://www.cypress.io/)
and the Page Object Model pattern.

The suite covers 10 ISTQB-style test cases (see `Telnyx_Test_Cases.xlsx`) across four
logical spec files:

| Spec file | Covers |
|---|---|
| `cypress/e2e/homepage.cy.js` | Homepage load / smoke check |
| `cypress/e2e/navigation.cy.js` | Header navigation, logo routing, Pricing page, Log in / Sign up controls (visibility + href only — **never clicked**) |
| `cypress/e2e/contact.cy.js` | Contact Us page navigation and the embedded contact form (valid random data / invalid e-mail) |
| `cypress/e2e/footer.cy.js` | Footer legal and social links |
| `cypress/e2e/responsive.cy.js` | Mobile viewport / responsive navigation (optional cross-viewport case) |

> **Important:** per the task requirements, signing in/up on Telnyx is explicitly out
> of scope. Tests only verify that the `Log in` / `Sign up` controls are present and
> point to the correct URLs — they are never clicked or submitted.

### Project structure

```
cypress/
├── e2e/                 # Spec files (test cases), grouped by feature
├── pages/                # Page Object Model: locators (constants) + methods
├── fixtures/             # Static/valid reference data (JSON)
├── support/              # Custom commands, e2e bootstrap, random data factory
cypress.config.js         # Default (desktop, 1366x768) run configuration
cypress.mobile.config.js  # Optional config: same specs on a 375x812 viewport
.github/workflows/cypress.yml   # CI pipeline
Telnyx_Test_Cases.xlsx    # ISTQB-format test case documentation
```

### Page Object Model

Each file under `cypress/pages` exposes only **locators as constants** (class fields)
plus **methods that are called from spec files when needed** — no assertions or test
logic live inside the page objects. `HeaderComponent` and `FooterComponent` are shared
across specs; `HomePage`, `ContactPage`, `PricingPage` and `PrivacyPolicyPage` represent
individual pages.

### Test data

- Random, unique data (first name, last name, e-mail, invalid e-mail) is generated at
  runtime in the spec files via [`@faker-js/faker`](https://fakerjs.dev/), through the
  helper in `cypress/support/testDataFactory.js`.
- Static/valid reference data (expected navigation labels, expected link targets, a
  reusable "valid" company profile) is stored in `cypress/fixtures/*.json` and loaded
  with `cy.fixture()`.

## Requirements

- [Node.js](https://nodejs.org/) 18 LTS or newer
- npm 9+
- Google Chrome (or any browser supported by Cypress) installed locally for `cypress open`

## Steps to install

```bash
git clone <this-repository-url>
cd telnyx-cypress
npm install
```

All dependencies (Cypress, the Mochawesome reporter, Faker) are declared in
`package.json` and are installed by the single `npm install` command above.

## Steps to launch the tests

```bash
# Interactive runner (recommended while writing/debugging tests)
npm run cy:open

# Headless run, default config (Electron browser, 1366x768)
npm run cy:run

# Headless run in Chrome specifically
npm run test:chrome

# Headless run against the optional mobile viewport config (375x812)
npm run test:mobile

# Headless run recorded to the Cypress Cloud dashboard
# (requires a CYPRESS_RECORD_KEY, see "Report" section below)
npm run test:record
```

## Steps to creating the report

Two reporting options are wired up:

### 1. Local/CI HTML report (Mochawesome) — always available

Every run (via `cypress.config.js` / `cypress.mobile.config.js`) is configured with
[`cypress-mochawesome-reporter`](https://github.com/LironEr/cypress-mochawesome-reporter),
which writes a self-contained HTML report (with embedded screenshots) after each run:

```bash
npm run cy:run
# report is generated at cypress/reports/html/index.html
open cypress/reports/html/index.html   # or just open the file in a browser
```

In CI (GitHub Actions), the same report is uploaded as a build artifact named
`cypress-mochawesome-report` on every run — download it from the workflow run summary
page.

### 2. Cypress Cloud dashboard (optional, `-record`)

To additionally publish results to the Cypress Cloud dashboard:

1. Create a free project at [cloud.cypress.io](https://cloud.cypress.io) and grab its
   `projectId` and a `Record Key`.
2. Put the `projectId` in `cypress.config.js` (`projectId` field).
3. Add two **repository secrets** in GitHub → Settings → Secrets and variables →
   Actions: `CYPRESS_RECORD_KEY` and `CYPRESS_PROJECT_ID`.
4. Run locally with `npm run test:record`, or simply push to `main` — the pipeline in
   `.github/workflows/cypress.yml` automatically records to the dashboard whenever
   `CYPRESS_RECORD_KEY` is set, and falls back to the Mochawesome artifact when it is not.

## CI Pipeline

`.github/workflows/cypress.yml` runs on every push/PR to `main` (and manually via
`workflow_dispatch`). It installs dependencies, runs the full suite headlessly in
Chrome, and uploads the Mochawesome HTML report, screenshots (on failure) and videos
as build artifacts. It records to the Cypress Cloud dashboard automatically once the
`CYPRESS_RECORD_KEY` secret is configured.
