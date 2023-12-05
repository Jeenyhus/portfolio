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
  // Placeholder logic for useSubmit
  // Replace with actual implementation and error handling

  return {
    loading: false, // Replace with actual loading state
    response: {},   // Replace with actual response
    submit: () => {} // Replace with actual submit function
  };
};

export { AlertProvider, useAlertContext, useSubmit };
