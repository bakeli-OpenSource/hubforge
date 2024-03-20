
import { useQuery } from "react-query";
import { useAppContext } from "../context/AppContext";

export const useCategories = (onSelectCategory) => {
    const { apiUrlCat } = useAppContext();
  const { data: categoryTemp } = useQuery("categoryTemp", async () => {
    if (!onSelectCategory) {
      return { categories: [], templates: [] };
    }

    const response = await fetch(
      `${apiUrlCat}/categories/${onSelectCategory}/templates`
    );
    if (!response.ok) {
      throw new Error(
        "Erreur lors de la récupération des catégories et des templates"
      );
    }
    return response.json();
  });

  return categoryTemp;
};
