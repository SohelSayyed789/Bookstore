import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBookReader, FaStar, FaTruck, FaTags } from "react-icons/fa";
import studentImg from "../assets/student.png";

function Home() {
  const navigate = useNavigate();

 const handleShopNow = () => {
  navigate("/login");
};


  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-left">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to <span>MyBookStore</span>
          </motion.h1>
          <p>
            Discover stories that inspire and knowledge that empowers.  
            Explore our handpicked collection — where every page opens a new world.
          </p>
          <motion.button
            className="shop-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShopNow}
          >
            Shop Now
          </motion.button>
        </div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={studentImg} alt="Student" className="student-img" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-card">
          <FaBookReader className="feature-icon" />
          <h3>Vast Collection</h3>
          <p>Thousands of books across all genres — from classics to the latest bestsellers.</p>
        </div>
        <div className="feature-card">
          <FaTruck className="feature-icon" />
          <h3>Fast Delivery</h3>
          <p>Get your favorite books delivered to your doorstep quickly and safely.</p>
        </div>
        <div className="feature-card">
          <FaTags className="feature-icon" />
          <h3>Affordable Prices</h3>
          <p>Big discounts on every order so your reading habit never stops.</p>
        </div>
        <div className="feature-card">
          <FaStar className="feature-icon" />
          <h3>Trusted by Readers</h3>
          <p>Over 1 million happy readers around the world trust MyBookStore.</p>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="featured-section">
        <h2>✨ Featured Books</h2>
        <div className="featured-grid">
          {[
            { title: "The Alchemist", price: "₹499", img: "https://m.media-amazon.com/images/I/71aFt4+OTOL._SY466_.jpg" },
            { title: "Atomic Habits", price: "₹399", img: "https://m.media-amazon.com/images/I/91bYsX41DVL._SY466_.jpg" },
            { title: "Ikigai", price: "₹299", img: "https://m.media-amazon.com/images/I/814L+vq01mL._SY466_.jpg" },
            { title: "Rich Dad Poor Dad", price: "₹350", img: "https://m.media-amazon.com/images/I/81bsw6fnUiL._SY466_.jpg" },
          ].map((book, index) => (
            <motion.div
              key={index}
              className="book-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img src={book.img} alt={book.title} />
              <h4>{book.title}</h4>
              <p>{book.price}</p>
              <div className="book-actions">
                <button className="buy-btn">Buy Now</button>
                <button className="cart-btn">Add to Cart</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>📖 Begin Your Reading Journey Today</h2>
        <p>
          Join millions of book lovers who are turning pages every day.  
          Get started now and make reading your daily habit.
        </p>
        <button onClick={handleShopNow} className="cta-btn">
          Explore Books
        </button>
      </section>
    </div>
  );
}

export default Home;
