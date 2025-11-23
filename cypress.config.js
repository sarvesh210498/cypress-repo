const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results/mochawesome",
    overwrite: true,
    html: false,
    json: true
  },

  e2e: {
    setupNodeEvents(on, config) {
      return config;
    }
  }
});