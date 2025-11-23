import { loginFunction, navigateToWebsite, logoutFunction, clickAction, clickWaitType } from "../commonFunctions/commonFunctions.js";
import testData from "../fixtures/testData.json";
import loginPage from "../pageObject/loginPage.json";
import homePage from "../pageObject/homePage.json";
import { verifyTextContains, verifyVisibility } from "../commonFunctions/commonAssertions.js";

const { signUpName, signUpEmail, signUpButton, signUpError, loginButton, loginError, loginEmail, loginPassword } = loginPage;
const { signUpLoginButton } = homePage;
const { emailExistsErrorMessage, emailId, name, passwordInv, invalidEmailPswdTxt } = testData

describe("Login and Logout Scenarios", () => {

    it("Valid login scenario", () => {
        loginFunction();
    })

    it("Valid logout scenario", () => {
        loginFunction();
        logoutFunction();
    })
    it("Invalid login scenario", () => {
        navigateToWebsite();
        clickAction({ locator: signUpLoginButton });
        clickWaitType({ locator: loginEmail, text: emailId });
        clickWaitType({ locator: loginPassword, text: passwordInv });
        clickAction({ locator: loginButton });
        verifyTextContains({ locator: loginError, text: invalidEmailPswdTxt });
    })
    it("Email exists scenario", {}, () => {
        navigateToWebsite();
        clickAction({ locator: signUpLoginButton })
        clickWaitType({ locator: signUpName, text: name });
        clickWaitType({ locator: signUpEmail, text: emailId });
        clickAction({ locator: signUpButton })
        verifyTextContains({ locator: signUpError, text: emailExistsErrorMessage });
    });
})