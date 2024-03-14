import React from "react";
import { useAppContext } from "../../../context/AppContext";
import { useCategories } from "../../../hook/useCategories";
import { IoIosSearch } from "react-icons/io";

export default function Search() {

  const { darkMode } = useAppContext();
  const categoryTemp = useCategories();
  const categories = categoryTemp?.categories;
  console.log("test", categories);

  return (
    <form className="max-w-xl mx-auto mb-3 ">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <IoIosSearch />
        </div>
        <input
          type="search"
          id="default-search"
          className={`block w-full px-4 py-2.5 ps-10 text-sm border rounded-full focus:ring focus:border-blue-500 ${
            darkMode
              ? "bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              : "bg-gray-50 border-gray-300"
          }`}
          placeholder="Rechercher parmis nos catégories"
          required
        />
        <button
          type="submit"
          className={`text-white absolute end-1 bottom-1 top-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 ${
            darkMode ? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-800" : ""
          }`}
        >
          Search
        </button>
      </div>
    </form>
  );
}
