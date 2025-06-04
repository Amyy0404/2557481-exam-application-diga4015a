import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -33.865143, 
  lng: 151.209900,
};

function MapComponent() {
  // Hook to load Google Maps API script with my API key
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      <Marker position={center} />
    </GoogleMap>
  ) : (
    // Placeholder while map loads
    <p>Loading map...</p>
  );
}

// Prevent unnecessary re-renders
export default React.memo(MapComponent);

