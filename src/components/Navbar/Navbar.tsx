import React, { useState, useEffect } from "react";
import "./Navbar.css"; 
import { Link } from "react-router-dom";
import GLLogo from "../../assets/gloft-logo.svg";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  let lastScrollY = window.scrollY;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsNavbarVisible(false);
    } else {
      setIsNavbarVisible(true);
    }
    setIsScrolled(currentScrollY > 0);
    lastScrollY = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""} ${
        isNavbarVisible ? "visible" : "hidden"
      }`}
    >
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="logo">
          <img src={GLLogo} alt="Logo" />
          <h1>garden loft</h1>
        </div>
      </Link>
      <div className={`menu-web ${isMenuOpen ? "open" : ""}`} id="menu-web">
        <Link to="/faq" style={{ textDecoration: "none" }}>
          <p>About</p>
        </Link>
        <Link to="/faq" style={{ textDecoration: "none" }}>
          <p>Backyard Suites</p>
        </Link>
        <Link to="/faq" style={{ textDecoration: "none" }}>
          <p>Villages</p>
        </Link>
        <Link to="/faq" style={{ textDecoration: "none" }}>
          <p>Atrium House</p>
        </Link>
        <Link to="/faq" style={{ textDecoration: "none" }}>
          <p>FAQ</p>
        </Link>
        <div className="button-group">
          <Link to="/tour" style={{ textDecoration: "none" }}>
            <div className="button3">
              <a href="#our-units">Book a Tour</a>
            </div>
          </Link>
          <Link to="/tour" style={{ textDecoration: "none" }}>
            <div className="button3">
              <a href="#our-units">Contact Us</a>
            </div>
          </Link>
        </div>
      </div>
      <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`} id="hamburger-menu" onClick={toggleMenu}>
        <span className={`hamburger2 ${isScrolled ? "scrolled" : ""} ${isNavbarVisible ? "visible" : "hidden"}`}></span>
        <span className={`hamburger ${isScrolled ? "scrolled" : ""} ${isNavbarVisible ? "visible" : "hidden"}`}></span>
        <span className={`hamburger2 ${isScrolled ? "scrolled" : ""} ${isNavbarVisible ? "visible" : "hidden"}`}></span>
        
       
      </div>
    </nav>
  );
};

export default Navbar;
