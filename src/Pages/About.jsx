import React from "react";
import "../Styles/About.css"; 

function About() {
  return (
    <div className="about-page">

      <div className="hero-section">
        <h1>About Us</h1>
        <p className="quote">Discover the reason behind the road.</p>
      </div>

      <div className="image-row">
        <div className="image-box">
          <img src={require("../Images/About/smallL1.png")} alt="img1" />
        </div>
        <div className="image-box">
          <img className="small-p1" src={require("../Images/About/smallP1.png")} alt="img2" />
        </div>
        <div className="image-box">
          <img src={require("../Images/About/smallL2.png")} alt="img3" />
        </div>
        <div className="image-box">
          <img className="small-p2" src={require("../Images/About/smallp2.png")} alt="img4" />
        </div>
      </div>

      <div className="story-section">
        <h2>Our Story...</h2>
        <div className="story-columns">
          <p>South Africa is a land of breathtaking landscapes, small-town gems, and unexpected adventures—but not every journey goes as 
            smoothly as planned. I created this app because I believe that road trips should be more than just getting from A to B—they 
            should be safer, richer, and full of meaningful stops along the way. Too often, travelers miss out on hidden treasures—farmstalls 
            tucked behind dusty turnoffs, friendly local mechanics, or the perfect picnic spot with a view—simply because they didn’t know 
            they were there. At the same time,</p>
          <p>a sudden loss of signal or not knowing who to call in an emergency can turn a relaxing drive into a stressful detour. My app 
            brings all that local knowledge and practical support into one place. Built with South African road users in mind, it blends 
            real needs with real stories—highlighting everything from must-see attractions to vital helplines and areas where cellphone 
            coverage vanishes. Whether you're exploring familiar provinces or venturing off the beaten path, my goal is to make sure every 
            trip feels informed, supported, and full of possibility.Because on South African roads, it’s not just the destination that 
            matters—it’s the road that takes you there.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
