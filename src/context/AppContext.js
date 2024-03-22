import React, { createContext, useContext, useEffect, useState } from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./queryClient";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const storedDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(storedDarkMode === "true");
  const [user, setUser] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  const apiUrlImg = process.env.REACT_APP_API_URL_IMG;
  const apiTel = process.env.REACT_APP_API_URL_TELECHARGE;
  const apiUrlCat = process.env.REACT_APP_API_URL_CATEGORIE;

  const [loading, setLoading] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [tabcat, setTabcat] = useState([]); // Ajoutez le state tabcat

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSearchModal = () => {
    setSearchModalOpen(!searchModalOpen);
  };

  // Fonction pour mettre à jour tabcat
  const updateTabcat = (categories) => {
    setTabcat(categories);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider
        value={{
          darkMode,
          toggleDarkMode,
          user,
          setUser,
          apiUrlImg,
          apiUrl,
          loading,
          apiTel,
          apiUrlCat,
          searchModalOpen,
          toggleSearchModal,
          tabcat, // Ajoutez tabcat au contexte
          updateTabcat, // Fonction pour mettre à jour tabcat
        }}
      >
        {children}
      </AppContext.Provider>
    </QueryClientProvider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("No context provided");
  return ctx;
};
