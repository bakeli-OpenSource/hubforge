// TelechargePage.jsx
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  CardsTemplateContenu,
  CardsTemplateContenu2,
} from "../Utils/UtilsTemplates";
import { GoTriangleRight } from "react-icons/go";

const TelechargePage = () => {
  const { templateId } = useParams();
  const [carte1, setCarte1] = useState(true);
  const [carte2, setCarte2] = useState(false);
  let templateData;

  if (templateId === "template10" || templateId === "template11") {
    templateData = CardsTemplateContenu.find(
      (template) => template.telechargeLink === `/telecharge/${templateId}`
    );
  } else if (
    templateId === "template1" ||
    templateId === "template2" ||
    templateId === "template3" ||
    templateId === "template4" ||
    templateId === "template5" ||
    templateId === "template6" ||
    templateId === "template7" ||
    templateId === "template8" ||
    templateId === "template9"
  ) {
    templateData = CardsTemplateContenu2.find(
      (template) => template.telechargeLink === `/telecharge/${templateId}`
    );
  }

  const TelechargeHtml = () => {
    setCarte1(true);
    setCarte2(false);
  };
  const TelechargeReact = () => {
    setCarte1(false);
    setCarte2(true);
  };

  return (
    <div className="max-w-[1570px]">
      <div
        className={`flex flex-wrap max-md:justify-center justify-between p-6 max-sm:p-4 
         min-h-screen bg-gray-200 w-full`}
      >
        <div className="w-[49%] max-md:w-full mb-2">
          <img
            src={templateData.imageTemplate}
            className=" rounded-3xl hover:scale-105 animation-all duration-500 object-cover "
            alt="L'image du Template"
          />

          <h1 className="text-[#20143de4] ps-4 pt-6  f text-xl max-md:text-sm">
            <span className="text-lg font-medium  text-black max-sm:text-md ">
              Titre :
            </span>
            {templateData.titreCrdTemplate}
          </h1>

          <h2 className="text-[#20143de4] px-4 text-lg max-md:text-sm">
            <span className="text-lg font-medium max-sm:text-md pe-3 text-black ">
              Description :
            </span>
            {templateData.DesctiptionTemplate}
          </h2>

          <h3 className="flex items-center pt-1 text-[#20143de4] ps-4   text-lg max-md:text-xl">
            <span className="text-lg font-medium pe-3 text-black ">Prix :</span>
            {templateData.prixTemplate}
          </h3>
          <a
            href={templateData.HandlePreview}
            target="_blank"
            className="font-medium pe-3 flex items-center pt-1  underline hover:text-green-700 
            text-[#411c97e4] ps-4   text-md max-md:text-xl"
          >
            Aperçu du template
          </a>
        </div>

        <div className=" w-[49%] max-md:w-full  flex ">
          <div className=" w-full max-md:mt-5">
            <h2 className="text-[#120320e4] font-medium text-xl max-md:text-xl">
              Types de Code :
            </h2>

            <div className=" mt-4 bg-re0 w-full hidden max-md:ms-0 max-sm:block">
              {templateId !== "template10" && templateId !== "template11" && (
                <div className={carte1 ? "block" : "hidden"}>
                  <Link
                    to={templateData.handleDownloadHtml}
                    className={` bg-[#08601be8] w-full hover:scale-105 transition-all duration-500 text-blanc justify-center  text-xl rounded-full text-nowrap flex max-sm:text-sm items-center h-[50px] px-5`}
                  >
                    Télécharger version HTML
                  </Link>
                </div>
              )}

              <div
                className={
                  carte2 ||
                  templateId === "template10" ||
                  templateId === "template11"
                    ? "block"
                    : "hidden"
                }
              >
                <Link
                  to={templateData.handleBuy}
                  className={`  bg-blue-950 w-full hover:scale-105 transition-all duration-500 text-blanc  text-xl rounded-full flex items-center justify-center text-nowrap max-sm:text-sm h-[50px] px-5`}
                >
                  Télécharger version React.Js
                </Link>
              </div>
            </div>
            {templateId !== "template10" && templateId !== "template11" && (
              <div
                onClick={TelechargeHtml}
                className={`  my-4 rounded-xl cursor-pointer ${
                  carte1
                    ? "border-[#08601be8] border-[3px]"
                    : "border-gray-400 border "
                }  `}
              >
                <div
                  className={`border-b w-full border-gray-400 pe-6 flex justify-between items-center`}
                >
                  <div className="flex items-center ms-4">
                    <div
                      className={`w-[20px] h-[20px] rounded-full border flex justify-center items-center border-gray-400 `}
                    >
                      <div
                        className={`w-[12px] h-[12px]  rounded-full  ${
                          carte1 ? "bg-[#08601be8]" : ""
                        } `}
                      ></div>
                    </div>
                    <h2
                      className={`flex p-3 text-[#08601be8] ${
                        carte1
                          ? " font-bold max-sm:text-sm  "
                          : "text-[#39267f] font-medium "
                      }`}
                    >
                      HTML - TailwindCss
                    </h2>
                  </div>

                  {templateData.prixTemplate}
                </div>

                <h2 className="text-[#20143de4] flex font-medium ps-6 py-6 text-md">
                  Version HTML - TailwindCss
                </h2>
              </div>
            )}

            {/*============================== React COde source ============================== */}

            <div
              onClick={TelechargeReact}
              className={`  my-4 rounded-xl cursor-pointer ${
                carte2 ||
                templateId === "template10" ||
                templateId === "template11"
                  ? "border-blue-950 border-[3px]"
                  : "border-gray-400 border "
              }  `}
            >
              <div
                className={`border-b w-full border-gray-400 pe-6 flex justify-between items-center`}
              >
                <div className="flex items-center ms-4">
                  <div
                    className={`w-[20px] h-[20px] rounded-full border flex justify-center items-center border-gray-400 `}
                  >
                    <div
                      className={`w-[12px] h-[12px]  rounded-full  ${
                        carte2 ||
                        templateId === "template10" ||
                        templateId === "template11"
                          ? "bg-blue-950"
                          : ""
                      } `}
                    ></div>
                  </div>
                  <h2
                    className={`flex p-3  ${
                      carte2
                        ? "text-blue-950 font-bold max-sm:text-sm "
                        : "text-[#39267f] font-medium "
                    }`}
                  >
                    React.Js - TailwindCss
                  </h2>
                </div>

                {templateData.prixTemplate}
              </div>

              <h2 className="text-[#20143de4] flex font-medium ps-6 py-6 text-md">
                Version React.Js - TailwindCss
              </h2>

              <h2 className="text-[#20143de4]  pb-4 ps-6 text-md">
                Après le téléchargement du Template :
                <span className="flex pt-2 ">
                  <GoTriangleRight className=" text-2xl pt-1 " /> Intallez les
                  dépendances avec
                  <span className=" ms-1 pb-1 px-2 bg-gray-300 text-md font-medium rounded-lg  ">
                    npm install
                  </span>
                </span>
                <span className="flex mt-1">
                  <GoTriangleRight className=" text-2xl pt-1" /> Lencer
                  L'application avec
                  <span className=" ms-1 pb-1 px-2 bg-gray-300 text-md font-medium  rounded-lg  ">
                    {templateId === "template10" || templateId === "template11"
                      ? "npm run start:dev"
                      : "npm start"}
                  </span>
                </span>
              </h2>
            </div>

            <div className="max-sm:hidden bg-re0 w-full max-md:ms-0">
              {templateId !== "template10" && templateId !== "template11" && (
                <div className={carte1 ? "block" : "hidden"}>
                  <Link
                    to={templateData.handleDownloadHtml}
                    className={` bg-[#08601be8] w-full hover:scale-105 transition-all duration-500 text-blanc justify-center  text-xl rounded-full flex items-center h-[50px] px-5`}
                  >
                    Télécharger version HTML
                  </Link>
                </div>
              )}

              <div
                className={
                  carte2 ||
                  templateId === "template10" ||
                  templateId === "template11"
                    ? "block"
                    : "hidden"
                }
              >
                <Link
                  to={templateData.handleBuy}
                  className={`  bg-blue-950 w-full hover:scale-105 transition-all duration-500 text-blanc  text-xl rounded-full flex items-center justify-center h-[50px] px-5`}
                >
                  Télécharger version React.Js
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelechargePage;
