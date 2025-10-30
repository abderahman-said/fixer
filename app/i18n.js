import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import dataEN from "./Locale/En.json";
import dataAR from "./Locale/Ar.json";

const resources = {
  en: { translation: dataEN },
  ar: { translation: dataAR },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "ar",
  lng: "ar",
  debug: false,

  interpolation: {
    escapeValue: false,
  },

  react: {
    useSuspense: false,
  },
});

export default i18n;
