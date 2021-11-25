export interface iLocation {
  lat: number;
  lng: number;
}

export interface iMappable {
  location: iLocation;
  markerContent(): string;
}
