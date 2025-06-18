import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/CartContext'; 

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import PromotionBanner from "./components/PromotionBanner";
import HeroSection from "./components/HeroSection";
import BenefitsSection from "./components/BenefitsSection";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

// Import all the new pages
import ContactUsPage from "./pages/ContactUsPage";
import FAQPage from "./pages/FAQPage";
import BlogPage from "./pages/BlogPage";
import AuthPages from "./pages/AuthPages"; 
import CartPage from "./pages/CartPage"; 
import ProductDetailPage from "./pages/ProductDetailPage"; // Ensure this is imported

// import NotFoundPage from "./pages/NotFoundPage"; // You can uncomment this if you create a NotFoundPage.jsx

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
                    <HeroSection />
                    <BenefitsSection />
                    <h2 style={appStyles.productListHeading}>Our Latest Collection</h2>
                    <ProductList />
                  </>
                }
              />
              
              {/* Route for individual Product Detail Pages - IMPORTANT: Place this before /products */}
              <Route path="/products/:id" element={<ProductDetailPage />} /> 

              {/* Optional: Add a dedicated /products route if you want to separate it from home */}
              <Route path="/products" element={<ProductList />} />
              
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/register" element={<AuthPages defaultTab="register" />} />
              <Route path="/sign-in" element={<AuthPages defaultTab="signIn" />} />
              
              {/* Route for the Cart Page */}
              <Route path="/cart" element={<CartPage />} /> 
              
              {/* Catch-all for undefined routes */}
              <Route path="*" element={<h1>404: Page Not Found</h1>} />
              {/* Or if you create a NotFoundPage.jsx: <Route path="*" element={<NotFoundPage />} /> */}
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