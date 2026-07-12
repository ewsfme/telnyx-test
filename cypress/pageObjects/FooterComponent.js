import BasePage from './BasePage';

class FooterComponent extends BasePage {
  // Locators — constants only, no logic here.
  footer = 'footer';
  privacyPolicyLink = 'footer a[href*="/privacy-policy"]';
  termsLink = 'footer a[href*="/terms-and-conditions"]';
  linkedInLink = 'footer a[href*="linkedin.com"]';
  twitterLink = 'footer a[href*="x.com"], footer a[href*="twitter.com"]';
  facebookLink = 'footer a[href*="facebook.com"]';

  scrollIntoView() {
    cy.get(this.footer).scrollIntoView();
    return this;
  }

  getPrivacyPolicyLink() {
    return cy.get(this.privacyPolicyLink).first();
  }

  clickPrivacyPolicyLink() {
    this.getPrivacyPolicyLink().click({ force: true });
  }

  getTermsLink() {
    return cy.get(this.termsLink).first();
  }

  getLinkedInLink() {
    return cy.get(this.linkedInLink).first();
  }

  getTwitterLink() {
    return cy.get(this.twitterLink).first();
  }

  getFacebookLink() {
    return cy.get(this.facebookLink).first();
  }
}

export default new FooterComponent();