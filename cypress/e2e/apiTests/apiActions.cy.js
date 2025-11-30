import testData from '../../fixtures/testData.json';

const { apiURL, activeTxt, maleTxt, automationUser, femaleTxt, inactiveTxt } = testData;
describe("CRUD Operations", () => {

    let userId;
    let accessToken = {tokenVal}; // Replace {tokenVal} with the actual token value or fetch it securely

    it("Fetch entire list (GET)", () => {
        cy.request({
            method: "GET",
            url: apiURL,
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        }).then((response) => {
            // Assert the response status code
            expect(response.status).to.eq(200);
            expect(response.body.length).to.eq(10);
        })
    });
    it("Create a new user (POST) ", () => {
        const timestamp = Date.now();
        const userName = `${automationUser}_${timestamp}`;
        const email = `${automationUser}_${timestamp}@gmail.com`;
        cy.request({
            method: "POST",
            url: apiURL,
            headers: {
                "Authorization": "Bearer " + accessToken
            },
            body: {
                "name": userName,
                "gender": maleTxt,
                "email": email,
                "status": activeTxt
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).has.property("name", userName);
            expect(response.body).has.property("email", email);
            expect(response.body).has.property("status", activeTxt);
        })
    });
    it("Create a new user and fetch it (POST + GET)", () => {

        const timestamp = Date.now();
        const userName = `${automationUser}_${timestamp}`;
        const email = `${automationUser}_${timestamp}@gmail.com`;
        cy.request({
            method: "POST",
            url: apiURL,
            headers: {
                "Authorization": "Bearer " + accessToken
            },
            body: {
                "name": userName,
                "gender": maleTxt,
                "email": email,
                "status": activeTxt
            }
        }).then((response) => {
            // Assert the response status code
            expect(response.status).to.eq(201);
            expect(response.body).has.property("name", userName);
            expect(response.body).has.property("email", email);
            expect(response.body).has.property("status", activeTxt);
            userId = response.body.id;
        }).then(() => {
            cy.request({
                method: "GET",
                url: apiURL + "/" + userId,
                headers: {
                    "Authorization": "Bearer " + accessToken
                }
            }).then((getResponse) => {
                expect(getResponse.status).to.eq(200);
                expect(getResponse.body.status).to.eq(activeTxt);
                expect(getResponse.body).has.property("name", userName);
                expect(getResponse.body).has.property("email", email);
                expect(getResponse.body).has.property("id", userId);
            })
        });
    });
    it("Create a new user and update it (POST + PUT)", () => {

        const timestamp = Date.now();
        const userName = `${automationUser}_${timestamp}`;
        const email = `${automationUser}_${timestamp}@gmail.com`;
        cy.request({
            method: "POST",
            url: apiURL,
            headers: {
                "Authorization": "Bearer " + accessToken
            },
            body: {
                "name": userName,
                "gender": maleTxt,
                "email": email,
                "status": activeTxt
            }
        }).then((response) => {
            // Assert the response status code
            expect(response.status).to.eq(201);
            expect(response.body).has.property("name", userName);
            expect(response.body).has.property("email", email);
            expect(response.body).has.property("status", activeTxt);
            userId = response.body.id;
        }).then(() => {
            cy.request({
                method: "PUT",
                url: apiURL + "/" + userId,
                headers: {
                    "Authorization": "Bearer " + accessToken
                },
                body: {
                    "name": userName,
                    "gender": femaleTxt,
                    "email": email,
                    "status": inactiveTxt
                }
            }).then((putResponse) => {
                expect(putResponse.status).to.eq(200);
                expect(putResponse.body).has.property("name", userName);
                expect(putResponse.body).has.property("email", email);
                expect(putResponse.body).has.property("status", inactiveTxt);
                expect(putResponse.body).has.property("id", userId);
                expect(putResponse.body).has.property("gender", femaleTxt);
            });
        });
    });
    it("Create a new user and delete it (POST + DELETE)", () => {

        const timestamp = Date.now();
        const userName = `${automationUser}_${timestamp}`;
        const email = `${automationUser}_${timestamp}@gmail.com`;
        cy.request({
            method: "POST",
            url: apiURL,
            headers: {
                "Authorization": "Bearer " + accessToken
            },
            body: {
                "name": userName,
                "gender": maleTxt,
                "email": email,
                "status": activeTxt
            }
        }).then((response) => {
            // Assert the response status code
            expect(response.status).to.eq(201);
            expect(response.body).has.property("name", userName);
            expect(response.body).has.property("email", email);
            expect(response.body).has.property("status", activeTxt);
            userId = response.body.id;
        }).then(() => {
            cy.request({
                method: "DELETE",
                url: apiURL + "/" + userId,
                headers: {
                    "Authorization": "Bearer " + accessToken
                }
            }).then((deleteResponse) => {
                expect(deleteResponse.status).to.eq(204);
            });
        });
    });
});