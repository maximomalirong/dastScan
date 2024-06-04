/// <reference types="cypress" />

import commonFunctions from "../common/commonFunctions";
import commonWebActions from "../common/commonWebActions";
import resourceData from "../common/resourceData";

const cwa = new commonWebActions
const cf = new commonFunctions
const rd = new resourceData

let menu = 'login';

describe('Login', () => {
    it ('Payment Logic - End to End testing for Login', () => {
        cwa.openWebPage();
        cy.wait(20000);
        cy.log('Start of end to end testing...');
        cy.intercept({ resourceType: /xhr|fetch/ }).as('dastScan')
        cwa.loginWebPage(rd.clientUserName, rd.plAdminPassword, rd.smsCode);
        cy.wait(90000);
        cy.log('End of end to end testing...');
        cf.checkXhrRequests('@dastScan.all', menu);
    })

    it ('Access Line - End to End testing for Login using client Admin user', () => {
        cwa.openWebPage();
        cy.wait(20000);
        cy.log('Start of end to end testing...');
        cy.intercept({ resourceType: /xhr|fetch/ }).as('dastScan')
        cwa.loginWebPage(rd.amexBppClientUser, rd.plAdminPassword, rd.smsCode);
        cy.wait(20000);
        cy.log('End of end to end testing...');
        cf.checkXhrRequests('@dastScan.all', menu);
    })

    it.only ('Access Line - End to End testing for Login using Administrator user', () => {
        cwa.openWebPage();
        cy.wait(20000);
        cy.log('Start of end to end testing...');
        cy.intercept({ resourceType: /xhr|fetch/ }).as('dastScan')
        cwa.loginWebPage(rd.amexBppAdminUser, rd.plAdminPassword, rd.smsCode);
        cy.wait(20000);
        cy.log('End of end to end testing...');
        cf.checkXhrRequests('@dastScan.all', menu);
    })
})