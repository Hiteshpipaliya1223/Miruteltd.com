import React from 'react';
import './ProductDisplay.css'; // Make sure your CSS is linked and correct

const ProductDisplay = () => {
  return (
    <div className="product-display-container">
      <h1 className="main-heading">OUR SERVICES & PRODUCTS</h1>

      {/* Optional: Horizontal category navigation (adjust as needed) */}
      <nav className="category-navigation">
        <a href="#bras">Women's Bras</a>
        <a href="#baby-beds">Baby Beds</a>
        <a href="#basic-alterations">Basic Alterations</a>
        <a href="#custom-fitting">Custom Fitting</a>
        <a href="#custom-design">Custom Design</a>
        <a href="#repairs">Repair Services</a>
      </nav>

      <div className="product-grid">

        {/* --- 1. Women's Bras (Product) --- */}
        <div className="product-block" id="bras" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.05), rgba(0,0,0,0.05)), url('/images/bras.jpg')` }}>
            <div className="overlay-content">
                <h2 className="block-title">Effortless Comfort, Empowering Style</h2>
                <p className="block-description">Discover our meticulously crafted collection of women's bras, where unparalleled comfort meets sophisticated design. Designed to provide exceptional support and a flawless fit, our bras empower you to feel confident and beautiful, every day.</p>
                <a href="/products/bra-1" className="block-link">Explore Bras →</a>
            </div>
        </div>

        {/* --- 2. Baby Beds (Product) --- */}
        <div className="product-block" id="baby-beds" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.05), rgba(0,0,0,0.05)), url('/images/babybed.jpg')` }}>
            <div className="overlay-content">
                <h2 className="block-title">Nurturing Dreams, Designed with Love</h2>
                <p className="block-description">Create a serene and safe haven for your little one with our exquisite range of baby beds. Crafted with the utmost care for safety, comfort, and timeless style, our beds provide the perfect foundation for peaceful nights and sweet dreams.</p>
                <a href="/products/babybed-1" className="block-link">View Baby Beds →</a>
            </div>
        </div>

        {/* --- 3. Basic Alterations (Service) --- */}
        <div className="product-block" id="basic-alterations" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.05), rgba(0,0,0,0.05)), url('/images/basic-alterations.jpg')` }}>
            <div className="overlay-content">
                <h2 className="block-title">The Perfect Fit, Every Time</h2>
                <p className="block-description">Achieve impeccable comfort and polish with our swift and precise basic alteration services. Whether it's a hem adjustment or a minor tweak, we ensure your clothes fit you flawlessly, enhancing your confidence effortlessly.</p>
                <a href="/stitching-alterations" className="block-link">Refine Your Fit →</a>
            </div>
        </div>

        {/* --- 4. Custom Fitting (Service) --- */}
        <div className="product-block" id="custom-fitting" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.05), rgba(0,0,0,0.05)), url('/images/custom-fitting.png')` }}> {/* CHECK THIS: Is your file custom-fitting.png or custom-fitting.jpg? */}
            <div className="overlay-content">
                <h2 className="block-title">Tailored to Your Unique Silhouette</h2>
                <p className="block-description">Experience the ultimate in personalized comfort and style with our custom fitting service. We provide meticulous adjustments and expert advice to ensure your garments drape perfectly, celebrating your unique body shape.</p>
                <a href="/stitching-alterations" className="block-link">Book Your Personalized Fitting →</a>
            </div>
        </div>

        {/* --- 5. Custom Designs (Service) --- */}
        <div className="product-block" id="custom-design" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.05), rgba(0,0,0,0.05)), url('/images/custom-design.jpg')` }}>
            <div className="overlay-content">
                <h2 className="block-title">Your Vision, Masterfully Crafted</h2>
                <p className="block-description">Unleash your unique style with our custom design service. From concept to creation, we work closely with you to transform your fashion dreams into bespoke garments that fit your personality and flatter your form perfectly.</p>
                <a href="/stitching-alterations" className="block-link">Begin Your Custom Creation →</a>
            </div>
        </div>

        {/* --- 6. Repair Services (Service) --- */}
        <div className="product-block" id="repairs" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.05), rgba(0,0,0,0.05)), url('/images/repair-services.jpg')` }}>
            <div className="overlay-content">
                <h2 className="block-title">Revitalize Your Favorite Garments</h2>
                <p className="block-description">Don't say goodbye to beloved clothing. Our expert repair services breathe new life into your cherished pieces, mending tears, replacing fastenings, and restoring them to their original glory with precision and care.</p>
                <a href="/stitching-alterations" className="block-link">Restore Your Wardrobe →</a>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDisplay;