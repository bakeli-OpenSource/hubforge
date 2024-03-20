// hook/usePostClic.js
import { useMutation } from "react-query";
import { useAppContext } from "../context/AppContext";

export const usePostClic = () => {
    const data= 1;
  const { apiTel } = useAppContext();
  return useMutation(
    (data) =>
      fetch(apiTel, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
    {
      onSuccess: () => {
        console.log("Clic enregistré avec succès dans la base de données",data);
      },
      onError: (error) => {
        console.error("Erreur lors de l'enregistrement du clic :", error);
      },
    }
  );
};
