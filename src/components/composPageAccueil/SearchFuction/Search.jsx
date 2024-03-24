import React from "react";
import { useAppContext } from "../../../context/AppContext";
import { IoSearch } from "react-icons/io5";

export default function Search() {
  const { darkMode, toggleDarkMode, toggleSearchModal } = useAppContext();

  const handleSearchClick = () => {
    toggleSearchModal();
  };

  return (
    <div>
      {/* Bouton de recherche */}
      <button
        aria-labelledby="app-search-label"
        className={`flex justify-center items-center ${
          darkMode ? "bg-white text-dark" : "bg-bl hover:bg-blue-900 text-white"
        } rounded-full hover:scale-95 transition duration-500 shadow-md cursor-pointer inline-block font-sans font-normal p-3 text-center transition duration-250 hover:shadow-lg transform hover:select-none`}
        onClick={handleSearchClick}
      >
        <div>
          <IoSearch />
        </div>
        {/* <span id="app-search-label" className="text-sm ms-3">
          Categories …
        </span> */}
      </button>
    </div>
  );
}