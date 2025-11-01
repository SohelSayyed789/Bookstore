import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleBooksClick = () => {
    const user = localStorage.getItem("user"); // check if logged in
    if (user) {
      navigate("/books");
    } else {
      navigate("/login"); // redirect to login if not logged in
    }
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* ✅ Logo Section (online image) */}
        <div className="logo-section" onClick={() => navigate("/")}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
            alt="Bookstore Logo"
            className="logo-img"
          />
          <span className="logo-text">MyBookStore</span>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><button onClick={handleBooksClick} className="nav-link btn-link">Books</button></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Mobile Dropdown */}
        <ul className={isOpen ? "mobile-menu open" : "mobile-menu"}>
          <li><Link to="/" className="mobile-link" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" className="mobile-link" onClick={toggleMenu}>About</Link></li>
          <li><button onClick={handleBooksClick} className="mobile-link">Books</button></li>
          <li><Link to="/contact" className="mobile-link" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
