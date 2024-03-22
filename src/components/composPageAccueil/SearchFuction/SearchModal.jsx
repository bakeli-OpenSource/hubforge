import React from "react";
import { useAppContext } from "../../../context/AppContext";
import { IoIosSearch } from "react-icons/io";

export default function SearchModal() {
  const { darkMode, searchModalOpen, toggleSearchModal } = useAppContext();

  const handleModalClose = () => {
    toggleSearchModal(); // Fermer le modal lors du clic en dehors du modal
  };

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
                  className={`block w-full px-4 py-2.5 ps-10 text-sm border rounded-lg  focus:ring focus:border-vr 
                  ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-vr focus:border-vr"
                      : "bg-gray-50 border-gray-300"
                  }`}
                  placeholder="Rechercher parmi nos catégories"
                  required
                  value={""}
                  // onChange={}
                />
              </div>
            </form>
            {/* Barre de recherche */}

            {/* Liste des categories recherchées */}
            <div className="searchCategories">
              <span className="w-full h-[40px] mx-auto my-2 flex justify-center items-center border rounded-lg hover:shadow-lg">
                Nom_de_ma_categorie_rechercher1
              </span>     
            </div>
            {/* Liste des categories recherchées */}
          </div>
        </div>
      )}
      {/* Modal */}
    </>
  );
}
