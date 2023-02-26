import { v4 as uuidv4 } from "uuid";
import { Trip } from "./TripUtils";

export class Account {
  uuid;
  email;
  password;
  trips;

  static fromObject(obj) {
    const account = new Account();
    account.uuid = obj.uuid;
    account.email = obj.email;
    account.password = obj.password;
    account.trips = obj.trips.map((trip) => Trip.fromObject(trip));
    return account;
  }

  static newAccount(email, password) {
    const account = new Account();
    account.uuid = uuidv4();
    account.email = email;
    account.password = password;
    account.trips = [];
    return account;
  }
}
