import "./Preview.scss";

import PreviewHeader from "./PreviewHeader/PreviewHeader";
import MapContainer from "./MapDisplay/MapDisplay";
import SearchBox from "./SearchBox/SearchBox";
<<<<<<< HEAD
import LocationTree from "./LocationList/LocationList";

import flags from "../../../data/flags.json";
=======
import LocationDisplay from "./LocationDisplay/LocationDisplay";
>>>>>>> 3576cd37dc5f965af717fe982dd30406eda5b542

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
          locations={props.trip.locations}
          onListChange={listChangeHandler}
        />
        <SearchBox onSearchSelect={searchSelectHandler} />
      </div>

      <MapContainer locations={props.trip.locations} />

      {
        Object.keys(flags).map((key) => {
          return (
            <img
              key={key}
              src={flags[key].flag}
              alt={key}
              width="64"
              className="preview__flag"
            />
          );
        })
      }

    </div>
  );
}

export default Preview;
