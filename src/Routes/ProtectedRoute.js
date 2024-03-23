import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = (props) => {
  let Cmp = props.Cmp;

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user-infos")) {
      navigate("/connexion");
    }
  }, []);

  return (
    <div>
      <Cmp />
    </div>
  );
};
