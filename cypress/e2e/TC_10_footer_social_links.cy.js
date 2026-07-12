import mainPage from '../pageObjects/MainPage';
import footer from '../pageObjects/FooterComponent';

describe('TC-10: Footer social media links point to the correct profiles', () => {
  let siteData;

  before(() => {
    cy.fixture('testData').then((data) => {
      siteData = data;
    });
  });

  it('Verify LinkedIn, X and Facebook links are visible and point to the expected profiles', () => {
    mainPage.visit();
    footer.scrollIntoView();

    footer.getLinkedInLink().assertLinkHref(siteData.socialLinks.linkedIn);
    footer.getTwitterLink().assertLinkHref(siteData.socialLinks.twitter);
    footer.getFacebookLink().assertLinkHref(siteData.socialLinks.facebook);
  });
});