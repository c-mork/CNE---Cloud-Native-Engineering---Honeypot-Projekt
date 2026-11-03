
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  ZoomControl,
} from "react-leaflet";

// Leaflet map styles and custom world map styling.
import "leaflet/dist/leaflet.css";
import "./WorldMap.css";

// Sample attack events used to demonstrate the global attack map.
// These are documentation/example IP addresses, not real attacker IPs.
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

// Assign marker colors based on the severity of each attack.
const markerColors = {
  High: "#ff4560",
  Medium: "#f5a623",
  Low: "#35d49a",
};
// Generate marker positions for repeated copies of the world map.
const getWrappedPositions = ([lat, lng]) => [
  [lat, lng - 360],
  [lat, lng],
  [lat, lng + 360],
];

function WorldMap() {
  // Calculate summary statistics from the available attack data.
  const totalAttacks = demoAttacks.length;

  const sourceCountries = new Set(
    demoAttacks.map((attack) => attack.country)
  ).size;

  const highSeverityAttacks = demoAttacks.filter(
    (attack) => attack.severity === "High"
  ).length;

  return (
    <div className="worldmap-page">

      {/* Page heading and demo data indicator. */}
      <div className="worldmap-heading">
        <div>
          <span className="eyebrow">SECURITY / GLOBAL ACTIVITY</span>
          <h2>Global Attack Map</h2>
          <p>Geographic overview of observed honeypot activity.</p>
        </div>

        <span className="demo-badge">DEMO LOCATIONS</span>
      </div>

      {/* Summary cards displaying key attack statistics. */}
      <div className="map-stats">
        <div className="map-stat">
          <span>Observed attacks</span>
          <strong>{totalAttacks}</strong>
        </div>

        <div className="map-stat">
          <span>Source countries</span>
          <strong>{sourceCountries}</strong>
        </div>

        <div className="map-stat">
          <span>High severity</span>
          <strong>{highSeverityAttacks}</strong>
        </div>
      </div>

      {/* Interactive Leaflet map displaying geographic attack locations. */}
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
          {/* OpenStreetMap provides the geographic map tiles. */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Position the zoom controls in the bottom-right corner. */}
          <ZoomControl position="bottomright" />

          {/* Generate a colored map marker for each recorded attack. */}
          {/* Render attack markers across repeated copies of the world map. */}
          {demoAttacks.flatMap((attack) =>
            getWrappedPositions(attack.position).map((position, index) => (
              <CircleMarker
                key={`${attack.ip}-${index}`}
                center={position}
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
            ))
          )}
        </MapContainer>
      </div>

      {/* Legend explaining the severity colors used on the map. */}
      <div className="map-legend">
        <span><i className="legend-dot high" /> High severity</span>
        <span><i className="legend-dot medium" /> Medium severity</span>
        <span><i className="legend-dot low" /> Low severity</span>
      </div>
    </div>
  );
}

export default WorldMap;
