/// <reference types="cypress" />

class resourceData {

    plAdminPassword = 'test1234';
    smsCode = '999999';

    /*Administrator Users */
    plAdminUser = 'maximomalirong';
    password = 'maximo1990maximo';
    amexBppAdminUser = 'amexbppadmin';

    /*Client Users */
    //clientUserName = 'miraidemasupil'
    //clientUserName = 'Josie.McCoole';
    //clientUserName = 'Bwoods15'; //with Rewards
    clientUserName = 'Impressldc'
    amexBppClientUser = 'peter.douglas@belleproperty.com';
    //amexBppClientUser = 'elandco1';

    
    //Login Page
    inputFieldUserName = 'input[id="UserName"]';
    inputFieldPassword = 'input[id="Password"]';
    buttonLogin = 'button[class="btn btn-rounded btn-lg btn-primary btn-block"]';
    textPaymentLogic = 'div[class="navbar-brand large block m-t theme"]';
    inputFieldSmsCode = 'input[class="form-control text-center ng-pristine ng-valid ng-empty ng-valid-maxlength ng-touched"]';
    buttonSubmit = 'button[type="submit"]';

    //Signup Page
    signupNowButton = 'a[class="btn btn-lg btn-default btn-block"]';
    continueNewAccountSetup = 'button[class="btn btn-primary btn-continue btn-rounded"]';
    inputAbnField = 'input[name="Abn"]';
    searchAbnButton = 'button[class="btn btn-lg btn-success btn-addon btn-addon-responsive btn-rounded ng-binding"]';

    //Company Details and Address
    firstName = 'input[name="FirstName"]';
    lastName = 'input[name="LastName"]';
    email = 'input[name="Email"]';
    phone = 'input[name="phone"]';
    entityTypeEmail = 'input[name="entityTypeEmail"]';
    receiptEmail = 'input[name="receiptEmail"]';
    addressline1 = 'input[name="addressline1"]';
    suburb = 'input[name="suburb"]';
    state = 'select[name="state"]';
    postcode = 'input[name="postcode"]';

    //Questions
    mainIndustry = 'select[name="mainIndustry"]';
    coreBusiness = 'input[name="coreBusiness"]';
    mainSource = 'select[name="mainSource"]';
    mainPurpose = 'select[name="mainPurpose"]';
    americanExpressClientButton = 'button[contains(text(),"No")]';
    accountingSoftwareId = 'select[name="accountingSoftwareId"]';
    annualRevenue = 'select[name="annualRevenue"]';
    numberOfEmployees = 'select[name="numberOfEmployees"]';

    //User Details
    title = 'input[name="Title"]';
    mobile = 'input[name="Mobile"]';
    addUserButton = 'button[class="btn btn-success btn-add btn-rounded"]';

    //Terms
    checkApplicationComplete = 'input[ng-model="checkApplicationComplete"]//i';
    checkServiceAgreement = 'input[ng-model="checkServiceAgreement"]//i';
    submitSignUpButton = 'input[class="btn btn-success btn-continue btn-rounded ng-binding"]';

    //Forgot Password
    clickNeedHelp = 'a[title="Account Recovery"]';

    //Common
    clickTextmd = 'span[class="text-md"]';

    //Cards
    cardsMenu = 'i[title="Cards"]';
    cardnumber = 'input[name="cardnumber"]';
    carddescription = 'input[name="description"]';
    cardholdername = 'input[name="cardholdername"]';
    cardexpirymonth = 'input[name="cardexpirymonth"]';
    cardexpiryyear = 'input[name="cardexpiryyear"]';
    cardavailability = 'select[name="availability"]';
    statementperiod = 'select[name="statementperiod"]';
    paymentCodes = 'select[name="paymentCodes"]';

    //Users
    usersMenu = 'i[title="Users"]';
    roleCode = 'select[id="RoleCode"]';
    submitUser = 'button[class="btn btn-primary btn-rounded btn-lg"]';
    actionCog = 'div[class="btn-group dropdown"]';
    editUserActionCog = 'a[href="#/user/details?userId=30818"]';
    deleteUserActionCog= 'a[ng-click="onDeleteUser(user)"]';
    deleteUserbutton = 'button[class="btn btn-danger btn-rounded btn-delete"]';
    activateUserActionCog = '//*[contains(text(),"Activate Account")]';
}

export default resourceData