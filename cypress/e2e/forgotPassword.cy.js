/// <reference types="cypress" />

import commonFunctions from "../common/commonFunctions";
import commonWebActions from "../common/commonWebActions";
import resourceData from "../common/resourceData";

const cwa = new commonWebActions
const cf = new commonFunctions
const rd = new resourceData


describe('Account Recovery', () => {
    it ('Clicking Sign-up button', () => {
        cwa.openWebPage();
        cwa.loginWebPage(rd.clientUserName, rd.plAdminPassword, rd.smsCode);
        cy.wait(20000);
        cy.intercept({ resourceType: /xhr|fetch/ }).as('search');
        cy.wait(90000);
        cf.checkXhrRequests('@search.all');
    })

    it.only ('Access Line Forgot Password', () => {
        cwa.openWebPage();
        cy.wait(5000);
        cy.log('Start of end to end testing...');
        cy.intercept({ resourceType: /xhr|fetch/ }).as('search');
        cy.wait(30000);
        cy.log('End of end to end testing...');
        cf.checkXhrRequests('@search.all');
    })


})