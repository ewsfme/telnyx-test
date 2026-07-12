# Telnyx UI Automation Project

Automated testing of Telnyx public web pages using Cypress. The project is fully integrated with Cypress Cloud and configured with a GitHub Actions CI/CD Pipeline.

## Tech Stack
* Testing Framework: Cypress v13+
* Design Pattern: Page Object Model (POM)
* Reporting: Cypress Cloud & Mochawesome Reporter
* CI/CD Platform: GitHub Actions

## Requirements
* Node.js (v20 or higher recommended)
* npm

## Local Setup & Execution

1. Install Dependencies:
   ```bash
   npm install

    Open Cypress Test Runner (UI Mode):
    Bash

    npm run cy:open

    Run All Tests in Console (Headless Mode):
    Bash

    npm run cy:run:headless

Test Reporting

To generate detailed local HTML test reports using cypress-mochawesome-reporter:

Run the report generation script:
    Bash

    npm run cy:run:report

Once the execution completes, the report will be available in the /cypress/reports directory. Open index.html in your browser to view the results.