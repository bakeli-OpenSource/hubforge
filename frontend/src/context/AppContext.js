import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuery, QueryClientProvider } from "react-query";
import { queryClient } from "./queryClient";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const storedDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(storedDarkMode === "true");
  const [user, setUser] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  const apiUrlImg = process.env.REACT_APP_API_URL_IMG;
  const [loading, setLoading] = useState(false);

  const { data: templates } = useQuery("templates", async () => {
    try {
      setLoading(true);
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données");
      }
      setLoading(false);
      return response.json();
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      setLoading(false);
      throw error;
    }
  });

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
          templates,
          apiUrlImg,
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

/*import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const storedDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(storedDarkMode === "true");
  const [user, setUser] = useState(null);
  const [templates, setTemplates] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;
  const apiUrlImg = process.env.REACT_APP_API_URL_IMG;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}`);
        setTemplates(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchData();
  }, [templates]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        user,
        setUser,
        templates,
        apiUrlImg,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};*/
