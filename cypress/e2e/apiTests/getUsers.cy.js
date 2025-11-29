import testData from '../../fixtures/testData.json';

const { apiURL, activeTxt } = testData;
describe('GET /users API Tests', () => {

    let accessToken = {tokenVal}; // Replace {tokenVal} with the actual token value or fetch it securely
    it("Fetch entire list", () => {
        cy.request({
            method: "GET",
            url: apiURL,
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        }).then((response) => {
            // Assert the response status code
            expect(response.status).to.eq(200);
            cy.log('Response Body:', JSON.stringify(response.body));
            expect(response.body.length).to.eq(10);
        })
    });
    it("Fetch individual user list", () => {
        cy.request({
            method: "GET",
            url: apiURL + "/8263961",
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        }).then((response) => {
            // Assert the response status code
            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq(activeTxt);
        })
    });
});