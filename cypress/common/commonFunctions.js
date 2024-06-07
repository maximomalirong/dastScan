/// <reference types="cypress" />

class commonFunctions {
    checkXhrRequests(arbitrary, webBaseUrl, hostname, menu) {
        cy.get(arbitrary).then((endpoints) => {
            for (let i = 0; i < endpoints.length; i++) {
                const date = Date.now()

                //Check Response status code for each endpoint
                if (endpoints[i].response.statusCode != 200) {

                    cy.writeFile('logs/'+ menu + '/statusCode_' + date + '.text',
                    endpoints[i].response.url + "\n" +
                    'contentType: ' + endpoints[i].response.headers['content-type'] + "\n" +
                    'statusCode: ' + endpoints[i].response.statusCode,
                    );
                }
                
                /*Checking Content Security Policy in Response Header */
                if (endpoints[i].response.url == webBaseUrl + 'Scripts/js/directives/pagination/dirPagination.tpl.html') {
                    cy.log('Known issue');
                }

                else if (endpoints[i].response.url == webBaseUrl + 'Views/Shared/PaginationLoader.html') {
                    cy.log('Known issue');
                }
                
                else if (endpoints[i].response.url == webBaseUrl + 'Views/Shared/ListLoader.html') {
                    cy.log('Known issue');
                }

                else if (endpoints[i].response.url == webBaseUrl + 'Views/Shared/Loader.html') {
                    cy.log('Known issue');
                }
                
                else if (endpoints[i].response.url == webBaseUrl + 'Views/Shared/PageLoader.html') {
                    cy.log('Known issue');
                }
                

                else if (endpoints[i].response.url == webBaseUrl + 'Scripts/l10n/en_AU.js') {
                    cy.log('Known issue');
                }

                else if (endpoints[i].request.headers.host === hostname && endpoints[i].response.headers['content-security-policy'] != null) {
                    cy.log('CSP is present')
                }
                
                else if (endpoints[i].request.headers.host === hostname)
                {
                    cy.writeFile('logs/'+ menu + '/' + date + '.text',
                    endpoints[i].response.url + "\n" +
                    'contentType: ' + endpoints[i].response.headers['content-type'] + "\n" +
                    'content-security-policy: ' + endpoints[i].response.headers['content-security-policy']
                    )
                }
                else {
                    cy.log('Outside PL endpoints and outside MVC controller are not part of scope.')
                }
 
            }
        })
    }

    checkHppXhrRequests(arbitrary, webBaseUrl, hostname,) {
        cy.get(arbitrary).then((endpoints) => {
            for (let i = 0; i < endpoints.length; i++) {
                const date = Date.now()

                if (endpoints[i].response.statusCode != 200) {

                    cy.writeFile('logs/'+ menu + '/statusCode_' + date + '.text',
                    endpoints[i].response.url + "\n" +
                    'contentType: ' + endpoints[i].response.headers['content-type'] + "\n" +
                    'statusCode: ' + endpoints[i].response.statusCode,
                    );
                }
                

                if (endpoints[i].response.headers['access-control-allow-origin'] != hostname) {
                    cy.log('CSP is present')
                }
                else {
                    cy.writeFile('logs/'+ menu + '/' + date + '.text',
                    endpoints[i].response.url + "\n" +
                    'contentType: ' + endpoints[i].response.headers['content-type'] + "\n" +
                    'content-security-policy: ' + endpoints[i].response.headers['content-security-policy']
                    )
                }
 
            }
        })
    }

    generateRandomAbn() {
        var randomAbn = '';

        var randomAbnList = ['55608392212', '22469453778', '19412104361', '33735279801', '14401985985', '24721173907', '46582118228', '51986308807', '98631967271',]
        //var randomAbnList = ['22469453778']
        //11854251854
        return randomAbn = randomAbnList[(Math.random() * randomAbnList.length) | 0]

    }

    generateRandomString(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return result;
    }

    generateRandomState() {
        var randomState = '';
        var stateList = ['VIC', 'NSW', 'ACT', 'TAS', 'QLD', 'NT', 'SA', 'WA']
        return randomState = stateList[(Math.random() * stateList.length) | 0]
    }

    generateRandomCardNumber(cardType) {
        var cardNumber = '';

        if (cardType == 'mastercard')
        {
            var cardNumberList = ['5555555555554444', '5105105105105100', '5371521800329620']
            cardNumberList[(Math.random() * cardNumberList.length) | 0]
        }
        else if (cardType == 'visa')
        {
            var cardNumberList = ['4111111111111111', '4012888888881881', '4916369189504016']
            cardNumber = cardNumberList[(Math.random() * cardNumberList.length) | 0]
        }
        else
        {
            var cardNumberList = ['371111111111114', '371111111111130']
            cardNumber = cardNumberList[(Math.random() * cardNumberList.length) | 0]
        }
        return cardNumber;
    }

    generateRandomExpiryMonth() {
        var expiryMonth = Math.floor(Math.random() * 12) + 1
        if (expiryMonth < 10) {
            return '0' + expiryMonth
        }
        else
        {
            return expiryMonth.toString();
        }
    }

    generateRandomExpiryYear() {
        var expiryYear = new Date().getFullYear() + (Math.floor(Math.random() * 3) + 1)
        var stringYear = expiryYear.toString()
        var last2 = stringYear.substring(stringYear.length - 2)
        return last2
    }

    generateEnvironmentUrl(applicationTheme) {
        //STG environment
        if (Cypress.env('testingEnvironment') == "STG") {
            //Payment Logic
            if (applicationTheme == "PL") {
                return {
                    webBaseUrl : Cypress.env('paymentlogicUrlSTG'),
                    hostname : Cypress.env('paymentlogicHostnameSTG'),
                }
            }

            //YakPay
            else if (applicationTheme == "YP") {
                return {
                    webBaseUrl : Cypress.env('yakpayUrlSTG'),
                    hostname : Cypress.env('yakpayHostnameSTG'),
                }
            }

            //APS
            else if (applicationTheme == "APS") {
                return {
                    webBaseUrl : Cypress.env(''),
                    hostname : Cypress.env(''),
                }
            }

            //Access Line
            else if (applicationTheme == "BPP") {
                return {
                    webBaseUrl : Cypress.env('accesslineUrlSTG'),
                    hostname : Cypress.env('accesslineHostnameSTG'),
                }
            }

            //HPP
            else if (applicationTheme == "HPP") {
                return {
                    webBaseUrl : Cypress.env(''),
                    hostname : Cypress.env('hppHostnameSTG'),
                }
            }
            
            else {
                cy.log('Incorrect application configuration');
            }
        }

        //TST environment
        else if (Cypress.env('testingEnvironment') == "TST") {
            //Payment Logic
            if (applicationTheme == "PL") {
                return {
                    webBaseUrl : Cypress.env('paymentlogicUrlTST'),
                    hostname : Cypress.env('paymentlogicHostnameTST'),
                }
            }

            //YakPay
            else if (applicationTheme == "YP") {
                return {
                    webBaseUrl : Cypress.env('yakpayUrlTST'),
                    hostname : Cypress.env('yakpayHostnameTST'),
                }
            }

            //APS
            else if (applicationTheme == "APS") {
                return {
                    webBaseUrl : Cypress.env(''),
                    hostname : Cypress.env(''),
                }
            }

            //Access Line
            else if (applicationTheme == "BPP") {
                return {
                    webBaseUrl : Cypress.env('accesslineUrlTST'),
                    hostname : Cypress.env('accesslineHostnameTST'),
                }
            }

            //HPP
            else if (applicationTheme == "HPP") {
                return {
                    webBaseUrl : Cypress.env(''),
                    hostname : Cypress.env('hppHostnameTST'),
                }
            }
            
            else {
                cy.log('Incorrect application configuration');
                return null;
            }
        }

        //CODEDUI environment
        else if (Cypress.env('testingEnvironment') == "CUIT") {
            //Payment Logic
            if (applicationTheme == "PL") {
                return {
                    webBaseUrl : Cypress.env('paymentlogicUrlCUIT'),
                    hostname : Cypress.env('paymentlogicHostnameCUIT'),
                }
            }

            //YakPay
            else if (applicationTheme == "YP") {
                return {
                    webBaseUrl : Cypress.env('yakpayUrlCUIT'),
                    hostname : Cypress.env('yakpayHostnameCUIT'),
                }
            }

            //APS
            else if (applicationTheme == "APS") {
                return {
                    webBaseUrl : Cypress.env(''),
                    hostname : Cypress.env(''),
                }
            }

            //Access Line
            else if (applicationTheme == "BPP") {
                return {
                    webBaseUrl : Cypress.env('accesslineUrlCUIT'),
                    hostname : Cypress.env('accesslineHostnameCUIT'),
                }
            }

            //HPP
            else if (applicationTheme == "HPP") {
                return {
                    webBaseUrl : Cypress.env(''),
                    hostname : Cypress.env('hppHostnameCUIT'),
                }
            }
            
            else {
                cy.log('Incorrect application configuration');
                return null;
            }
        }

        else {
            cy.log('Incorrect test environment configuration');
        }
    }
}

export default commonFunctions