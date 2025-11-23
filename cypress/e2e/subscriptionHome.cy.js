import { verifyTextContains, verifyTextExists } from "../commonFunctions/commonAssertions.js";
import { navigateToWebsite, clickAction, clickWaitType, scrollToBottom } from "../commonFunctions/commonFunctions.js";
import homePage from "../pageObject/homePage.json";
import testData from "../fixtures/testData.json";

const { footerSubscription, subscribeButton, subscribeEmail } = homePage;
const { subscriptionTxt, emailId, subscriptionSuccessMsg } = testData;
describe("automation test", () => {

    it("Subscription", {}, () => {
        navigateToWebsite();
        scrollToBottom();
        verifyTextContains({ locator: footerSubscription, text: subscriptionTxt });
        clickWaitType({ locator: subscribeEmail, text: emailId });
        clickAction({ locator: subscribeButton });
        verifyTextExists({ text: subscriptionSuccessMsg });
    })
})