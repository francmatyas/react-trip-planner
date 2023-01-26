import "./Preview.scss";

import {
  HiOutlinePencil,
  HiPlus,
  HiOutlineTrash,
  HiOutlineMap,
} from "react-icons/hi2";

import Editor from "./Editor/Editor";
import FlagDisplay from "./FlagDisplay/FlagDisplay";
import MapContainer from "./MapDisplay/MapDisplay";

function Preview(props) {
  return (
    <div className="preview">
      <h2>Preview</h2>
      <button className="preview__button">
        <HiPlus size={24} />
      </button>
      <input type="text" placeholder="Trip title" />
      <textarea placeholder="Trip description" />
      <button className="preview__button">
        <HiOutlineTrash size={24} />
      </button>
      <button className="preview__button">
        <HiOutlineMap size={24} />
      </button>
      <div className="preview__flags">
        <FlagDisplay {...props.countries[12]} />
        <FlagDisplay {...props.countries[150]} />
      </div>
      <MapContainer/>
    </div>
  );
}

export default Preview;
