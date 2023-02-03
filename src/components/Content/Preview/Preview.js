import "./Preview.scss";

import { useState } from "react";

import PreviewHeader from "./PreviewHeader/PreviewHeader";
import MapContainer from "./MapDisplay/MapDisplay";
import SearchBox from "./SearchBox/SearchBox";
import LocationTree from "./LocationList/LocationList";

function Preview(props) {
  const [locations, setLocations] = useState([]);

  function searchSelectHandler(country) {
    setLocations([...locations, country]);
  }

  return (
    <div className="preview">
      <PreviewHeader  {...props} />

      <div className="preview__planner">
        <LocationTree
          locations={locations}
          onListChange={(updatedList) => setLocations(updatedList)}
        />
        <SearchBox onSearchSelect={searchSelectHandler} />
      </div>

      <MapContainer locations={locations} />
    </div>
  );
}

export default Preview;
