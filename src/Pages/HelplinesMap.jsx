import React, { useState, useRef } from "react";
import { GoogleMap, useJsApiLoader, OverlayView } from "@react-google-maps/api";
import { useLocation } from "react-router-dom";
import places from "../Data/Places";
import "../Styles/HelplinesMap.css";
import MapStyle from "../Styles/MapStyle";

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

// Coordinates & zoom levels for each province 
const provinceCenters = {
  "GAUTENG": { lat: -26.2708, lng: 28.1123, zoom: 9 },
  "WESTERN CAPE": { lat: -33.9180, lng: 18.4233, zoom: 9 },
  "KWAZULU-NATAL": { lat: -29.8587, lng: 31.0218, zoom: 8 },
  "EASTERN CAPE": { lat: -32.2968, lng: 26.4194, zoom: 7 },
  "FREE STATE": { lat: -28.4541, lng: 26.7968, zoom: 7 },
  "LIMPOPO": { lat: -23.4016, lng: 29.4179, zoom: 7 },
  "MPUMALANGA": { lat: -25.5653, lng: 30.5274, zoom: 8 },
  "NORTH WEST": { lat: -25.3390, lng: 25.6628, zoom: 7 },
  "NORTHERN CAPE": { lat: -29.0462, lng: 21.8569, zoom: 6 },
};

// Only show places with these tags on the map
const allowedTags = ["Police Stations", "Ambulance", "Firefighters", "Gas Stations", "Mechanics"];

function HelplinesMap() {
  // State to track which place is selected (for info display)
  const [setSelectedPlace] = useState(null);
  const infoRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const location = useLocation();
  const selectedProvince = location.state?.province;

  const mapCenter = selectedProvince && provinceCenters[selectedProvince]
    ? provinceCenters[selectedProvince]
    : { lat: -30.5595, lng: 22.9375, zoom: 6 };

  // When clicked, set selected place & scroll info box into view smoothly
  const handleMarkerClick = (place) => {
    setSelectedPlace(place);
    setTimeout(() => {
      infoRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <div className="helplinesMap-page">
      <h1 className="helplinesMap-heading">HELPLINES</h1>
      <p className="helplinesMap-subheading">Click on any pin to find roadside help, fast.</p>

      <div className="map-container">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={{ lat: mapCenter.lat, lng: mapCenter.lng }}
          zoom={mapCenter.zoom}
          options={{
            styles: MapStyle, 
          }}
        >
          {places
            .filter(place => place.tags.some(tag => allowedTags.includes(tag))) 
            .map((place) => {
              const firstTag = place.tags[0];
              let iconUrl;

              // Icon URL based on first tag of place
              switch (firstTag) {
                case "Police Stations":
                  iconUrl = "https://img.icons8.com/?size=100&id=8665&format=png&color=33525c"; 
                  break;
                case "Ambulance":
                  iconUrl = "https://img.icons8.com/?size=100&id=8741&format=png&color=33525c"; 
                  break;
                case "Firefighters":
                  iconUrl = "https://img.icons8.com/?size=100&id=60985&format=png&color=33525c"; 
                  break;
                case "Gas Stations":
                  iconUrl = "https://img.icons8.com/?size=100&id=60669&format=png&color=33525c"; 
                  break;
                case "Mechanics":
                  iconUrl = "https://img.icons8.com/?size=100&id=90568&format=png&color=33525c"; 
                  break;
                default:
                  iconUrl = "https://img.icons8.com/?size=100&id=7880&format=png&color=33525c";
              }

              return (
                <OverlayView
                  key={place.id}
                  position={place.location}
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                >
                  <div className="custom-marker-wrapper non-clickable">
                    
                    <img src={iconUrl} alt={place.name} className="custom-marker-icon" />
                    <div className="custom-tooltip">
                      {place.name}<br />{place.contact}
                    </div>
                  </div>
                </OverlayView>
              );
            })}
        </GoogleMap>
      </div>
    </div>
  );
}

export default HelplinesMap;

