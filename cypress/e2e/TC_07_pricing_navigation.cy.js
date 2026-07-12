import mainPage from '../pageObjects/MainPage';

describe('TC-07: Pricing Navigation', () => {
  it('Verify Pricing Link Redirects to Correct Page', () => {
    mainPage.visit();
    
    mainPage.clickPricing();
    
    cy.url({ timeout: 10000 }).should('include', '/pricing');
  });
});