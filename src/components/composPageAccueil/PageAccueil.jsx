import React from "react";
import { useAppContext } from "../../context/AppContext";
import { CardesTemplate } from "./CardesTemplate";
import { FooterPageAcueil } from "./FooterPageAcueil";
import { useTemplates } from "../../hook/useTemplates";
import { TitrePage } from "./TitrePage";

export const PageAccueil = () => {
  const { darkMode, apiUrlImg } = useAppContext();
  const { data: templates} = useTemplates("landing_page");
  return (
    <div
      className={`min-h-[screen] h-full max-w-[1610px] ${
        darkMode ? "bg-gray-800 text-blanc" : "bg-blanc text-bl"
      }`}
    >
      <div className="w-full">
        <div>
          <TitrePage Effect={darkMode ? "text-blanc" : " text-bl"} />
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
      <div className="">
        <FooterPageAcueil />
      </div>
    </div>
  );
};
