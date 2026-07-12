import mainPage from '../pageObjects/MainPage';
import pricingPage from '../pageObjects/PricingPage';

describe('TC-04: Header navigation routes to the Pricing page', () => {
  it('Verify clicking "Pricing" in the header opens the Pricing page', () => {
    mainPage.visit();
    mainPage.clickPricing();

    mainPage.verifyUrlContains('/pricing');
    pricingPage.getHeading().should('be.visible');
  });
});