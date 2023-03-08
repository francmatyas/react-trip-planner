import "./SearchBox.scss";
import { useState, useEffect, useRef } from "react";
import { ClickAwayListener, Tooltip } from "@mui/material";
import { Location } from "../../../../script/TripUtils";

import { HiOutlineSearch, HiOutlineLocationMarker } from "react-icons/hi";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

function SearchBox(props) {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const myRef = useRef();

  //console.log(myRef.current.offsetLeft, myRef.current.offsetTop)

  function searchHandler() {
    const params = {
      q: searchText,
      format: "json",
      addressdetails: 1,
      polygon_geojson: 0,
    };
    const queryString = new URLSearchParams(params).toString();
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    searchText.length > 0 &&
      fetch(NOMINATIM_BASE_URL + queryString, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data);
        });
  }

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter") {
        searchHandler();
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [searchText]);

  return (
    <ClickAwayListener
      onClickAway={() => {
        if (searchResults) {
          setSearchResults([]);
          setSearchText("");
        }
      }}
    >
      <div className="search-box" ref={myRef}>
        <div className="search-box__header">
          <input
            onChange={(event) => setSearchText(event.target.value)}
            type="text"
            placeholder="Find place"
            value={searchText}
          />
          <Tooltip title="Search">
            <button className="preview__button" onClick={searchHandler}>
              <HiOutlineSearch size={24} />
            </button>
          </Tooltip>
        </div>

        <div className="search-box__table">
          {searchResults.length === 0 ? (
            <span className="search-box__noresult">No result</span>
          ) : (
            <div className="search-box__results">
              {searchResults.map((result) => (
                <div
                  className="search-box__item"
                  key={result.osm_id}
                  onClick={() => {
                    const location = Location.fromGeocodeResult(result);
                    props.onSearchSelect(location);
                    setSearchResults([]);
                    setSearchText("");
                  }}
                >
                  <HiOutlineLocationMarker size={24} />
                  <div className="search-box__result__name">
                    {result.display_name}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </ClickAwayListener>
  );
}

export default SearchBox;
