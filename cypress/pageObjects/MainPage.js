import BasePage from './BasePage';

class MainPage extends BasePage {
  // Locators — constants only, no logic here.
  path = '/';
  heroHeading = 'h1';
  logo = 'header a[href="/"], a[href="https://telnyx.com/"]';
  navItem = (label) => `header a:contains("${label}"), header button:contains("${label}")`;
  contactUsLink = 'a[href*="/contact-us"]';
  pricingLink = 'a[href*="/pricing"]';
  loginLink = 'a[href*="portal.telnyx.com"]';
  signUpLink = 'a[href*="/sign-up"]';
  mobileMenuButton = '[aria-label*="menu" i], button:contains("Open menu"), button.hamburger';
  
  // Додані стабільні локатори для пошуку
  searchButton = 'button[aria-label="Open Search"], button:has(svg)';
  searchInput = 'input[type="search"], input[placeholder*="Search" i], #search-input';

  visit() {
    return super.visit(this.path);
  }

  getHeroHeading() {
    return cy.get(this.heroHeading).first();
  }

  getLogo() {
    return cy.get(this.logo).first();
  }

  clickLogo() {
    this.getLogo().click({ force: true });
  }

  getNavItem(label) {
    return cy.contains('header a, header button', label, { matchCase: false });
  }

  clickNavItem(label) {
    this.getNavItem(label).first().click({ force: true });
  }

  clickPricing() {
    this.clickNavItem('Pricing');
  }

  clickContactUs() {
    this.clickNavItem('Contact us');
  }

  getSignUpLink() {
    return cy.get(this.signUpLink).first();
  }

  getLoginLink() {
    return cy.get(this.loginLink).first();
  }

  getMobileMenuButton() {
    return cy.get(this.mobileMenuButton).first();
  }

  openMobileMenu() {
    this.getMobileMenuButton().click({ force: true });
  }

  // Додані методи для роботи з Global Search
  getSearchButton() {
    return cy.get(this.searchButton, { timeout: 10000 }).first();
  }

  getSearchInput() {
    return cy.get(this.searchInput, { timeout: 10000 }).first();
  }

  executeSearch(query) {
    cy.wait(2000); 
    this.getSearchButton().click({ force: true });
    
    // Перевіряємо, чи з'явилося поле, і вводимо текст
    this.getSearchInput().should('be.visible').type(`${query}{enter}`);
  }

  executeSearch(query) {
    // Невелика пауза захищає від кліку до того, як React підвісить івент-лістенери
    cy.wait(1500); 
    this.getSearchButton().click({ force: true });
    this.getSearchInput().should('be.visible').type(`${query}{enter}`);
  }

  verifyUrlContains(expectedText) {
    cy.url({ timeout: 10000 }).should('include', expectedText);
  }

  verifyBodyContains(expectedText) {
    cy.get('body').should('contain', expectedText);
  }
}

export default new MainPage();