import React from "react";
import { useAppContext } from "../../context/AppContext";
import { CardesTemplate } from "./CardesTemplate";
import { FooterPageAcueil } from "./FooterPageAcueil";
import { HubForgeHeader } from "./HubForgeHeader";
import { PulseLoader } from "react-spinners";

export const PageAccueil = () => {
  const { darkMode, templates, apiUrlImg, loading } = useAppContext();
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
          {loading && (
            <div className="text-center mt-10  items-center">
              <p className="py-6 italic text-bl font-bold text-2xl">
                Chargement ...
              </p>
              <PulseLoader color="#072967" size={"18"} />
            </div>
          )}
          {!loading &&
            templates?.map(
              (temp) =>
                temp?.type === "template" && (
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
