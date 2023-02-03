import React from "react";

import { Button, Snackbar, Alert, AlertTitle } from "@mui/material";

export function DeleteSnackbar(props) {
  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    props.onClose();
  }
  return (
    <Snackbar open={props.open} autoHideDuration={6000} onClose={handleClose}>
      <Alert severity="success" onClose={handleClose}>
        <AlertTitle>Success</AlertTitle>
        Trip has been successfully <strong>deleted</strong>.
      </Alert>
    </Snackbar>
  );
}
