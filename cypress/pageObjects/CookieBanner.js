class CookieBanner {
  banner = '#onetrust-banner-sdk, [class*="cookie-banner" i], [id*="cookie" i][id*="banner" i]';
  acceptButton = '#onetrust-accept-btn-handler, button:contains("Accept"), button:contains("Accept All")';

  getBanner() {
    return cy.get(this.banner);
  }

  getAcceptButton() {
    return cy.get(this.acceptButton).first();
  }

  acceptCookies() {
    this.getAcceptButton().click({ force: true });
  }
}

export default new CookieBanner();