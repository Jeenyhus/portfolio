import React, { createContext, useContext, useState } from "react";

const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const [alertState, setAlertState] = useState({
    isOpen: false,
    title: "",
    description: "",
  });

  const open = ({ title, description }) => {
    setAlertState({
      isOpen: true,
      title,
      description,
    });
  };

  const close = () => {
    setAlertState({
      isOpen: false,
      title: "",
      description: "",
    });
  };

  return (
    <AlertContext.Provider value={{ ...alertState, open, close }}>
      {children}
    </AlertContext.Provider>
  );
};

const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlertContext must be used within an AlertProvider");
  }
  return context;
};

// Define useSubmit
const useSubmit = () => {
  return {
    loading: false,
    response: {},
    submit: () => {}
  };
};

export { AlertProvider, useAlertContext, useSubmit };
