import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

import tripsDUMMY from "./data/TripsDUMMY.json";
import countriesData from "./data/countries.json";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [trips, setTrips] = useState(tripsDUMMY);

  function createHandler(title) {
    const newTrip = {
      id: Math.random(),
      title: title,
      description: "",
      locations: [],
    };
    setTrips((prevTrips) => {
      return [...prevTrips, newTrip];
    });
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Header onCreate={createHandler} />
        <Content trips={trips} countries={countriesData} />
      </div>
    </ThemeProvider>
  );
}

export default App;
