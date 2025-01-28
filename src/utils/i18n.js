import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      companyLogo: "Company Logo",
      welcome: "I design user-friendly, engaging digital Experiences.",
      heroCtaBtn: "Discover my work",
      heroAboutBtn: "About me",
      heroContactBtn: "Contact",
    },
  },
  de: {
    translation: {
      home: "Startseite",
      companyLogo: "Firmenlogo",
      welcome:
        "Ich gestalte nutzerorientierte, ansprechende digitale Erlebnisse.",
      heroCtaBtn: "Entdecke meine Arbeit",
      heroAboutBtn: "Über mich",
      heroContactBtn: "Kontakt",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "de", // Default language is German
  fallbackLng: "de",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
