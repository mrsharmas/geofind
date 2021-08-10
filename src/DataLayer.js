import React, { createContext, useState } from "react";

export const DataLayer = createContext();

const DataLayerProvider = (props) => {
  const [state, setstate] = useState({
    data: null,
    success: false,
  });

  return (
    <DataLayer.Provider value={{ state, setstate }}>
      {props.children}
    </DataLayer.Provider>
  );
};

export default DataLayerProvider;
