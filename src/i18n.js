import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationKioskAppEN from "./translationKioskApp/en/translationKioskAppEN.json";
import translationKioskAppTA from "./translationKioskApp/ta/translationKioskAppTA.json";
import translationChatbotEN from "./translationChatbot/en/translationChatbotEN.json";
import translationChatbotTA from "./translationChatbot/ta/translationChatbotTA.json";

const resources = {
  en: {
    translationKioskApp: translationKioskAppEN,
    translationChatbot: translationChatbotEN,
  },
  ta: {
    translationKioskApp: translationKioskAppTA,
    translationChatbot: translationChatbotTA,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
