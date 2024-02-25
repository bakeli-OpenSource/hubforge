import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { DetailsTemp, InstructionTemp, MonLink } from "../PageTemplate";
import { CodeChoix } from "./CodeChoix";
import { useAppContext } from "../../context/AppContext";
import { PulseLoader } from "react-spinners";

const TelechargePage = () => {
  const { templateId } = useParams();
  const [carte1, setCarte1] = useState(true);
  const [carte2, setCarte2] = useState(false);
  const { templates, apiUrlImg, loading } = useAppContext();

  const templateData = templates?.find(
    (template) => template.id === Number(templateId)
  );
  console.log("templates:", templateData);

  const TelechargeHtml = () => {
    setCarte1(true);
    setCarte2(false);
  };
  const TelechargeReact = () => {
    setCarte1(false);
    setCarte2(true);
  };

  return (
    <div className="max-w-[1570px] ">
      {loading && (
        <div className="text-center mt-60  items-center">
          <p className="py-6 italic text-bl font-bold text-2xl">
            Chargement ...
          </p>
          <PulseLoader color="#072967" size={"18"} />
        </div>
      )}
      {!loading && templateData && (
        <div
          className={`flex flex-wrap max-md:justify-center justify-between 
         min-h-screen bg-blc w-full`}
        >
          <div className="w-[50%] max-md:w-full mb-2">
            <DetailsTemp
              imageTemp={`${apiUrlImg}/${templateData.image}`}
              titreCrdTemp={templateData.titre}
              DescriptTemp={templateData.description}
              prixTemplate={templateData.prix}
              aprerçuTemp={templateData.preview}
              Bordure={carte1 ? "border-vr" : "border-rg"}
              Marge={templateData.type === "dashboard" ? "max-xs:-mb-6" : ""}
            />
          </div>

          <div className=" w-[50%] max-md:w-full max-md:pt-0 pt-6 pe-6 flex bg-gray-200 ps-6 ">
            <div className=" w-full max-md:mt-5">
              <h2 className="text-mr font-medium text-xl max-md:text-xl">
                Types de Code :
              </h2>

              <div className=" mt-4 bg-re0 w-full hidden max-md:ms-0 max-md:block">
                {templateData.type === "template" && (
                  <div className={carte1 ? "block" : "hidden"}>
                    <MonLink
                      action={templateData.telechargeHtml}
                      actionName={"Télécharger version version HTML"}
                      BgColor={"bg-vr"}
                    />
                  </div>
                )}
                <div
                  className={
                    carte2 || templateData.type === "dashboard"
                      ? "block"
                      : "hidden"
                  }
                >
                  <MonLink
                    action={templateData.telechargeReact}
                    actionName={"Télécharger version React.Js"}
                    BgColor={"bg-rg"}
                  />
                </div>
              </div>
              {templateData.type === "template" && (
                <div
                  onClick={TelechargeHtml}
                  className={`  my-4 rounded-xl cursor-pointer ${
                    carte1
                      ? "border-vr border-[3px]"
                      : "border-gray-400 border "
                  }  `}
                >
                  <CodeChoix
                    condition1={carte1 ? "bg-vr" : ""}
                    condition2={
                      carte1
                        ? " font-bold text-vr max-sm:text-sm  "
                        : "text-mr font-medium "
                    }
                    TypeCode={"HTML - TailwindCss"}
                    prixTemplate={templateData.prix}
                  />

                  <h2 className="text-mr flex font-medium ps-6 py-6 text-md">
                    Version HTML - TailwindCss
                  </h2>
                </div>
              )}

              {/*============================== React COde source ==============================*/}

              <div
                onClick={TelechargeReact}
                className={`my-4 rounded-xl cursor-pointer ${
                  carte2 || templateData.type === "dashboard"
                    ? "border-rg border-[3px]"
                    : "border-gray-400 border "
                }  `}
              >
                <CodeChoix
                  condition1={
                    carte2 || templateData.type === "dashboard" ? "bg-rg" : ""
                  }
                  condition2={
                    carte2
                      ? "text-rg font-bold max-sm:text-sm "
                      : "text-mr font-medium "
                  }
                  TypeCode={"React.Js - TailwindCss"}
                  prixTemplate={templateData.prix}
                />

                <h2 className="text-mr flex font-medium ps-6 py-6 text-md">
                  Version React.Js - TailwindCss
                </h2>
                <InstructionTemp
                  condition={
                    templateData.type === "dashboard"
                      ? "npm run start:dev"
                      : "npm start"
                  }
                />
              </div>

              <div className="max-md:hidden w-full max-md:ms-0">
                {templateData.type === "template" && (
                  <div className={carte1 ? "block" : "hidden"}>
                    <MonLink
                      action={templateData.telechargeHtml}
                      actionName={"Télécharger version version HTML"}
                      BgColor={"bg-vr"}
                    />
                  </div>
                )}

                <div
                  className={
                    carte2 || templateData.type === "dashboard"
                      ? "block"
                      : "hidden"
                  }
                >
                  <MonLink
                    action={templateData.telechargeReact}
                    actionName={"Télécharger version React.Js"}
                    BgColor={"bg-rg"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TelechargePage;
