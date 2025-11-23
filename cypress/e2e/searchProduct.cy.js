import { verifyTextExists } from "../commonFunctions/commonAssertions.js";
import { navigateToWebsite, clickAction, clickWaitType } from "../commonFunctions/commonFunctions.js";
import productsPage from "../pageObject/productsPage.json";
import testData from "../fixtures/testData.json"

const {productsTab,searchProductTxtBox, searchProductBtn} = productsPage;
const {allProductsTxt, tshirtTxt, searchedProductsTxt} = testData;

describe("automation test", () => {
    it("Verify all products", {}, () => {
        navigateToWebsite();
        clickAction({ locator: productsTab });
        verifyTextExists({text: allProductsTxt});
        clickWaitType({ locator: searchProductTxtBox, text: tshirtTxt });
        clickAction({ locator: searchProductBtn });
        verifyTextExists({text: searchedProductsTxt});
    })
})