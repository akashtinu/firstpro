import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import logo from "./assets/jbn.png";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top pink-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container d-flex justify-content-between align-items-center">

          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} alt="JBN Cakes" className="navbar-logo" />
          </a>

          <button
            className="navbar-toggler text-white border-0"
            onClick={() => setOpen(!open)}
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} size="lg" />
          </button>

          <div className={`navbar-collapse ${open ? "open" : ""}`}>
            <ul className="navbar-nav ms-auto align-items-center text-center">
              <li className="nav-item">
                <a href="#home" className="nav-link" onClick={() => setOpen(false)}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#cakes" className="nav-link" onClick={() => setOpen(false)}>
                  Cakes & Brownies
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link" onClick={() => setOpen(false)}>
                  About
                </a>
              </li>
              {/* <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                <a
                  href="https://www.instagram.com/jbnca_kes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-order-btn"
                  onClick={() => setOpen(false)}
                >
                  Order Now
                </a>
              </li> */}
            </ul>
          </div>

        </div>
      </nav>

      {/* Floating Instagram */}
      <a
        href="https://www.instagram.com/jbnca_kes/"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-instagram"
        title="Follow on Instagram"
      >
        <FontAwesomeIcon icon={faInstagram} bounce className="floating-instagram-icon" />
      </a>
    </>
  );
}

export default Navbar;
