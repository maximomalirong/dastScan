const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalCspAllowList: true,
  defaultCommandTimeout: 10000,
  taskTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    baseUrl: "https://stage-amexapi.paymentlogic.com.au/",
    hostServices: "stage-amexapi.paymentlogic.com.au",

    /*STG Environment 
    webBaseUrl: "https://stage-web.paymentlogic.com.au/",
    hostname: "stage-web.paymentlogic.com.au",*/

    /*CODEDUI Environment */
    webBaseUrl: "https://codedui-web.paymentlogic.com.au/",
    hostname: "codedui-web.paymentlogic.com.au",

    /*TST Environment */
    //webBaseUrl: "https://test-web.paymentlogic.com.au/",
    //hostname: "test-web.paymentlogic.com.au",
  }
});