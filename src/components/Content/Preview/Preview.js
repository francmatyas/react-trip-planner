import "./Preview.scss";

import PreviewHeader from "./PreviewHeader/PreviewHeader";
import MapContainer from "./MapDisplay/MapDisplay";
import SearchBox from "./SearchBox/SearchBox";
import LocationDisplay from "./LocationDisplay/LocationDisplay";

function Preview(props) {
  function titleUpdateHandler(title, description) {
    const updatedTrip = {
      ...props.trip,
      title: title,
      description: description,
    };
    props.onUpdate(updatedTrip);
  }

  function listChangeHandler(updatedLocations) {
    const updatedTrip = {
      ...props.trip,
      locations: updatedLocations,
    };
    props.onUpdate(updatedTrip);
  }

  function searchSelectHandler(country) {
    const updatedTrip = {
      ...props.trip,
      locations: [...props.trip.locations, country],
    };
    props.onUpdate(updatedTrip);
  }

  return (
    <div className="preview">
      <PreviewHeader {...props.trip} onTitleUpdate={titleUpdateHandler} />

      <div className="preview__planner">
        <LocationDisplay
          trip={props.trip}
          onListChange={listChangeHandler}
        />
        <SearchBox onSearchSelect={searchSelectHandler} />
      </div>

      <MapContainer locations={props.trip.locations} />

    </div>
  );
}

export default Preview;
