import React, { createContext, useState } from "react";
import placesData from "../Data/Places";

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [places, setPlaces] = useState(placesData);

  const toggleLike = (id) => {
    const updatedPlaces = places.map((place) =>
      place.id === id ? { ...place, isLiked: !place.isLiked } : place
    );
    setPlaces(updatedPlaces);
  };

  const favourites = places.filter((place) => place.isLiked);

  return (
    <FavouritesContext.Provider value={{ places, toggleLike, favourites }}>
      {children}
    </FavouritesContext.Provider>
  );
};