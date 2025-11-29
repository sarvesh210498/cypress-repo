import testData from '../../fixtures/testData.json';
import { randomNameGenerator, randomEmailGenerator } from "../../commonFunctions/commonFunctions.js";

const { apiURL, activeTxt } = testData;

describe("POST user request", () => {

    let accessToken = {tokenVal}
    it("Create a new user", () => {
        const userName = randomNameGenerator();
        const email = randomEmailGenerator();
        cy.request({
            method: "POST",
            url: apiURL,
            headers: {
                "Authorization": "Bearer " + accessToken
            },
            body: {
                "name": userName,
                "gender": "male",
                "email": email,
                "status": activeTxt
            }
        }).then((response) => {
            // Assert the response status code
            expect(response.status).to.eq(201);
            cy.log('Response Body:', JSON.stringify(response.body));
            expect(response.body).has.property("name", userName);
            expect(response.body).has.property("email", email);
            expect(response.body).has.property("status", activeTxt);
        })
    });
});