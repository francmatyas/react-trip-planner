import "./MapDisplay.scss";

import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import { useState, useEffect } from "react";

const defaultCenter = [50.0874654, 14.4212535];
const defaultZoom = 5;

function MapDisplay(props) {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    if (props.locations.length > 1) {
      const lines = [];

      for (let i = 0; i < props.locations.length - 1; i++) {
        const location = [props.locations[i].lat, props.locations[i].lon];
        const nextLocation = [
          props.locations[i + 1].lat,
          props.locations[i + 1].lon,
        ];
        lines.push([location, nextLocation]);
      }
      setLines(lines);
    }
  }, [props.locations]);

  return (
    <div>
      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {props.locations.map((location) => (
          <Marker
            position={[location.lat, location.lon]}
            key={location.osm_id}
          ><Popup>
            {location.display_name}
        </Popup>
          </Marker>
        ))}
        {lines.map((line) => (
          <Polyline positions={line} key={line[0][0] + line[0][1] + Math.random()} />
        ))}
      </MapContainer>
    </div>
  );
}

export default MapDisplay;
