import "./Content.scss";

import Preview from "./Preview/Preview";
import QuickAccess from "./QuickAccess/QuickAccess";

import {HiOutlineTrash, HiOutlinePencil} from "react-icons/hi";

function Content(props) {
  return (
    <div className="content">
      <Preview
        title={props.trips[0].title}
        description={props.trips[0].description}
      />
      <QuickAccess trips={props.trips} />
    </div>
  );
}

export default Content;
