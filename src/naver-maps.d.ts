declare namespace naver {
  export namespace maps {
    export class Map {
      setCenter(latlng: LatLng): void;
      setZoom(zoom: number): void;
    }
    export class LatLng {
      constructor(lat: number, lng: number);
    }
    export type EventListener = any;
  }
}

interface Window {
  naver: any;
}
