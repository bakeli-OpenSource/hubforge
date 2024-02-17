// TelechargePage.jsx
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  CardsTemplateContenu,
  CardsTemplateContenu2,
} from "../Utils/UtilsTemplates";
import { DetailsTemp, InstructionTemp, MonLink } from "../PageTemplate";
import { CodeChoix } from "./CodeChoix";

const TelechargePage = () => {
  const { templateId } = useParams();
  const [carte1, setCarte1] = useState(true);
  const [carte2, setCarte2] = useState(false);
  let templateData;
  const a = templateId;
  const b = "template10";
  const c = "template11";

  if (a === b || a === c) {
    templateData = CardsTemplateContenu.find(
      (template) => template.telechargeLink === `/telecharge/${a}`
    );
  } else if (
    a === "template1" ||
    a === "template2" ||
    a === "template3" ||
    a === "template4" ||
    a === "template5" ||
    a === "template6" ||
    a === "template7" ||
    a === "template8" ||
    a === "template9"
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
          <DetailsTemp
            imageTemp={templateData.imageTemplate}
            titreCrdTemp={templateData.titreCrdTemplate}
            DescriptTemp={templateData.DesctiptionTemplate}
            prixTemplate={templateData.prixTemplate}
            aprerçuTemp={templateData.HandlePreview}
          />
        </div>

        <div className=" w-[49%] max-md:w-full  flex ">
          <div className=" w-full max-md:mt-5">
            <h2 className="text-[#120320e4] font-medium text-xl max-md:text-xl">
              Types de Code :
            </h2>

            <div className=" mt-4 bg-re0 w-full hidden max-md:ms-0 max-md:block">
              {a !== b && a !== c && (
                <div className={carte1 ? "block" : "hidden"}>
                  <MonLink
                    action={templateData.handleDownloadHtml}
                    actionName={"Télécharger version version HTML"}
                    BgColor={"bg-[#08601be8]"}
                  />
                </div>
              )}
              <div
                className={carte2 || a === b || a === c ? "block" : "hidden"}
              >
                <MonLink
                  action={templateData.handleBuy}
                  actionName={"Télécharger version React.Js"}
                  BgColor={"bg-blue-950"}
                />
              </div>
            </div>
            {a !== b && a !== c && (
              <div
                onClick={TelechargeHtml}
                className={`  my-4 rounded-xl cursor-pointer ${
                  carte1
                    ? "border-[#08601be8] border-[3px]"
                    : "border-gray-400 border "
                }  `}
              >
                <CodeChoix
                  condition1={carte1 ? "bg-[#08601be8]" : ""}
                  condition2={
                    carte1
                      ? " font-bold text-[#08601be8] max-sm:text-sm  "
                      : "text-[#39267f] font-medium "
                  }
                  TypeCode={"HTML - TailwindCss"}
                  prixTemplate={templateData.prixTemplate}
                />

                <h2 className="text-[#20143de4] flex font-medium ps-6 py-6 text-md">
                  Version HTML - TailwindCss
                </h2>
              </div>
            )}

            {/*============================== React COde source ============================== */}

            <div
              onClick={TelechargeReact}
              className={`  my-4 rounded-xl cursor-pointer ${
                carte2 || a === b || a === c
                  ? "border-blue-950 border-[3px]"
                  : "border-gray-400 border "
              }  `}
            >
              <CodeChoix
                condition1={carte2 || a === b || a === c ? "bg-blue-950" : ""}
                condition2={
                  carte2
                    ? "text-blue-950 font-bold max-sm:text-sm "
                    : "text-[#39267f] font-medium "
                }
                TypeCode={"React.Js - TailwindCss"}
                prixTemplate={templateData.prixTemplate}
              />

              <h2 className="text-[#20143de4] flex font-medium ps-6 py-6 text-md">
                Version React.Js - TailwindCss
              </h2>
              <InstructionTemp
                condition={
                  a === b || a === c ? "npm run start:dev" : "npm start"
                }
              />
            </div>

            <div className="max-md:hidden bg-re0 w-full max-md:ms-0">
              {a !== b && a !== c && (
                <div className={carte1 ? "block" : "hidden"}>
                  <MonLink
                    action={templateData.handleDownloadHtml}
                    actionName={"Télécharger version version HTML"}
                    BgColor={"bg-[#08601be8]"}
                  />
                </div>
              )}

              <div
                className={carte2 || a === b || a === c ? "block" : "hidden"}
              >
                <MonLink
                  action={templateData.handleBuy}
                  actionName={"Télécharger version React.Js"}
                  BgColor={"bg-blue-950"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelechargePage;
