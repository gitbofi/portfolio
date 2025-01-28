import React from "react";
import { fabiHero, fabiHeroMobile, fritzfabiLogo, swoosh } from "../utils";
import LanguageSwitcher from "./LanguageSwitcher";

const Hero = () => {
  return (
    <section className="relative w-full h-full">
      <div>
        <picture>
          <source srcSet={fabiHeroMobile} media="(max-width: 800px)" />
          <img src={fabiHero} alt="Fabian lächelt in die Kamera" />
        </picture>
      </div>
      <div className="w-fit h-fit absolute top-8 left-5">
        <a href="https://fritzfabi.com" aria-label="Home">
          <img
            src={fritzfabiLogo}
            alt="fritzfabi Home"
            typeof="image/svg+xml"
          />
        </a>
      </div>
      <div className="w-full h-fit absolute bottom-0">
        <img src={swoosh} alt="" typeof="image/svg+xml" />
      </div>
      <div className="absolute w-fit h-fit top-5 right-2">
        <LanguageSwitcher />
      </div>
    </section>
  );
};

export default Hero;
