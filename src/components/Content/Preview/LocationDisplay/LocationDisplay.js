import "./LocationDisplay.scss";
import { useState } from "react";
import { Tooltip } from "@mui/material";

import { HiOutlinePencil } from "react-icons/hi2";
import { HiOutlineCheck } from "react-icons/hi";

import LocationTimeline from "./LocationTimeline/LocationTimeline";
import Timeline from "./LocationTimeline/Timeline/Timeline";
import LocationList from "./LocationList/LocationList";

function LocationDisplay(props) {
  const {trip, onListChange} = props;
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div id="location-display">
      <Tooltip title={isEditing ? "Confirm" : "Edit trip"}>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="preview__button"
          id="location-display__edit"
        >
          {isEditing ? (
            <HiOutlineCheck size={24} />
          ) : (
            <HiOutlinePencil size={24} />
          )}
        </button>
      </Tooltip>

      {isEditing ? (
        <LocationList
          trip={trip}
          onListChange={onListChange}
        />
      ) : (
        <LocationTimeline trip={trip} />
      )}
    </div>
  );
}

export default LocationDisplay;
