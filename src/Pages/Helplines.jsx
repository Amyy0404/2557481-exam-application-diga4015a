import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import "../Styles/Helplines.css";

const provinces = [
  { name: "GAUTENG", image: "gauteng.png", hoverText: "Help in Gauteng" },
  { name: "WESTERN CAPE", image: "westerncape.png", hoverText: "Help in Western Cape" },
  { name: "KWAZULU-NATAL", image: "kzn.png", hoverText: "Help in KZN" },
  { name: "EASTERN CAPE", image: "easterncape.png", hoverText: "Help in Eastern Cape" },
  { name: "FREE STATE", image: "freestate.png", hoverText: "Help in Free State" },
  { name: "LIMPOPO", image: "limpopo.png", hoverText: "Help in Limpopo" },
  { name: "MPUMALANGA", image: "mpumalanga.png", hoverText: "Help in Mpumalanga" },
  { name: "NORTH WEST", image: "northwest.png", hoverText: "Help in North West" },
  { name: "NORTHERN CAPE", image: "northerncape.png", hoverText: "Help in Northern Cape" },
];

function Helplines() {
  const navigate = useNavigate();

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
    <div className="hover-text">{province.hoverText}</div>
  </div>
))}

      </div>
    </div>
  );
}

export default Helplines;
