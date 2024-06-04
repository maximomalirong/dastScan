/// <reference types="cypress" />

import commonFunctions from "../common/commonFunctions";
import commonWebActions from "../common/commonWebActions";
import resourceData from "../common/resourceData";

const cwa = new commonWebActions
const cf = new commonFunctions
const rd = new resourceData

let menu = 'dastScan';

describe('Sign up', () => {
    it ('End to End testing for Accessline Sign-up', () => {
        cwa.openWebPage();
        cy.wait(5000);
        cy.log('Start of end to end testing...');
        cy.intercept({ resourceType: /xhr|fetch/ }).as('dastScan')
        cy.wait(90000);
        cy.log('End of end to end testing...');
        cf.checkXhrRequests('@dastScan.all', menu);
    })
})