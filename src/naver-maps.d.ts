/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare global {
  namespace naver {
    namespace maps {
      class Map {
        constructor(element: string | HTMLElement, options?: any);
        setCenter(latlng: LatLng | LatLngLiteral): void;
        setZoom(zoom: number, animate?: boolean): void;
        getCenter(): LatLng;
        getZoom(): number;
      }
      class LatLng {
        constructor(lat: number, lng: number);
        lat(): number;
        lng(): number;
      }
      interface LatLngLiteral {
        lat: number;
        lng: number;
      }
      class Marker {
        constructor(options: any);
        setMap(map: Map | null): void;
        setPosition(position: LatLng | LatLngLiteral): void;
      }
      namespace Event {
        function addListener(instance: any, eventName: string, handler: (event: any) => void): any;
      }
    }
  }

  interface Window {
    naver: typeof naver;
  }
}
