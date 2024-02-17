import React from "react";
import EnsembleTemp2 from "./TemplateNum2/EnsembleTemp2";
import ChompRestaurant from "../components/pageTemplate2/ChompRestaurant";

import SEVI from "./NewTemp1/SEVI";
import Ensemble from "./composPageAccueil/NewTemp2/Ensemble";
import { Link } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";

export const PageTemplate4 = () => {
  return (
    <div>
      <p className="text-center mt-[20%] text-4xl text-red-700 font-bold"></p>
    </div>
  );
};

export const MonLink = ({ action, actionName, BgColor }) => {
  return (
    <Link
      to={action}
      className={`  ${BgColor} w-full hover:scale-105 transition-all duration-500 text-blanc  text-xl rounded-full flex items-center justify-center text-nowrap max-sm:text-sm  h-[50px] px-5`}
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
}) => {
  return (
    <div className="">
      <img
        src={imageTemp}
        className=" rounded-3xl hover:scale-105 animation-all duration-500 object-cover "
        alt="L'image du Template"
      />

      <h1 className="text-[#20143de4] ps-4 pt-6  f text-xl max-md:text-sm">
        <span className="text-lg font-medium  text-black max-sm:text-md ">
          Titre :
        </span>
        {titreCrdTemp}
      </h1>

      <h2 className="text-[#20143de4] px-4 text-lg max-md:text-sm">
        <span className="text-lg font-medium max-sm:text-md pe-3 text-black ">
          Description :
        </span>
        {DescriptTemp}
      </h2>

      <h3 className="flex items-center pt-1 text-[#20143de4] ps-4   text-lg max-md:text-xl">
        <span className="text-lg font-medium pe-3 text-black ">Prix :</span>
        {prixTemplate}
      </h3>
      <a
        href={aprerçuTemp}
        target="_blank"
        className="font-medium pe-3 flex items-center pt-1  underline hover:text-green-700 
            text-[#411c97e4] ps-4   text-md max-md:text-xl"
      >
        Aperçu du template
      </a>
    </div>
  );
};

export const InstructionTemp = ({ condition }) => {
  return (
    <h2 className="text-[#20143de4]  pb-4 ps-6 text-md">
      Après le téléchargement du Template :
      <span className="flex pt-2 ">
        <GoTriangleRight className=" text-2xl pt-1 " /> Intallez les dépendances
        avec
        <span className=" ms-1 pb-1 px-2 bg-gray-300 text-md font-medium rounded-lg  ">
          npm install
        </span>
      </span>
      <span className="flex mt-1">
        <GoTriangleRight className=" text-2xl pt-1" /> Lencer L'application avec
        <span className=" ms-1 pb-1 px-2 bg-gray-300 text-md font-medium  rounded-lg  ">
          {condition}
        </span>
      </span>
    </h2>
  );
};
