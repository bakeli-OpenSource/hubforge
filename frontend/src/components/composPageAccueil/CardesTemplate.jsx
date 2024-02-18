import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export const CardesTemplate = ({
  HandlePreview,
  imageTemplate,
  fonCardTemplate,
  handlePriceTo,
  titreCrdTemplate,
  DesctiptionTemplate,
  prixTemplate,
  telechargeLink,
}) => {
  const [ishover, setIsHover] = useState(false);
  const { darkMode } = useAppContext();

  const hoverMethode = () => {
    setIsHover(true);
  };
  const hoveredMethode = () => {
    setIsHover(false);
  };
  return (
    <div
      className="relative xl:w-[40%] lg:w-[43%] md:w-[44%] sm:w-[75%]
       xs:w-[90%] sm:m-4 md:m-4 lg:m-6 xl:m-10 max-xs:m-4  mb-4"
      onMouseEnter={hoverMethode}
      onMouseLeave={hoveredMethode}
    >
      <div
        className={`CardConta rounded-xl p-10 max-sm:p-7  
         mx-auto my-2  ${fonCardTemplate} flex justify-center items-center `}
      >
        <img
          src={imageTemplate}
          alt="template1"
          className={` ${
            ishover
              ? "hover:scale-105 transition-all duration-700 "
              : "  transition-all  duration-700 "
          } ImgTemp  object-fil xl:h-[380px] lg:h-[350px] md:h-[270px]
              sm:h-[310px] xs:h-[310px] z-0`}
        />
      </div>
      <div
        className={`rounded-xl w-[98%] max-sm:flex  mx-1 ms-[5px] absolute flex
         h-[78px] justify-center -mt-[90px] ${
           darkMode ? "bg-gray-600" : "bg-white"
         } ${ishover ? "block" : "hidden "}`}
      >
        <Link
          to={telechargeLink}
          target="_blank"
          className="bg-bl mt-5 hover:scale-105 transition-all
           duration-500 text-blanc  text-md rounded-full flex items-center h-[37px] px-5"
        >
          Télécharger
        </Link>

        <Link
          to={HandlePreview}
          target="_blank"
          className={` ${
            darkMode ? " hover:bg-black text-blanc" : "text-gray-600"
          } text-md hover:scale-105 transition-all duration-500 border border-gray-400
              ms-4 mt-5 rounded-full flex items-center h-[35px] px-4 `}
        >
          Aperçu <FaArrowUpRightFromSquare className="text-[15px] ms-4 mt-1" />
        </Link>
      </div>
      <div className="flex justify-between w-full">
        <div className="max-sm:pe-4">
          <Link
            to={handlePriceTo}
            target="_blank"
            className={` font-bold text-xl max-sm:text-sm ${
              ishover ? "text-vr" : darkMode ? "text-blanc" : "text-gray-600"
            }`}
          >
            {titreCrdTemplate}
          </Link>
          <br />
          <Link to={handlePriceTo} className="max-sm:text-sm" target="_blank">
            {DesctiptionTemplate}
          </Link>
        </div>
        <Link
          to={handlePriceTo}
          target="_blank"
          className={`text-lg font-[350] ${
            darkMode ? "text-blanc" : "text-gray-600"
          }`}
        >
          {prixTemplate}
        </Link>
      </div>
    </div>
  );
};
