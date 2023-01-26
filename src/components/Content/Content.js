import "./Content.scss";

import Preview from "./Preview/Preview";
import QuickAccess from "./QuickAccess/QuickAccess";

function Content(props) {
  return (
    <div className="content">
      <Preview trips={props.trips} countries={props.countries}/>
      <QuickAccess trips={props.trips} />
    </div>
  );
}

export default Content;
