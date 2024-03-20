import React from "react";
import { CardesTemplate } from "../composPageAccueil/CardesTemplate";
import { useAppContext } from "../../context/AppContext";
import { HubForgeHeader } from "../composPageAccueil/HubForgeHeader";
import { useTemplates } from "../../hook/useTemplates";

export const TotalTemplates = () => {
  const { darkMode, apiUrlImg } = useAppContext();
  const { data: templates } = useTemplates("dashboard");

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
        {templates?.map((temp) => (
          <CardesTemplate
            key={temp.id}
            HandlePreview={temp.aperçu}
            imageTemplate={`${apiUrlImg}/${temp.image}`}
            fonCardTemplate={temp.couleur_fond}
            handlePriceTo={temp.aperçu}
            titreCrdTemplate={temp.titre}
            DesctiptionTemplate={temp.description}
            prixTemplate={temp.prix === null ? "Free" : temp.prix}
            telechargeLink={`/telecharge/${temp.id}`}
          />
        ))}
      </div>
    </div>
  );
};
