import mainPage from '../pageObjects/MainPage';

describe('TC-06: Products Navigation Element', () => {
  it('Verify Products Navigation Item text and state', () => {
    mainPage.visit();

    mainPage.getNavItem('Products')
    mainPage.getNavItem('Products').should('exist').and('contain.text', 'View all products');
  });
});