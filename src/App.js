// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/CartContext';

// Material-UI Theme imports
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

// Material-UI Box for layout
import { Box } from '@mui/material';

import Header from "./components/Header";
import PromotionBanner from "./components/PromotionBanner";
import Footer from "./components/Footer";

// Import all your pages and components
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import FAQPage from "./pages/FAQPage";
import BlogPage from "./pages/BlogPage";
import AuthPages from "./pages/AuthPages";
import CartPage from "./pages/CartPage";
import ProductList from "./pages/ProductList";
import ProductDetailPage from "./pages/ProductDetailPage";
import StitchingAlterationsPage from "./pages/StitchingAlterationsPage";
import CheckoutPage from "./pages/CheckoutPage";

// NEW/UPDATED IMPORTS FOR SIMPLIFIED SERVICES
import BabyBedsPage from './pages/BabyBedsPage';
import TailoringServicesPage from './pages/TailoringServicesPage';

// Import the HomeContent component
import HomeContent from './pages/HomeContent';

import './index.css'; // Keep this for any global overrides if needed, but ensure it doesn't conflict.

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline applies global CSS resets and theme defaults */}
      <CssBaseline />
      <Router>
        <CartProvider>
          {/* Main container to ensure content pushes footer down and background extends */}
          {/* EXPLICITLY SETTING BACKGROUND COLOR HERE FOR THE ENTIRE APP CONTAINER */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
              backgroundColor: 'background.default', // <-- THIS IS THE KEY TO THE FULL PAGE BACKGROUND
            }}
          >
            <Header />
            <PromotionBanner />

            {/* Main content area, flexGrow to take available space */}
            <Box
              component="main"
              sx={{
                flexGrow: 1, // This makes the main content area expand to fill available vertical space
                padding: { xs: '20px 0', sm: '30px 0' },
                // DO NOT set backgroundColor here again, as it's handled by the parent Box
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <Routes>
                <Route path="/" element={<HomeContent />} />
                <Route path="/shop" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetailPage />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/contact-us" element={<ContactUsPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/register" element={<AuthPages defaultTab="register" />} />
                <Route path="/sign-in" element={<AuthPages defaultTab="signIn" />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/stitching-alterations" element={<StitchingAlterationsPage />} />
                <Route path="/bras" element={<ProductList />} />
                <Route path="/baby-beds" element={<BabyBedsPage />} />
                <Route path="/tailoring-services" element={<TailoringServicesPage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="*" element={<h1>404: Page Not Found</h1>} />
              </Routes>
            </Box>

            <Footer />
          </Box>
        </CartProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;