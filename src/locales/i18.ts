import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en/translation.json";
import ar from "./ar/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ar: {
      translation: ar,
    },
  },
  fallbackLng: "ar",
  lng: "ar",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
