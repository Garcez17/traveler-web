import L from 'leaflet';

export const mapIcon = L.icon({
  iconUrl: '/marker.svg',

  iconSize: [25, 30],
  iconAnchor: [10, 30],
  popupAnchor: [0, -60],
});
