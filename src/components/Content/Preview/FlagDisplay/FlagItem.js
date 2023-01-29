import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function FlagItem(props) {
  return (
    <div className="flag-item">
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>{props.name}</Tooltip>}
      >
        <img
          src={props.file_url}
          alt={props.name}
          className="flag-item__flag"
          style={{ height: "1.5rem" }}
        />
      </OverlayTrigger>
    </div>
  );
}

export default FlagItem;
