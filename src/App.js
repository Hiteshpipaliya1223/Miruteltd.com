import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/CartContext';

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import PromotionBanner from "./components/PromotionBanner";
import HeroSection from "./components/HeroSection";
import ProductList from "./components/ProductList"; // This is for displaying products
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
import ServicesSection from './components/ServicesSection'; // Your new simplified section
import BabyBedsPage from './pages/BabyBedsPage';       // For the Baby Beds link
import TailoringServicesPage from './pages/TailoringServicesPage'; // For the Tailoring Services link

// If you plan to use TimeSlotBooking, uncomment this and ensure the component is available
// import TimeSlotBooking from './components/TimeSlotBooking';

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
              <Route
                path="/"
                element={
                  <>
                    {/* Your new simplified services/products section */}
                    <ServicesSection />

                    {/* Your main hero banner */}
                    <HeroSection />

                    {/* This heading and ProductList will display your product collection on the homepage */}
                    <h2 style={appStyles.productListHeading}>Our Latest Collection</h2>
                    <ProductList />

                    {/* If you had other sections on your homepage (like BenefitsSection)
                        and still want them, add them back here.
                        However, the new ServicesSection combines many of the old Benefits.
                    */}
                  </>
                }
              />

              {/* FIX: Changed /product/:id to /products/:id to match common practice
                 and what your browser URL suggests your links are generating.
                 If your links in ProductList.jsx are *definitely* /product/1 (singular),
                 then change this back. But for now, let's assume links are plural.
              */}
              <Route path="/products/:id" element={<ProductDetailPage />} />

              {/* Generic products page, usually just a list of all products */}
              <Route path="/products" element={<ProductList />} />

              {/* These routes remain the same */}
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/register" element={<AuthPages defaultTab="register" />} />
              <Route path="/sign-in" element={<AuthPages defaultTab="signIn" />} />
              <Route path="/cart" element={<CartPage />} />

              <Route path="/stitching-alterations" element={<StitchingAlterationsPage />} />
              {/* Uncomment the TimeSlotBooking route if you intend to use it and have the component */}
              {/* <Route path="/book-a-slot" element={<TimeSlotBooking />} /> */}

              {/* These are the new routes for the simplified services */}
              <Route path="/bras" element={<ProductList />} /> {/* Women's Bras page (links to your current ProductList) */}
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
    backgroundColor: 'var(--light-bg)',
    overflowX: 'hidden',
  },
  mainContent: {
    flexGrow: 1,
    padding: '30px 0',
  },
  productListHeading: {
    textAlign: 'center',
    margin: '60px 0 30px 0',
    fontSize: '3em',
    color: 'var(--secondary-dark)',
    fontWeight: '700',
  }
};

export default App;