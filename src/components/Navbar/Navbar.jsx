import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Shalvin.
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse justify-content-end ${
              isMenuOpen ? "show" : ""
            }`}
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className="nav-link">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Full-Screen Menu */}
      {isMenuOpen && (
        <div className="fullscreen-menu">
          <button
            className="close-button"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            &times;
          </button>
          <ul className="fullscreen-menu-list">
            <li className="fullscreen-menu-item">
              <Link
                to="/"
                className="fullscreen-menu-link"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li className="fullscreen-menu-item">
              <Link
                to="/about"
                className="fullscreen-menu-link"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li className="fullscreen-menu-item">
              <Link
                to="/skills"
                className="fullscreen-menu-link"
                onClick={toggleMenu}
              >
                Skills
              </Link>
            </li>
            <li className="fullscreen-menu-item">
              <Link
                to="/portfolio"
                className="fullscreen-menu-link"
                onClick={toggleMenu}
              >
                Portfolio
              </Link>
            </li>
            <li className="fullscreen-menu-item">
              <Link
                to="/contact"
                className="fullscreen-menu-link"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
