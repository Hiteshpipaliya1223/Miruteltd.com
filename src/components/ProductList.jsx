// src/components/ProductList.jsx
import React from 'react';
import { useCart } from '../context/CartContext'; // <-- Make sure this is imported
import StarRating from './StarRating';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const { addToCart } = useCart(); // <-- useCart hook is used here

  const products = [
    {
      id: 1,
      name: 'Seamless Black Push-Up Bra',
      price: 11.99,
      image: 'https://i.imgur.com/Kbz8ZDD.png',
      rating: 4.5,
      reviews: 120,
    },
    {
      id: 2,
      name: 'Comfort Flex Nude Bra',
      price: 11.99,
      image: 'https://i.imgur.com/8sYLXVq.png',
      rating: 4.8,
      reviews: 95,
    },
    {
      id: 3,
      name: 'Soft Touch Lace Bralette',
      price: 11.99,
      image: 'https://i.imgur.com/M2Q9xff.png',
      rating: 4.2,
      reviews: 78,
    },
    {
      id: 4,
      name: 'Everyday Support White Bra',
      price: 11.99,
      image: 'https://via.placeholder.com/200x200?text=White+Bra', 
      rating: 4.6,
      reviews: 150,
    },
  ];

  return (
    <section style={productListStyles.container}>
      <div style={productListStyles.grid}>
        {products.map((product) => (
          <div key={product.id} style={productListStyles.productCard}>
            <Link to={`/products/${product.id}`} style={productListStyles.productLink}>
              <img src={product.image} alt={product.name} style={productListStyles.productImage} />
              <h3 style={productListStyles.productName}>{product.name}</h3>
            </Link>

            <p style={productListStyles.productPrice}>£{product.price.toFixed(2)}</p>
            <div style={productListStyles.productRating}>
              <StarRating initialRating={product.rating} readOnly={true} /> 
              <span style={{ marginLeft: '8px' }}>({product.reviews} reviews)</span>
            </div>
            <button 
              style={productListStyles.addToCartButton}
              onClick={() => {
                addToCart(product); // <-- This is the crucial part that adds to cart
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const productListStyles = {
  container: {
    padding: '50px 20px',
    maxWidth: '1200px',
    margin: '40px auto',
    backgroundColor: 'var(--white)',
    borderRadius: '12px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '35px',
    justifyContent: 'center',
  },
  productCard: {
    border: '1px solid var(--border-color)',
    borderRadius: '10px',
    padding: '10px',
    textAlign: 'center',
    backgroundColor: 'var(--light-bg)',
    boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  productLink: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    marginBottom: '10px',
  },
  productImage: {
    width: '100%',
    height: '280px',
    objectFit: 'contain',
    borderRadius: '5px',
    border: '1px solid #f0f0f0',
  },
  productName: {
    fontSize: '1em',
    color: '#333',
    marginTop: '5px',
    marginBottom: '5px',
    fontWeight: 'normal',
    lineHeight: '1.3',
  },
  productPrice: {
    fontSize: '1.1em',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '5px',
  },
  productRating: {
    fontSize: '1em',
    color: 'var(--text-color)',
    marginBottom: '20px',
  },
  addToCartButton: {
    backgroundColor: 'var(--accent-pink)',
    color: 'var(--white)',
    padding: '14px 28px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.1em',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 12px rgba(253, 126, 20, 0.2)',
    marginTop: 'auto',
    // Note: ':hover' styles in JS objects like this don't work directly in React's `style` prop.
    // They are for CSS-in-JS libraries or you'd handle hover states with CSS classes.
    // '&:hover': { backgroundColor: '#e66d00', transform: 'translateY(-2px)', boxShadow: '0 6px 15px rgba(253, 126, 20, 0.3)' },
  },
  '@media (max-width: 768px)': {
    grid: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '25px',
    },
    productCard: {
      padding: '20px',
    },
    productImage: {
      height: '180px',
    },
  },
  '@media (max-width: 480px)': {
    grid: {
      gridTemplateColumns: '1fr',
      padding: '0 15px',
    },
    productCard: {
      maxWidth: '350px',
      margin: '0 auto',
    },
  },
};

export default ProductList;