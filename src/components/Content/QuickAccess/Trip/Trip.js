import "./Trip.scss";

import { HiOutlineMagnifyingGlassCircle } from "react-icons/hi2";

function Trip(props) {
  return (
    <div className="trip" onClick={() => console.log("clicked")}>
      {props.title}
      <HiOutlineMagnifyingGlassCircle size={24} />
    </div>
  );
}

export default Trip;
