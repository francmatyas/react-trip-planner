import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

import tripsDUMMY from "./data/TripsDUMMY.json";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [trips, setTrips] = useState(tripsDUMMY);
  const [selectedTrip, setSelectedTrip] = useState(0);

  function createTripHandler(title) {
    const newTrip = {
      id: Math.random(),
      title: title,
      description: "",
      locations: [],
    };
    setTrips((prevTrips) => {
      return [...prevTrips, newTrip];
    });
    setSelectedTrip(trips.length);
  }

  function updateTripHandler(updatedTrip) {
    console.log(updatedTrip);
    setTrips((prevTrips) => {
      const newTrips = [...prevTrips];
      newTrips[selectedTrip] = updatedTrip;
      return newTrips;
    });
  }

  function deleteTripHandler(index) {
    setTrips((prevTrips) => {
      const newTrips = [...prevTrips];
      newTrips.splice(index, 1);
      return newTrips;
    });
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Header onCreate={createTripHandler} />
        <Content
          trips={trips}
          trip={trips[selectedTrip]}
          onSelect={(index) => setSelectedTrip(index)}
          onUpdate={updateTripHandler}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
