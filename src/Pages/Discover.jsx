import React, { useState, useRef, useContext } from "react";
import { FavouritesContext } from "../Auth/FavouritesContext";
import { GoogleMap, useJsApiLoader, OverlayView  } from "@react-google-maps/api";

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
  const { places, toggleLike } = useContext(FavouritesContext);
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
          {places.map((place) => {

            const firstTag = place.tags[0];
            let iconUrl;

            switch (firstTag) {
              case "Attractions":
                iconUrl = "https://img.icons8.com/?size=100&id=8LbaJ1j48pyk&format=png&color=33525c"; 
              break;
              case "Farm Stalls":
                iconUrl = "https://img.icons8.com/?size=100&id=8LbaJ1j48pyk&format=png&color=33525c"; 
              break;
              case "Restaurants":
                iconUrl = "https://img.icons8.com/?size=100&id=8694&format=png&color=33525c"; 
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
          <button onClick={() => {
            toggleLike(selectedPlace.id);
              const updatedPlace = places.find((p) => p.id === selectedPlace.id);
              if (updatedPlace) {
                setSelectedPlace(updatedPlace);
              }
            }} className="like-button">
              <img
                src={
                  selectedPlace.isLiked
                    ? "https://img.icons8.com/?size=100&id=85138&format=png&color=c73838"
                    : "https://img.icons8.com/?size=100&id=85038&format=png&color=c73838"
                  }
                alt={selectedPlace.isLiked ? "Liked" : "Not liked"}
                className="heart-icon"
              />
          </button>
        </div>
      )}
    </div>
  );
}

export default Discover;

