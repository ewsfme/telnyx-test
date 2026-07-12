import 'cypress-mochawesome-reporter/register';
import './commands';

// Telnyx renders 3rd-party widgets (chat bot, tag manager, recaptcha) that
// occasionally throw uncaught exceptions unrelated to the behaviour under test.
// We don't want those to fail assertions we didn't write.
Cypress.on('uncaught:exception', () => false);
