/// <reference types="cypress" />

import commonFunctions from "./commonFunctions";
import resourceData from "./resourceData";

const rd = new resourceData
const cf = new commonFunctions

class commonWebActions {
    launchPaymentLogicPage() {
        this.openWebPage();
        this.loginWebPage(rd.plAdminUser, rd.plAdminPassword, rd.smsCode);
    }

    openWebPage() {
        cy.viewport(1920, 1280);
        cy.visit(Cypress.env('webBaseUrl'), {timeout: 20000})
    }

    loginWebPage(email, password, smsCode) {
        //Login Page
        cy.get(rd.inputFieldUserName).clear().type(email);
        cy.get(rd.inputFieldPassword).clear().type(password);
        cy.get(rd.buttonLogin).click();
        cy.wait(5000);

        //MFA Page
        cy.get(rd.textPaymentLogic).click();
        cy.get(rd.inputFieldSmsCode).type(smsCode);
        cy.get(rd.buttonSubmit).click();
        //cy.wait(10000);
    }

    clickSignupNow() {
        cy.get(rd.signupNowButton).click();
        cy.wait(10000);
    }

    inputAbnAndUserDetails() {
        cy.get(rd.inputAbnField).clear().type(cf.generateRandomAbn());
        cy.get(rd.searchAbnButton).click();
        cy.wait(5000);
        cy.get(rd.firstName).clear().type(cf.generateRandomString(8));
        cy.get(rd.lastName).clear().type(cf.generateRandomString(8));
        cy.get(rd.email).clear().type('testing+auto_' + cf.generateRandomString(5) + '@paymentlogic.com.au');
        cy.get(rd.buttonSubmit).click();
        cy.wait(10000);
    }

    inputCompanyDetailsAndAddress() {
        cy.get(rd.phone).clear().type('0400000000');
        cy.get(rd.entityTypeEmail).clear().type('testing+auto_' + cf.generateRandomString(5) + '@paymentlogic.com.au');
        cy.get(rd.receiptEmail).clear().type('testing+auto_' + cf.generateRandomString(5) + '@paymentlogic.com.au');
        cy.get(rd.addressline1).clear().type(cf.generateRandomString(8));
        cy.get(rd.suburb).clear().type(cf.generateRandomString(8));
        cy.get(rd.state).select(cf.generateRandomState());
        cy.get(rd.postcode).clear().type('1111');
        cy.get(rd.continueNewAccountSetup).click();
        cy.wait(10000);
    }

    inputQuestionsDetails() {
        cy.get(rd.mainIndustry).select('Agriculture, Forestry, Fishing');
        cy.get(rd.coreBusiness).clear().type(cf.generateRandomString(8));
        cy.get(rd.mainSource).select('Sales of Products or Services');
        cy.get(rd.mainPurpose).select('Pay bills and earn membership reward points');
        //cy.get(rd.americanExpressClientButton).click();
        cy.get(rd.accountingSoftwareId).select('Xero');
        cy.get(rd.annualRevenue).select('$0-2M');
        cy.get(rd.numberOfEmployees).select('< 20 employees');
        cy.get(rd.continueNewAccountSetup).click();
        cy.wait(10000);
    }

    inputUserDetails() {
        cy.get(rd.title).clear().type(cf.generateRandomString(8));
        cy.get(rd.email).clear().type('testing+auto_' + cf.generateRandomString(5) + '@paymentlogic.com.au');
        cy.get(rd.mobile).clear().type('0400000001');
        cy.get(rd.addUserButton).click();
        cy.get(rd.continueNewAccountSetup).click();
        cy.wait(10000);
    }

    inputTerms() {
        //cy.get(rd.checkApplicationComplete).check();
        //cy.get(rd.checkServiceAgreement).check();
        cy.wait(10000);
        cy.get(rd.submitSignUpButton).click();
    }

    goToCardsPage() {
        cy.get(rd.cardsMenu).click();
        cy.wait(5000);
    }

    goToUsersPage() {
        cy.get(rd.usersMenu).click();
        cy.wait(5000);
    }

    clickTextmd() {
        cy.get(rd.clickTextmd).click();
    }

    submitCard() {
        cy.get(rd.buttonSubmit).click();
    }

    addCardWithoutAccounting(cardType, accountingIntegration) {
        this.goToCardsPage();
        this.clickTextmd();
        cy.get(rd.cardnumber).clear().type(cf.generateRandomCardNumber(cardType));
        cy.get(rd.carddescription).clear().type(cf.generateRandomString(8));
        cy.get(rd.cardholdername).clear().type(cf.generateRandomString(8));
        cy.get(rd.cardexpirymonth).clear().type(cf.generateRandomExpiryMonth());
        cy.get(rd.cardexpiryyear).clear().type(cf.generateRandomExpiryYear());
        cy.get(rd.cardavailability).select('All users within my organisation can view/use this credit card');
        cy.get(rd.statementperiod).select('5');
        if (accountingIntegration === "Xero") {

        } else if (accountingIntegration === "Myob") {
            cy.get(rd.paymentCodes).select('2-1333 - Arvin Test from Web MYOB');
        } else {
            cy.log('Submit card')
        }
        this.submitCard();
        cy.wait(5000);
    }

    addUser() {
        this.goToUsersPage();
        this.clickTextmd();
        cy.get(rd.roleCode).select('Client Administrator');
        cy.get(rd.firstName).clear().type(cf.generateRandomString(8));
        cy.get(rd.lastName).clear().type(cf.generateRandomString(8));
        cy.get(rd.title).clear().type(cf.generateRandomString(8));
        cy.get(rd.email).clear().type('testing+auto_' + cf.generateRandomString(5) + '@paymentlogic.com.au');
        cy.get(rd.mobile).clear().type('0400000001');
        this.submitUser();
        cy.wait(20000);
    }

    editUser() {
        this.goToUsersPage();
        cy.get(rd.actionCog).last().click();
        cy.get(rd.editUserActionCog).last().click();
        cy.get(rd.title).clear().type(cf.generateRandomString(8));
        this.submitUser();
        cy.wait(20000);
    }

    activateUser() {
        this.goToUsersPage();
        cy.get(rd.actionCog).last().click();
        //cy.get(rd.activateUserActionCog).click();
        cy.contains('Activate Account').last().click();
        cy.get(rd.deleteUserbutton).click();
        cy.wait(20000);
    }

    deleteUser() {
        this.goToUsersPage();
        cy.get(rd.actionCog).last().click();
        cy.get(rd.deleteUserActionCog).click();
        cy.get(rd.deleteUserbutton).last().click({multiple: true});
        cy.wait(20000);
    }

    submitUser() {
        cy.get(rd.submitUser).click();
    }

}

export default commonWebActions