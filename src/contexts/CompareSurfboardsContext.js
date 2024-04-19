// /contexts/CompareSurfboardsContext.js
import React, { createContext, useContext, useState } from "react";

const CompareSurfboardsContext = createContext();

export const CompareSurfboardsProvider = ({ children }) => {
  const [comparedSurfboards, setComparedSurfboards] = useState([]);

  const addSurfboardToCompare = (surfboard) => {
    if (!comparedSurfboards.some((s) => s.id === surfboard.id)) {
      setComparedSurfboards([...comparedSurfboards, surfboard]);
    }
  };

  const removeSurfboardFromCompare = (surfboardId) => {
    setComparedSurfboards(
      comparedSurfboards.filter((s) => s.id !== surfboardId)
    );
  };

  return (
    <CompareSurfboardsContext.Provider
      value={{
        comparedSurfboards,
        addSurfboardToCompare,
        removeSurfboardFromCompare,
      }}
    >
      {children}
    </CompareSurfboardsContext.Provider>
  );
};

export const useCompareSurfboards = () => useContext(CompareSurfboardsContext);
