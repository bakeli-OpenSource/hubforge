import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { LogoApplication } from "../components/LogoApplication";
// import AuthServices from "../services/authServices";
// import { toast } from "react-toastify";
import { ScaleLoader } from "react-spinners";
import MonInput from "../components/Utils/MonInput";
import MonBouton from "../components/Utils/MonBouton";
import { BiLoaderCircle } from "react-icons/bi";
import { FiAlertTriangle } from "react-icons/fi";

export const Connexion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accepterTerms, setAccepterTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const [maskBtn, setMaskBtn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    // try {
    //   setLoading(true);
    //   let data = {
    //     email,
    //     password,
    //   };
    //   const response = await AuthServices.loginUser(data);
    //   console.log(response.data);
    //   localStorage.setItem("hotelUser", JSON.stringify(response.data));
    //   toast.success("Connexion reussie !");
    //   navigate("/timeline/cartes", { replace: true });
    //   window.history.replaceState(null, "", "/timeline/cartes");
    //   setLoading(false);
    // } catch (err) {
    //   console.log(err);
    //   toast.error("Veillez verifier vos identifianrs !");
    //   setLoading(false);
    // }
  };

  const btnStatus = () => {
    setMaskBtn(emailError !== "" || isLoading || PasswordError);
  };

  return (
    <form className="  flex flex-col justify-center ">
      <div className=" ContaGeneral bg-sblc flex w-full flex-col justify-center items-center">
        <div className="lg:w-5/12  w-96 max-w-full rounded shadow bg-grc flex mt-[86px] flex-col mb-4 px-8 py-16">
          <a className={`flex items-center justify-center`} href="/">
            <BiLoaderCircle className={`text-[43px] text-bl me-3`} />
            <p className="text-3xl text-bl font-[600]">HubForge</p>
          </a>
          <div className="text-mr text-center mt-8 text-opacity-90 text-lg">
            Connectez-vous en tant que Worker
          </div>
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
              btnStatus();
            }}
            MessageError={PasswordError}
          />

          <MonBouton
            textColor={` mt-6 hover:scale-[97%] transition-all duration-500 w-full rounded-full py-3 text-xl ${
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

        <div className=" text-white text-center text-lg  mb-8">
          <a href="#" className="font-medium hover:underline text-rg ms-2">
            Mot de passe oublié ?
          </a>
        </div>

        <div className=" text-bl text-center max-sm:text-sm text-xl -mt-4 ">
          Vous n'avez pas de compte ? //
          <Link
            to="/inscription"
            className="font-bold hover:text-bl  text-vr ms-2"
          >
            S'inscrire
          </Link>
        </div>
      </div>
    </form>
  );
};
