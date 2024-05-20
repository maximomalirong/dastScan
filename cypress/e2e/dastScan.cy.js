/// <reference types="cypress" />

import commonFunctions from "../common/commonFunctions";
import commonWebActions from "../common/commonWebActions";
import resourceData from "../common/resourceData";

const cwa = new commonWebActions
const cf = new commonFunctions
const rd = new resourceData

afterEach(() => {
    cf.checkXhrRequests('@search.all');
  })


describe('Dast Scan', () => {
    it ('Checking Dast Scan on Page Load', () => {
        cy.intercept({ resourceType: /xhr|fetch/ }).as('search');
        cwa.openWebPage();
        cy.wait(10000);
    })

    it.only ('Checking Dast Scan on Login', () => {
        cwa.openWebPage();
        cy.intercept({ resourceType: /xhr|fetch/ }).as('search');
        cwa.loginWebPage(rd.plAdminUser, rd.plAdminPassword, rd.smsCode);
        cy.wait(30000);
    })
})