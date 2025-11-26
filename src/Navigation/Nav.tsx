import React, { useState } from "react";
import "./Nav.css";

const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Pre-Exam English G12</h1>
        <button
          className="navbar-toggle"
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>
        <ul className={`navbar-menu ${open ? "active" : ""}`}>
          <li>Home</li>
          <li>Questions</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
