import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import ambulance from "../../assets/icons/ambulance.svg";
import warning from "../../assets/icons/warning.png";
import { getPositions } from "../../api/services/positions/positions";
import { getIncidents } from "../../api/services/incidents/incidents";
import { useQuery } from "@tanstack/react-query";

// Ambulance Icon
const ambulanceIcon = L.divIcon({
  html: `
    <div style="
      background: white;
      padding: 4px;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 6px rgba(0,0,0,0.4);
    ">
      <img src="${ambulance}" alt="ambulance" style="width: 20px; height: 20px;" />
    </div>
  `,
  className: "",
  iconSize: [32, 32],
});

// Incident Icon
const incidentIcon = L.divIcon({
  html: `
    <div style="
      background: #fff3cd;
      padding: 4px;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 6px rgba(0,0,0,0.3);
    ">
      <img src="${warning}" alt="incident" style="width: 20px; height: 20px;" />
    </div>
  `,
  className: "",
  iconSize: [32, 32],
});

export default function UsaMap() {
  const { data: positions } = useQuery({
    queryKey: ["positions"],
    queryFn: getPositions,
  });

  const { data: incidents } = useQuery({
    queryKey: ["incidents"],
    queryFn: getIncidents,
  });

  console.log("positions:", positions);
  console.log("incidents:", incidents);

  return (
    <MapContainer
      center={[40.7128, -74.0060]}
      zoom={14}
      style={{ width: "100%", height: "100vh" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Ambulances */}
      {positions?.map((pos) => (
        <Marker key={pos.id} position={[pos.lat, pos.lng]} icon={ambulanceIcon}>
          <Popup>
            <b>Ambulance #{pos.id}</b>
            <br />
            Lat: {pos.lat} <br />
            Lng: {pos.lng}
          </Popup>
        </Marker>
      ))}

      {/* Incidents */}
      {incidents?.map((inc) => (
        <Marker
          key={inc.id}
          position={[inc.lat, inc.lng]}
          icon={incidentIcon}
        >
          <Popup>
            <b>Incident #{inc.id}</b> <br />
            Type: {inc.type} <br />
            Severity: {inc.severity} <br />
            Status: {inc.status} <br />
            Description: {inc.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
