import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-links">
        <button onClick={() => navigate("/")}>HOME</button>
        <button onClick={() => navigate("/about")}>ABOUT</button>
      </div>
      <button className="login-button" onClick={() => navigate("/login")}></button>
    </nav>
  );
}

export default Navbar;
