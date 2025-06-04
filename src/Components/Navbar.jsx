import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import "../Styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);
  const isSearchPage = location.pathname === "/search";

  const handleAuthButtonClick = () => {
    navigate(user ? "/profile" : "/login");
    setMenuOpen(false);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${isSearchPage ? "search-navbar" : ""}`}>
      <div className="navbar-left">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button
            className={!isActive("/") ? "faded" : ""}
            onClick={() => handleNavigate("/")}
          >
            HOME
          </button>
          <button
            className={!isActive("/search") ? "faded" : ""}
            onClick={() => handleNavigate("/search")}
          >
            SEARCH
          </button>
          <button
            className={!isActive("/discover") ? "faded" : ""}
            onClick={() => handleNavigate("/discover")}
          >
            DISCOVER
          </button>
          <button
            className={!isActive("/deadzones") ? "faded" : ""}
            onClick={() => handleNavigate("/deadzones")}
          >
            DEADZONES
          </button>
          <button
            className={!isActive("/helplines") ? "faded" : ""}
            onClick={() => handleNavigate("/helplines")}
          >
            HELPLINES
          </button>
        </div>
      </div>

      <div className="navbar-right">
        <button
          className={`about-button ${!isActive("/about") ? "faded" : ""}`}
          onClick={() => handleNavigate("/about")}
        >
          ABOUT
        </button>
         <button
          className={`about-button ${!isActive("/favourites") ? "faded" : ""}`}
          onClick={() => handleNavigate("/favourites")}
        >
          FAVOURITES
        </button>

        <div className="login-button-container">
          <button className="login-button" onClick={handleAuthButtonClick}></button>
          <span className="login-label">{user ? "PROFILE" : "LOGIN"}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
