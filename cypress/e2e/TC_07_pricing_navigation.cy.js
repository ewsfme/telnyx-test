import mainPage from '../pageObjects/MainPage';

describe('TC-15: Pricing Navigation', () => {
  it('Verify Pricing Link Redirects to Correct Page', () => {
    mainPage.visit();
    
    mainPage.clickPricing();
    
    // Перевіряємо, що після кліку URL змінився на сторінку ціноутворення
    cy.url({ timeout: 10000 }).should('include', '/pricing');
  });
});