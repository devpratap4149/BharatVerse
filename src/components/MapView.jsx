import "./MapFix";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapView({ places }) {
  return (
    <MapContainer
      center={[23.5937, 78.9629]}
      zoom={5}
      style={{
        height: "500px",
        width: "100%",
        borderRadius: "20px",
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places.map((place) => (
        <Marker
          key={place.id}
          position={[place.lat, place.lng]}
        >
          <Popup>
            <strong>{place.name}</strong>
            <br />
            {place.city}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}