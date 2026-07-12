import mainPage from '../pageObjects/MainPage';

describe('TC-01: Homepage loads with correct title and hero heading', () => {
  it('Verify homepage responds and shows a non-empty hero heading', () => {
    mainPage.visit();
    mainPage.verifyTitleContains('Telnyx');

    mainPage
      .getHeroHeading()
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        expect(text.trim().length).to.be.greaterThan(0);
      });
  });
});