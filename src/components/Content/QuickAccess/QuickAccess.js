import "./QuickAccess.scss";

import Trip from "./Trip/Trip";

function QuickAccess(props) {
  return (
    <div className="quick-access">
      <h2 className="quick-access__title">Your trips</h2>
      <div className="quick-access__trips">
        {props.trips.map((trip, index) => (
          <Trip
            {...trip}
            selectedTrip={props.selectedTrip}
            key={trip.uuid}
            index={index}
            onClick={props.onSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default QuickAccess;
