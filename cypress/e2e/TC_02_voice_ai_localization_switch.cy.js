import voiceAiPage from '../pageObjects/VoiceAiPage';
import data from '../fixtures/testData.json';

describe('TC-02 Localization: Spanish switch on the Voice AI page', () => {
  beforeEach(() => {
    voiceAiPage.visit();
  });

  it('should translate page content to Spanish', () => {
    voiceAiPage.selectLanguage(data.spanishLanguageOption);

    voiceAiPage.verifyUrlContains(data.spanishUrlPart);
    voiceAiPage.bodyContainsText(data.spanishTranslation);
  });
});