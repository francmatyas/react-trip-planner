import "./Content.scss";
import { useState } from "react";

import Preview from "./Preview/Preview";
import QuickAccess from "./QuickAccess/QuickAccess";

function Content(props) {
  const [trip, setTrip] = useState(props.trips[0]);
  
  return (
    <div className="content">
      <Preview title={trip.title} description={trip.description} />
      <QuickAccess
        trips={props.trips}
        onSelect={(index) => setTrip(props.trips[index])}
      />
    </div>
  );
}

export default Content;
