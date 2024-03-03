import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailsTemp, MonLink } from "../PageTemplate";
import { CodeChoix } from "./CodeChoix";
import { useAppContext } from "../../context/AppContext";
import { useTemplates } from "../../hook/useTemplates";

const TelechargePage = () => {
  const { templateId } = useParams();
  const [clic, setClic] = useState(null);
  const { apiUrlImg } = useAppContext();
  const { data: templates } = useTemplates();

  const Data = templates?.find(
    (template) => template.id === Number(templateId)
  );
  const tel = Data?.type_telechargements?.map((t) => t);

  useEffect(() => {
    if (tel && tel.length > 0 && clic === null) {
      setClic(tel[0].id);
    }
  }, [tel, clic]);

  const typeSelect = (type) => {
    setClic((prev) => (prev === type ? null : type));
  };

  return (
    <div className="max-w-[1570px] ">
      {Data && (
        <div
          className={`flex flex-wrap max-md:justify-center justify-between 
         min-h-screen bg-blc w-full`}
        >
          <div className="w-[50%] max-md:w-full mb-2">
            <DetailsTemp
              imageTemp={`${apiUrlImg}/${Data.image}`}
              titreCrdTemp={Data.titre}
              DescriptTemp={Data.description}
              prixTemplate={Data.prix === null ? "Free" : Data.prix}
              aprerçuTemp={Data.aperçu}
            />
          </div>

          <div className=" w-[50%] max-md:w-full max-md:pt-0 pt-6 pe-6 flex bg-gray-200 ps-6 ">
            <div className=" w-full max-md:mt-5">
              <h2 className="text-mr font-medium text-xl max-md:text-xl">
                Types de Code :
              </h2>

              {tel.map((t) => (
                <div className=" mt-4 bg-re0 w-full hidden max-md:ms-0 max-md:block">
                  <div className={clic === t.id ? "block" : "hidden"}>
                    <MonLink
                      action={t.telechargement}
                      actionName={`Télécharger ${t.type_code}`}
                      BgColor={`${t.id % 2 === 0 ? "bg-rg" : "bg-vr"}`}
                    />
                  </div>
                </div>
              ))}

              {tel.map((t) => (
                <div
                  key={t.id}
                  onClick={() => typeSelect(t.id)}
                  className={`my-4 rounded-xl cursor-pointer ${
                    clic === t.id
                      ? `border-[3px] ${
                          t.id % 2 === 0 ? "border-rg " : "border-vr "
                        }`
                      : "border-gray-400 border "
                  } `}
                >
                  <CodeChoix
                    key={t.id}
                    condition1={
                      clic === t.id
                        ? `${t.id % 2 === 0 ? "bg-rg" : "bg-vr"}`
                        : ""
                    }
                    condition2={
                      clic === t.id
                        ? `font-bold ${t.id % 2 === 0 ? "text-rg" : "text-vr"} max-sm:text-sm `
                        : "text-mr font-medium "
                    }
                    TypeCode={t.type_code}
                    prixTemplate={Data.prix === null ? "Free" : Data.prix}
                  />
                  <h2 className="text-mr pb-4 ps-5 text-lg">{t.type_code}</h2>
                  <h2 className="text-mr pb-2 ps-5 text-md">
                    Après le téléchargement du Template :
                  </h2>
                  <p
                    className="px-5 pb-4 text-mr"
                    dangerouslySetInnerHTML={{ __html: t.description }}
                  ></p>
                </div>
              ))}

              {tel.map((t) => (
                <div className="max-md:hidden w-full max-md:ms-0">
                  <div className={clic === t.id ? "block" : "hidden"}>
                    <MonLink
                      action={t.telechargement}
                      actionName={`Télécharger ${t.type_code}`}
                      BgColor={`${t.id % 2 === 0 ? "bg-rg" : "bg-vr"}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default TelechargePage;
