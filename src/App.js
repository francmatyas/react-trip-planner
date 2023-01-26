import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

import tripsDUMMY from "./data/TripsDUMMY.json";
import countriesData from "./data/countries.json";

function App() {
  const [trips, setTrips] = useState(tripsDUMMY);
  return (
    <div className="App">
      <Header />
      <Content trips={trips} countries={countriesData}/>
    </div>
  );
}

export default App;
