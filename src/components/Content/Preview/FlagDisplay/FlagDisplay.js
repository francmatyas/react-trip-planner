import "./FlagDisplay.scss";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function FlagDisplay(props) {
  return (
    <div className="flagDisplay">
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>{props.name}</Tooltip>}
      >
        <img
          src={props.file_url}
          alt={props.name}
          className="flagDisplay__flag"
        />
      </OverlayTrigger>
    </div>
  );
}

export default FlagDisplay;
