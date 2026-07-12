import BasePage from './BasePage';

class PricingPage extends BasePage {
  path = '/pricing';
  heading = 'h1';

  visit() {
    return super.visit(this.path);
  }

  getHeading() {
    return cy.get(this.heading).first();
  }
}

export default new PricingPage();