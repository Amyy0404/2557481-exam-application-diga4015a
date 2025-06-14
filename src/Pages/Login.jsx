import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import "../Styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate(); 
  const { user, login } = useAuth(); // get current user and login function from auth context

  React.useEffect(() => {
    // If already logged in, redirect to profile immediately
    if (user) {
      navigate("/profile");
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    if (email && password) {
      login({
        email,
        name: "Test User",
      });
      navigate("/profile"); // after login, redirect to profile page
    } else {
      setError("Please enter both email and password"); // show error if inputs empty
    }
  };

  return (
    <div className="login-page">
      <div className="login-image"></div>
      
      <div className="login-section">
        <div className="login-content">
          <h1 className="login-heading">Log in.</h1>
          
          <p className="register-prompt">
            Not A Member Yet? <Link to="/register">Register Here</Link>
          </p>
          
          {error && <p className="error">{error}</p>} 
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="inputt-group">
              <label>Email</label>
              <input
                type="email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="inputt-group">
              <label>Password</label>
              <input
                type="password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required
              />
            </div>
            
            <button type="submit" className="login-btn">Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
