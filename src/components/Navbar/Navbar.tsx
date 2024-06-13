import React, { useState, useEffect } from "react";
import "./Navbar.css"; 
import { Link } from "react-router-dom";
import GLLogo from "../../assets/gl-john-logo.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  let lastScrollY = window.scrollY;

  const scrollToTop = () => {
    window.scrollTo(0, 0)
}


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
      <Link onClick={scrollToTop} to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="logo">
          <img src={GLLogo} alt="Logo" />
          {/* <h1>garden loft</h1> */}
        </div>
      </Link>
      <div className={`menu-web ${isMenuOpen ? "open" : ""}`} id="menu-web">
        <Link onClick={scrollToTop} to="/" style={{ textDecoration: "none" }}>
          <p>Backyard Suites</p>
        </Link>
        <Link onClick={scrollToTop} to="/village" style={{ textDecoration: "none" }}>
          <p>Villages</p>
        </Link>
        <Link onClick={scrollToTop} to="/atrium" style={{ textDecoration: "none" }}>
          <p>Atrium House</p>
        </Link>
        <Link onClick={scrollToTop} to="/about" style={{ textDecoration: "none" }}>
          <p>About</p>
        </Link>
        
        <Link onClick={scrollToTop} to="/about" style={{ textDecoration: "none" }}>
          <p>Contact</p>
        </Link>
        <Link onClick={scrollToTop} to="/faq" style={{ textDecoration: "none" }}>
          <p>FAQ</p>
        </Link>
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
