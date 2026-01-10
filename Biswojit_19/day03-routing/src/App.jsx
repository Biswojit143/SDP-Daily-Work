import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import "./index.css";

const App = () => {
  return (
      <div>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
  );
};

export default App;
