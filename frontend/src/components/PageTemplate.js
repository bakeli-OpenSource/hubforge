import React from "react";
import { Link } from "react-router-dom";

export const PageTemplate4 = () => {
  return (
    <div>
      <p className="text-center mt-[20%] text-4xl text-mr font-bold"></p>
    </div>
  );
};
export const MonLink = ({ action,onClick, actionName, BgColor }) => {
  return (
    <Link
      to={action}
      onClick={onClick}
      className={`  ${BgColor} w-full focus:scale-90 focus:bg-gr focus:border-2 transition-all duration-500 text-blanc  text-xl rounded-2xl flex items-center justify-center text-nowrap max-lg:text-sm  h-[60px] px-5`}
    >
      {actionName}
    </Link>
  );
};

export const DetailsTemp = ({
  imageTemp,
  titreCrdTemp,
  DescriptTemp,
  prixTemplate,
  aprerçuTemp,
  Bordure,
  Marge,
}) => {
  return (
    <div className={`p-6 ${Marge}`}>
      <a href={aprerçuTemp} target="_blank">
        <img
          src={imageTemp}
          className={` rounded-2xl shadow-sm shadow-gray-30 ${Bordure} object-cover `}
          alt="L'image du Template"
        />
      </a>

      <div className="mt-6">
        <h1 className="text-mr text-xl max-md:text-sm">
          <span className="text-lg font-medium  text-mr max-sm:text-md ">
            Titre :
          </span>
          {titreCrdTemp}
        </h1>

        <h2 className="text-mr text-lg max-md:text-sm">
          <span className="text-lg font-medium max-sm:text-md pe-3 text-mr ">
            Description :
          </span>
          {DescriptTemp}
        </h2>

        <h3 className="flex items-center pt-1 text-vr  text-lg max-md:text-xl">
          <span className="text-lg font-medium pe-3 text-mr ">Prix :</span>
          {prixTemplate}
        </h3>
        <a
          href={aprerçuTemp}
          target="_blank"
          className="font-medium pe-3  inline-block items-center pt-1  underline hover:text-vr 
            text-bl  text-md max-md:text-xl max-sm:text-sm"
        >
          Aperçu du template
        </a>
      </div>
    </div>
  );
};
