import loginPage from "../pageObject/loginPage.json";
import homePage from "../pageObject/homePage.json";
import contactPage from "../pageObject/contactPage.json";
import testData from "../fixtures/testData.json";
import { verifyTextContains, verifyVisibility } from "./commonAssertions.js";

const { loginEmail, loginButton, loginPassword, loginPageMessage, userName } = loginPage;
const { signUpLoginButton, logoutButton, logo } = homePage;
const { contactName, contactEmail, contactSubject, contactMessage, submitButton, successMessage, homeButtonAfterSubmit } = contactPage;
const { emailId, password, userNameText, loginPageMessageTxt, url, name, feedbackSubject, feedbackMessage, successMessageTxt } = testData;

export const loginFunction = async () => {
    {
        navigateToWebsite();
        clickAction({ locator: signUpLoginButton });
        clickWaitType({ locator: loginEmail, text: emailId });
        clickWaitType({ locator: loginPassword, text: password });
        clickAction({ locator: loginButton });
        verifyTextContains({ locator: userName, text: userNameText });
    }
}

export const logoutFunction = async () => {
    {
        clickAction({ locator: logoutButton });
        verifyTextContains({ locator: loginPageMessage, text: loginPageMessageTxt });
    }
}


export const navigateToWebsite = async () => {
    {
        cy.visit(url);
        verifyVisibility({ locator: logo });
    }
}

export const contactFormFunction = async () => {
    {
        navigateToWebsite();
        verifyVisibility({ locator: logo });
        cy.get(homePage.contactUsButton).click();
        clickWaitType({ locator: contactName, text: name });
        clickWaitType({ locator: contactEmail, text: emailId });
        clickWaitType({ locator: contactSubject, text: feedbackSubject });
        clickWaitType({ locator: contactMessage, text: feedbackMessage });
        clickAction({ locator: submitButton });
        verifyTextContains({ locator: successMessage, text: successMessageTxt });
        clickAction({ locator: homeButtonAfterSubmit });
        verifyVisibility({ locator: logo });
    }
}

export const clickAction = ({ locator }) => {
    cy.get(locator).click();
}

export const clickWaitType = ({ locator, text }) => {
    cy.get(locator).click().wait(1000).type(text);
}

export const scrollToBottom = () => {
    cy.scrollTo("bottom");
}

export const clickFirstElement = ({ locator }) => {
    cy.get(locator).first().click();
}

export const selectListValue = ({ locator, value }) => {
    cy.get(locator).select(value);
}