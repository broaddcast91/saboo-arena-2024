
import React, { createContext, useContext, useState } from 'react';

const StatesContext = createContext();

export const useComponentState = () => {
  return useContext(StatesContext);
};

export const StateProvide = ({ children }) => {
  const [open2, setOpen2] = useState(false);

  return (
    <StatesContext.Provider
      value={{
        open2,
        setOpen2,
      }}
    >
      {children}
    </StatesContext.Provider>
  );
};
