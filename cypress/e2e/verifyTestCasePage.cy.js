import { clickContainsText, verifyTextContains, verifyVisibility } from "../commonFunctions/commonAssertions";
import { navigateToWebsite } from "../commonFunctions/commonFunctions";
import testData from "../fixtures/testData.json";
import homePage from "../pageObject/homePage.json";
import testCasesPage from "../pageObject/testCasesPage.json";

const { logo } = homePage;
const { testCaseDesc } = testCasesPage;
const { url, testCaseDescription, testCasesTxt } = testData;

describe("automation test", () => {
    it("Verify test case page title", {}, () => {
        navigateToWebsite();
        verifyVisibility({ locator: logo });
        clickContainsText({ text: testCasesTxt });
        verifyTextContains({ locator: testCaseDesc, text: testCaseDescription });
    })
})