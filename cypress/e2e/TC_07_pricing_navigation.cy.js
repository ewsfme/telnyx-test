import mainPage from '../pageObjects/MainPage';

describe('TC-07: Why Telnyx Navigation Element', () => {
  it('Verify Why Telnyx Navigation Item text and redirection', () => {
    // 1. Відкриваємо головну сторінку, щоб зафіксувати початковий стан сесії
    mainPage.visit();

    cy.visit('/why-telnyx');
    
    cy.url({ timeout: 10000 }).should('include', '/why-telnyx');

    cy.get('h1', { timeout: 10000 }).should('be.visible');
  });
});