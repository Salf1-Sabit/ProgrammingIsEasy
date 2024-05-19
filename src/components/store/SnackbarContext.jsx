import React, { useState } from "react";

const DEFAULT_PROP = {
  isSnackbarOpen: false,
  snackbarSeverity: "",
  setSnackbarSeverity: () => {},
  snackbarMessage: "",
  setSnackbarMessage: () => {},
  setisSnackbarOpen: () => {},
  handleSnackbarClick: () => {},
  handleSnackbarClose: () => {},
};

export const SnackbarContext = React.createContext(DEFAULT_PROP);

const SnackbarContextProvider = (props) => {
  const [isSnackbarOpen, setisSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState(
    "This is a success Alert inside a Snackbar!"
  );
  const [snackbarSeverity, setSnackbarSeverity] = useState("warning");

  const handleSnackbarClick = (newMessage, newSeverity) => {
    setisSnackbarOpen(false);
    setSnackbarMessage(newMessage);
    setSnackbarSeverity(newSeverity);
    setisSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setisSnackbarOpen(false);
  };

  return (
    <SnackbarContext.Provider
      value={{
        isSnackbarOpen,
        setisSnackbarOpen,
        handleSnackbarClick,
        handleSnackbarClose,
        snackbarMessage,
        snackbarSeverity,
      }}
    >
      {props.children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarContextProvider;
