// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/CartContext';

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import PromotionBanner from "./components/PromotionBanner";
import Footer from "./components/Footer";

// Import all your pages and components
// Removed the problematic 'HomePage' import as it was causing a Module not found error
// import HomePage from "./pages/HomePage"; // This line is now removed or commented out

import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import FAQPage from "./pages/FAQPage";
import BlogPage from "./pages/BlogPage";
import AuthPages from "./pages/AuthPages";
import CartPage from "./pages/CartPage";
import ProductList from "./components/ProductList"; // Your product listing component
import ProductDetailPage from "./pages/ProductDetailPage";
import StitchingAlterationsPage from "./pages/StitchingAlterationsPage";
import CheckoutPage from "./pages/CheckoutPage"; // Your new CheckoutPage

// --- NEW/UPDATED IMPORTS FOR SIMPLIFIED SERVICES ---
import BabyBedsPage from './pages/BabyBedsPage';
import TailoringServicesPage from './pages/TailoringServicesPage';

// Import the new HomeContent component that groups homepage sections (if you use it)
import HomeContent from './pages/HomeContent';

import './index.css'; // Your global styles

function App() {
  // Basic styling for the main content area to provide some spacing
  // This style object is used directly on the <main> tag below
  const mainContentStyles = {
    flexGrow: 1, // Allows content to grow and push footer down
    padding: '30px 0', // Add some padding top/bottom
    backgroundColor: '#f8f8f8', // Subtle light gray background to fill empty space
    minHeight: 'calc(100vh - var(--header-height, 80px) - var(--footer-height, 200px))', // Adjust heights as needed
    display: 'flex', // Use flex to center content
    flexDirection: 'column',
    alignItems: 'center', // Center horizontally
    justifyContent: 'flex-start', // Align to start vertically
  };

  return (
    <CartProvider>
      <Router>
        <div style={appStyles.appContainer}>
          <Header />
          <Navigation />
          <PromotionBanner />

          <main style={mainContentStyles}> {/* IMPORTANT: Applying mainContentStyles directly here */}
            <Routes>
              {/* The root path now directly renders the HomeContent component */}
              <Route path="/" element={<HomeContent />} />

              {/* Add the /shop route here to point to your ProductList component */}
              <Route path="/shop" element={<ProductList />} />

              {/* Other routes */}
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/products" element={<ProductList />} /> {/* Generic products page */}
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/register" element={<AuthPages defaultTab="register" />} />
              <Route path="/sign-in" element={<AuthPages defaultTab="signIn" />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} /> {/* The Checkout Page route */}
              <Route path="/stitching-alterations" element={<StitchingAlterationsPage />} />

              {/* Specific service pages */}
              <Route path="/bras" element={<ProductList />} /> {/* Example category route */}
              <Route path="/baby-beds" element={<BabyBedsPage />} />
              <Route path="/tailoring-services" element={<TailoringServicesPage />} />

              {/* About Us Page - Correctly placed before catch-all */}
              <Route path="/about-us" element={<AboutUsPage />} />

              {/* Catch-all for undefined routes */}
              <Route path="*" element={<h1>404: Page Not Found</h1>} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

const appStyles = {
  appContainer: {
    fontFamily: 'Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
    color: 'var(--text-color)',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    backgroundColor: 'var(--light-bg)',
    overflowX: 'hidden',
  },
  // Removed 'mainContent' property from appStyles, as mainContentStyles is used directly.
  // This fixes the ESLint warning: 'mainContentStyles' is assigned a value but never used
};

export default App;