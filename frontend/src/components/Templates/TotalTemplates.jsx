import React from "react";
import { CardesTemplate } from "../composPageAccueil/CardesTemplate";
import { CardsTemplateContenu } from "../Utils/UtilsTemplates";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { useAppContext } from "../../context/AppContext";
import { HubForgeHeader } from "../composPageAccueil/HubForgeHeader";

export const TotalTemplates = () => {
  const { darkMode } = useAppContext();
  return (
    <div
      className={`${
        darkMode ? " bg-gray-800  text-white" : "border-gray-100"
      }`}
    >
      <div>
        <HubForgeHeader
          TitrePage={
            <h1
              className={`text-center text-6xl max-sm:text-4xl font-bold leading-[66px] ${
                darkMode ? "text-blanc" : " text-bl"
              }`}
            >
              Dashboards
            </h1>
          }
          arrowDirect={
            <FaArrowLeft className="text-[32px] pt-1 ps-4  animate-pulse" />
          }
          directionPage={"/"}
          Bouton={
            <button
              className={`text-white font-bold px-6 rounded-full hover:bg-[#34296f] py-2 items-center text-xl flex bg-bl ${
                darkMode ? "bg-blue-800" : ""
              }`}
            >
              <FaArrowLeft className="text-[32px] pt-1 pe-4  animate-pulse" />
              Templates
            </button>
          }
        />
      </div>
      <div className={`mt-8  flex justify-center w-full flex-wrap`}>
        {CardsTemplateContenu.map((card, index) => (
          <CardesTemplate {...card} key={index} />
        ))}
      </div>
    </div>
  );
};
