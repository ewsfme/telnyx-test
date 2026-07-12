import mainPage from '../pageObjects/MainPage';
import contactPage from '../pageObjects/ContactPage';

describe('TC-05: Header navigation routes to the Contact Us page', () => {
  let siteData;

  before(() => {
    cy.fixture('testData').then((data) => {
      siteData = data;
    });
  });

  it('Verify clicking "Contact us" opens the Contact Us page with the expected heading', () => {
    mainPage.visit();
    mainPage.clickContactUs();

    mainPage.verifyUrlContains(contactPage.path);
    contactPage.getHeading().should('be.visible').and('contain.text', siteData.contactPageHeading);
  });
});