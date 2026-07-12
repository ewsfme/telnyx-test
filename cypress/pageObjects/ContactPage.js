import BasePage from './BasePage';

class ContactPage extends BasePage {
  // Locators — constants only, no logic here.
  path = '/contact-us';
  heading = 'h1';
  formIframe = 'iframe[src*="hubspot"], iframe[src*="hs-forms"], iframe[title*="form" i]';
  firstNameField = 'input[name="firstname"]';
  lastNameField = 'input[name="lastname"]';
  emailField = 'input[name="email"]';
  companyField = 'input[name="company"]';
  submitButton = 'input[type="submit"], button[type="submit"]';
  fieldError = '.hs-error-msg, [class*="error"]';

  visit() {
    return super.visit(this.path);
  }

  getHeading() {
    return cy.get(this.heading).first();
  }

  formIframeBody() {
    return cy
      .get(this.formIframe, { timeout: 15000 })
      .first()
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then(cy.wrap);
  }

  typeFirstName(body, value) {
    cy.wrap(body).find(this.firstNameField).clear().type(value);
  }

  typeLastName(body, value) {
    cy.wrap(body).find(this.lastNameField).clear().type(value);
  }

  typeEmail(body, value) {
    cy.wrap(body).find(this.emailField).clear().type(value);
  }

  typeCompany(body, value) {
    cy.wrap(body).find(this.companyField).clear().type(value);
  }

  blurEmail(body) {
    cy.wrap(body).find(this.emailField).blur();
  }

  getEmailFieldValidity(body) {
    return cy.wrap(body).find(this.emailField).then(($el) => $el[0].checkValidity());
  }
}

export default new ContactPage();