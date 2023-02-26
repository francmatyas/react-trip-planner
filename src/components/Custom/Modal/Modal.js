import { Modal, Button, Box, Typography, Input } from "@mui/material";
import { useState, useEffect } from "react";
import { Trip } from "../../../script/TripUtils";

export function DeleteModal(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "fit-content",
    bgcolor: "#222428",
    color: "#eee",
    borderRadius: "1rem",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
  };

  return (
    <Modal
      open={props.show}
      onClose={() => props.onHide(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h4" component="h2" id="modal-modal-title">
          Delete trip
        </Typography>
        <Typography id="modal-modal-title" sx={{ mt: 2, mb: 2 }}>
          Are you sure you want to delete this trip?
        </Typography>
        <Button
          onClick={() => {
            props.onDelete();
            props.onHide(false);
          }}
          variant="contained"
          color="error"
          sx={{ mr: 1 }}
        >
          Delete
        </Button>
        <Button
          onClick={() => props.onHide(false)}
          color="info"
          variant="outlined"
        >
          Cancel
        </Button>
      </Box>
    </Modal>
  );
}

export function CreateModal(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "fit-content",
    bgcolor: "#222428",
    color: "#eee",
    borderRadius: "1rem",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
  };

  const [title, setTitle] = useState("");

  function createTrip() {
    if (title.length > 0) {
      const trip = Trip.fromTitle(title);
      setTitle("");
      props.onCreate(trip);
      props.onHide(false);
    }
  }

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter") {
        createTrip();
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [title]);

  return (
    <Modal
      open={props.show}
      onClose={() => props.onHide(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          variant="h4"
          component="h2"
          id="modal-modal-title"
          sx={{ mb: 2 }}
        >
          Create trip
        </Typography>
        <Input
          autoFocus
          label="Trip title"
          placeholder="Enter trip title"
          required
          fullWidth
          sx={{ color: "white", mb: 2 }}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Button
          onClick={() => props.onHide(false)}
          color="info"
          variant="outlined"
          sx={{ mr: 1 }}
        >
          Cancel
        </Button>

        <Button onClick={createTrip} variant="contained" color="success">
          Create
        </Button>
      </Box>
    </Modal>
  );
}
