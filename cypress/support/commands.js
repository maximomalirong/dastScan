// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('webLogin', (email, password, smsCode) => {
    //Login Page
    cy.get('input[id="UserName"]').clear().type(email);
    cy.get('input[id="Password"]').clear().type(password);
    cy.get('button[class="btn btn-rounded btn-lg btn-primary btn-block"]').click();

    //MFA Page
    cy.wait(5000);
    cy.get('div[class="navbar-brand large block m-t theme"]').click();
    cy.get('input[class="form-control text-center ng-pristine ng-valid ng-empty ng-valid-maxlength ng-touched"]').type(smsCode);
    cy.get('button[type="submit"]').click();
    cy.wait(10000);
})

Cypress.Commands.add('invokeEndpoint', (sampleURL) => {

    return cy.request({
        method: 'GET',
        //url: Cypress.env('baseUrl') + 'validate',
        url: sampleURL,
        failOnStatusCode: false,
       /* headers: {
            'client-id': clientId,
            'client-secret' : clientSecret,
            'host': Cypress.env('hostServices')
        },
        body: {
            cardNumber: cardInfo.cardNumber ,
            cardHolder: cardInfo.cardHolder,
            expiryMonth: cardInfo.expiryMonth,
            expiryYear: cardInfo.expiryYear,
            cid: cardInfo.cid,
            currency: cardInfo.currency,
            referenceNumber: cardInfo.referenceNumber,
            cardAcceptIdCode: cardInfo.cardAcceptIdCode,
            merchantCategoryCode: cardInfo.merchantCategoryCode
        }*/
    })
})