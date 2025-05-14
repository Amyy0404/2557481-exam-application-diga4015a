import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import "../Styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user, login } = useAuth();

  React.useEffect(() => {
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
      navigate("/profile");
    } else {
      setError("Please enter both email and password");
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
            
            <button type="submit" className="login-btn">Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;