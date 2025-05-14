import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import "./Profile.css"; // Make sure this file exists and is linked

function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) {
    return <div>Please log in to view your profile</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-left">
        <h1>Your Profile.</h1>
        <p className="user-name">{user.name}</p>
        <p className="user-email">{user.email}</p>
        <button className="logout-button" onClick={handleLogout}>
          Log out
        </button>
      </div>
      <div className="profile-right">
        <div className="image-placeholder"></div>
      </div>
    </div>
  );
}

export default Profile;
