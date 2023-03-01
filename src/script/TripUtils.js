import { v4 as uuidv4 } from "uuid";

export class Trip {
  uuid;
  title;
  description;
  locations;

  static fromObject(obj) {
    const trip = new Trip();
    trip.uuid = obj.uuid;
    trip.title = obj.title;
    trip.description = obj.description;
    trip.locations = obj.locations;
    return trip;
  }

  static fromTitle(title) {
    const trip = new Trip();
    trip.uuid = uuidv4();
    trip.title = title;
    trip.description = "";
    trip.locations = [];
    return trip;
  }
}

export class Location {
  lat;
  lon;
  display_name;
  address;
  place_id;
  osm_id;
  note;

  #getName(address, display_name) {
    const country = address.country;
    if (address.city) {
      return `${address.city}, ${country}`;
    } else if (address.town) {
      return `${address.town}, ${country}`;
    } else if (address.village) {
      return `${address.village}, ${country}`;
    } else if (address.hamlet) {
      return `${address.hamlet}, ${country}`;
    } else if (address.administrative) {
      return `${address.administrative}, ${country}`;
    }

    return display_name;
  }

  constructor(lat, lon, display_name, address, place_id, osm_id) {
    this.lat = lat;
    this.lon = lon;
    this.display_name = this.#getName(address, display_name);
    this.address = address;
    this.place_id = place_id;
    this.osm_id = osm_id;
    this.note = "";
  }
}
