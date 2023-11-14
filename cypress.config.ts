import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    "reportDir": "cypress/reports/mochawesome",
    "reportTitle": "Cypress Report",
    "charts": true,
    "overwrite": true,
    "saveJson": false,
    "enableCode": true
  },
  screenshotsFolder: 'cypress/reports/mochawesome/screenshots',
  videosFolder: 'cypress/reports/mochawesome/videos',
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
  e2e: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome' && browser.isHeadless) {
          launchOptions.args.push('--window-size=1920,1080');
        }
        if (browser.name === 'electron' && browser.isHeadless) {
          launchOptions.preferences.width = 1920;
          launchOptions.preferences.height = 1080;
        }
        if (browser.name === 'firefox' && browser.isHeadless) {
          launchOptions.args.push('--width=1920');
          launchOptions.args.push('--height=1080');
        }
        return launchOptions;
      });
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://simpletestsite.fabrykatestow.pl/'
  },
});
