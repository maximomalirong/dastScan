/// <reference types="cypress" />

import commonFunctions from "../../common/commonFunctions";
import commonWebActions from "../../common/commonWebActions";
import resourceData from "../../common/resourceData";

const cwa = new commonWebActions
const cf = new commonFunctions
const rd = new resourceData

let menu = 'createPayment';
let applicationTheme = 'YP';
let environment = cf.generateEnvironmentUrl(applicationTheme);
let webBaseUrl = environment.webBaseUrl;
let hostname = environment.hostname;

describe('Create Payments', () => {
    it ('Payment Logic - End to End testing for Create Payment', () => {
        cwa.openWebPage(webBaseUrl);
        cwa.loginWebPage(rd.clientUserName, rd.plAdminPassword, rd.smsCode);
        cy.wait(20000);
        cy.intercept({ resourceType: /xhr|fetch/ }).as('dastScan');
        cy.log('Start of end to end testing...');
        cy.wait(150000);
        cy.log('End of end to end testing...');
        cf.checkXhrRequests('@dastScan.all', webBaseUrl, hostname, menu);
    })
})