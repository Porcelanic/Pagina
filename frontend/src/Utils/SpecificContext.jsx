import React, { createContext, useContext, useState } from "react";

const SpecificContext = createContext();

export const SpecificProvider = ({ children }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [alertState, setAlertState] = useState("");

  return (
    <SpecificContext.Provider
      value={{
        showAlert,
        setShowAlert,
        alertText,
        setAlertText,
        alertState,
        setAlertState,
      }}
    >
      {children}
    </SpecificContext.Provider>
  );
};

export const useSpecific = () => {
  return useContext(SpecificContext);
};
