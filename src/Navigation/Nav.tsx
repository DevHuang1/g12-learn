import React, { useState } from "react";
import "./Nav.css";

const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

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
          <li>Initial Letters</li>
          <li onClick={() => setShowPopup(true)}>About</li>
        </ul>
      </div>
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h3>About This App</h3>
            <p>
              This app is created by Sitt. The aim is to provide free-learning
              platform for students who can only learn through Internet.
              <br />
              Source of questions: Internet, Textbook and AI
            </p>{" "}
            <button onClick={() => setShowPopup(false)}>Close</button>{" "}
          </div>{" "}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
