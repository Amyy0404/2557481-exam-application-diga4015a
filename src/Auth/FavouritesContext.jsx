import React, { createContext, useState } from "react";
import placesData from "../Data/Places";

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [places, setPlaces] = useState(placesData);

  // This toggles the 'isLiked' 
  const toggleLike = (id) => {
    const updatedPlaces = places.map((place) =>
      place.id === id ? { ...place, isLiked: !place.isLiked } : place
    );
    setPlaces(updatedPlaces);
  };

  // Filters out liked places
  const favourites = places.filter((place) => place.isLiked);

  return (
    // Places, toggle function, and filtered favourites 
    <FavouritesContext.Provider value={{ places, toggleLike, favourites }}>
      {children}
    </FavouritesContext.Provider>
  );
};
