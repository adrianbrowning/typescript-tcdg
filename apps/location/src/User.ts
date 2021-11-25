import faker from "faker";
import { iMappable } from "./interfaces/location.interface";

export default class User implements iMappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
    console.log(this.location);
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
