import React from "react";
import { CardesTemplate } from "../composPageAccueil/CardesTemplate";
import { useAppContext } from "../../context/AppContext";
import { HubForgeHeader } from "../composPageAccueil/HubForgeHeader";
import { PulseLoader } from "react-spinners";

export const TotalTemplates = () => {
  const { darkMode, templates, apiUrlImg, loading } = useAppContext();

  return (
    <div
      className={`${darkMode ? "bg-gray-800 text-white" : "border-gray-100"}`}
    >
      <div>
        <HubForgeHeader
          TitrePage={
            <h1
              className={`text-center text-6xl max-sm:text-4xl font-bold leading-[66px] ${
                darkMode ? "text-blanc" : "text-bl"
              }`}
            >
              Dashboards
            </h1>
          }
        />
      </div>

      <div className={`mt-8 flex justify-center w-full flex-wrap`}>
        {loading && (
          <div className="text-center mt-8  items-center">
            <p className="py-6 italic text-bl font-bold text-2xl">
              Chargement ...
            </p>
            <PulseLoader color="#072967" size={"18"} />
          </div>
        )}
        {!loading &&
          templates?.map(
            (temp) =>
              temp?.type === "dashboard" && (
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
  );
};
