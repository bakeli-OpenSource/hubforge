import React, { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { useAppContext } from "../../context/AppContext";

export const FooterPageAcueil = () => {
  const { darkMode } = useAppContext();

  const date = new Date();
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  };

  return (
    <div className=" mt-20 pb-6 text-sm tracking-wide">
      <div className="mx-auto flex flex-col items-start justify-center px-6 md:max-w-full md:px-12 lg:max-w-8xl">
        <div className=" flex w-full flex-wrap items-center justify-center gap-3 border-t border-gray-300 pt-6 text-sm sm:justify-between">
          <div className="flex items-center  max-sm:w-full justify-center max-sm:ms-6">
            <div className="md:flex md:items-center md:gap-12">
              <a
                className={`${
                  darkMode ? "text-blanc" : "text-dark"
                } flex items-center`}
                href="/"
              >
                <BiLoaderCircle className={`text-[37px] me-3`} />
              </a>
            </div>
            <span className="block w-60 pt-1">
              &copy; HubForge {formatDate(date)}
            </span>
          </div>
          <div
            className={` ${
              darkMode ? "text-blc" : ""
            } flex gap-1 overflow-hidden font-medium text-bl `}
          >
            Proudly By
            <h2
              className="-mt-[3px] flex items-start justify-center gap-2 
              text-center text-lg font-semibold text-bl  sm:gap-1"
            >
              <div className="block ">
                <div
                  className={`relative text-bl  block pb-2 ${
                    darkMode ? "text-vr" : ""
                  }`}
                >
                  <span className="block "> Bakeli </span>
                </div>
              </div>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
