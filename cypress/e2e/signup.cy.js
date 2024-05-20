/// <reference types="cypress" />

import commonFunctions from "../common/commonFunctions";
import commonWebActions from "../common/commonWebActions";
import resourceData from "../common/resourceData";

const cwa = new commonWebActions
const cf = new commonFunctions
const rd = new resourceData

beforeEach(() => {
    cwa.openWebPage();
})

/*afterEach(() => {
    cf.checkXhrRequests('@search.all');
})*/


describe('Sign - Up', () => {
    it.skip ('Clicking Sign-up button', () => {
        cwa.openWebPage();
        cy.wait(10000);
        cy.intercept({ resourceType: /xhr|fetch/ }).as('search');
        cwa.clickSignupNow();
        cf.checkXhrRequests('@search.all');
        
    })

    it ('Click Continue button in New Account Setup page', () => {
        cwa.clickSignupNow();
        cy.intercept({ resourceType: /xhr|fetch/ }).as('search');
        cy.get(rd.continueNewAccountSetup).click();
        cy.wait(5000);
        cf.checkXhrRequests('@search.all');
    })

    it ('Input and Verify ABN', () => {
        cwa.clickSignupNow();
        cy.get(rd.continueNewAccountSetup).click();
        cy.intercept({ resourceType: /xhr|fetch/ }).as('search');
        cwa.inputAbnAndUserDetails();
        cf.checkXhrRequests('@search.all');
    })

    it ('Input Company details and Address', () => {
        cwa.clickSignupNow();
        cy.get(rd.continueNewAccountSetup).click();
        cwa.inputAbnAndUserDetails();
        cy.intercept({ resourceType: /xhr|fetch/ }).as('search');
        cwa.inputCompanyDetailsAndAddress();
        cf.checkXhrRequests('@search.all');
    })

    it ('Input Questions', () => {
        cwa.clickSignupNow();
        cy.get(rd.continueNewAccountSetup).click();
        cwa.inputAbnAndUserDetails();
        cwa.inputCompanyDetailsAndAddress();
        cy.intercept({ resourceType: /xhr|fetch/ }).as('search');
        cwa.inputQuestionsDetails();
        cf.checkXhrRequests('@search.all');
    })

    it.only ('Input User Details', () => {
        cwa.clickSignupNow();
        cy.get(rd.continueNewAccountSetup).click();
        cwa.inputAbnAndUserDetails();
        cwa.inputCompanyDetailsAndAddress();
        cwa.inputQuestionsDetails();
        cy.intercept({ resourceType: /xhr|fetch/ }).as('search');
        cwa.inputUserDetails();
        cf.checkXhrRequests('@search.all');
    })

    it ('Input Terms', () => {
        cwa.clickSignupNow();
        cy.get(rd.continueNewAccountSetup).click();
        cwa.inputAbnAndUserDetails();
        cwa.inputCompanyDetailsAndAddress();
        cwa.inputQuestionsDetails();
        cwa.inputUserDetails();
        cy.intercept({ resourceType: /xhr|fetch/ }).as('search');
        cwa.inputTerms();
        cf.checkXhrRequests('@search.all');
    })
})