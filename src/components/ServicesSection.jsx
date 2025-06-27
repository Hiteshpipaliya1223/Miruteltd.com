// src/components/ServicesSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesSection.css'; // Ensure this CSS file exists and has your styling

// Data for the three services, updated with precise PUBLIC image paths and extensions
const servicesData = [
  {
    id: 1,
    title: "Ultimate Comfort, Perfect Fit Bras",
    description: "Explore our curated collection of women's bras, crafted for unparalleled comfort and a flawless fit. Our designs provide exceptional support, empowering you to feel confident and beautiful every day.",
    buttonText: "Explore Bras →",
    link: "/bras", // This link will go to your ProductList page filtered for Bras
    imageUrl: "/images/purple_bra_side2.png" // Confirmed: .jpg extension
  },
  {
    id: 2,
    title: "Safe Havens for Little Ones: Baby Beds",
    description: "Discover our exquisite range of baby beds, designed to create a serene and safe haven. Each bed is crafted with utmost care for safety, comfort, and timeless style, providing the perfect foundation for peaceful nights.",
    buttonText: "View Baby Beds →",
    link: "/baby-beds", // Link to your new Baby Beds page
    imageUrl: "/images/baby-beds.png" // Confirmed: .png extension
  },
  {
    id: 3,
    title: "Tailoring & Alteration Services",
    description: "Experience our expert tailoring and alteration services, from precise custom fittings to garment repairs. We ensure your clothing fits flawlessly and reflects your unique style, helping you revitalize your entire wardrobe.",
    buttonText: "Explore Services →",
    link: "/tailoring-services", // Link to your new combined tailoring page
    imageUrl: "/images/repair-services.png" // Confirmed: .png extension
  }
];

const ServicesSection = () => {
  return (
    <div className="services-section-container">
      <h2 className="section-title">OUR SERVICES & PRODUCTS</h2>
      <div className="service-cards-grid">
        {servicesData.map(service => (
          <div key={service.id} className="service-card">
            <img src={service.imageUrl} alt={service.title} className="service-card-image" />
            <div className="service-card-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.link} className="service-card-button">
                {service.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;