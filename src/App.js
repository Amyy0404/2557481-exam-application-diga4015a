import React from "react";
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import Search from "./Pages/Search";
import Discover from "./Pages/Discover";
import Deadzones from "./Pages/Deadzones";
import Helplines from "./Pages/Helplines";
import HelplinesMap from "./Pages/HelplinesMap";
import Favourites from "./Pages/Favourites";

import { AuthProvider } from "./Auth/AuthContext";// Wrapping everything in Auth context to manage login state  

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/deadzones" element={<Deadzones />} />
          <Route path="/helplines" element={<Helplines />} />
          <Route path="/helplinesmap" element={<HelplinesMap />} />
          <Route path="/favourites" element={<Favourites />} />
          
          <Route path="*" element={<h1>404 - Page Not Found</h1>} /> {/* Fallback for unknown routes */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

