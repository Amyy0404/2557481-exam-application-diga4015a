import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import "../Styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleAuthButtonClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <button onClick={() => navigate("/")}>HOME</button>
        <button onClick={() => navigate("/about")}>ABOUT</button>
      </div>

      <div className="login-button-container">
        <button className="login-button" onClick={handleAuthButtonClick}></button>
        <span className="login-label">{user ? "PROFILE" : "LOGIN"}</span>
      </div>
    </nav>
  );
}

export default Navbar;

