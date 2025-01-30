import React from "react";
import ButtonBlack from "./ButtonBlack";

const CardCase = ({
  image,
  imgAlt,
  imgHeading,
  imgCopyLineOne,
  imgCopyLineTwo,
  type,
  date,
  heading,
  copy,
  link,
  linkText,
}) => {
  return (
    <>
      <div className="w-full bg-lightbg rounded-xl pb-6 shadow-2xl">
        <div className="relative w-full h-full text-slate-100">
          <img src={image} alt={imgAlt} className="rounded-xl" />
          <p className="absolute bottom-32 left-6 font-wooliesheading text-4xl">
            {imgHeading}
          </p>
          <div className="absolute bottom-16 left-6 font-wooliescopy text-base flex flex-col">
            <p>{imgCopyLineOne}</p>
            <p>{imgCopyLineTwo}</p>
          </div>
        </div>
        <div className="px-4">
          <div className="mt-4 font-hero text-textgrey flex justify-between text-sm">
            <p>{type}</p>
            <p>{date}</p>
          </div>
          <h3 className="font-copy text-xl font-semibold">{heading}</h3>
          <p className="font-copy text-base font-light pt-2">{copy}</p>
          <a href={link} className="font-copy text-base font-light">
            <span className="underline underline-offset-2">{linkText}</span>.
          </a>
        </div>
      </div>
      <div className="flex justify-center py-4">
        <svg
          width="32"
          height="2"
          viewBox="0 0 32 2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1"
            y1="1"
            x2="31"
            y2="1"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <ButtonBlack />
    </>
  );
};

export default CardCase;
