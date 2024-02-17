import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { CardsTemplateContenu2 } from "../Utils/UtilsTemplates";
import { CardesTemplate } from "./CardesTemplate";
import { FooterPageAcueil } from "./FooterPageAcueil";
import { HubForgeHeader } from "./HubForgeHeader";

export const PageAccueil = () => {
  const { darkMode } = useAppContext();
  return (
    <div
      className={`min-h-[132vw] max-w-[1610px] ${
        darkMode ? "bg-noir text-blanc" : "bg-blanc text-noir"
      }`}
    >
      <div>
        <div>
          <HubForgeHeader
            TitrePage={
              <h1
                className={`text-center text-6xl max-sm:text-4xl font-bold leading-[66px] ${
                  darkMode ? "text-blanc" : " text-bluq"
                }`}
              >
                Transformez votre <br />
                <span>vision en réalité </span> <br />
                <span>simplement</span>
              </h1>
            }
            directionPage={"/dashbords"}
            Bouton={
              <button
                className={`text-white font-bold px-6 rounded-full hover:bg-[#34296f] py-2 items-center text-xl flex bg-[#221246] ${
                  darkMode ? "bg-blue-800" : ""
                }`}
              >
                Dashbords
                <FaArrowRight className="text-[32px] pt-1 ps-4  animate-pulse" />
              </button>
            }
          />
        </div>
        <div
          className={`mt-8 max-sm:mx-4 md:mx-24 flex justify-around flex-wrap`}
        >
          {CardsTemplateContenu2.map((card, index) => (
            <CardesTemplate {...card} key={index} />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <FooterPageAcueil />
      </div>
    </div>
  );
};
