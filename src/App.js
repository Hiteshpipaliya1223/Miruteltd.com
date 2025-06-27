// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/CartContext';

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import PromotionBanner from "./components/PromotionBanner";
import HeroSection from "./components/HeroSection";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

import ContactUsPage from "./pages/ContactUsPage";
import FAQPage from "./pages/FAQPage";
import BlogPage from "./pages/BlogPage";
import AuthPages from "./pages/AuthPages";
import CartPage from "./pages/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import StitchingAlterationsPage from "./pages/StitchingAlterationsPage";

import ServicesSection from './components/ServicesSection';
import BabyBedsPage from './pages/BabyBedsPage';
import TailoringServicesPage from './pages/TailoringServicesPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <div style={appStyles.appContainer}>
          <Header />
          <Navigation />
          <PromotionBanner />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <HeroSection />
                  {/* Assuming ServicesSection is used on the homepage */}
                  <ServicesSection />
                  <ProductList />
                </>
              } />
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/auth" element={<AuthPages />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/stitching-alterations" element={<StitchingAlterationsPage />} />
              <Route path="/bras" element={<ProductList />} />
              <Route path="/baby-beds" element={<BabyBedsPage />} />
              <Route path="/tailoring-services" element={<TailoringServicesPage />} />
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
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    // --- UPDATED: Subtle background gradient ---
    background: 'linear-gradient(to bottom, var(--light-bg), #F0F2F5)', // From light-bg to a slightly darker shade
  },
};

export default App;