import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedNames, setSelectedNames] = useState([{}, {}, {}]);
  const [categories, setCategories] = useState([]);
  const [pictograms, setPictograms] = useState([]);

  const updateSelectedNames = (newSelectedNames) => {
    setSelectedNames(newSelectedNames);
  };

  const updateCategories = (newCategories) => {
    setCategories(newCategories);
  };

  const updatePictograms = (newPictograms) => {
    setPictograms(newPictograms);
  };

  return (
    <AppContext.Provider value={{ selectedNames, updateSelectedNames, categories, updateCategories, pictograms, updatePictograms }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
