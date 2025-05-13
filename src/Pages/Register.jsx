import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import { Link } from "react-router-dom";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && email && password) {
      login({
        email,
        name: `${firstName} ${lastName}`,
      });
      navigate("/profile");
    } else {
      setError("Please fill in all fields");
    }
  };

  return (
    <div className="register-page">
      <div className="register-content">
        <p className="join-text">JOIN FOR FREE</p>
        <h1 className="create-account">Create new account.</h1>
        
        <p className="login-prompt">
          Already A Member? <Link to="/login">Log In</Link>
        </p>
        
        {error && <p className="error">{error}</p>}
        
        <form onSubmit={handleSubmit} className="register-form">
          <div className="name-fields">
            <div className="input-group">
              <label>First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="create-account-btn">Create account</button>
        </form>
      </div>
    </div>
  );
}

export default Register;