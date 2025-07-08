// src/components/ProductList.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import StarRating from './StarRating';
import { Link } from 'react-router-dom';
import './ProductList.css';

// Import MUI Button and Icon
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const ProductList = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: 'Mirute Everyday Seamless Bra',
      price: 11.99,
      image: 'https://i.imgur.com/Kbz8ZDD.png', // Keep your chosen image
      rating: 4.5,
      reviews: 120,
    },
    // Add more products here if needed for testing
    // {
    //   id: 2,
    //   name: 'Comfort Fit Wireless Bra',
    //   price: 15.00,
    //   image: 'https://i.imgur.com/someotherimage.png',
    //   rating: 4.0,
    //   reviews: 85,
    // },
  ];

  return (
    <section className="product-list-container">
      <h2 className="product-list-heading">Our Latest Collection</h2>
      <div className="product-grid">
        {products.map((product) => (
          // The Link wraps the whole card but the button prevents navigation
          <Link to={`/products/${product.id}`} key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">£{product.price.toFixed(2)}</p>
            <div className="product-rating">
              <StarRating rating={product.rating} /> ({product.reviews})
            </div>
            
            {/* MUI Button replacement */}
            <Button
              variant="contained" // Makes the button have a filled background
              color="primary"    // Uses MUI's primary color (default blue, can be customized later)
              startIcon={<AddShoppingCartIcon />} // Adds the shopping cart icon
              onClick={(e) => {
                e.preventDefault(); // Prevents navigating to product detail page
                e.stopPropagation(); // Prevents the Link's onClick from firing (important!)
                addToCart(product);
              }}
              // The 'sx' prop allows you to apply custom styles or override MUI's defaults
              // You can remove productListStyles.addToCartButton from your CSS if you fully style with MUI
              sx={{
                width: '100%', // Makes the button take full width of its container
                marginTop: 'auto', // Pushes the button to the bottom of the card
                // Example: If you want to match a specific color from your CSS:
                // backgroundColor: 'var(--your-custom-color)',
                // '&:hover': {
                //   backgroundColor: 'darken(var(--your-custom-color), 10%)',
                // }
              }}
            >
              Add to Cart
            </Button>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductList;