import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

const HeroLinks = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex w-full justify-center space-x-10 mt-4 underline underline-offset-3 cursor-pointer font-copy font-normal text-base ">
      <Link
        className="transition ease-in-out"
        to="cases"
        smooth={true}
        easing="easeInOutCubic"
        duration={1000}
      >
        {t("heroAboutBtn")}
      </Link>

      <Link
        className="transition ease-in-out mr-4"
        to="cases"
        smooth={true}
        easing="easeInOutCubic"
        duration={1000}
      >
        {t("heroContactBtn")}
      </Link>
    </div>
  );
};

export default HeroLinks;
