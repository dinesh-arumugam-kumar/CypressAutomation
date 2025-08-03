const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/integration/examples/*.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
});
