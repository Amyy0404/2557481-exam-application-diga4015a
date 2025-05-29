import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import "../Styles/Discover.css"; 

const center = {
  lat: -26.2041, 
  lng: 28.0473, 
};

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

function Discover() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <div className="discover-page">
      <h1 className="discover-heading">DISCOVER</h1>
      <p className="discover-subheading">
        Select pins that are near you to see what lies ahead!
      </p>
      <div className="map-container">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
        >
          {/* Example marker */}
          <Marker position={center} />
        </GoogleMap>
      </div>
    </div>
  );
}

export default Discover;
