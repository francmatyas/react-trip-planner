import "./QuickAccess.scss";

import Trip from "./Trip/Trip";

function QuickAccess(props) {
  return (
    <div className="quick-access">
      <h2 className="quick-access__title">Quick Access</h2>
      <div className="quick-access__trips">
        {props.trips.map((trip) => (
          <Trip {...trip} key={trip.id} />
        ))}
      </div>
    </div>
  );
}

export default QuickAccess;
