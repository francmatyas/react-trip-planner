import "./LocationTimeline.scss";
import { useState } from "react";
import Timeline from "./Timeline/Timeline";
import TimelinePaginator from "./TimelinePaginator/TimelinePaginator";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { Tooltip, Switch } from "@mui/material";

function LocationTimeline(props) {
  const { trip } = props;
  const locationGroups = trip.groupByDate();

  const [displayByDate, setDisplayByDate] = useState(false);

  return (
    <div id="location-timeline">
      <div id="location-timeline__header">
        <HiOutlineCalendarDays size={24} />
        <Tooltip title="Group by date">
          <Switch
            checked={displayByDate}
            onChange={() => setDisplayByDate(!displayByDate)}
            color="info"
            inputProps={{ "aria-label": "controlled" }}
          />
        </Tooltip>
      </div>
      <div id="location-timeline__body">
        {displayByDate ? (
          <TimelinePaginator
            pages={Object.keys(locationGroups)}
            groups={locationGroups}
          />
        ) : (
          <Timeline locations={trip.locations} />
        )}
      </div>
    </div>
  );
}

export default LocationTimeline;
