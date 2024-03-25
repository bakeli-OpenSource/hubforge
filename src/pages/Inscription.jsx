import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PropagateLoader } from "react-spinners";
import MonInput from "../components/Utils/MonInput";
import MonBouton from "../components/Utils/MonBouton";
import { BiLoaderCircle } from "react-icons/bi";
import { FiAlertTriangle } from "react-icons/fi";
import { useAppContext } from "../context/AppContext";

export const Inscription = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [PasswordError, setPasswordError] = useState("");
  const [maskBtn, setMaskBtn] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // Ajout de l'état isLoading
  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [formError, setFormError] = useState(""); // Nouvel état pour stocker les erreurs de formulaire
  const { apiUrlCat } = useAppContext();

  const signUp = async () => {
    if (!name || !email || !password) {
      setFormError("Veuillez remplir tous les champs.");
      return;
    }

    setIsLoading(true); // Afficher le loader lorsque l'inscription est en cours

    let item = { name, email, password };
    let result = await fetch(`${apiUrlCat}/register`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    setIsLoading(false);

    if (result.status === 400) {
      let errorMessage = await result.json();
      setFormError(errorMessage.error);
    } else {
      let successMessage = await result.json();
      toast.success(successMessage.message);
      navigate("/connexion");
    }
  };

  const btnStatus = () => {
    setMaskBtn(
      emailError !== "" ||
        isLoading ||
        PasswordError !== "" ||
        !name ||
        !email ||
        !password
    );
  };

  return (
    <form className="  flex flex-col justify-center ">
      <div className=" ContaGeneral bg-sblc flex w-full flex-col justify-center items-center">
        <div className="lg:w-5/12 mt-[40px] w-96 max-w-full rounded shadow bg-grc flex  flex-col mb-4 px-8 py-8 ">
          {formError && (
            <div className="w-full mb-5 bg-red-100 border-2 border-rg h-25 py-1 justify-center flex rounded-xl ">
              <small className="text-rg flex items-center text-center font-bold text-[17px] text-wrap ">
                <FiAlertTriangle className="me-2 text-3xl " />{" "}
                <p>{formError}</p>
              </small>
            </div>
          )}
          <a className={`flex items-center justify-center`} href="/">
            <BiLoaderCircle className={`text-[43px] text-bl me-3`} />
            <p className="text-3xl text-bl font-[600]">HubForge</p>
          </a>
          <div className="text-mr text-center mt-8 text-opacity-90 text-lg">
            Inscrivez-vous en tant que Worker
          </div>
          <MonInput
            type="text"
            id="nom"
            value={name}
            placeholder={"Nom Complet"}
            onChange={(e) => {
              setName(e.target.value);
              const Err = !e.target.value.trim() ? (
                <>
                  <FiAlertTriangle className="me-2" /> Ce champ ne peut pas être
                  vide.
                </>
              ) : (
                ""
              );
              setFirstNameError(Err);
              setFormError("");
              btnStatus();
            }}
            MessageError={firstNameError}
          />

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
              setFormError("");
              btnStatus();
            }}
            MessageError={emailError}
          />
          <MonInput
            type="password"
            id="password"
            labelStyle={"text-gray-500"}
            placeholder={"Mot de passe"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              const Err = !e.target.value.trim() ? (
                <>
                  <FiAlertTriangle className="me-2" /> Ce champ ne peut pas être
                  vide.
                </>
              ) : (
                ""
              );
              setPasswordError(Err);
              setFormError("");
              btnStatus();
            }}
            MessageError={PasswordError}
          />

          {isLoading ? (
            <div className=" mt-8 flex w-full align-items-center justify-center">
              <PropagateLoader color="#072967" size={"18px"} />
            </div>
          ) : (
            <MonBouton
              textColor={` mt-6 hover:scale-[97%] transition-all duration-500 w-full rounded-full py-3 text-xl ${
                emailError !== "" || isLoading ? "hidden" : ""
              }`}
              couleurFond="bg-bl text-blc"
              action={signUp}
              id={"connecter"}
              disabled={maskBtn}
            >
              S'inscrire
            </MonBouton>
          )}
        </div>

        <div className=" text-bl text-center max-sm:text-sm text-xl mt-2 ">
          Vous avez déjà un compte ? //
          <Link
            to="/connexion"
            className="font-bold hover:text-bl  text-vr ms-2"
          >
            Se connecter
          </Link>
        </div>
      </div>
    </form>
  );
};
