import React, { useState, useContext, useRef, useEffect } from "react"; 
import { FavouritesContext } from "../Auth/FavouritesContext";
import places from "../Data/Places";
import "../Styles/Search.css";
import searchIcon from "../Images/Icons/SearchIcon2.png";

// List of categories for filtering
const categories = [
  "Restaurants", "Open 24/7", "Police Stations", "Gas Stations", "Local Cuisine",
  "Farm Stalls", "Hidden Gems", "Mechanics", "Attractions", "Family-Friendly", "Sleep", "Emergency Services"
];

const provinces = [...new Set(places.map(place => place.province))];

function Search() {
  const { places, toggleLike } = useContext(FavouritesContext);

  const [query, setQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState([]);
  const [selectedProvinces, setSelectedProvinces] = useState([]);

  const resultsRef = useRef(null);

  // Scroll to results section
  const scrollToResults = () => {
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Toggle category filter on/off
  const toggleFilter = (filter) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
    scrollToResults(); //Scroll when a filter is clicked
  };

  const toggleProvince = (province) => {
    setSelectedProvinces((prev) =>
      prev.includes(province)
        ? prev.filter(p => p !== province)
        : [...prev, province]
    );
    scrollToResults(); 
  };

  const filteredPlaces = places.filter(place =>
    place.name.toLowerCase().includes(query.toLowerCase()) &&
    (activeFilters.length === 0 || activeFilters.some(tag => place.tags.includes(tag) || place.category === tag)) &&
    (selectedProvinces.length === 0 || selectedProvinces.includes(place.province))
  );

  // Reset all filters at once
  const resetFilters = () => {
    setActiveFilters([]);
    setSelectedProvinces([]);
  };

  return (
    <div className="search-page">
      <div className="hero">
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
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              scrollToResults();
            }
          }}
        />
      </div>

      <div className="subheading">FILTER BY CATEGORY</div>
      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-button ${activeFilters.includes(cat) ? "active" : ""}`} // Highlight active filters
            onClick={() => toggleFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="subheading">FILTER BY PROVINCE</div>
      <div className="filter-buttons">
        {provinces.map((prov) => (
          <button
            key={prov}
            className={`filter-button ${selectedProvinces.includes(prov) ? "active" : ""}`} // Highlight active provinces
            onClick={() => toggleProvince(prov)}
          >
            {prov}
          </button>
        ))}
      </div>

      <div className="reset-button-wrapper">
        <button className="reset-button" onClick={resetFilters}>
          Reset Filters
        </button>
      </div>

      <div className="results" ref={resultsRef}>
        {filteredPlaces.map((place) => (
          <div key={place.id} className="place-card">
            <img src={place.image} alt={place.name} />
            <h2>{place.name}</h2>
            <p><strong>Province:</strong> {place.province}</p>
            <p>⭐ {place.rating}</p>
            <p className="place-description">{place.description}</p>

            <button onClick={() => toggleLike(place.id)} className="like-button">
              <img
                src={
                  place.isLiked
                    ? "https://img.icons8.com/?size=100&id=85138&format=png&color=993a24" 
                    : "https://img.icons8.com/?size=100&id=85038&format=png&color=993a24"
                }
                alt={place.isLiked ? "Liked" : "Not liked"}
                className="heart-icon"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;


