import React from "react";
import "./Leaflet.css"
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Leaflet from "./LeafletMap"

export default function LeafletMap({coordinates = [0, 0]}) {

  // Marks in the map
  const markers = [
    {
      geocode: coordinates,
      popUp: "LOMOTOR"
    }
  ]
  return (
    <>
      <MapContainer
        center={coordinates}
        zoom={14}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          markers.map(marker => (
            <Marker position={marker.geocode} key={marker.popUp}>
            </Marker>
          ))
        }
      </MapContainer>
    </>
  );
}
