import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Login from "./components/Custom/Login/Login";

import tripsDUMMY from "./data/TripsDUMMY.json";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [accounts, setAccounts] = useState(tripsDUMMY);
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(0);

  function loginHandler(email, password) {
    const account = accounts.find((account) => {
      return account.email === email && account.password === password;
    });

    if (account) {
      setTrips(account.trips);
      setSelectedTrip(0);
    } else {
      alert("Invalid credentials");
    }
  }

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
        {trips.length === 0 ? (
          <Login onLogin={loginHandler} />
        ) : (
          <>
            <Header onCreate={createTripHandler} />
            <Content
              trips={trips}
              trip={trips[selectedTrip]}
              onSelect={(index) => setSelectedTrip(index)}
              onUpdate={updateTripHandler}
            />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
