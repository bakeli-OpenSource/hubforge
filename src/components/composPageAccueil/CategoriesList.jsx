import React, { useEffect, useState } from "react";
import { useCategories } from "../../hook/useCategories";
import { BiCaretDown } from "react-icons/bi";

export const CategoriesList = ({ onSelectCategory }) => {
  const categoryTemp = useCategories(onSelectCategory);
  const categories = categoryTemp?.categories;
  const [activeCat, setActiveCat] = useState(null);
  const currentPage = 1;
  const [showDropdown, setShowDropdown] = useState(false);
  const [nombreCat, setNombreCat] = useState(3);
  const landingPage = (t) => t.type_template === "landing_page";

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 640) {
        setNombreCat(1);
      } else if (window.innerWidth < 1024) {
        setNombreCat(2);
      } else {
        setNombreCat(3);
      }
    };
    window.addEventListener("resize", resize);
    resize();
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    if (categories && categories.length > 0 && !activeCat) {
      const ctgryTemp = categories.find((c) => c.templates.some(landingPage));
      if (ctgryTemp) {
        setActiveCat(ctgryTemp.id);
        onSelectCategory(ctgryTemp.id, ctgryTemp.templates.filter(landingPage));
      }
    }
  }, [categories, onSelectCategory, activeCat]);

  const selectCat = (catId) => {
    const clicCat = categories.find((cat) => cat.id === catId);
    const selectTemp = clicCat ? clicCat.templates.filter(landingPage) : [];
    setActiveCat(catId);
    onSelectCategory(catId, selectTemp);
  };

  const categTemp = categories?.filter((c) => {
    const tempLPage = c.templates.filter(landingPage);
    return tempLPage.length > 0;
  });

  const indexLastCat = currentPage * nombreCat;
  const indexFirstCat = indexLastCat - nombreCat;
  const currentCategTemp = categTemp?.slice(indexFirstCat, indexLastCat);

  const remainingCategTemp = categTemp?.slice(nombreCat);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className="flex pb-1 justify-center items-center relative">
      <ul className="flex py-1 bg-[#d0d6dfa2] rounded-3xl items-center gap-4 flex-wrap w-auto px-1 justify-center">
        {currentCategTemp?.map((category) => (
          <li
            key={category.id}
            className={`max-sm:text-sm  cursor-pointer hover:bg-blc  p-2 px-3 rounded-3xl ${activeCat === category.id ? "text-bl font-bold bg-[#ffffff] " : "text-mr"}`}
            onClick={() => selectCat(category.id)}
          >
            {category.nom_categorie}
          </li>
        ))}
        {categTemp?.length > nombreCat && (
          <li
            className={`cursor-pointer flex items-center  ${showDropdown ? "font-bold text-blc bg-vr" : "text-bl font-bold"} p-2 px-3 rounded-3xl hover:scale-105 transition-all duration-500  `}
            onClick={toggleDropdown}
          >
            Plus <BiCaretDown />
          </li>
        )}
      </ul>
      {showDropdown && (
        <ul className="flex-col absolute max-xlm:left-[60%] max-xl:left-[62%] max-lg:left-[52%] max-md:left-[53%] max-sm:left-[23%] z-50 top-[98%] py-1 backdrop-blur-xl bg-[#dedfdfcc] rounded-xl items-center gap-6 flex-wrap px-2 justify-center">
          {remainingCategTemp?.map((category) => (
            <li
              key={category.id}
              className={`max-sm:text-sm text-nowrap cursor-pointer hover:bg-blc mb-1 p-2 px-3 rounded-xl ${activeCat === category.id ? "text-bl font-bold bg-[#ffffff] " : "text-mr"}`}
              onClick={() => selectCat(category.id)}
            >
              {category.nom_categorie}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
