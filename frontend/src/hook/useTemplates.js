
import { useQuery } from "react-query";
import { useAppContext } from "../context/AppContext";

export const useTemplates = (type) => {
  const { apiUrl} = useAppContext();

  return useQuery(["templates", type], async () => {
    const response = await fetch(`${apiUrl}/${type || ""}`);

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }

    return response.json();
  });
};

