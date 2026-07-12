/**
 * BasePage — generic methods shared by every Page Object.
 * No locators live here, only reusable actions/assertions.
 */
class BasePage {
  visit(path = '/') {
    cy.visit(path);
    return this;
  }

  verifyUrlContains(part) {
    cy.url().should('include', part);
    return this;
  }

  verifyTitleContains(text) {
    cy.title().should('include', text);
    return this;
  }
}

export default BasePage;