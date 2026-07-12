import CookieBanner from '../pageObjects/CookieBanner';

describe('TC-06: Cookie banner acceptance', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Verify the cookie banner is visible on first visit and disappears after accepting', () => {
    CookieBanner.getBanner().should('be.visible');

    CookieBanner.acceptCookies();

    CookieBanner.getBanner().should('not.be.visible');
  });
});