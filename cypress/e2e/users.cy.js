/// <reference types="cypress" />

import commonFunctions from "../common/commonFunctions";
import commonWebActions from "../common/commonWebActions";
import resourceData from "../common/resourceData";

const cwa = new commonWebActions
const cf = new commonFunctions
const rd = new resourceData

let menu = 'users';

describe('Users', () => {
    it ('Adding Users', () => {
        cwa.openWebPage();
        cwa.loginWebPage(rd.clientUserName, rd.plAdminPassword, rd.smsCode);
        cy.wait(20000);
        cy.intercept({ resourceType: /xhr|fetch/ }).as('dastScan');
        cwa.addUser();
        cf.checkXhrRequests('@dastScan.all', menu);
    })

    it ('Editing Users', () => {
        cwa.openWebPage();
        cwa.loginWebPage(rd.clientUserName, rd.plAdminPassword, rd.smsCode);
        cy.wait(20000);
        cy.intercept({ resourceType: /xhr|fetch/ }).as('dastScan');
        cwa.editUser();
        cf.checkXhrRequests('@dastScan.all', menu);
    })

    it ('Activating Users', () => {
        cwa.openWebPage();
        cwa.loginWebPage(rd.clientUserName, rd.plAdminPassword, rd.smsCode);
        cy.wait(20000);
        cy.intercept({ resourceType: /xhr|fetch/ }).as('dastScan');
        cwa.activateUser();
        cf.checkXhrRequests('@dastScan.all', menu);
    })

    it.only ('Deleting Users', () => {
        cwa.openWebPage();
        cwa.loginWebPage(rd.clientUserName, rd.plAdminPassword, rd.smsCode);
        cy.wait(20000);
        cy.intercept({ resourceType: /xhr|fetch/ }).as('dastScan');
        cwa.deleteUser();
        cf.checkXhrRequests('@dastScan.all', menu);
    })

})