/// <reference types="cypress" />

import commonFunctions from "../common/commonFunctions";
import commonWebActions from "../common/commonWebActions";
import resourceData from "../common/resourceData";

const cwa = new commonWebActions
const cf = new commonFunctions
const rd = new resourceData

let menu = 'dastScan';
let environment = cf.generateEnvironmentUrl();
let webBaseUrl = environment.webBaseUrl;
let hostname = environment.hostname;

describe('Sign up', () => {
    it ('End to End testing for Accessline Sign-up', () => {
        cwa.openWebPage(webBaseUrl);
        cy.wait(5000);
        cy.log('Start of end to end testing...');
        cy.intercept({ resourceType: /xhr|fetch/ }).as('dastScan')
        cy.wait(20000);
        cy.log('End of end to end testing...');
        cf.checkXhrRequests('@dastScan.all', webBaseUrl, hostname, menu);
    })
})