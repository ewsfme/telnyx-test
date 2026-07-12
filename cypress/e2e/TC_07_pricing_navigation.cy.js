import mainPage from '../pageObjects/MainPage';

describe('TC_07: Why Telnyx Navigation', () => {
  it('Verify Why Telnyx Link Redirects to Correct Page', () => {
    mainPage.visit();
    
    mainPage.getNavItem('Why Telnyx')
      .should('be.visible')
      .click();
    
    cy.url({ timeout: 10000 })
      .should('include', '/why-telnyx');
  });
});