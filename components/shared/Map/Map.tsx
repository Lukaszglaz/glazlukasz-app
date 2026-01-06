"use client";

import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

interface MapProps {
  center: [number, number];
  zoom: number;
}

const lublinFullBoundary: any = {
  type: "Feature",
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [22.451, 51.272],
        [22.455, 51.278],
        [22.46, 51.282],
        [22.47, 51.288],
        [22.485, 51.295],
        [22.5, 51.302],
        [22.515, 51.308],
        [22.53, 51.312],
        [22.55, 51.31],
        [22.57, 51.305],
        [22.59, 51.295],
        [22.61, 51.285],
        [22.635, 51.275],
        [22.655, 51.265],
        [22.67, 51.255],
        [22.68, 51.245],
        [22.685, 51.235],
        [22.682, 51.22],
        [22.67, 51.205],
        [22.65, 51.192],
        [22.625, 51.185],
        [22.6, 51.18],
        [22.575, 51.175],
        [22.545, 51.172],
        [22.515, 51.175],
        [22.49, 51.182],
        [22.47, 51.195],
        [22.455, 51.21],
        [22.442, 51.225],
        [22.435, 51.24],
        [22.438, 51.255],
        [22.451, 51.272],
      ],
    ],
  },
};

export const MapComponent: React.FC<MapProps> = ({ center, zoom }) => {
  const token = process.env.NEXT_PUBLIC_MAPS_API_TOKEN;

  const boundaryStyle = {
    color: "var(--color-accent)",
    dashArray: "10, 10",
    weight: 2.5,
    fillOpacity: 0.05,
    fillColor: "var(--color-accent)",
  };

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
      className="bg-bg-surface h-full w-full rounded-2xl shadow-inner"
    >
      <TileLayer
        url={`https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=${token}`}
        attribution="&copy; JawgMaps"
      />

      <GeoJSON data={lublinFullBoundary} style={boundaryStyle} />

      <Marker position={center}>
        <Popup>
          <span className="font-semibold text-black">
            Lublin - tu tworzę! 💻
          </span>
        </Popup>
      </Marker>
    </MapContainer>
  );
};
