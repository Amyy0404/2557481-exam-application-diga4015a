import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import Navbar from "./Navbar";
import "../Styles/Home.css";

function Home() {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  function toggleLearnMore() {
    setShowMore(!showMore);
  }

  return (
    <div className="home-container">

      <div className="hero-section">
  <div className="hero-content">
    <h1>EXPLORE SOUTH AFRICA<br />WITH EASE</h1>
    <div className="learn-more-container">
      <button className="learn-more" onClick={toggleLearnMore}>
        Learn more
      </button>
      {showMore && (
        <p className="more-text">
          This app helps you navigate the country...
        </p>
      )}
    </div>
  </div>
</div>

<div className="feature-buttons">
  <div className="feature-card" onClick={() => navigate("/search")}>
    <div className="icon-circle icon-search"></div>
    <h3>SEARCH</h3>
    <p>Looking for something specific?</p>
  </div>
  <div className="feature-card" onClick={() => navigate("/discover")}>
    <div className="icon-circle icon-discover"></div>
    <h3>DISCOVER</h3>
    <p>Farmstalls, restaurants, One-Stops, Mechanics and more...</p>
  </div>
  <div className="feature-card" onClick={() => navigate("/deadzones")}>
    <div className="icon-circle icon-deadzones"></div>
    <h3>DEADZONES</h3>
    <p>Know when there is no signal</p>
  </div>
  <div className="feature-card" onClick={() => navigate("/helplines")}>
    <div className="icon-circle icon-helplines"></div>
    <h3>HELPLINES</h3>
    <p>Emergency numbers for each province</p>
  </div>
</div>
</div>
  );
}

export default Home;
