const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '781uu6',


  defaultCommandTimeout: 10000,
  pageLoadTimeout: 30000,
  video: true,
  screenshotOnRunFailure: true,
  chromeWebSecurity: false,

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/html',
    charts: true,
    overwrite: false,
    html: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },

  e2e: {
    baseUrl: 'https://telnyx.com',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});
