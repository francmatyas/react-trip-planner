import "./Preview.scss";

import { useState, useEffect } from "react";

import {
  HiOutlinePencil,
  HiPlus,
  HiOutlineTrash,
  HiOutlineMap,
} from "react-icons/hi2";

import Editor from "./Editor/Editor";
import MapContainer from "./MapDisplay/MapDisplay";
import SearchBox from "./SearchBox/SearchBox";

function Preview(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [locations, setLocations] = useState([]);

  function searchSelectHandler(country) {
    setLocations([...locations, country]);
    console.log(locations);
  }

  return (
    <div className="preview">
      {/* <button className="preview__button">
        <HiPlus size={24} />
      </button> */}
      <div className="preview__header">
        <div className="preview__title">
          {isEditing ? (
            <input
              className="preview__input"
              type="text"
              placeholder="Edit trip title"
            />
          ) : (
            props.trips[0].title
          )}

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="preview__button"
          >
            <HiOutlinePencil size={24} />
          </button>
        </div>
        <div className="preview__description">
          {isEditing ? (
            <textarea
              className="preview__input"
              placeholder="Edit trip description"
            />
          ) : (
            props.trips[0].description
          )}
        </div>
      </div>

      <button className="preview__button">
        <HiOutlineTrash size={24} />
      </button>
      <button className="preview__button">
        <HiOutlineMap size={24} />
      </button>
      <SearchBox onSearchSelect={searchSelectHandler} />
      <MapContainer locations={locations} />
    </div>
  );
}

export default Preview;
