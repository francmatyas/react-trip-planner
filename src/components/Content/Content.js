import "./Content.scss";

import Preview from "./Preview/Preview";
import QuickAccess from "./QuickAccess/QuickAccess";
import Login from "../Custom/Login/Login";

function Content(props) {
  return (
    <div className="content">
      <Preview
        trip={props.trip}
        onUpdate={props.onUpdate}
      />

      <QuickAccess
        trips={props.trips}
        onSelect={props.onSelect}
      />
    </div>
  );
}

export default Content;
