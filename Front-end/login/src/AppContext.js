import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedNames, setSelectedNames] = useState([{}, {}, {}]);

  const updateSelectedNames = (newSelectedNames) => {
    setSelectedNames(newSelectedNames);
  };

  return (
    <AppContext.Provider value={{ selectedNames, updateSelectedNames }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
