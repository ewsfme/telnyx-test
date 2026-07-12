/**
 * Asserts that a link (an <a> element) is visible and points to the expected
 * destination, without ever clicking it - used to keep restricted flows
 * (Sign up / Log in) out of the executed test path.
 */
Cypress.Commands.add('assertLinkHref', { prevSubject: true }, (subject, expectedHrefPart) => {
  cy.wrap(subject)
    .should('be.visible')
    .and('have.attr', 'href')
    .and('include', expectedHrefPart);
});
