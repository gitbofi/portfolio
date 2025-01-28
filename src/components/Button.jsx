import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { arrow } from "../utils";

const Button = () => {
  const { t, i18n } = useTranslation();

  return (
    <Link
      className="transition ease-in-out cursor-pointer flex py-3 px-6 bg-linear-to-r from-lightblue via-blue to-purple rounded-xl w-full justify-evenly"
      to="cases"
      smooth={true}
      easing="easeInOutCubic"
      duration={1000}
    >
      <span className="font-copy text-xl font-semibold text-neutral-100">
        {t("heroCtaBtn")}
      </span>
      <img src={arrow} alt="" typeof="image/svg+xml" height={20} width={20} />
    </Link>
  );
};

export default Button;
