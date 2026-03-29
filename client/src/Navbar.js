import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => navigate("/")}>
        ConfiCoach <span className="navbar-copyright">©</span>
      </div>
      <div className="navbar-links">
        <button
          className={`navbar-link${isActive("/models") ? " active" : ""}`}
          onClick={() => navigate("/models")}
        >
          Models
        </button>
        <span className="navbar-divider">|</span>
        <button
          className={`navbar-link${isActive("/romance-setup") ? " active" : ""}`}
          onClick={() => navigate("/romance-setup")}
        >
          Romance
        </button>
        <button
          className={`navbar-link${isActive("/interview-setup") ? " active" : ""}`}
          onClick={() => navigate("/interview-setup")}
        >
          Interview
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
