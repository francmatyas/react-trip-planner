import "./LocationDisplay.scss";
import { useState } from "react";
import { Tooltip, Switch } from "@mui/material";

import {
  HiOutlinePencil,
  HiOutlineCalendarDays,
  HiOutlineListBullet,
} from "react-icons/hi2";
import { HiOutlineCheck } from "react-icons/hi";

import LocationTimeline from "./LocationTimeline/LocationTimeline";
import LocationList from "./LocationList/LocationList";

function LocationDisplay(props) {
  const { trip, onListChange } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [displayByDate, setDisplayByDate] = useState(false);

  return (
    <div id="location-display">
      <div id="location-display__header">
        {!isEditing && (
          <div id="location-display__switch">
            <HiOutlineListBullet size={24} />
            <Tooltip
              title={displayByDate ? "Display timeline" : "Display by day"}
            >
              <Switch
                checked={displayByDate}
                onChange={() => setDisplayByDate(!displayByDate)}
                color="primary"
                inputProps={{ "aria-label": "controlled" }}
              />
            </Tooltip>
            <HiOutlineCalendarDays size={24} />
          </div>
        )}

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
      </div>

      {!trip.locations.length ? (
        <div id="location-display__empty">
          Find, add place and plan your next trip.
        </div>
      ) : (
        <div id="location-display__body">
          {isEditing ? (
            <LocationList trip={trip} onListChange={onListChange} />
          ) : (
            <LocationTimeline trip={trip} groupByDate={displayByDate} />
          )}
        </div>
      )}
    </div>
  );
}

export default LocationDisplay;
