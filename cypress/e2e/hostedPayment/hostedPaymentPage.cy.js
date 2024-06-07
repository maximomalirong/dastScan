/// <reference types="cypress" />

import commonFunctions from "../../common/commonFunctions";
import commonWebActions from "../../common/commonWebActions";
import resourceData from "../../common/resourceData";

const cwa = new commonWebActions
const cf = new commonFunctions
const rd = new resourceData

let menu = 'hostedPaymentPage';
let applicationTheme = 'HPP';
let environment = cf.generateEnvironmentUrl(applicationTheme);
let customLink = "https://test-amex.paymentlogic.com.au/aceconconcreteptyltd";
let webBaseUrl = environment.webBaseUrl;
let hostname = environment.hostname;

describe('Hosted Payment Page', () => {
    it ('End to End testing for Hosted Payment Page', () => {
        cy.log('Start of end to end testing...');
        cy.intercept({ resourceType: /xhr|fetch/ }).as('dastScan')
        cwa.openCustomWebPage(customLink);
        cy.wait(150000);
        cy.log('End of end to end testing...');
        cf.checkHppXhrRequests('@dastScan.all', webBaseUrl, hostname, menu);
    })
})