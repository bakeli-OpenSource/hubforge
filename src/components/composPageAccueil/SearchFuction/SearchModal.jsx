import React, { useState } from "react";
import { useAppContext } from "../../../context/AppContext";
import { IoIosSearch } from "react-icons/io";

export default function SearchModal() {
  const { darkMode, searchModalOpen, toggleSearchModal, tabcat } =
    useAppContext();

  const [searchValue, setSearchValue] = useState("");

  const handleModalClose = () => {
    toggleSearchModal();
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value); // Mettre à jour la valeur de recherche
  };

  // Filtrer les catégories en fonction de la valeur de recherche
  const filteredCategories = tabcat.filter((category) =>
    category.nom_categorie.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      {/* Modal */}
      {searchModalOpen && (
        <div
          className="fixed inset-0 pt-20 flex items-start justify-center bg-gray-800 bg-opacity-50"
          onClick={handleModalClose}
        >
          <div
            className={`myModal w-full lg:w-[45%] md:w-[95%] bg-white p-4 rounded-lg shadow-lg`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Barre de recherche */}
            <form className="max-w-xl mx-auto mb-3 ">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <IoIosSearch />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className={`block  w-full p-4x py-2.5 ps-10 text-sm border rounded-lg  focus:ring focus:border-vr 
                  ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-vr focus:border-vr"
                      : "bg-gray-50 border-gray-300"
                  }`}
                  placeholder="Rechercher parmi nos catégories"
                  value={searchValue}
                  onChange={handleSearchChange} // Gérer les changements de recherche
                />
              </div>
            </form>
            {/* Barre de recherche */}

            {/* Liste des categories recherchées */}
            {searchValue && (
              <div className="searchCategories">
                {filteredCategories.map((category) => (
                  <span
                    key={category.id}
                    className="w-full md:w-[90%] h-[40px] mx-auto my-2 flex justify-center items-center border rounded-lg hover:shadow-lg "
                  >
                    {category.nom_categorie}
                  </span>
                ))}
              </div>
            )}
            {/* Liste des categories recherchées */}
          </div>
        </div>
      )}
      {/* Modal */}
    </>
  );
}