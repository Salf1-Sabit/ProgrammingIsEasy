import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

// context
import { SnackbarContext } from "../store/SnackbarContext";

export default function CustomizedSnackbar() {
  const {
    snackbarSeverity,
    snackbarMessage,
    isSnackbarOpen,
    handleSnackbarClick,
    handleSnackbarClose,
  } = React.useContext(SnackbarContext);

  return (
    <Snackbar
      open={isSnackbarOpen}
      autoHideDuration={6000}
      onClose={handleSnackbarClose}
    >
      <Alert
        onClose={handleSnackbarClick}
        severity={snackbarSeverity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
}
