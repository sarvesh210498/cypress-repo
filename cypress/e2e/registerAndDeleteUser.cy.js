import { verifyTextContains, verifyTextExists, verifyValue, verifyVisibility } from "../commonFunctions/commonAssertions";
import { clickAction, clickFirstElement, clickWaitType, navigateToWebsite, selectListValue } from "../commonFunctions/commonFunctions";
import signUpData from "../fixtures/signUpData.json";
import testData from "../fixtures/testData.json";
import homePage from "../pageObject/homePage.json";
import loginPage from "../pageObject/loginPage.json";
import signUpPage from "../pageObject/signUpPage.json";

const { newUserMessage, signUpName, signUpEmail, signUpButton } = loginPage;
const { logo, signUpLoginButton } = homePage;
const { nameVal, emailVal, continueAfterDeleteButton, deleteAccountMessage, deleteAccount, loginUserText, continueButton, successCreateDisplay, state, city, zip, mobile, createAccountButton, address, address2, titleSelect, password, newsLetter, specialOffer, selectDay, selectMonth, selectYear, firstName, lastName, company, country } = signUpPage;
const { newUserMessageTxt, signUpNameVal, signUpEmailIdVal, accountInfoTxt } = testData
const { accountDeletedTxt, successfulLoginTxt, accountCreatedTxt, phNumber, cityVal, pinCode, stateVal, pswdVal, dayVal, monthVal, yearVal, firstNameVal, lastNameVal, companyName, addressOneData, addressTwoData, indiaTxt } = signUpData

describe("Automation test", () => {
    it("User registration", {}, () => {
        navigateToWebsite();
        clickAction({ locator: signUpLoginButton })
        verifyTextContains({ locator: newUserMessage, text: newUserMessageTxt });
        clickWaitType({ locator: signUpName, text: signUpNameVal });
        clickWaitType({ locator: signUpEmail, text: signUpEmailIdVal });
        clickAction({ locator: signUpButton })
        verifyTextExists({ text: accountInfoTxt });
        verifyValue({ locator: nameVal, text: signUpNameVal });
        verifyValue({ locator: emailVal, text: signUpEmailIdVal });
        clickFirstElement({ locator: titleSelect })
        clickWaitType({ locator: password, text: pswdVal });
        selectListValue({ locator: selectDay, value: dayVal })
        selectListValue({ locator: selectMonth, value: monthVal })
        selectListValue({ locator: selectYear, value: yearVal })
        clickAction({ locator: newsLetter });
        clickAction({ locator: specialOffer });
        clickWaitType({ locator: firstName, text: firstNameVal });
        clickWaitType({ locator: lastName, text: lastNameVal });
        clickWaitType({ locator: company, text: companyName });
        clickWaitType({ locator: address, text: addressOneData });
        clickWaitType({ locator: address2, text: addressTwoData });
        selectListValue({ locator: country, value: indiaTxt })
        clickWaitType({ locator: state, text: stateVal });
        clickWaitType({ locator: city, text: cityVal });
        clickWaitType({ locator: zip, text: pinCode });
        clickWaitType({ locator: mobile, text: phNumber });
        clickAction({ locator: createAccountButton })
        verifyTextContains({ locator: successCreateDisplay, text: accountCreatedTxt });
        clickAction({ locator: continueButton })
        verifyTextContains({ locator: loginUserText, text: successfulLoginTxt });
        clickAction({ locator: deleteAccount })
        verifyTextContains({ locator: deleteAccountMessage, text: accountDeletedTxt });
        clickAction({ locator: continueAfterDeleteButton })
        verifyVisibility({ locator: logo });
    })
})