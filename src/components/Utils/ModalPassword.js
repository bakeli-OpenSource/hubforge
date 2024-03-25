import React from 'react';
import MonInput from './MonInput';
import MonBouton from './MonBouton';
import  { useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";

import { ScaleLoader } from "react-spinners";


export default function ModalPassword({ onClose }) {


  const [maskBtn, SetMaskBtn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const handleClick = async () => {
   
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-gray-800 bg-opacity-50 fixed inset-0"></div>
      <div className="w-full max-w-md mx-auto p-6 z-10 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <div className=" relative p-4 sm:p-7">
        <button className="absolute top-2 right-2 text-gray-500 dark:text-gray-400" onClick={onClose}>X</button>
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-bl">Mot De Passe Oublie?</h1>
            <p className="mt-2 text-sm text-mr">
              Recuperer votre mot de passe?
            </p>
          </div>

          <div className="mt-5">
            <form>
            <div className="grid gap-y-4">
              <div>
            <div className="relative">
            <MonInput
            type="email"
            id="email"
            value={email}
            placeholder={"E-mail"}
            onChange={(e) => {
              setEmail(e.target.value);
              const Err = !/^.+@.+\..+$/.test(e.target.value) ? (
                <>
                  <FiAlertTriangle className="me-2" /> Adresse email invalide.
                </>
              ) : (
                ""
              );
              setEmailError(Err);
              // btnStatus();
            }}
            MessageError={emailError}
          />
                  </div>
                  <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                </div> 
          <MonBouton
            textColor={` mt-6 hover:scale-[97%] transition-all duration-500 w-full rounded-full py-2 text-xl ${
              emailError !== "" || isLoading ? "hidden" : ""
            }`}
            couleurFond="bg-bl text-blc"
            action={handleClick}
            id={"connecter"}
            disabled={maskBtn}
          >
            {isLoading ? <ScaleLoader color="#36d145" /> : "Se connecter"}
          </MonBouton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
