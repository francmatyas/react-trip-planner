import "./Location.scss";

import {
  HiArrowDown,
  HiArrowUp,
  HiOutlineTrash,
  HiOutlineTag,
  HiOutlineEnvelope
} from "react-icons/hi2";
import { v4 as uuidv4 } from "uuid";

function Location(props) {
  const location = props.location;
  const index = props.index;

  return (
    <div className="location" key={uuidv4()}>
      <span>{index + 1 + "."}</span>
      <span>{location?.display_name}</span>

      <button className="preview__button">
        <HiOutlineEnvelope size={24} />
      </button>

      <button className="preview__button">
        <HiOutlineTag size={24} />
      </button>

      <button onClick={() => props.onDelete(index)} className="preview__button">
        <HiOutlineTrash size={24} />
      </button>
      {props.count > 1 && (
        <div>
          {index === 0 ? (
            <></>
          ) : (
            <button
              onClick={() => props.onMoveUp(index)}
              className="preview__button"
            >
              <HiArrowUp size={16} />
            </button>
          )}
          {index === props.count - 1 ? (
            <></>
          ) : (
            <button
              onClick={() => props.onMoveDown(index)}
              className="preview__button"
            >
              <HiArrowDown size={16} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Location;
