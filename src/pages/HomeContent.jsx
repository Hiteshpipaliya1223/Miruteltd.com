// src/pages/HomeContent.jsx (UPDATED with Material-UI)
import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProductList from '../pages/ProductList'; // Corrected path to pages/ProductList
import BenefitsSection from '../components/BenefitsSection';

// Import Material-UI components
import { Container, Typography } from '@mui/material';

const HomeContent = () => {
  return (
    // Use Material-UI Container for consistent page width and centering
    // The Container will handle responsive padding as well.
    <Container maxWidth="lg">
      <HeroSection />
      <ServicesSection />
      
      {/* "Our Latest Collection" heading converted to Material-UI Typography */}
      <Typography
        variant="h2" // Using h2 variant from your theme
        component="h2" // Render as an h2 HTML element for semantic correctness
        align="center" // Equivalent to textAlign: 'center'
        color="secondary.main" // Uses your theme's secondary-dark color
        sx={{
          my: { xs: 6, md: 8 }, // Margin top/bottom: 6 units (48px) on xs, 8 units (64px) on md+
          mb: { xs: 3, md: 4 }, // Margin bottom: 3 units (24px) on xs, 4 units (32px) on md+
          fontWeight: 700, // Explicitly set font weight
        }}
      >
        Our Latest Collection
      </Typography>
      
      <ProductList /> {/* ProductList is already Material-UI converted */}
      <BenefitsSection />
    </Container>
  );
};

export default HomeContent;