import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Home.css"; 

function Home() {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false); // Toggle for "Learn more" text

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
                Every journey has its surprises—some sweet, some... not so much. This app helps you find the good stuff: local gems, 
                trusty pit stops, and must-see spots along the way. You’ll know where to go, when to slow down, where signal might 
                drop, and who to call if things go sideways. Road trips just got smarter.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="feature-buttons">
        <div className="feature-card" onClick={() => navigate("/search")}>
          <div className="icon-circle icon-search"></div>
          <h3>SEARCH</h3>
          <p>Quickly find farmstalls, gas stations, restaurants, attractions, and more from our growing database—wherever you are on the road.</p>
        </div>

        <div className="feature-card" onClick={() => navigate("/discover")}>
          <div className="icon-circle icon-discover"></div>
          <h3>DISCOVER</h3>
          <p>Explore our interactive map to see what’s nearby, what’s ahead, and what hidden gems you might otherwise miss.</p>
        </div>

        <div className="feature-card" onClick={() => navigate("/deadzones")}>
          <div className="icon-circle icon-deadzones"></div>
          <h3>DEADZONES</h3>
          <p>Stay one step ahead by checking areas where other users have lost signal—so you know when to download directions or make that call 
            before it’s too late.</p>
        </div>

        <div className="feature-card" onClick={() => navigate("/helplines")}>
          <div className="icon-circle icon-helplines"></div>
          <h3>HELPLINES</h3>
          <p>Access a handy list of emergency contacts by province, including police stations, ambulance services, mechanics, and 
            firefighters—because peace of mind matters.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
