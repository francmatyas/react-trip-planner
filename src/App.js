import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Account } from "./script/AccountUtils";

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
  const [accounts, setAccounts] = useState(
    tripsDUMMY.map((account) => Account.fromObject(account))
  );

  //const [trips, setTrips] = useState([]);
  const [trips, setTrips] = useState(accounts[0].trips);
  const [selectedTrip, setSelectedTrip] = useState(0);

  console.log(trips);

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

  function createTripHandler(trip) {
    setTrips((prevTrips) => {
      return [...prevTrips, trip];
    });
    setSelectedTrip(trips.length);
  }

  function updateTripHandler(updatedTrip) {
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
        {/* {trips.length === 0 ? (
          <Login onLogin={loginHandler} />
        ) : ( */}
        <>
          <Header onCreate={createTripHandler} />
          <Content
            trips={trips}
            trip={trips[selectedTrip]}
            selectedTrip={selectedTrip}
            onSelect={(index) => setSelectedTrip(index)}
            onUpdate={updateTripHandler}
          />
        </>
        {/*  )} */}
      </div>
    </ThemeProvider>
  );
}

export default App;
