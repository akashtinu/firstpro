import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import logo from "./assets/jbn_cakes.jpeg";
import "./home.css";

function Home() {
  return (
    <main className="main-content" id="home">
      {/* HERO */}
      <section className="hero fade-in">
        <div className="hero-text slide-left">
          <span className="hero-badge">✨ Handcrafted in Kanyakumari</span>
          <h1 style={{ color: "rgba(199, 48, 118, 0.95)" }}>JBN Cakes</h1>
          
          <h2>
            Fresh, Handcrafted Designer & Premium Custom Cakes for All Your Special Moments
          </h2>

          <p className="hero-description">
            From birthdays and weddings to intimate celebrations, we bake custom cakes with premium ingredients and artistic detail.
          </p>

          <div className="hero-actions">
            <a href="#cakes" className="btn btn-primary-custom">
              🎂 Explore Cakes
            </a>
            <a
              href="https://www.instagram.com/jbnca_kes/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary-custom"
            >
              <FontAwesomeIcon icon={faInstagram} className="me-1" /> Order on Instagram
            </a>
          </div>

          

        <div className="hero-image slide-right">
          <img src={logo} alt="JBN Cakes logo" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="features fade-in">
        <div className="feature-card">
          <h3>🎂 Handcrafted Cakes</h3>
          <p>Every cake is freshly baked and uniquely designed for your special occasion.</p>
        </div>
        <div className="feature-card">
          <h3>✨ Premium Ingredients</h3>
          <p>Only the finest Belgian chocolate, fresh cream, and rich flavors we trust.</p>
        </div>
        <div className="feature-card">
          <h3>❤️ Made With Passion</h3>
          <p>We bake with passion and precision to bring sweetness and smiles to your events.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;

