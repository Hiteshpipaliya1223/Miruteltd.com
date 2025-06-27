// src/pages/HomeContent.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProductList from '../components/ProductList';
import BenefitsSection from '../components/BenefitsSection'; // Ensure this component is imported here

const HomeContent = () => {
  return (
    <> {/* Use a React Fragment to group multiple elements */}
      <HeroSection />
      <ServicesSection />
      {/* Assuming you want "Our Latest Collection" heading here on the homepage */}
      {/* You might want to move this heading into ProductList.jsx if it's always tied to it */}
      <h2 style={{ textAlign: 'center', margin: '60px 0 30px 0', fontSize: '3em', color: 'var(--secondary-dark)', fontWeight: '700' }}>Our Latest Collection</h2>
      <ProductList />
      <BenefitsSection />
    </>
  );
};

export default HomeContent;
