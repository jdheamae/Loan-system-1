// PhilippinesMap.js
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom marker icon
const customMarker = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

const PhilippinesMap = ({ onLocationSelect }) => {
    const [position, setPosition] = useState(null);

    const MapClickHandler = () => {
        useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng;
                setPosition([lat, lng]);
                onLocationSelect([lat, lng]); // Send the location to the parent component
            },
        });
        return position ? (
            <Marker position={position} icon={customMarker}>
                <Popup>Selected location</Popup>
            </Marker>
        ) : null;
    };

    return (
        <MapContainer
            center={[12.8797, 121.774]} // Centered on the Philippines
            zoom={6}
            style={{ height: '400px', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <MapClickHandler />
        </MapContainer>
    );
};

export default PhilippinesMap;
