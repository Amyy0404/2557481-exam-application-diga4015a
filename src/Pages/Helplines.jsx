import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import "../Styles/Helplines.css";

// List of provinces 
const provinces = [
  { 
    name: "GAUTENG", 
    image: "gauteng.png", 
    hoverText: "Police: 10111\nAmbulance & Fire: 011 375 5911\nAA Assistance: 0861 000 234" 
  },
  { 
    name: "WESTERN CAPE", 
    image: "westerncape.png", 
    hoverText: "Ambulance: 10177\nFire Brigade: 107\nAA Assistance: 0861 000 234" 
  },
  { 
    name: "KWAZULU-NATAL", 
    image: "kzn.png", 
    hoverText: "Ambulance: 10177\nFire Brigade: 10177\nAA Assistance: 0861 000 234" 
  },
  { 
    name: "EASTERN CAPE", 
    image: "easterncape.png", 
    hoverText: "Police: 10111\nAmbulance: 10177\nFire Brigade: 10177" 
  },
  { 
    name: "FREE STATE", 
    image: "freestate.png", 
    hoverText: "Police: 10111\nFire Brigade: 10177\nAA Assistance: 0861 000 234" 
  },
  { 
    name: "LIMPOPO", 
    image: "limpopo.png", 
    hoverText: "Police: 10111\nFire Brigade: 015 293 1111\nAmbulance: 10177" 
  },
  { 
    name: "MPUMALANGA", 
    image: "mpumalanga.png", 
    hoverText: "Police: 10111\nFire Brigade: 10177\nAA Assistance: 0861 000 234" 
  },
  { 
    name: "NORTH WEST", 
    image: "northwest.png", 
    hoverText: "Police: 10111\nAmbulance: 10177\nFire Brigade: 10177" 
  },
  { 
    name: "NORTHERN CAPE", 
    image: "northerncape.png", 
    hoverText: "Police: 10111\nFire Brigade: 10177\nAA Assistance: 0861 000 234" 
  },
];

function Helplines() {
  const navigate = useNavigate();

  // Scroll to top — ensures user starts at top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="helplines-page">
      <h1 className="helplines-heading">HELPLINES</h1>
      <p className="helplines-subheading">
        Select what province you are in and find the nearest help
      </p>

      <div className="province-grid">
        {provinces.map((province, index) => (
          <div key={index} className="province-wrapper">
            <div
              className="province-button"
              onClick={() => navigate("/helplinesmap", { state: { province: province.name } })} 
            >
              <img
                src={require(`../Images/Provinces/${province.image}`)}
                alt={province.name}
                className="province-icon"
              />
              <span className="province-name">{province.name}</span>
            </div>

            {/* Show emergency contact numbers */}
            <div className="hover-text">{province.hoverText}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Helplines;

