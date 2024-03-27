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
      <button
        aria-labelledby="app-search-label"
        className={`flex justify-center items-center ${
          darkMode ? "bg-bl text-blc" : "bg-bl hover:bg-blue-900 text-white"
        } rounded-full hover:scale-95 transition duration-500 shadow-md cursor-pointer inline-block font-sans font-normal p-3 text-center transition duration-250 hover:shadow-lg transform hover:select-none`}
        onClick={handleSearchClick}
      >
        <IoSearch />
      </button>
    </div>
  );
}