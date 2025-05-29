import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import "../Styles/Deadzones.css"; 

const center = {
  lat: -26.2041, 
  lng: 28.0473, 
};

const mapContainerStyle = {
  width: "100%",
  height: "550px",
};

function Deadzones() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <div className="deadzones-page">
      <h1 className="deadzones-heading">DEADZONES</h1>
      <p className="deadzones-subheading">
        Know ahead of time when there is no signal on your way...
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
      <div style={{ height: "200px" }}></div>
    </div>
  );
}

export default Deadzones;