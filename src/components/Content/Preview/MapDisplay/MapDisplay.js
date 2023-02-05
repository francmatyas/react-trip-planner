import "./MapDisplay.scss";

import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import { useState, useEffect } from "react";

const defaultCenter = [50.0874654, 14.4212535];
const defaultZoom = 3;

function MapDisplay(props) {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    if (props.locations?.length <= 1) {
      setLines([]);
      return;
    }
    const lines = [];

    for (let i = 0; i < props.locations?.length - 1; i++) {
      const location = [props.locations[i].lat, props.locations[i].lon];
      const nextLocation = [
        props.locations[i + 1].lat,
        props.locations[i + 1].lon,
      ];
      lines.push([location, nextLocation]);
    }
    setLines(lines);
  }, [props.locations]);

  const apikey = process.env.REACT_APP_MAPTILES_API_KEY;
  return (
    <div>
      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={`https://maptiles.p.rapidapi.com/en/map/v1/{z}/{x}/{y}.png?rapidapi-key=${apikey}`}
        />
        <LayersControl position="topright">
          <LayersControl.Overlay checked name="Markers">
            <LayerGroup>
              {props.locations?.map((location) => (
                <Marker
                  position={[location?.lat, location?.lon]}
                  key={location?.osm_id}
                >
                  <Popup>{location?.display_name}</Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Connectors">
            <LayerGroup>
              {lines.map((line) => (
                <Polyline
                  positions={line}
                  key={line[0][0] + line[0][1] + Math.random()}
                />
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default MapDisplay;
