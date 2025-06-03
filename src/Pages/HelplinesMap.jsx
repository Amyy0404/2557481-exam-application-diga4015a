import React, { useState, useRef } from "react";
import { GoogleMap, useJsApiLoader, OverlayView } from "@react-google-maps/api";
import places from "../Data/Places";
import "../Styles/HelplinesMap.css";
import MapStyle from "../Styles/MapStyle";

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: -30.5595,
  lng: 22.9375,
};

const relevantTags = [
  "Police", "Ambulance", "Firefighters", "Mechanics", "Towing", "Emergency", "Roadside Help"
];

function HelplinesMap() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const infoRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const handleMarkerClick = (place) => {
    setSelectedPlace(place);
    setTimeout(() => {
      infoRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  if (!isLoaded) return <div>Loading Map...</div>;

  const filteredPlaces = places.filter(place =>
    place.tags.some(tag => relevantTags.includes(tag))
  );

  return (
    <div className="helplines-page">
      <h1 className="helplines-heading">HELPLINES</h1>
      <p className="helplines-subheading">Click on any pin to find roadside help, fast.</p>

      <div className="map-container">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={6}
          options={{
            styles: MapStyle,
          }}
        >
          {filteredPlaces.map((place) => {
            let iconUrl;

            if (place.tags.includes("Police")) {
              iconUrl = "https://img.icons8.com/?size=100&id=38265&format=png&color=33525c";
            } else if (place.tags.includes("Ambulance")) {
              iconUrl = "https://img.icons8.com/?size=100&id=787&format=png&color=33525c";
            } else if (place.tags.includes("Firefighters")) {
              iconUrl = "https://img.icons8.com/?size=100&id=9903&format=png&color=33525c";
            } else if (place.tags.includes("Mechanics")) {
              iconUrl = "https://img.icons8.com/?size=100&id=90568&format=png&color=33525c";
            } else if (place.tags.includes("Towing")) {
              iconUrl = "https://img.icons8.com/?size=100&id=103861&format=png&color=33525c";
            } else {
              iconUrl = "https://img.icons8.com/?size=100&id=7880&format=png&color=33525c";
            }

            return (
              <OverlayView
                key={place.id}
                position={place.location}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              >
                <div className="custom-marker-wrapper" onClick={() => handleMarkerClick(place)}>
                  <img src={iconUrl} alt={place.name} className="custom-marker-icon" />
                  <div className="custom-tooltip">{place.name}</div>
                </div>
              </OverlayView>
            );
          })}
        </GoogleMap>
      </div>

      {selectedPlace && (
        <div ref={infoRef} className="place-details">
          <h2>{selectedPlace.name} ⭐ {selectedPlace.rating}</h2>
          <p>{selectedPlace.province}</p>
          <p className="place-info">{selectedPlace.description}</p>
          <img
            src={selectedPlace.image}
            alt={selectedPlace.name}
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "10px",
              marginTop: "1rem",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default HelplinesMap;
