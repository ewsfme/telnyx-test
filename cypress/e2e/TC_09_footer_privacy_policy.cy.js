import mainPage from '../pageObjects/MainPage';
import footer from '../pageObjects/FooterComponent';
import privacyPolicyPage from '../pageObjects/PrivacyPolicyPage';

describe('TC-09: Footer legal links navigate to the correct policy pages', () => {
  let siteData;

  before(() => {
    cy.fixture('testData').then((data) => {
      siteData = data;
    });
  });

  it('Verify clicking "Privacy Policy" in the footer opens the Privacy Policy page', () => {
    mainPage.visit();
    footer.scrollIntoView();
    footer.clickPrivacyPolicyLink();

    footer.verifyUrlContains(siteData.footerLinks.privacyPolicy);
    privacyPolicyPage.getHeading().should('be.visible');
  });
});