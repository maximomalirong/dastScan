/// <reference types="cypress" />

class commonFunctions {
    checkXhrRequests(arbitrary, menu) {
        cy.get(arbitrary).then((endpoints) => {
            for (let i = 0; i < endpoints.length; i++) {
                //assert.equal(endpoints[i].response.statusCode, 200, 'endpoint : ' + endpoints[i].response.url);
                const date = Date.now()

                if (endpoints[i].response.statusCode != 200) {

                    cy.writeFile('logs/'+ menu + '/statusCode_' + date + '.text',
                    endpoints[i].response.url + "\n" +
                    'statusCode: ' + endpoints[i].response.statusCode,
                    );
                }
                
                /*if (endpoints[i].request.headers.host === Cypress.env('hostname') && endpoints[i].response.headers['content-type'] != 'application/x-javascript')
                {
                    expect(endpoints[i].response.headers).to.have.property('content-security-policy');
                } else {
                    cy.log('No checking for content-security-policy');
                }*/

                if (endpoints[i].request.headers.host === Cypress.env('hostname') && endpoints[i].response.headers['content-security-policy'] != null) {
                    cy.log('CSP is present')
                }
                
                //else if (endpoints[i].request.headers.host === Cypress.env('hostname') && endpoints[i].response.headers['content-type'] != "text/html")
                else if (endpoints[i].request.headers.host === Cypress.env('hostname'))
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
}

export default commonFunctions