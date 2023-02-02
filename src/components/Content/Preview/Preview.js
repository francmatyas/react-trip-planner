import "./Preview.scss";

import { useState, useEffect } from "react";

import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import { HiOutlineX } from "react-icons/hi";

import MapContainer from "./MapDisplay/MapDisplay";
import SearchBox from "./SearchBox/SearchBox";
import LocationTree from "./LocationList/LocationList";

function Preview(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [locations, setLocations] = useState([]);
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);

  function searchSelectHandler(country) {
    setLocations([...locations, country]);
    console.log(locations);
  }

  return (
    <div className="preview">
      <div
        onDoubleClick={() => {
          !isEditing && setIsEditing(!isEditing);
        }}
        className="preview__header"
      >
        <div className="preview__title">
          {isEditing ? (
            <input
              className="preview__input"
              type="text"
              placeholder="Edit trip title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          ) : (
            title
          )}
          <div className="preview__controls">
            {isEditing && (
              <button
                onClick={() => alert("Trip deleted")}
                className="preview__button preview__delete"
              >
                <HiOutlineTrash size={24} />
              </button>
            )}
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="preview__button"
            >
              {isEditing ? (
                <HiOutlineX size={24} />
              ) : (
                <HiOutlinePencil size={24} />
              )}
            </button>
          </div>
        </div>
        <div className="preview__description">
          {isEditing ? (
            <textarea
              className="preview__input"
              placeholder="Edit trip description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          ) : (
            description
          )}
        </div>
      </div>
      <div className="preview__planner">
        <LocationTree
          locations={locations}
          onListChange={(updatedList) => setLocations(updatedList)}
        />
        <SearchBox onSearchSelect={searchSelectHandler} />
      </div>
      <MapContainer locations={locations} />
    </div>
  );
}

export default Preview;
