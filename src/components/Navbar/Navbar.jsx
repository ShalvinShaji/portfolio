import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showMenuItems, setShowMenuItems] = useState(false);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setMenuOpen(true);
      setShowMenuItems(false);
      setTimeout(() => setShowMenuItems(true), 300);
    } else {
      setShowMenuItems(false);
      setTimeout(() => setMenuOpen(false), 300);
    }
  };

  return (
    <nav className="navbar fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand logo-box">
          S
        </Link>

        <button
          className={`custom-menu-button ${isMenuOpen ? "open" : ""}`}
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="menu-line top-line"></span>
          <span className="menu-line bottom-line"></span>
          <span className="menu-line top-line"></span>
        </button>

        <div className={`fullscreen-menu ${isMenuOpen ? "show" : ""}`}>
          {showMenuItems && (
            <ul className="fullscreen-menu-list">
              {["Home", "Portfolio", "Blog"].map((item, index) => (
                <li
                  className="fullscreen-menu-item"
                  style={{ animationDelay: `${index * 0.1}s` }} // Delay based on index
                  key={item}
                >
                  <Link
                    to={
                      item.toLowerCase() === "home"
                        ? "/"
                        : `/${item.toLowerCase()}`
                    }
                    className="fullscreen-menu-link"
                    onClick={toggleMenu}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
