import React from "react";
import { useAppContext } from "../../context/AppContext";
import { CardesTemplate } from "./CardesTemplate";
import { FooterPageAcueil } from "./FooterPageAcueil";
import { HubForgeHeader } from "./HubForgeHeader";

export const PageAccueil = () => {
  const { darkMode, templates, apiUrlImg } = useAppContext();
  return (
    <div
      className={`min-h-[132vw] h-full max-w-[1610px] ${
        darkMode ? "bg-gray-800 text-blanc" : "bg-blanc text-bl"
      }`}
    >
      <div className="w-full">
        <div>
          <HubForgeHeader
            TitrePage={
              <h1
                className={`policeTitre text-center text-6xl max-sm:text-3xl font-[800] 
                leading-[70px] max-sm:leading-[45px]  max-sm:tracking-wider  ${
                  darkMode ? "text-blanc" : " text-bl"
                }`}
              >
                Transformez votre <br />
                <span>vision en réalité </span> <br />
                <span>simplement</span>
              </h1>
            }
          />
        </div>
        <div className={`mt-8 flex justify-center w-full flex-wrap`}>
          {templates.map(
            (temp) =>
              temp.type === "template" && (
                <CardesTemplate
                  key={temp.id}
                  HandlePreview={temp.preview}
                  imageTemplate={`${apiUrlImg}/${temp.image}`}
                  fonCardTemplate={temp.couleur}
                  handlePriceTo={temp.preview}
                  titreCrdTemplate={temp.titre}
                  DesctiptionTemplate={temp.description}
                  prixTemplate={temp.prix}
                  telechargeLink={`/telecharge/${temp.id}`}
                />
              )
          )}
        </div>
      </div>
      <div className="">
        <FooterPageAcueil />
      </div>
    </div>
  );
};
