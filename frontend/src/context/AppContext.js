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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
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
        }}
      >
        {children}
      </AppContext.Provider>
    </QueryClientProvider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
