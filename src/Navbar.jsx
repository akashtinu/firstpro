import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
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
              {["Home", "Cakes", "Brownies", "About", "Reviews"].map((item) => (
                <li className="nav-item" key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="nav-link"
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                <a
                  href="https://www.instagram.com/jbnca_kes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-order-btn"
                  onClick={() => setOpen(false)}
                >
                  Order Now
                </a>
              </li>
            </ul>
          </div>

        </div>
      </nav>

      {/* Floating Action Buttons */}
      <div className="floating-buttons-container">
        <a
          href="https://wa.me/?text=Hi%20JBN%20Cakes,%20I%20want%20to%20inquire%20about%20ordering%20a%20custom%20cake!"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn floating-whatsapp"
          title="Chat on WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="floating-icon" />
        </a>
        <a
          href="https://www.instagram.com/jbnca_kes/"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn floating-instagram"
          title="Follow on Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} className="floating-icon" />
        </a>
      </div>
    </>
  );
}

export default Navbar;
