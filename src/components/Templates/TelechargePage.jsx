// components/TelechargePage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailsTemp, MonLink } from "../PageTemplate";
import { CodeChoix } from "./CodeChoix";
import { useAppContext } from "../../context/AppContext";
import { useTemplates } from "../../hook/useTemplates";
import { usePostClic } from "../../hook/usePostClic";
import RenderWysiwyg from "render-wysiwyg";


const TelechargePage = () => {
  const { templateId } = useParams();
  const [clic, setClic] = useState(null);
  const [clickCounts, setClickCounts] = useState(0);
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

  const postClicMutation = usePostClic();

  return (
    <div>
      {Data && (
        <div
          className={`flex flex-wrap max-md:justify-center justify-between bg-blc w-full`}
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

          <div className=" w-[50%] max-md:w-full md:h-screen max-md:pb-20 md:overflow-y-scroll max-md:pt-0 pt-6 pe-6  bg-gray-200 ps-6  ">
            <div className=" w-full mt-20 max-md:mt-5">
              <h2 className="text-mr font-medium text-xl max-md:text-xl">
                Types de Téléchargements :
              </h2>

              {tel.map((t) => (
                <div
                  className=" mt-2 fixed pb-3 left-0 bottom-0 w-[100%] px-5 bg-gray-200  hidden max-md:ms-0 max-md:block"
                  key={t.id}
                >
                  <div className={clic === t.id ? "block" : "hidden"}>
                    <MonLink
                      action={t.telechargement}
                      actionName={`Télécharger ${t.type_code}`}
                      BgColor={`${t.id % 2 === 0 ? "bg-rg" : "bg-vr"}`}
                      onClick={() => {
                        setClickCounts(clickCounts + 1);
                        postClicMutation.mutate({
                          type_telechargement_id: clic,
                          nom_type_telechargement: Data.nom,
                        });
                      }}
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
                      ? `border-[3px] ${t.id % 2 === 0 ? "border-rg " : "border-vr "}`
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
                  <div className="px-3 text-wrap text-break">
                    <h2 className="text-mr pb-2 font-bold text-md">
                      Après le téléchargement du Template :
                    </h2>
                    <p className=" pb-4 text-mr break-all">
                      <RenderWysiwyg content={t.description} />
                    </p>
                  </div>
                </div>
              ))}

              {tel.map((t) => (
                <div
                  className="max-md:hidden bg-gray-200 pt-6 fixed top-0 pe-[20px] w-[47%] max-md:ms-0"
                  key={t.id}
                >
                  <div className={clic === t.id ? "block" : "hidden"}>
                    <MonLink
                      action={t.telechargement}
                      actionName={`Télécharger ${t.type_code}`}
                      BgColor={`${t.id % 2 === 0 ? "bg-rg" : "bg-vr"}`}
                      onClick={() => {
                        setClickCounts(clickCounts + 1);
                        postClicMutation.mutate({
                          type_telechargement_id: clic,
                          nom_type_telechargement: Data.nom,
                        });
                      }}
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
