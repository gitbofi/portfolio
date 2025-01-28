import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const UKFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 30"
    width="24"
    height="12"
  >
    <clipPath id="uk-flag">
      <path d="M0,0 v30 h60 v-30 z" />
    </clipPath>
    <rect width="60" height="30" fill="#012169" />
    <rect width="60" height="6" y="12" fill="#fff" />
    <rect width="6" height="30" x="27" fill="#fff" />
    <rect width="60" height="2" y="14" fill="#c8102e" />
    <rect width="2" height="30" x="29" fill="#c8102e" />
  </svg>
);

const GermanFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 30"
    width="24"
    height="12"
  >
    <rect width="60" height="10" y="0" fill="#000" />
    <rect width="60" height="10" y="10" fill="#dd0000" />
    <rect width="60" height="10" y="20" fill="#ffce00" />
  </svg>
);

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isGerman, setIsGerman] = useState(i18n.language === "de");

  const toggleLanguage = () => {
    const newLanguage = isGerman ? "en" : "de";
    i18n.changeLanguage(newLanguage);
    setIsGerman(!isGerman);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex flex-col items-center focus:outline-none"
      aria-label={isGerman ? "Switch to English" : "Zu Deutsch wechseln"}
    >
      {isGerman ? <UKFlag /> : <GermanFlag />}
      <span className="text-sm mt-1">DE / EN</span>
    </button>
  );
};

export default LanguageSwitcher;
