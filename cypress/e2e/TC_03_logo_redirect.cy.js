import mainPage from '../pageObjects/MainPage';
import pricingPage from '../pageObjects/PricingPage';

describe('TC-03: Logo in header links back to the homepage', () => {
  it('Verify clicking the logo from an inner page returns to the homepage', () => {
    pricingPage.visit();

    mainPage.clickLogo();
    mainPage.verifyUrlContains(Cypress.config('baseUrl'));
    mainPage.getHeroHeading().should('be.visible');
  });
});