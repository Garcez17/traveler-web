import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { mapIcon } from '../../utils/mapIcon';
import 'leaflet/dist/leaflet.css';

export function Map(): JSX.Element {
  return (
    <MapContainer
      center={[-12.984998, -38.5054021]}
      zoom={15}
      style={{ flex: 1, borderRadius: '8px' }}
    >
      <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker icon={mapIcon} position={[-12.984998, -38.5054021]} />
    </MapContainer>
  );
}
