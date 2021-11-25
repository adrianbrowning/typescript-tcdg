import { iMappable } from "./interfaces/location.interface";

export default class Map {
  private readonly map: google.maps.Map;
  constructor(divId: string, opts?: { zoom?: 1; center?: { lat: 0; lng: 0 } }) {
    this.map = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom: opts?.zoom ?? 1,
      center: {
        lat: opts?.center?.lat ?? 0,
        lng: opts?.center?.lng ?? 0
      }
    });
  }

  addMarker(mappable: iMappable) {
    const marker = new google.maps.Marker({
      map: this.map,
      position: mappable.location
    });
    const infoWindow = new google.maps.InfoWindow({
      content: mappable.markerContent()
    });

    marker.addListener("click", () => {
      infoWindow.open({
        anchor: marker,
        map: this.map,
        shouldFocus: false
      });
    });
  }
}
