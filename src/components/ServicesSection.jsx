// src/components/ServicesSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesSection.css'; // You will create this CSS file next

// Data for the three services
const dummyServices = [
  {
    id: 1,
    title: "Effortless Comfort, Empowering Style",
    description: "Discover our meticulously crafted collection of women's bras, where unparalleled comfort meets sophisticated design. Designed to provide exceptional support and a flawless fit, our bras empower you to feel confident and beautiful, every day.",
    buttonText: "Explore Bras →",
    link: "/bras", // This link will go to your ProductList page (Women's Bras)
    imageUrl: "/images/bras.jpg" // Path to your bras image
  },
  {
    id: 2,
    title: "Nurturing Dreams, Designed with Love",
    description: "Create a serene and safe haven for your little one with our exquisite range of baby beds. Crafted with the utmost care for safety, comfort, and timeless style, our beds provide the perfect foundation for peaceful nights and sweet dreams.",
    buttonText: "View Baby Beds →",
    link: "/baby-beds", // New page for baby beds
    imageUrl: "/images/babybed.jpg" // Path to your babybed image
  },
  {
    id: 3,
    title: "Expert Tailoring Services",
    description: "From precise alterations and custom fittings to bespoke designs and garment repairs, our expert tailoring services ensure your clothing fits flawlessly and reflects your unique style. Revitalize your wardrobe with us.",
    buttonText: "Explore Services →",
    link: "/tailoring-services", // New combined page for tailoring
    imageUrl: "/images/custom-design.jpg" // Path to one of your tailoring images
  }
];

const ServicesSection = () => {
  return (
    <div className="services-section-container">
      <h2 className="section-title">OUR SERVICES & PRODUCTS</h2>
      <div className="service-cards-grid">
        {dummyServices.map(service => (
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