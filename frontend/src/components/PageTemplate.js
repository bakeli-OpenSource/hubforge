import React from "react";
import { Link } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";

export const PageTemplate4 = () => {
  return (
    <div>
      <p className="text-center mt-[20%] text-4xl text-mr font-bold"></p>
    </div>
  );
};

export const MonLink = ({ action, actionName, BgColor }) => {
  return (
    <Link
      to={action}
      className={`  ${BgColor} w-full focus:scale-90 focus:bg-gr focus:border-2 transition-all duration-500 text-blanc  text-xl rounded-full flex items-center justify-center text-nowrap max-sm:text-sm  h-[50px] px-5`}
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
}) => {
  return (
    <div className="p-6">
      <a href={aprerçuTemp} target="_blank">
        <img
          src={imageTemp}
          className={` rounded-2xl shadow-sm shadow-gray-300 ${Bordure} object-cover `}
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

        <h3 className="flex items-center pt-1 text-mr  text-lg max-md:text-xl">
          <span className="text-lg font-medium pe-3 text-mr ">Prix :</span>
          {prixTemplate}
        </h3>
        <a
          href={aprerçuTemp}
          target="_blank"
          className="font-medium pe-3  inline-block items-center pt-1  underline hover:text-vr 
            text-bl  text-md max-md:text-xl"
        >
          Aperçu du template
        </a>
      </div>
    </div>
  );
};

export const InstructionTemp = ({ condition }) => {
  return (
    <h2 className="text-mr  pb-4 ps-6 text-md">
      Après le téléchargement du Template :
      <span className="flex pt-2 ">
        <GoTriangleRight className=" text-2xl pt-1 text-mr " /> Intallez les
        dépendances avec
        <span className=" ms-1 pb-1 px-2 bg-gray-300 text-md font-medium rounded-lg  ">
          npm install
        </span>
      </span>
      <span className="flex mt-1">
        <GoTriangleRight className=" text-2xl text-mr pt-1" /> Lencer
        L'application avec
        <span className=" ms-1 pb-1 px-2 bg-gray-300 text-md font-medium  rounded-lg  ">
          {condition}
        </span>
      </span>
    </h2>
  );
};
