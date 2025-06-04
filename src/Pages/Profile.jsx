import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import "../Styles/Profile.css"; 

function Profile() {
  // Get user data and logout function 
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // If no user is logged in, show prompt instead of profile
  if (!user) {
    return <div>Please log in to view your profile</div>;
  }

  // Render profile info with name, email, and logout button
  return (
    <div className="profile-wrapper">
      <div className="profile-info">
        <h1>Your Profile.</h1>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <button onClick={handleLogout}>Log out</button>
      </div>
      <div className="image-placeholder"></div>
    </div>
  );
}

export default Profile;

