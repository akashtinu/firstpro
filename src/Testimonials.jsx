import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "./Testimonials.css";

function Testimonials() {
  const reviews = [
    {
      name: "Priya S.",
      location: "Kanyakumari",
      text: "The Rasamalai Cake for my daughter's birthday was absolutely phenomenal! Soft, fresh, and not overly sweet. Everyone loved it!",
      rating: 5,
    },
    {
      name: "Anish Kumar",
      location: "Nagercoil",
      text: "Best Triple Chocolate Brownie I've ever had in Kanyakumari. The texture and rich chocolate flavor are top notch!",
      rating: 5,
    },
    {
      name: "Divya & Rahul",
      location: "Kanyakumari",
      text: "We ordered a custom 2-tier wedding cake. JBN Cakes delivered beyond our expectations! Beautiful design and divine taste.",
      rating: 5,
    },
  ];

  return (
    <section className="testimonials-section fade-in" id="reviews">
      <div className="container">
        <h2 className="section-title text-center" style={{ color: "rgba(199, 48, 118, 0.95)" }}>
          Loved By Our Customers
        </h2>
        <p className="section-subtitle text-center">
          Here is what people in Kanyakumari say about JBN Cakes
        </p>

        <div className="testimonials-grid">
          {reviews.map((review, idx) => (
            <div className="testimonial-card" key={idx}>
              <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">
                <h4>{review.name}</h4>
                <span>{review.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
