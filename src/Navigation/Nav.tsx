import "./Nav.css";
import React, { useState } from "react";
const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">English Quiz</h1>
        <button className="navbar-toggle" onClick={() => setOpen(!open)}>
          ☰
        </button>
        <ul className={`navbar-menu ${open ? "active" : ""}`}>
          <li>Home</li>
          <li>Quiz</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
