import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

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
      <h1>Your Profile</h1>
      <div className="profile-details">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;