import React from "react";
import { useTranslation } from "react-i18next";
import CardCase from "./CardCase";
import { caseWoolies } from "../utils";

const Work = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="w-auto h-32 mx-8 mt-24">
      <h2 className="font-hero font-medium text-3xl pb-10">
        {t("casesHeading")}
      </h2>
      <CardCase
        image={caseWoolies}
        imgAlt={t("wooliesAlt")}
        imgHeading={t("wooliesImgHeading")}
        imgCopyLineOne={t("wooliesImgCopyLineOne")}
        imgCopyLineTwo={t("wooliesImgCopyLineTwo")}
        type={t("CardTypeUniProject")}
        date={t("wooliesDate")}
        heading={t("wooliesHeading")}
        copy={t("wooliesCopy")}
        link="https://fritzfabi.com/woolies"
        linkText={t("wooliesLink")}
      />
    </section>
  );
};

export default Work;
