import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { CardesTemplate } from "./CardesTemplate";
import { FooterPageAcueil } from "./FooterPageAcueil";
import { TitrePage } from "./TitrePage";
import { CategoriesList } from "./CategoriesList";
import SearchModal from "./SearchFuction/SearchModal";

export const PageAccueil = () => {
  const { darkMode, apiUrlImg } = useAppContext();
  const [selectCat, setSelectCat] = useState(null);
  const [selectTemp, setSelectTemp] = useState([]);

  const ClicCategory = (categoryId, t) => {
    setSelectCat(categoryId);
    setSelectTemp(t);
  };
  
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
        <SearchModal />
        <CategoriesList onSelectCategory={ClicCategory} />
        <div className="mt-8 flex justify-center w-full flex-wrap">
          {selectTemp.map((template) => (
            <CardesTemplate
              key={template.id}
              HandlePreview={template.aperçu}
              imageTemplate={`${apiUrlImg}/${template.image}`}
              fonCardTemplate={template.couleur_fond}
              handlePriceTo={template.aperçu}
              titreCrdTemplate={template.titre}
              DesctiptionTemplate={template.description}
              prixTemplate={template.prix === null ? "Free" : template.prix}
              telechargeLink={`/telecharge/${template.id}`}
            />
          ))}
        </div>
      </div>
      <div>
        <FooterPageAcueil />
      </div>
    </div>
  );
};
