// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/CartContext';

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import PromotionBanner from "./components/PromotionBanner";
import Footer from "./components/Footer";

// Import all your pages and components
import ContactUsPage from "./pages/ContactUsPage";
import FAQPage from "./pages/FAQPage";
import BlogPage from "./pages/BlogPage";
import AuthPages from "./pages/AuthPages";
import CartPage from "./pages/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import StitchingAlterationsPage from "./pages/StitchingAlterationsPage";

// --- NEW/UPDATED IMPORTS FOR SIMPLIFIED SERVICES ---
import BabyBedsPage from './pages/BabyBedsPage';
import TailoringServicesPage from './pages/TailoringServicesPage';

// Import the new HomeContent component that groups homepage sections
import HomeContent from './pages/HomeContent';

// ProductList is imported here because it's used on other specific routes (/products, /bras)
import ProductList from "./components/ProductList";

function App() {
  return (
    <CartProvider>
      <Router>
        <div style={appStyles.appContainer}>
          <Header />
          <Navigation />
          <PromotionBanner />

          <main style={appStyles.mainContent}>
            <Routes>
              {/* CORRECTED: The root path now directly renders the HomeContent component within 'element' prop */}
              <Route path="/" element={<HomeContent />} />

              {/* Other routes remain the same */}
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/products" element={<ProductList />} /> {/* Generic products page */}
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/register" element={<AuthPages defaultTab="register" />} />
              {/* Corrected: AuthPages component was missing its closing curly brace on previous attempt */}
              <Route path="/sign-in" element={<AuthPages defaultTab="signIn" />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/stitching-alterations" element={<StitchingAlterationsPage />} />

              {/* Specific service pages */}
              <Route path="/bras" element={<ProductList />} />
              <Route path="/baby-beds" element={<BabyBedsPage />} />
              <Route path="/tailoring-services" element={<TailoringServicesPage />} />

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
    backgroundColor: 'var(--light-bg)', // This will be the fallback or base background
    overflowX: 'hidden',
  },
  mainContent: {
    flexGrow: 1,
    padding: '30px 0',
    backgroundColor: '#f8f8f8', // Apply subtle light gray to main content area
  },
  // productListHeading style is no longer needed here as it's within HomeContent or ProductList now
};

export default App;
