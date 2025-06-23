import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../components/StarRating'; // Make sure this path is correct
import './ProductList.css';

const dummyProducts = [
  {
    id: 1,
    name: 'Seamless Push-Up Bra',
    price: 11.99,
    rating: 4.8,
    reviews: 95,
    imageUrl: '/images/bras.jpg' // Ensure this path is correct
  },
  // !!! IMPORTANT: There should be NO other product objects here for ID 2, 3, 4 !!!
];

const ProductList = () => {
  return (
    <div className="product-list-container">
      <h1 className="list-title">Our Bra Collection</h1>
      <div className="product-grid">
        {dummyProducts.map(product => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img src={product.imageUrl} alt={product.name} className="product-image" />
            </Link>
            <div className="product-details">
              <Link to={`/product/${product.id}`} className="product-name-link">
                <h3 className="product-card-name">{product.name}</h3>
              </Link>
              <p className="product-card-price">£{product.price.toFixed(2)}</p>
              <StarRating rating={product.rating} />
              <span className="product-reviews">({product.rating}/5) ({product.reviews} reviews)</span>
              <button className="add-to-cart-card-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;