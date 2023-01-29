import "./CountrySelector.scss";
import { useState, useEffect } from "react";

import CountryItem from "../FlagDisplay/FlagItem";

function CountrySelector(props) {
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(props.countries);
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    const filteredCountries = props.countries.filter((country) => {
      return (
        country.name.toLowerCase().includes(search.toLowerCase()) ||
        country.alpha3.toLowerCase().includes(search.toLowerCase())
      );
    });

    setFilteredCountries(filteredCountries);
  }, [search]);

  function handleSelectCountry(country) {
    if (selectedCountries.includes(country)) {
      const newSelectedCountries = selectedCountries.filter((c) => {
        return c !== country;
      });
      setSelectedCountries(newSelectedCountries);
      return;
    }
    const newSelectedCountries = [...selectedCountries, country];
    setSelectedCountries(newSelectedCountries);
  }

  return (
    <div className="country-selector">
      <span className="country-selector__title">Select Countries</span>
      <input
        type="text"
        placeholder="Search Country"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <div className="country-selector__container">
        {filteredCountries.map((country) => {
          return (
            <button
              onClick={() => handleSelectCountry(country)}
              className={
                selectedCountries.includes(country)
                  ? "country-selector__row country-selector__selected"
                  : "country-selector__row"
              }
              key={country.alpha3}
            >
              <CountryItem name={country.name} file_url={country.file_url} />
              {country.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CountrySelector;
