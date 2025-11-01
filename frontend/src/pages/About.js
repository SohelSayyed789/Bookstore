import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook
import "./About.css";
import aboutImg from "../assets/book.png";
import teamImg from "../assets/team.png";

function About() {
  const navigate = useNavigate(); // ✅ Initialize navigation

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-text">
          <h1>
            About <span>MyBookStore</span>
          </h1>
          <p>
            Welcome to <strong>MyBookStore</strong> — your digital gateway to endless
            imagination, knowledge, and inspiration. We believe that books are not just
            paper and ink — they are windows to new worlds, new perspectives, and new
            opportunities.
          </p>
        </div>
        <img src={aboutImg} alt="About books" className="about-image" />
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <h2>📘 Our Mission</h2>
        <p>
          Our mission is simple — to make books accessible, affordable, and enjoyable for
          everyone. Whether you’re a student, a dreamer, or a lifelong learner, our
          collection brings the joy of reading closer to your heart.
        </p>
        <p>
          From timeless classics to the latest bestsellers, we connect readers with stories
          that matter and ideas that change lives.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="about-features">
        <h2>💡 Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>📚 Vast Collection</h3>
            <p>Choose from over 50,000 books across genres, authors, and languages.</p>
          </div>
          <div className="feature-card">
            <h3>🚚 Fast Delivery</h3>
            <p>Get your favorite books delivered to your doorstep in record time.</p>
          </div>
          <div className="feature-card">
            <h3>💸 Affordable Prices</h3>
            <p>Enjoy unbeatable discounts and offers on every order.</p>
          </div>
          <div className="feature-card">
            <h3>❤️ Trusted by Readers</h3>
            <p>Over 1 million happy readers have chosen MyBookStore for their next read.</p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="about-team">
        <h2>👩‍💻 Meet Our Team</h2>
        <img src={teamImg} alt="Our Team" className="team-image" />
        <p>
          We’re a passionate team of book lovers, tech enthusiasts, and dreamers dedicated
          to spreading the love of reading across the globe. Every book you see here is
          chosen with care and delivered with pride.
        </p>
      </section>

      {/* Closing Section */}
      <section className="about-end">
        <h2>Join the Reading Revolution</h2>
        <p>
          Turn every page into an adventure. Start your journey with us today — because
          great stories deserve to be read, not just told.
        </p>
        <button
          className="explore-btn"
          onClick={() => navigate("/books")} // ✅ Navigate to Books.js
        >
          Explore Books
        </button>
      </section>
    </div>
  );
}

export default About;
