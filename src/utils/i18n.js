import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Hero Section
      home: "Home",
      companyLogo: "Company Logo",
      welcome: "I design user-friendly, engaging digital Experiences.",
      heroCtaBtn: "Discover my work",
      heroAboutBtn: "About me",
      heroContactBtn: "Contact",

      // Cases Section
      casesHeading: "My work as UI- und Business Designer.",
      caseCtaBtn: "Read Case",

      // Case Woolies
      wooliesAlt: "Fabian models wearing pieces from woolies",
      wooliesImgHeading: "woolies",
      wooliesImgCopyLineOne: "Sustainable",
      wooliesImgCopyLineTwo: "Wool Clothing",
      CardTypeUniProject: "Uni Project",
      wooliesDate: "Oct 2024 - Jan 2025",
      wooliesHeading:
        "Responsive Landing Page about the Topic of Sustainability",
      wooliesCopy:
        "I designed, created, and developed a webshop for the fictional brand “woolies” using React and published it.",
      wooliesLink: "View woolies webpage",

      // Case TMFX
      tmfxAlt: "A TeamFox Training Shirt",
      tmfxImgCopyLineOne: "Parkour for",
      tmfyImgCopyLineTwo: "Everyone.",
      CardTypeProjectExt: "Uni Project (external)",
      tmfxDate: "Mar 2023 - Jan 2024",
      tmfxHeading: "Corporate Design and Website for TeamFox Gbr",
      tmfxCopy:
        "Development of a new design language and a website redesign for the Parkour course provider from Konstanz.",
      tmfxLink: "View TeamFox webpage",
    },
  },
  de: {
    translation: {
      // Hero Section
      home: "Startseite",
      companyLogo: "Firmenlogo",
      welcome:
        "Ich gestalte nutzerorientierte, ansprechende digitale Erlebnisse.",
      heroCtaBtn: "Entdecke meine Arbeit",
      heroAboutBtn: "Über mich",
      heroContactBtn: "Kontakt",

      // Cases Section
      casesHeading: "Meine Arbeit als UI- und Business Designer.",
      caseCtaBtn: "Case lesen",

      // Case Woolies
      wooliesAlt: "Fabian modelt mit Wollkleidung von woolies",
      wooliesImgHeading: "woolies",
      wooliesImgCopyLineOne: "Nachhaltige",
      wooliesImgCopyLineTwo: "Wollkleidung",
      CardTypeUniProject: "Studienprojekt",
      wooliesDate: "Okt 2024 - Jan 2025",
      wooliesHeading: "Responsive Landing Page zum Thema Nachhaltigkeit",
      wooliesCopy:
        "Ich habe einen Webshop für die fiktive Marke “woolies” konzipiert, gestaltet und mittels React gecodet und veröffentlicht.",
      wooliesLink: "Hier geht's zu woolies",

      // Case TMFX
      tmfxAlt: "Ein TeamFox Training Shirt",
      tmfxImgCopyLineOne: "Parkour für",
      tmfyImgCopyLineTwo: "Groß und Klein.",
      CardTypeProjectExt: "Studienprojekt (extern)",
      tmfxDate: "März 2023 - Jan 2024",
      tmfxHeading: "Corporate Design und Website für die TeamFox Gbr",
      tmfxCopy:
        "Entwicklung einer neuen Designsprache sowie eines Redesigns der Website für den Parkour Dienstleister aus Konstanz.",
      tmfxLink: "Hier geht's zu TeamFox",
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
