/// <reference types="cypress" />

import commonFunctions from "../common/commonFunctions";
import commonWebActions from "../common/commonWebActions";
import resourceData from "../common/resourceData";

const cwa = new commonWebActions
const cf = new commonFunctions
const rd = new resourceData

let cardType = 'Amex'

describe('Cards', () => {
    it ('Adding Cards - No Accounting Integration Connected', () => {
        cwa.openWebPage();
        cwa.loginWebPage(rd.clientUserName, rd.plAdminPassword, rd.smsCode);
        cy.wait(20000);
        cy.intercept({ resourceType: /xhr|fetch/ }).as('search');
        cwa.addCardWithoutAccounting(cardType);
        cf.checkXhrRequests('@search.all');
    })

    it ('Adding Cards - Myob', () => {
        let accountingIntegration = 'Myob';
        cwa.openWebPage();
        cwa.loginWebPage(rd.clientUserName, rd.plAdminPassword, rd.smsCode);
        cy.wait(20000);
        cy.intercept({ resourceType: /xhr|fetch/ }).as('search');
        cwa.addCardWithoutAccounting(cardType, accountingIntegration);
        cf.checkXhrRequests('@search.all');
    })

    it ('Adding Cards - Xero', () => {
        let accountingIntegration = 'Xero';
        cwa.openWebPage();
        cwa.loginWebPage(rd.clientUserName, rd.plAdminPassword, rd.smsCode);
        cy.wait(20000);
        cy.intercept({ resourceType: /xhr|fetch/ }).as('search');
        cwa.addCardWithoutAccounting(cardType, accountingIntegration);
        cf.checkXhrRequests('@search.all');
    })

})