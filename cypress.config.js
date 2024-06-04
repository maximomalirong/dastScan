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

    /*STG Environment*/
    webBaseUrl: "https://stage-web.paymentlogic.com.au/",
    hostname: "stage-web.paymentlogic.com.au",

    //Yak Pay
    //webBaseUrl: "https://codedui-web.yakpay.com/",
    //hostname: "codedui-web.yakpay.com",
    

    /*Access Line
    webBaseUrl: "https://stage-amexbpp.paymentlogic.com.au/",
    hostname: "stage-amexbpp.paymentlogic.com.au",*/

    /*CODEDUI Environment */
    /*Payment Logic */
    //webBaseUrl: "https://codedui-web.paymentlogic.com.au/",
    //hostname: "codedui-web.paymentlogic.com.au",

    /*Access Line */
    //webBaseUrl: "https://codedui-amexbpp.paymentlogic.com.au/",
    //hostname: "codedui-amexbpp.paymentlogic.com.au",

    /*HPP  */
    //hostname: "codedui-amexbpp.paymentlogic.com.au",

    customLink: "http://url8177.paymentlogic.com.au/ls/click?upn=u001.tS8KxZcN-2FPrI6on0cUtN8-2B5DrIuse09A2zvhprisDX-2F-2FK4vBi5GgfZ7eSpF8MrvK9k0fZvJRPtHNSRCFBUuZR7eI4EyrvCE6OyQ8wo8titUp6tfSPcuC-2FCeXAyM5cX24LcvzkytDodEFFFSsaaACELMp5tK3QGoM-2BpqqSe-2Ff-2BsJVjobkCiJjPQ-2FIpn0QgZ8-2Bl6yq_7sByLyo3g2v-2FCMtBrAgARwy0ev2OnvdqFoikESQkC6fvkgpQrJhBiwUSEse6ldbq79NURvg09v8-2B4592F-2FBUm-2BXsD-2FqJFJQJJGrH7iUMglMlqB0ImMk9qeb9H8wukdSwafX5A-2BXmAxTQb5kdHnZh5lgLUTsPVvFm-2FgEgm9ofjjuoG-2FZN3LrBSbP1D3ouVTNAA6nIvegZJ7-2BK9ZI6E-2FEy-2Bi3RY6EKmMnHvNlX6Z198ZmD4U-2FdVoxMdeKZ65idH01Y",
    

    /*TST Environment */
    //webBaseUrl: "https://test-web.paymentlogic.com.au/",
    //hostname: "test-web.paymentlogic.com.au",
  }
});