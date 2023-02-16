import "./Trip.scss";

function Trip(props) {
  return (
    <div
      className={
        props.index === props.selectedTrip ? "trip trip__selected" : "trip"
      }
      onClick={() => props.onClick(props.index)}
    >
      {props.title}
    </div>
  );
}

export default Trip;
