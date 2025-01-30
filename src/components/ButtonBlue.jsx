import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { pngarrow } from "../utils";

const ButtonBlue = () => {
  const { t, i18n } = useTranslation();

  return (
    <Link
      className="transition ease-in-out cursor-pointer flex py-3 px-6 bg-linear-to-r from-lightblue via-blue to-purple rounded-xl w-full justify-evenly"
      to="cases"
      smooth={true}
      easing="easeInOutCubic"
      duration={1000}
    >
      <span className="font-copy text-xl font-medium text-neutral-100">
        {t("heroCtaBtn")}
      </span>
      <img
        src={pngarrow}
        alt=""
        typeof="image/png"
        height={12}
        width={12}
        className="w-4 h-4 self-center mb-0.5"
      />
    </Link>
  );
};

export default ButtonBlue;
