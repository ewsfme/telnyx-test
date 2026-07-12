class VoiceAiPage {
  path = '/products/voice-ai-agents';
  languageDropdown = 'button[aria-label="Select language"]';
  languageOption = '[role="option"]';

  visit() {
    cy.visit(this.path);
  }

  selectLanguage(language) {
    cy.get(this.languageDropdown)
      .first()
      .scrollIntoView()
      .should('be.visible')
      .trigger('pointerdown', { button: 0 })
      .trigger('pointerup', { button: 0 })
      .click({ force: true });

    cy.get(this.languageDropdown, { timeout: 10000 })
      .first()
      .should('have.attr', 'data-state', 'open');

    cy.get(this.languageOption, { timeout: 10000 }).should('have.length.greaterThan', 0);
    cy.contains(this.languageOption, language, { timeout: 10000 }).click({ force: true });
  }

  bodyContainsText(expectedText) {
    cy.get('body').should('contain.text', expectedText);
  }

  verifyUrlContains(part) {
    cy.url().should('include', part);
  }
}

export default new VoiceAiPage();