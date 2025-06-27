// src/components/ProductList.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import StarRating from './StarRating';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: 'Mirute Everyday Seamless Bra', // --- UPDATED: New product name ---
      price: 11.99,
      image: 'https://i.imgur.com/Kbz8ZDD.png', // Keep your chosen image
      rating: 4.5,
      reviews: 120,
    },
  ];

  return (
    <section className="product-list-container">
      <h2 className="product-list-heading">Our Latest Collection</h2>
      <div className="product-grid">
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">£{product.price.toFixed(2)}</p>
            <div className="product-rating">
              <StarRating rating={product.rating} /> ({product.reviews})
            </div>
            <button
              className="add-to-cart-button"
              onClick={(e) => {
                e.preventDefault(); // Prevent navigating when clicking add to cart
                addToCart(product);
              }}
            >
              Add to Cart
            </button>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductList;