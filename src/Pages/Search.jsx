import React, { useState } from "react";
import places from "../Data/Places";
import "../Styles/Search.css";
import searchIcon from "../Images/Icons/SearchIcon.png";
import landscape6 from "../Images/General/landscape6.png";

const categories = [
  "Restaurants", "Open 24/7", "Police Stations", "Gas Stations",
  "Farm Stalls", "Hidden Gems", "Point of Interest", "Mechanics", "Attractions"
];

function Search() {
  const [query, setQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState([]);

  const toggleFilter = (filter) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const filteredPlaces = places.filter(place =>
    place.name.toLowerCase().includes(query.toLowerCase()) &&
    (activeFilters.length === 0 || activeFilters.some(tag => place.tags.includes(tag) || place.category === tag))
  );

  return (
    <div className="search-page">
      <div className="hero">
        <img src={landscape6} alt="Hero" className="hero-img" />
        <h1 className="hero-title">FIND WHAT YOU NEED</h1>
      </div>

      <div className="search-wrapper">
        <img src={searchIcon} alt="Search" className="search-icon" />
        <input
          className="search-input"
          type="text"
          placeholder="Search by name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-button">Search</button>
      </div>

      <div className="subheading">FILTER BY CATEGORY</div>
      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-button ${activeFilters.includes(cat) ? "active" : ""}`}
            onClick={() => toggleFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="results">
        {filteredPlaces.map((place) => (
          <div key={place.id} className="place-card">
            <img src={place.image} alt={place.name} />
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
