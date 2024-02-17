import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedNames, setSelectedNames] = useState([{}, {}, {}]);
  const [authToken, setAuthToken] = useState(() => {
    // Al iniciar la aplicación, intenta obtener el token del almacenamiento local
    const storedToken = localStorage.getItem("authToken");
    // Devuelve el token almacenado o null si no hay ninguno
    return storedToken ? JSON.parse(storedToken) : null;
  });

  const updateSelectedNames = (newSelectedNames) => {
    setSelectedNames(newSelectedNames);
  };

  const setToken = (token) => {
    // Establece el token en el estado
    setAuthToken(token);
    // Guarda el token en el almacenamiento local
    localStorage.setItem("authToken", JSON.stringify(token));
  };

  const removeToken = () => {
    // Elimina el token del estado
    setAuthToken(null);
    // Elimina el token del almacenamiento local
    localStorage.removeItem("authToken");
  };

  return (
    <AppContext.Provider value={{ selectedNames, updateSelectedNames, authToken, setToken, removeToken }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
