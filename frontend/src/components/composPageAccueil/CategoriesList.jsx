import React, { useEffect, useState } from "react";
import { useCategories } from "../../hook/useCategories";

export const CategoriesList = ({ onSelectCategory }) => {
  const categoryTemp = useCategories(onSelectCategory);
  const categories = categoryTemp?.categories;
  const [activeCat, setActiveCat] = useState(null);
  
  // Faire en sorte de Filtrer une Une seule fois les types de templates(en cours ...)
  const templateType = categories?.map((c) =>
    c.templates.find((t) => t.type_template === "landing_page")
  );

  // console.log(templateType);

  //

  useEffect(() => {
    if (categories && categories.length > 0 && !activeCat) {
      const ctgryTemp = categories.find((category) =>
        category.templates.some((t) => t.type_template === "landing_page")
      );
      if (ctgryTemp) {
        setActiveCat(ctgryTemp.id);
        onSelectCategory(ctgryTemp.id, ctgryTemp.templates);
      }
    }
  }, [categories, onSelectCategory, activeCat]);

  const selectCat = (catId) => {
    const clicCat = categories.find((cat) => cat.id === catId);
    const selectTemp = clicCat
      ? clicCat.templates.filter((t) => t.type_template === "landing_page")
      : [];
    setActiveCat(catId);
    onSelectCategory(catId, selectTemp);
  };

  const categTemp = categories?.filter((category) => {
    const tempLPage = category.templates.filter(
      (t) => t.type_template === "landing_page"
    );
    return tempLPage.length > 0;
  });

  return (
    <div>
      <h3 className="text-center pb-10 text-2xl">
        {" "}
        Les catégories de Landing Pages
      </h3>
      <ul className="flex items-center gap-4 flex-wrap w-full justify-center">
        {categTemp?.map((category) => (
          <li
            key={category.id}
            className={`capitalize cursor-pointer ${activeCat === category.id ? "text-rg font-bold bg-blue-100 p-2 text-xl " : ""}`}
            onClick={() => selectCat(category.id)}
          >
            {category.nom_categorie}
          </li>
        ))}
      </ul>
    </div>
  );
};
