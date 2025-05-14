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
        <div className="image-box box1"></div>
        <div className="image-box box2"></div>
        <div className="image-box box3"></div>
        <div className="image-box box4"></div>
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
