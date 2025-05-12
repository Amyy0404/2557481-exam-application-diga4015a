import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Search from "./Pages/Search";
import Discover from "./Pages/Discover";
import Deadzones from "./Pages/Deadzones";
import Helplines from "./Pages/Helplines";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/deadzones" element={<Deadzones />} />
        <Route path="/helplines" element={<Helplines />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;

