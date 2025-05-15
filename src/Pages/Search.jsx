import React, { useState } from "react";
import places from "../Data/Places";
import "../Styles/Search.css";

function Search() {
  const [query, setQuery] = useState("");

  const filteredPlaces = places.filter(place =>
    place.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-page">
      <h1>Search Places</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="results">
        {filteredPlaces.map((place) => (
          <div key={place.id} className="place-card">
            <img src={place.image} alt={place.name} width="200" />
            <h2>{place.name}</h2>
            <p><strong>Province:</strong> {place.province}</p>
            <p><strong>Category:</strong> {place.category}</p>
            <p><strong>Tags:</strong> {place.tags.join(", ")}</p>
            <p>{place.description}</p>
            <p><strong>Rating:</strong> ⭐ {place.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;