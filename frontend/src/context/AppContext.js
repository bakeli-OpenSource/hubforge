




// AppContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const storedDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(storedDarkMode === "true");
  const [user, setUser] = useState(null);
  const [templates, setTemplates] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:8000/api/templates")
  //     .then((response) => {
  //       setTemplates(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Erreur lors de la récupération des templates :", error);
  //     });
  // }, [templates]);


   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await axios.get(
           "http://127.0.0.1:8000/api/templates"
         );
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};






















/*
import React, { createContext, useContext, useState, useEffect } from "react";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const storedDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(storedDarkMode === "true");

  const [user, setUser] = useState(null);// au besoin !!

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  //  Autres fonctions pour d'autres propriétés
  return (
    <AppContext.Provider value={{ darkMode, toggleDarkMode, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
*/