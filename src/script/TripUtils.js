import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

export class Trip {
  uuid;
  title;
  description;
  locations;

  getDuration() {
    if (this.locations.length === 0) {
      return 0;
    }

    const firstDate = dayjs(this.locations[0].date);
    const lastDate = dayjs(this.locations[this.locations.length - 1].date);

    return lastDate.diff(firstDate, "day");
  }

  findByDate(date) {
    return this.locations.find((location) => {
      return dayjs(location.date).isSame(date, "day");
    });
  }

  groupByDate() {
    const locations = this.locations.reduce((acc, location) => {
      const date = dayjs(location.date).format("YYYY-MM-DD");
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(location);
      return acc;
    }, {});

    return locations;
  }

  static fromObject(obj) {
    const trip = new Trip();
    trip.uuid = obj.uuid;
    trip.title = obj.title;
    trip.description = obj.description;
    trip.locations = obj.locations.map((location) =>
      Location.fromObject(location)
    );
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
  tags;
  date;

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

  static fromObject(obj) {
    const location = new Location();
    location.lat = obj.lat;
    location.lon = obj.lon;
    location.display_name = obj.display_name;
    location.address = obj.address;
    location.place_id = obj.place_id;
    location.osm_id = obj.osm_id;
    location.note = obj.note;
    location.tags = obj.tags;
    location.date = obj.date;
    return location;
  }

  static fromGeocodeResult(result) {
    const location = new Location();
    location.lat = result.lat;
    location.lon = result.lon;
    location.display_name = location.#getName(
      result.address,
      result.display_name
    );
    location.address = result.address;
    location.place_id = result.place_id;
    location.osm_id = result.osm_id;
    location.note = "";
    location.tags = {
      adventure: false,
      hotel: false,
      food: false,
      photo: false,
      nature: false,
    };
    location.date = dayjs().format("YYYY-MM-DD");
    return location;
  }
}
