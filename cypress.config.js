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

    //Yak Pay
    //webBaseUrl: "https://codedui-web.yakpay.com/",
    //hostname: "codedui-web.yakpay.com",
    

    /*Access Line */
    webBaseUrl: "https://stage-amexbpp.paymentlogic.com.au/",
    hostname: "stage-amexbpp.paymentlogic.com.au",/**/

    /*CODEDUI Environment */
    /*Payment Logic */
    //webBaseUrl: "https://codedui-web.paymentlogic.com.au/",
    //hostname: "codedui-web.paymentlogic.com.au",

    /*Access Line */
    //webBaseUrl: "https://codedui-amexbpp.paymentlogic.com.au/",
    //hostname: "codedui-amexbpp.paymentlogic.com.au",

    /*HPP  */
    //hostname: "codedui-amexbpp.paymentlogic.com.au",

    customLink: "http://url8177.paymentlogic.com.au/ls/click?upn=u001.tS8KxZcN-2FPrI6on0cUtN8yGxbyUgA3i5KnKKEmMjHn11lctkt1yzzOQa7NpJRuo7u-2BvlbE0DdYiEYN6xWBBhL-2Bld5dn0nby4VFqFnBeSRsIhljQqIeQcWfljyAADmsbb4sABuvXkYoRMiPPZpIm8-2FDMimk5QfYpwx8Q9gSjhaf4-3DOLeX_7sByLyo3g2v-2FCMtBrAgAR-2B2JMw6UhQgvGP2TvTC85z5mGv00MbS8SIrUqpf6vbAYnXFw-2F5Tt7w6-2FEL5RFnvDmSZs26-2BgTQNw2WstkYAO-2FgEdjYzcWkwjEpz-2FIMKiGX8BoDDDJDvY-2BQG4cZbiJx5vmP5O5BFAMFqNTDOSIM18edvjrIkMc-2F1d9OK-2BUTq1p4nz6jcyyP7cE61obzxkRSGRTNBUFMdSxB5DzVZe7WpdmXo-3D",
    

    /*TST Environment */
    //webBaseUrl: "https://test-web.paymentlogic.com.au/",
    //hostname: "test-web.paymentlogic.com.au",
  }
});