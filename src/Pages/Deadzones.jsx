  import React from "react";
  import { GoogleMap, Polygon, useJsApiLoader } from "@react-google-maps/api";
  import "../Styles/Deadzones.css";
  import MapStyle from "../Styles/MapStyle";
  import deadzoneData from "../Data/DeadzoneData";

  const center = {
    lat: -30.5595,
    lng: 22.9375,
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
            zoom={6}
            options={{ styles: MapStyle }}
          >
            {deadzoneData.map((zone, index) => (
              <Polygon
                key={index}
                paths={zone.paths}
                options={{
                  fillColor: "#FF0000",
                  fillOpacity: 0.3,
                  strokeColor: "#FF0000",
                  strokeOpacity: 0.8,
                  strokeWeight: 2,
                }}
              />
            ))}
          </GoogleMap>
        </div>
        <div style={{ height: "200px" }}></div>
      </div>
    );
  }

  export default Deadzones;
