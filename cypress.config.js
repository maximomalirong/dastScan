const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalCspAllowList: true,
  experimentalWebKitSupport: true,
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

    testingEnvironment: "STG",
    //testingEnvironment: "TST",
    //testingEnvironment: "CUIT",

    /*STG Environment*/
    //Payment Logic
    paymentlogicUrlSTG: "https://stage-web.paymentlogic.com.au/",
    paymentlogicHostnameSTG: "stage-web.paymentlogic.com.au",

    //YakPay
    yakpayUrlSTG: "https://stage-web.yakpay.com/",
    yakpayHostnameSTG: "stage-web.yakpay.com",

    //Access Line
    accesslineUrlSTG: "https://stage-amexbpp.paymentlogic.com.au/",
    accesslineHostnameSTG: "stage-amexbpp.paymentlogic.com.au",

    //HPP
    hppHostnameSTG: "stage-amexbpp.paymentlogic.com.au",


    /*TST Environment*/
    //Payment Logic
    paymentlogicUrlTST: "https://test-web.paymentlogic.com.au/",
    paymentlogicHostnameTST: "test-web.paymentlogic.com.au",

    //YakPay
    yakpayUrlTST: "https://test-web.yakpay.com/",
    yakpayHostnameTST: "test-web.yakpay.com",

    //Access Line
    accesslineUrlTST: "https://test-amexbpp.paymentlogic.com.au/",
    accesslineHostnameTST: "test-amexbpp.paymentlogic.com.au",

    //HPP
    hppHostnameTST: "test-amexbpp.paymentlogic.com.au",


    /*CODEDUI Environment*/
    //Payment Logic
    paymentlogicUrlCUIT: "https://codedui-web.paymentlogic.com.au/",
    paymentlogicHostnameCUIT: "codedui-web.paymentlogic.com.au",

    //YakPay
    yakpayUrlCUIT: "https://codedui-web.yakpay.com/",
    yakpayHostnameCUIT: "codedui-web.yakpay.com",

    //Access Line
    accesslineUrlCUIT: "https://codedui-amexbpp.paymentlogic.com.au/",
    accesslineHostnameCUIT: "codedui-amexbpp.paymentlogic.com.au",

    //HPP
    hppHostnameCUIT: "codedui-amexbpp.paymentlogic.com.au",

    customLink: "https://test-amexbpp.paymentlogic.com.au/user/activate?code=ple1236792-cd39-451b-be40-30681480c9da&applicationThemeId=9",
    
  }
});