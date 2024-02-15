const { defineConfig } = require("cypress");

module.exports = defineConfig({
  videosFolder: "./cypress/videos",
  screenshotsFolder: "./cypress/screenshots",
  retries: {
    runMode: 1,
    openMode: 0,
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 90000,
  requestTimeout: 60000,
  responseTimeout: 90000,
  taskTimeout: 120000,
  e2e: {
    baseUrl: "http://localhost:3000/",
    specPattern: "./cypress/tests/**/*.js",
    supportFile: "./cypress/support/e2e.js",
    experimentalSessionAndOrigin: true,
  },
});
