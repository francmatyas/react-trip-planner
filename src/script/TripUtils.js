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
  constructor(lat, lon, name) {
    this.lat = lat;
    this.lon = lon;
    this.name = name;
  }
}
