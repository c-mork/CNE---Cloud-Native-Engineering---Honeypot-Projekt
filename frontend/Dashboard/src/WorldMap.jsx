
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  ZoomControl,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./WorldMap.css";

const demoAttacks = [
  {
    ip: "192.0.2.14",
    country: "Germany",
    city: "Frankfurt",
    position: [50.1109, 8.6821],
    attack: "SQL Injection",
    severity: "High",
  },
  {
    ip: "198.51.100.8",
    country: "United States",
    city: "New York",
    position: [40.7128, -74.006],
    attack: "Path Traversal",
    severity: "Medium",
  },
  {
    ip: "203.0.113.42",
    country: "Japan",
    city: "Tokyo",
    position: [35.6762, 139.6503],
    attack: "XSS Attempt",
    severity: "Medium",
  },
  {
    ip: "192.0.2.77",
    country: "Brazil",
    city: "São Paulo",
    position: [-23.5505, -46.6333],
    attack: "Login Attempt",
    severity: "Low",
  },
];

const markerColors = {
  High: "#ff4560",
  Medium: "#f5a623",
  Low: "#35d49a",
};

function WorldMap() {
  return (
    <div className="worldmap-page">
      <div className="worldmap-heading">
        <div>
          <span className="eyebrow">SECURITY / GLOBAL ACTIVITY</span>
          <h2>Global Attack Map</h2>
          <p>Geographic overview of observed honeypot activity.</p>
        </div>

        <span className="demo-badge">DEMO LOCATIONS</span>
      </div>

      <div className="map-stats">
        <div className="map-stat">
          <span>Observed attacks</span>
          <strong>{demoAttacks.length}</strong>
        </div>

        <div className="map-stat">
          <span>Source countries</span>
          <strong>{demoAttacks.length}</strong>
        </div>

        <div className="map-stat">
          <span>High severity</span>
          <strong>
            {demoAttacks.filter((a) => a.severity === "High").length}
          </strong>
        </div>
      </div>

      <div className="worldmap-container">
        <MapContainer
          center={[25, 10]}
          zoom={2}
          minZoom={2}
          maxZoom={10}
          scrollWheelZoom={true}
          zoomControl={false}
          className="attack-map"
        >
         <TileLayer
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
/>

          <ZoomControl position="bottomright" />

          {demoAttacks.map((attack) => (
            <CircleMarker
              key={attack.ip}
              center={attack.position}
              radius={9}
              pathOptions={{
                color: markerColors[attack.severity],
                fillColor: markerColors[attack.severity],
                fillOpacity: 0.8,
                weight: 2,
              }}
            >
              <Popup>
                <strong>{attack.city}, {attack.country}</strong>
                <br />
                IP: {attack.ip}
                <br />
                Attack: {attack.attack}
                <br />
                Severity: {attack.severity}
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>

      <div className="map-legend">
        <span><i className="legend-dot high" /> High severity</span>
        <span><i className="legend-dot medium" /> Medium severity</span>
        <span><i className="legend-dot low" /> Low severity</span>
      </div>
    </div>
  );
}

export default WorldMap;
