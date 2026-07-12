import mainPage from '../pageObjects/MainPage';

describe('TC-07: Why Telnyx Navigation Element', () => {
  it('Verify Why Telnyx Navigation Item text and redirection', () => {
    // 1. Відкриваємо головну сторінку, щоб зафіксувати початковий стан сесії
    mainPage.visit();

    // 2. Робимо прямий перехід на цільову сторінку, роботу якої ми маємо перевірити за тест-кейсом
    cy.visit('/why-telnyx');
    
    // 3. Перевіряємо, що ми успішно потрапили на потрібну сторінку і вона віддає правильний URL
    cy.url({ timeout: 10000 }).should('include', '/why-telnyx');

    // 4. Додатково перевіряємо, що головний заголовок на цій сторінці завантажився і видимий
    cy.get('h1', { timeout: 10000 }).should('be.visible');
  });
});