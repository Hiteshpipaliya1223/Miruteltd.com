// src/pages/AboutUsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // ADDED: Import Link
import './AboutUsPage.css'; // Ensure this CSS file exists

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <section className="about-hero-section">
        <div className="hero-content">
          <h1>Welcome to Mirute Ltd.</h1>
          <h2>Crafting Comfort, Elevating Confidence.</h2>
          <p>
            At Mirute Ltd., we believe that true style begins with unparalleled comfort. We are dedicated to providing premium quality,
            comfortable, and stylish seamless push-up bras designed to empower you every day.
          </p>
          <Link to="/shop" className="call-to-action-button">
            Shop Our Collection Now
          </Link>
        </div>
        <div className="hero-image">
          {/* Replace with your actual image */}
          <img src="https://i.imgur.com/your-comfort-image.jpg" alt="Comfort & Confidence" />
        </div>
      </section>

      <section className="our-story-section">
        <div className="story-image">
          {/* Replace with your actual image */}
          <img src="https://i.imgur.com/your-journey-image.jpg" alt="Our Journey" />
        </div>
        <div className="story-content">
          <h2>Our Journey: From Vision to Reality</h2>
          <p>
            Mirute Ltd. began with a simple yet profound vision: to revolutionize everyday intimate wear. Frustrated by the compromise between
            comfort and elegance, our founders set out to create a line of pull-up bras that offer both seamless support and a flattering silhouette
            without sacrificing comfort. Every stitch, every fabric choice, and every design iteration is a testament to our unwavering commitment
            to quality and innovation.
          </p>
          <p>
            We've grown from a passionate idea into a brand trusted by women across the UK, all thanks to our dedication to our customers and our craft.
          </p>
        </div>
      </section>

      <section className="why-choose-us-section">
        <h2>Why Choose Mirute?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon-circle">
              {/* You might use a real icon library here (e.g., Font Awesome) */}
              <img src="https://via.placeholder.com/50/FF69B4/FFFFFF?text=P" alt="Premium Quality" />
            </div>
            <h3>Premium Comfort & Quality</h3>
            <p>Experience the difference of exceptionally soft, breathable fabrics and meticulous craftsmanship designed for all-day wear. Our bras feel like a second skin.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon-circle">
              <img src="https://via.placeholder.com/50/FF69B4/FFFFFF?text=S" alt="Seamless Design" />
            </div>
            <h3>Seamless & Invisible Design</h3>
            <p>Say goodbye to visible lines! Our seamless bras provide a smooth, flawless look under any outfit, enhancing your natural shape beautifully.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon-circle">
              <img src="https://via.placeholder.com/50/FF69B4/FFFFFF?text=C" alt="Confidence Boosting" />
            </div>
            <h3>Confidence-Boosting Fit</h3>
            <p>Designed to lift and support, our push-up styles offer the perfect enhancement, making you feel confident and poised from morning to night.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon-circle">
              <img src="https://via.placeholder.com/50/FF69B4/FFFFFF?text=F" alt="Fit for Every Body" />
            </div>
            <h3>Perfect Fit for Every Body</h3>
            <p>We offer a range of sizes and styles to ensure every woman finds her perfect fit, embracing and celebrating diverse body shapes.</p>
          </div>
        </div>
      </section>

      <section className="our-promise-section">
        <h2>Our Promise to You</h2>
        <p>
          At Mirute Ltd., customer satisfaction is at the heart of everything we do. We are committed to providing you with not just high-quality products,
          but also an exceptional shopping experience. From easy navigation on our site to responsive customer support,
          we're here to ensure you feel valued and confident with every purchase.
        </p>
      </section>

      <section className="call-to-action-section">
        <div className="cta-content">
          <h3>Ready to experience the Mirute difference?</h3>
          <p>Explore our full range of seamless push-up bras designed just for you.</p>
          <Link to="/shop" className="cta-button">
            Shop Our Collection Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;