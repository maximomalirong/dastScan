/// <reference types="cypress" />

import commonFunctions from "../common/commonFunctions";
import commonWebActions from "../common/commonWebActions";
import resourceData from "../common/resourceData";

const cwa = new commonWebActions
const cf = new commonFunctions
const rd = new resourceData

let menu = 'customLink';
let environment = cf.generateEnvironmentUrl();
let webBaseUrl = environment.webBaseUrl;
let hostname = environment.hostname;

describe('Sign up', () => {
    it ('End to End testing for Accessline Sign-up', () => {
        cy.log('Start of end to end testing...');
        cy.intercept({ resourceType: /xhr|fetch/ }).as('dastScan')
        cwa.openCustomWebPage(Cypress.env('customLink'));
        cy.wait(90000);
        cy.log('End of end to end testing...');
        cf.checkXhrRequests('@dastScan.all', webBaseUrl, hostname, menu);
    })
})