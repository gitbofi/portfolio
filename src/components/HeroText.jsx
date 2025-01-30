import React from "react";
import { useTranslation } from "react-i18next";
import ButtonBlue from "./ButtonBlue";
import HeroLinks from "./HeroLinks";

const HeroText = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="mx-8">
      <h1 className="font-hero font-bold text-4xl text-black mb-12">
        {t("welcome")}
      </h1>
      <ButtonBlue />
      <HeroLinks />
    </div>
  );
};

export default HeroText;
