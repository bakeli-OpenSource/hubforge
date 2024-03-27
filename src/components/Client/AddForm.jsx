import React from "react";
import { useAppContext } from "../../context/AppContext";
import MonInput from "../Utils/MonInput";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function AddForm() {
  const { darkMode } = useAppContext();

  return (
    <main className={`flex flex-col gap-y-8 py-8`}>
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1
            className={`text-2xl font-bold tracking-tight ${
              darkMode ? "text-white" : "text-noir"
            } sm:text-3xl p-2`}
          >
            Ajouter Templates
          </h1>
        </div>
      </header>

      <section className="w-auto border shadow-md rounded-tl-xl rounded-tr-xl mx-6">
        <header className="flex flex-col gap-3 px-6 py-4 rounded-tl-md rounded-tr-md border-b border-gray">
          <div className="flex items-center gap-3">
            <div className="grid flex-1 gap-y-1">
              <h3
                className={`text-base font-semibold leading-6  ${
                  darkMode ? "text-white" : "text-gray-950"
                }`}
              >
                Ajout Template
              </h3>
              <p
                className={`overflow-hidden break-words text-sm  ${
                  darkMode ? "text-white" : "text-gray-500"
                }`}
              >
                Ajouter un nouveau Template dans HubForge
              </p>
            </div>
          </div>
        </header>

        <div className="p-3 border border-gray">
          <form action="" className="flex flex-col">
            <div className="part1 flex md:flex-row flex-col justify-between">
              <div className="flex flex-wrap justify-between basis-2/3 rounded-full border rounded-xl m-3 px-4 py-4">
                <div className="w-full md:w-1/2 mb-3 md:mb-0">
                  <MonInput
                    label="Nom*"
                    type="text"
                    id="nomTemplate"
                    onChange={(e) => console.log(e.target.value)}
                    placeholder="Le nom de votre template"
                    paddingB="h-9 md:w-[95%]"
                    labelStyle="font-bold text-md ms-1 mb-3"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <MonInput
                    label="Description*"
                    type="text"
                    id="descriptionTemplate"
                    onChange={(e) => console.log(e.target.value)}
                    placeholder="La description de votre template"
                    paddingB="h-9 md:w-[95%]"
                    labelStyle="font-bold text-md ms-1 mb-3"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <MonInput
                    label="Type de code*"
                    type="select"
                    id="typeCodeTemplate"
                    onChange={(e) => console.log(e.target.value)}
                    placeholder="Le type de code de votre template"
                    paddingB="h-9 md:w-[95%] mt-3 pb-0"
                    labelStyle="font-bold text-md ms-1 mb-3"
                    options={[
                      { value: "landing-page", label: "Landing Page" },
                      { value: "dashboard", label: "Dashboard" },
                    ]}
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <MonInput
                    label="Couleur*"
                    type=""
                    id="couleurTemplate"
                    onChange={(e) => console.log(e.target.value)}
                    placeholder="La couleur principal de votre template"
                    paddingB="h-9 md:w-[95%]"
                    labelStyle="font-bold text-md ms-1 mb-3"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <MonInput
                    label="Aperçu*"
                    type="url"
                    id="apercuTemplate"
                    onChange={(e) => console.log(e.target.value)}
                    placeholder="Lien de l'aperçus de votre template"
                    paddingB="h-9 md:w-[95%]"
                    labelStyle="font-bold text-md ms-1 mb-3"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <MonInput
                    label="Prix*"
                    type="text"
                    id="prixTemplate"
                    onChange={(e) => console.log(e.target.value)}
                    placeholder="Le prix de votre template"
                    paddingB="h-9 md:w-[95%]"
                    labelStyle="font-bold text-md ms-1 mb-3"
                  />
                </div>
                <div className="w-full">
                  <MonInput
                    label="Catégorie Template*"
                    type="select"
                    id="descriptionTemplate"
                    onChange={(e) => console.log(e.target.value)}
                    placeholder="Séléctionner ou Ajouter une catégorie"
                    paddingB="h-9 md:w-[98%]  mt-3 pb-0"
                    labelStyle="font-bold text-md ms-1 mb-3"
                    options={[
                      { value: "categorie1", label: "categorie1" },
                      { value: "categorie2", label: "categorie2" },
                    ]}
                  />
                </div>
              </div>
              <div className="image basis-1/3">
                <div className="flex flex-col justify-center items-start rounded-full border rounded-xl m-3 px-3 py-[5%]">
                  <p className="text-gray-500 font-bold text-md ms-1 mb-3">
                    Image du Template*
                  </p>
                  <div className="w-full">
                    <label
                      htmlFor="file"
                      className="flex justify-center items-center rounded-full border rounded-xl w-100 py-[10%] cursor-pointer"
                    >
                      Choisir une image
                    </label>
                    <input
                      type="file"
                      name="file"
                      id="file"
                      className="hidden"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="part2 flex flex-col">
              <div className="flex flex-col gap-3 mx-3 mt-3 py-4 px-6 rounded-tl-xl rounded-tr-xl border border-gray">
                <div className="flex items-center gap-3">
                  <div className="grid flex-1 gap-y-1">
                    <p
                      className={`overflow-hidden break-words text-sm  ${
                        darkMode ? "text-white" : "text-gray-500"
                      }`}
                    >
                      Ajouter un nouveau Template dans HubForge
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-3 mx-3 border border-gray">
                <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p
                      className={`text-sm tracking-tight ${
                        darkMode ? "text-gray-500" : "text-gray-950"
                      } p-2`}
                    >
                      Types de Téléchargements
                    </p>
                  </div>
                </header>
                <div className="wysiwyg flex flex-wrap justify-between">
                  {/* Formulaire de wysiwyg */}
                  <div className="w-full md:w-1/2 flex item-center justify-center">
                    <div className="w-[95%]">
                      <div className="flex flex-col gap-3 mt-3 py-4 px-6 rounded-tl-xl rounded-tr-xl border border-gray">
                        <div className="flex items-center gap-3">
                          <div className="grid flex-1 gap-y-1 justify-end">
                            <p
                              className={`overflow-hidden break-words text-sm  ${
                                darkMode ? "text-white" : "text-gray-500"
                              }`}
                            >
                              <RiDeleteBin6Line className="h-5 w-5 text-red-500" />
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 border border-gray flex flex-column">
                        EDITEUR WYSIWYG ICI
                      </div>
                    </div>
                  </div>
                  {/* Fin Formulaire de wysiwyg */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
