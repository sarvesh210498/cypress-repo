




export const verifyVisibility = ({ locator }) => {
    cy.get(locator).should("be.visible");
}

export const clickContainsText = ({ text }) => {
    cy.contains(text).click();
}

export const verifyTextContains = ({ locator, text }) => {
    cy.get(locator).should("have.text", text);
}

export const verifyTextExists = ({ text }) => {
    cy.contains(text).should("exist");
}

export const verifyValue = ({ locator, text }) => {
    cy.get(locator).should("have.value", text);
}