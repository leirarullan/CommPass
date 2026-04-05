import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { type Resource, CATEGORY_ICONS, ZIP_DATA } from "@/data/mockResources";

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

// Interpolate from green (low percentile) to red (high percentile)
function percentileToColor(percentile: number): string {
  // Clamp 0-100
  const p = Math.max(0, Math.min(100, percentile));
  // 0 = green (120°), 100 = red (0°)
  const hue = 120 - (p / 100) * 120;
  return `hsl(${hue}, 70%, 50%)`;
}

interface Props {
  center: [number, number];
  resources: Resource[];
  selected: Resource | null;
  onSelect: (r: Resource) => void;
  percentile?: number;
  showOverlay?: boolean;
}

const ResourceMap = ({ center, resources, selected, onSelect, percentile, showOverlay = true }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.LayerGroup | null>(null);
  const overlaysRef = useRef<L.LayerGroup | null>(null);

  // Initialize map
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    const map = L.map(containerRef.current).setView(center, 14);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    mapRef.current = map;
    markersRef.current = L.layerGroup().addTo(map);
    overlaysRef.current = L.layerGroup().addTo(map);

    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current = null;
      overlaysRef.current = null;
    };
  }, []);

  // Recenter
  useEffect(() => {
    mapRef.current?.setView(center, 14);
  }, [center]);

  // Draw pollution overlays for nearby ZIP areas
  useEffect(() => {
    if (!overlaysRef.current || !mapRef.current) return;
    overlaysRef.current.clearLayers();
    if (!showOverlay) return;

    const mapCenter = mapRef.current.getCenter();
    const nearbyZips = Object.values(ZIP_DATA).filter((z) => {
      const dist = mapCenter.distanceTo(L.latLng(z.lat, z.lng));
      return dist < 50000; // 50km radius
    });

    nearbyZips.forEach((z) => {
      const color = percentileToColor(z.percentile);
      L.circle([z.lat, z.lng], {
        radius: 1200,
        color: color,
        fillColor: color,
        fillOpacity: 0.18,
        weight: 1.5,
        opacity: 0.4,
      }).addTo(overlaysRef.current!);
    });

    // If no nearby known ZIPs but we have a percentile, show overlay at center
    if (nearbyZips.length === 0 && percentile !== undefined) {
      const color = percentileToColor(percentile);
      L.circle(center, {
        radius: 1200,
        color: color,
        fillColor: color,
        fillOpacity: 0.18,
        weight: 1.5,
        opacity: 0.4,
      }).addTo(overlaysRef.current!);
    }
  }, [center, percentile, showOverlay]);

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
