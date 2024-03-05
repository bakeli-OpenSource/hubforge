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
  const [clickCounts, setClickCounts] = useState({}); // State pour enregistrer le no

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
  const handleDownloadClick = (telechargementId) => {
    // Mettre à jour le nombre de clics pour ce type de téléchargement
    setClickCounts((prevClicks) => ({
      ...prevClicks,
      [telechargementId]: prevClicks[telechargementId] + 1,
    }));
  };
  return (
    <div className="max-w-[1570px] ">
      {Data && (
        <div
          className={`flex flex-wrap max-md:justify-center justify-between 
          bg-blc w-full`}
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

          <div className=" w-[50%] max-md:w-full md:h-screen max-md:pb-24 md:overflow-y-scroll max-md:pt-0 pt-6 pe-6  bg-gray-200 ps-6  ">
            <div className=" w-full mt-20 max-md:mt-5">
              <h2 className="text-mr font-medium text-xl max-md:text-xl">
                Types de Téléchargements :
              </h2>

              {tel.map((t) => (
                <div className=" mt-4  pb-6 fixed bottom-0 w-[100%] bg-gray-200 pe-12 hidden max-md:ms-0 max-md:block">
                  <div className={clic === t.id ? "block" : "hidden"}>
                    <MonLink
                      action={t.telechargement}
                      actionName={`Télécharger ${t.type_code}`}
                      BgColor={`${t.id % 2 === 0 ? "bg-rg" : "bg-vr"}`}
                      clic={() => handleDownloadClick(t.type_code)}
                    />
                    <p>
                    Nombre de clics : {clickCounts[t.type_code] || 0}
                  </p>
  
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
                <div className="max-md:hidden bg-gray-200 pt-6 fixed top-0 w-[50%] pe-16 max-md:ms-0">
                  <div className={clic === t.id ? "block" : "hidden"}>
                    <MonLink
                      action={t.telechargement}
                      actionName={`Télécharger ${t.type_code}`}
                      BgColor={`${t.id % 2 === 0 ? "bg-rg" : "bg-vr"}`}
                      clic={() => handleDownloadClick(t.type_code)}
                    />
                    <p>
                    Nombre de clics : {clickCounts[t.type_code] || 0}
                  </p>

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
