import { useEffect, useRef } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { type Resource, CATEGORY_ICONS } from "@/data/mockResources";

// Fix default marker icon
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function createIcon(category: string, isUCLinks?: boolean) {
  const emoji = isUCLinks ? "🎓" : CATEGORY_ICONS[category as keyof typeof CATEGORY_ICONS] || "📍";
  return L.divIcon({
    html: `<div style="font-size:24px;line-height:1;filter:drop-shadow(0 1px 2px rgba(0,0,0,0.3))">${emoji}</div>`,
    className: "",
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });
}

function RecenterMap({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => { map.setView(center, 14); }, [center, map]);
  return null;
}

interface Props {
  center: [number, number];
  resources: Resource[];
  selected: Resource | null;
  onSelect: (r: Resource) => void;
}

const ResourceMap = ({ center, resources, selected, onSelect }: Props) => {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (selected && mapRef.current) {
      mapRef.current.setView([selected.lat, selected.lng], 15, { animate: true });
    }
  }, [selected]);

  return (
    <div className="rounded-2xl overflow-hidden border border-border shadow-sm" style={{ height: "480px" }}>
      <MapContainer
        center={center}
        zoom={14}
        className="h-full w-full"
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RecenterMap center={center} />
        {resources.map((r) => (
          <Marker
            key={r.id}
            position={[r.lat, r.lng]}
            icon={createIcon(r.category, r.isUCLinks)}
            eventHandlers={{ click: () => onSelect(r) }}
          >
            <Popup>
              <div className="font-sans">
                <strong>{r.name}</strong>
                <p className="text-xs mt-1">{r.description}</p>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${r.lat},${r.lng}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-blue-600 mt-1 inline-block"
                >
                  Get Directions →
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ResourceMap;
