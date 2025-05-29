import React, { useState, useRef } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import places from "../Data/Places";
import "../Styles/Discover.css";
import MapStyle from "../Styles/MapStyle";

const mapContainerStyle = {
  width: "100%",
  height: "550px",
};

const center = {
  lat: -30.5595,
  lng: 22.9375,
};

function Discover() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const infoRef = useRef(null); // For smooth scroll

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
          zoom={6}
          options={{
            styles: MapStyle,
          }}
        >
          {places.map((place) => (
            <Marker
              key={place.id}
              position={place.location}
              icon={{
                url: "https://img.icons8.com/sf-regular-filled/48/3f6572/google-maps-new.png", // Dusty blue icon
                scaledSize: new window.google.maps.Size(40, 40),
              }}
              onClick={() => handleMarkerClick(place)}
            />
          ))}
        </GoogleMap>
      </div>

      {selectedPlace && (
        <div ref={infoRef} className="place-details">
          <h2>{selectedPlace.name}</h2>
          <p>⭐ {selectedPlace.rating}</p>
          <p ref={infoRef} className="place-info">{selectedPlace.description}</p>
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

export default Discover;

