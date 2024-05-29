/// <reference types="cypress" />

import commonFunctions from "../common/commonFunctions";
import commonWebActions from "../common/commonWebActions";
import resourceData from "../common/resourceData";

const cwa = new commonWebActions
const cf = new commonFunctions
const rd = new resourceData

let menu = 'adminTasks';

describe('Create Payments', () => {
    it ('PL - End to End testing for Admin User', () => {
        cwa.openWebPage();
        cwa.loginWebPage();
        cy.wait(20000);
        cy.intercept({ resourceType: /xhr|fetch/ }).as('dastScan')
        cy.log('Start of end to end testing...');
        cy.wait(90000);
        cy.log('End of end to end testing...');
        cf.checkXhrRequests('@dastScan.all', menu);
    })

    it.only ('Access Line - End to End testing for Admin User', () => {
        cwa.openWebPage();
        cwa.loginWebPage(rd.amexBppAdminUser, rd.plAdminPassword, rd.smsCode);
        cy.wait(20000);
        cy.log('Start of end to end testing...');
        cy.intercept({ resourceType: /xhr|fetch/ }).as('dastScan')
        cy.wait(200000);
        cy.log('End of end to end testing...');
        cf.checkXhrRequests('@dastScan.all', menu);
    })
})