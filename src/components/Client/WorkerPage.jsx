import React from "react";
import { BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export const WorkerPage = () => {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user-infos"));
  const LogOut = () => {
    localStorage.removeItem("user-infos");
    navigate("/connexion");
  };
  return (
    <div className="text-center font-bold text-4xl text-bl mt-10">
      WorkerPage
      <div className="flex items-center w-auto px-6">
        <div className="h-14 w-14 rounded-full flex items-center justify-center  bg-gr me-3">
          <BiUser />
        </div>

        <h1 className="text-xl font-bold text-vr ">{user.name}</h1>
        <button
          onClick={LogOut}
          className="border ms-5 border-rg text-lg py-2 px-3 rounded-full bg-mr text-blc"
        >
          Deconnexion
        </button>
      </div>
    </div>
  );
};
