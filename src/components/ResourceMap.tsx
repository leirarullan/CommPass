import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { type Resource, CATEGORY_ICONS } from "@/data/mockResources";

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

interface Props {
  center: [number, number];
  resources: Resource[];
  selected: Resource | null;
  onSelect: (r: Resource) => void;
}

const ResourceMap = ({ center, resources, selected, onSelect }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.LayerGroup | null>(null);

  // Initialize map
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    const map = L.map(containerRef.current).setView(center, 14);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    mapRef.current = map;
    markersRef.current = L.layerGroup().addTo(map);

    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current = null;
    };
  }, []);

  // Recenter
  useEffect(() => {
    mapRef.current?.setView(center, 14);
  }, [center]);

  // Update markers
  useEffect(() => {
    if (!markersRef.current) return;
    markersRef.current.clearLayers();
    resources.forEach((r) => {
      const marker = L.marker([r.lat, r.lng], { icon: createIcon(r.category, r.isUCLinks) })
        .on("click", () => onSelect(r))
        .bindPopup(`
          <div style="font-family:sans-serif">
            <strong>${r.name}</strong>
            <p style="font-size:12px;margin:4px 0">${r.description}</p>
            <a href="https://www.google.com/maps/dir/?api=1&destination=${r.lat},${r.lng}" target="_blank" rel="noreferrer" style="font-size:12px;color:#2563eb">Get Directions →</a>
          </div>
        `);
      markersRef.current!.addLayer(marker);
    });
  }, [resources, onSelect]);

  // Pan to selected
  useEffect(() => {
    if (selected && mapRef.current) {
      mapRef.current.setView([selected.lat, selected.lng], 15, { animate: true });
    }
  }, [selected]);

  return (
    <div
      ref={containerRef}
      className="rounded-2xl overflow-hidden border border-border shadow-sm"
      style={{ height: "480px" }}
    />
  );
};

export default ResourceMap;
