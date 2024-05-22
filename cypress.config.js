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
    /*Payment Logic */
    //webBaseUrl: "https://codedui-web.paymentlogic.com.au/",
    //hostname: "codedui-web.paymentlogic.com.au",

    /*Access Line */
    webBaseUrl: "https://codedui-amexbpp.paymentlogic.com.au/",
    hostname: "codedui-amexbpp.paymentlogic.com.au",

    customLink: "http://url8177.paymentlogic.com.au/ls/click?upn=u001.tS8KxZcN-2FPrI6on0cUtN8-2FJM5uF1xdkzcf9IX2eaUN6Gr0L6O-2BGeAgBRVYROdFssPORPVdXAnNfRSLV3dXlD6w0cub3H-2B8njDLVibtLfyUoRXyNv-2BHnHr7-2F-2Fa7APVqEAXhTHFkQLwPViEl3CP-2FW6sj405-2FQXslFe2xESOcM33hmXDSy5nv7wn1QSrYqBYitrtoRi_7sByLyo3g2v-2FCMtBrAgARx0-2FMv04chvQ8BbHfXyOesmnJO-2Bfi2prl-2F05lHyEIPLRPajpwVC0cs2-2Bq-2B88-2FAfoA8x3xo9A0ct4yEWh2BomddimDGtfgT3HVluMjQlipzAutuy0ejlYdvNjxv31xFHQlWsQO-2B7aSB2O8XAGL6AZ8pHsudO7SEZovjCUTvxPLVKvcXsg2CAD0LvAdd0sP144GGWDckGwnexSsw2VO6M9AtY-3D",
    

    /*TST Environment */
    //webBaseUrl: "https://test-web.paymentlogic.com.au/",
    //hostname: "test-web.paymentlogic.com.au",
  }
});