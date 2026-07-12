import BasePage from './BasePage';

class PrivacyPolicyPage extends BasePage {
  path = '/privacy-policy';
  heading = 'h1';

  visit() {
    return super.visit(this.path);
  }

  getHeading() {
    return cy.get(this.heading).first();
  }
}

export default new PrivacyPolicyPage();