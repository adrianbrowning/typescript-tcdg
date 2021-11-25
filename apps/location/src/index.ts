import User from "./User";
import Map from "./Map";
import Company from "./Company";

const gMap = new Map("map");
const user = new User();
const company = new Company();

gMap.addMarker(user);
gMap.addMarker(company);

// export {};
