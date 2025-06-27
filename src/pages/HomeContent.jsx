// src/pages/HomeContent.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProductList from '../components/ProductList'; // RE-ADDED: Import ProductList
import BenefitsSection from '../components/BenefitsSection';

const HomeContent = () => {
  return (
    <> {/* Use a React Fragment to group multiple elements */}
      <HeroSection />
      <ServicesSection />
      {/* RE-ADDED: "Our Latest Collection" heading and ProductList */}
      <h2 style={{ textAlign: 'center', margin: '60px 0 30px 0', fontSize: '3em', color: 'var(--secondary-dark)', fontWeight: '700' }}>Our Latest Collection</h2>
      <ProductList />
      <BenefitsSection />
    </>
  );
};

export default HomeContent;
