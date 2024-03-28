import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useAppContext } from "../../context/AppContext";
import MonInput from "../Utils/MonInput";
import RichEditor from "./RichEditor";

export default function AddForm() {
  const { darkMode } = useAppContext();
  const [wysiwygForms, setWysiwygForms] = useState([<WysiwygForm key={1} />]);
  const [formIdCounter, setFormIdCounter] = useState(1);

  const handleAddWysiwygForm = () => {
    const newFormId = formIdCounter + 1;
    setFormIdCounter(newFormId);
    const newForms = [
      ...wysiwygForms,
      <WysiwygForm
        key={newFormId}
        onDelete={() => handleDeleteWysiwygForm(newFormId)}
        formKey={newFormId}
      />,
    ];
    setWysiwygForms(newForms);
  };

  const handleDeleteWysiwygForm = (index) => {
    const updatedForms = [...wysiwygForms];
    updatedForms.splice(index, 1);
    setWysiwygForms(updatedForms);
  };

  function WysiwygForm({ formKey, onDelete }) {
    const handleDeleteClick = () => {
      onDelete(formKey);
    };

    return (
      <>
        <div className="flex flex-col gap-3 mt-3 py-4 px-6 rounded-tl-xl rounded-tr-xl border border-gray">
          <div className="flex items-center gap-3">
            <div className="grid flex-1 gap-y-1 justify-end">
              <p
                className={`overflow-hidden break-words text-sm  ${
                  darkMode ? "text-white" : "text-gray-500"
                }`}
              >
                <RiDeleteBin6Line
                  className="h-5 w-5 text-red-500 cursor-pointer"
                  onClick={handleDeleteClick}
                />
              </p>
            </div>
          </div>
        </div>
        <div className="p-3 border border-gray flex flex-column">
          {/* <RichEditor /> */}
          WYSIWYG
        </div>
      </>
    );
  }

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
                      className={`text-sm font-bold tracking-tight ${
                        darkMode ? "text-gray-500" : "text-gray-950"
                      } p-2`}
                    >
                      Types de Téléchargements
                    </p>
                  </div>
                </header>
                <div className="wysiwyg flex flex-wrap justify-between">
                  {/* Formulaire de wysiwyg */}
                  {wysiwygForms.map((index) => (
                    <div
                      key={index}
                      className="w-full md:w-1/2 flex item-center justify-center"
                    >
                      <div className="w-[98%]">
                        <WysiwygForm
                          formKey={index}
                          onDelete={handleDeleteWysiwygForm}
                        />
                      </div>
                    </div>
                  ))}
                  {/* Fin Formulaire de wysiwyg */}
                </div>
                <div className="flex justify-center my-4 mx-3">
                  <button
                    className="grid-flow-col items-center justify-center font-semibold outline-none transition duration-75 focus-visible:ring-2 rounded-lg gap-1 px-2.5 py-1.5 text-sm inline-grid shadow-md text-gray-950 hover:bg-gray-50 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 ring-1 ring-gray-950/10 dark:ring-white/20 border border-gray"
                    type="button"
                    onClick={handleAddWysiwygForm}
                  >
                    <span className="text-gray-950">
                      Ajouter un types de Téléchargements
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <footer className="gap-3 flex flex-wrap items-center justify-start mx-6">
        <button
          className="grid-flow-col items-center justify-center font-semibold outline-none transition duration-75 focus-visible:ring-2 rounded-lg gap-1.5 px-3 py-2 text-sm inline-grid shadow-xl bg-[#4F46FE] text-white hover:bg-custom-500 focus-visible:ring-custom-500/50 dark:bg-custom-500 dark:hover:bg-custom-400 dark:focus-visible:ring-custom-400/50 border border-gray"
          type="submit"
        >
          <span className="text-white">Créer</span>
          <span className="" style={{ display: "none" }}></span>
        </button>

        <button
          className="grid-flow-col items-center justify-center font-semibold outline-none transition duration-75 focus-visible:ring-2 rounded-lg gap-1.5 px-3 py-2 text-sm inline-grid shadow-xl bg-white text-gray-950 hover:bg-gray-50 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 ring-1 ring-gray-950/10 dark:ring-white/20 border border-gray"
          type="button"
        >
          <span className="text-gray-950">Créer &amp; Ajouter un autre</span>
        </button>

        <button
          className="grid-flow-col items-center justify-center font-semibold outline-none transition duration-75 focus-visible:ring-2 rounded-lg gap-1.5 px-3 py-2 text-sm inline-grid shadow-xl bg-white text-gray-950 hover:bg-gray-50 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 ring-1 ring-gray-950/10 dark:ring-white/20 border border-gray"
          type="button"
        >
          <span className="text-gray-950">Annuler</span>
        </button>
      </footer>
    </main>
  );
}