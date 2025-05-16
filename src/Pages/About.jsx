import React from "react";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-page">

      <div className="hero-section">
        <h1>About Us</h1>
        <p className="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </div>
      </div>
    </div>
  );
}

export default About;
