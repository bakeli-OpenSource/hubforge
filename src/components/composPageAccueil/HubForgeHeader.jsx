import React from "react";
import { useAppContext } from "../../context/AppContext";
import { NavBarPageAccueil } from "./NavBarPageAccueil";
import { Link } from "react-router-dom";

export const HubForgeHeader = ({ directionPage, Bouton, TitrePage }) => {
  const { darkMode } = useAppContext();
  return (
    <div>
      <div
        
        className={`border-b-2 max-sm:px-4 px-20 max-sm:border-0 pb-3 ${
          darkMode ? " border-gray-700" : "border-gray-100"
        }`}
      >
        <NavBarPageAccueil />
      </div>
      <div className={` w-full mt-10 px-6 ${darkMode ? "" : ""}`}>
        {TitrePage}
        <p
          className={`text-center py-10 text-xl max-sm:text-lg font-[400] ${
            darkMode ? "text-blanc" : "text-gris"
          }`}
        >
          Concrétiser vos idées et votre vision grâce à des modèles de sites
          vitrines et des dashboards.
        </p>
      </div>

      <div className="w-full flex justify-center mb-8">
        <Link to={directionPage}>{Bouton}</Link>
      </div>
    </div>
  );
};
