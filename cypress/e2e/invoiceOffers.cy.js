/// <reference types="cypress" />

import commonFunctions from "../common/commonFunctions";
import commonWebActions from "../common/commonWebActions";
import resourceData from "../common/resourceData";

const cwa = new commonWebActions
const cf = new commonFunctions
const rd = new resourceData

let menu = 'invoiceOffers';

describe('Invoice Offers', () => {
    it ('End to End testing for Invoice Offers', () => {
        cwa.openWebPage();
        cwa.loginWebPage(rd.clientUserName, rd.plAdminPassword, rd.smsCode);
        cy.wait(20000);
        cy.intercept({ resourceType: /xhr|fetch/ }).as('search');
        cy.wait(90000);
        cf.checkXhrRequests('@search.all', menu);
    })

})