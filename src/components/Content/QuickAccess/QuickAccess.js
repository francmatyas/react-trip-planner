import "./QuickAccess.scss";

import Trip from "./Trip/Trip";

function QuickAccess(props) {
  return (
    <div className="quick-access">
      <h2>Quick Access</h2>
      {props.trips.map((trip) => (
        <Trip {...trip} key={trip.id}/>
      ))}
    </div>
  );
}

export default QuickAccess;
