/// <reference types="cypress" />

import commonFunctions from "../common/commonFunctions";
import commonWebActions from "../common/commonWebActions";
import resourceData from "../common/resourceData";

const cwa = new commonWebActions
const cf = new commonFunctions
const rd = new resourceData

let menu = 'hostedPaymentPage';

describe('Hosted Payment Page', () => {
    it ('End to End testing for Hosted Payment Page', () => {
        cy.log('Start of end to end testing...');
        cy.intercept({ resourceType: /xhr|fetch/ }).as('dastScan')
        cwa.openCustomWebPage();
        cy.wait(150000);
        cy.log('End of end to end testing...');
        cf.checkHppXhrRequests('@dastScan.all', menu);
    })
})