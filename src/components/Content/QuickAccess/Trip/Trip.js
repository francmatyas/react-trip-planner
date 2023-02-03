import "./Trip.scss";

function Trip(props) {
  return (
    <div className="trip" onClick={() => props.onInteract(props.index)}>
      {props.title}
    </div>
  );
}

export default Trip;
