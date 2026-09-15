import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Products.css";

import img1 from "./assets/brow.webp";
import img2 from "./assets/nut.webp";
import img3 from "./assets/tri.webp";
import img4 from "./assets/vanilla.webp";
import img5 from "./assets/rasamalai.avif";
import img6 from "./assets/chocolate.jpeg";
import img7 from "./assets/red velvet.avif";
import img8 from "./assets/tender coconut.webp";
import img9 from "./assets/black.webp";
import img10 from "./assets/white.webp";
import img11 from "./assets/choco truffle.avif";
import img12 from "./assets/honey.webp";
import img13 from "./assets/Butterscotch.jpeg";
import img14 from "./assets/rose.jpg";
import img15 from "./assets/Blueberry.webp";

function Products() {
  const [activeItem, setActiveItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const cakes = [
    { name: "Vanilla Cake", price: "₹500 / kg", category: "cakes", image: img4, tag: "Popular" },
    { name: "Rasamalai Cake", price: "₹600 / kg", category: "cakes", image: img5, tag: "Bestseller" },
    { name: "Chocolate Cake", price: "₹600 / kg", category: "cakes", image: img6 },
    { name: "Red Velvet Cake", price: "₹550 / kg", category: "cakes", image: img7, tag: "Trending" },
    { name: "Tender Coconut Cake", price: "₹650 / kg", category: "cakes", image: img8, tag: "Special" },
    { name: "Black Forest Cake", price: "₹550 / kg", category: "cakes", image: img9 },
    { name: "White Forest Cake", price: "₹550 / kg", category: "cakes", image: img10 },
    { name: "Choco Truffle Cake", price: "₹600 / kg", category: "cakes", image: img11, tag: "Bestseller" },
    { name: "Honey Cake", price: "₹550 / kg", category: "cakes", image: img12 },
    { name: "Butterscotch Cake", price: "₹500 / kg", category: "cakes", image: img13 },
    { name: "Rosemilk Cake", price: "₹550 / kg", category: "cakes", image: img14, tag: "Special" },
    { name: "Blueberry Cake", price: "₹550 / kg", category: "cakes", image: img15 },
  ];

  const brownies = [
    { name: "Classic Brownie", price: "₹600", category: "brownies", image: img1 },
    { name: "Nuts Brownie", price: "₹700", category: "brownies", image: img2, tag: "Bestseller" },
    { name: "Triple Chocolate Brownie", price: "₹700", category: "brownies", image: img3, tag: "Favorite" },
  ];

  const allItems = [...cakes, ...brownies];

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1 }
    );
    items.forEach(item => observer.observe(item));
  }, [activeCategory, searchQuery]);

  const filteredItems = allItems.filter(item => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getInstagramOrderLink = () => {
    return `https://www.instagram.com/jbnca_kes/`;
  };

  const renderCard = (item, index) => (
    <div className="cake-card reveal" key={index}>
      {item.tag && <span className="badge">{item.tag}</span>}

      <div className="img-container" onClick={() => setActiveItem(item)}>
        <img src={item.image} alt={item.name} />
        <div className="overlay">
          <span>Click to View</span>
        </div>
      </div>

      <div className="card-info">
        <h3>{item.name}</h3>
        {/* <p className="price">{item.price}</p> */}
        <div className="card-actions"  style={{marginTop:"10px"}}>
          <a
            href={getInstagramOrderLink(item.name)}
            target="_blank"
            rel="noreferrer"
            className="btn-order-ig"
          >
            <FontAwesomeIcon icon={faInstagram} className="me-1" /> Order on Instagram
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section className="products" id="cakes">
      <h2 className="section-title" style={{ color: "rgba(199, 48, 118, 0.95)" }}>
        Our Delicious Creations
      </h2>
      <p className="section-subtitle text-center">
        Explore our handcrafted range of designer cakes and rich chocolate brownies
      </p>

      {/* FILTER & SEARCH CONTROL BAR */}
      <div className="catalog-controls">
        <div className="category-tabs">
          <button
            className={`tab-btn ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            All 
          </button>
          <button
            className={`tab-btn ${activeCategory === "cakes" ? "active" : ""}`}
            onClick={() => setActiveCategory("cakes")}
          >
            🎂 Cakes
          </button>
          <button
            className={`tab-btn ${activeCategory === "brownies" ? "active" : ""}`}
            onClick={() => setActiveCategory("brownies")}
          >
            🍫 Brownies
          </button>
        </div>

        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            placeholder="Search cake flavor..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* PRODUCT GRID */}
      {filteredItems.length > 0 ? (
        <div className="cake-grid">{filteredItems.map(renderCard)}</div>
      ) : (
        <div className="no-results text-center py-5">
          <p>No cakes found matching "{searchQuery}".</p>
        </div>
      )}

      {/* ENHANCED LIGHTBOX MODAL */}
      {activeItem && (
        <div className="modal-backdrop" onClick={() => setActiveItem(null)}>
          <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveItem(null)}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <img src={activeItem.image} alt={activeItem.name} className="modal-img" />
            <div className="modal-details">
              <h3>{activeItem.name}</h3>
              <p className="modal-price">{activeItem.price}</p>
              <p className="modal-desc">
                Handcrafted with fresh, premium ingredients. Customized according to your preferred size and design requirements.
              </p>
              <div className="modal-actions">
                <a
                  href={getInstagramOrderLink(activeItem.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-modal-ig"
                >
                  <FontAwesomeIcon icon={faInstagram} className="me-1" /> Order on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Products;
