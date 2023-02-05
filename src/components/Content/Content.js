import "./Content.scss";

import Preview from "./Preview/Preview";
import QuickAccess from "./QuickAccess/QuickAccess";

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
