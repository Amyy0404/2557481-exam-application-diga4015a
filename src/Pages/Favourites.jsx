import React, { useContext } from "react";
import { FavouritesContext } from "../Auth/FavouritesContext";
import "../Styles/Favourites.css";

function Favourites() {
  const { favourites, toggleLike } = useContext(FavouritesContext);

  return (
    <div className="favourites-page">
      <h1 className="favourites-title">Your Favourite Places ❤️</h1>
      <div className="favourites-grid">
        {favourites.map((place) => (
          <div key={place.id} className="favourite-card">
            <img src={place.image} alt={place.name} />
            <h2>{place.name}</h2>
            <p>{place.province}</p>
            <p>⭐ {place.rating}</p>
            <button onClick={() => toggleLike(place.id)} className="like-button">
              💔 Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favourites;