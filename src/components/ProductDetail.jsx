import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams hook

const ProductDetail = () => {
  const { id } = useParams(); // Get the 'id' parameter from the URL

  // Temporary product data (you'll ideally fetch this from an API or a larger data source)
  const products = [
    {
      id: 1,
      name: 'Seamless Black Push-Up Bra',
      price: 11.99,
      image: 'https://i.imgur.com/Kbz8ZDD.png',
      description: 'Experience ultimate comfort and a flawless silhouette with our Seamless Black Push-Up Bra. Designed for everyday wear, it offers perfect lift and invisible support under any outfit. Made with breathable, soft-touch fabric for all-day comfort.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      material: 'Nylon, Spandex blend',
      care: 'Hand wash cold, line dry',
      additionalImages: [
        'https://i.imgur.com/Kbz8ZDD.png', // Main image
        'https://i.imgur.com/example1.png', // Placeholder for another view
        'https://i.imgur.com/example2.png', // Placeholder for back view
      ]
    },
    {
      id: 2,
      name: 'Comfort Flex Nude Bra',
      price: 11.99,
      image: 'https://i.imgur.com/8sYLXVq.png',
      description: 'Our Comfort Flex Nude Bra offers adaptable support and a natural feel. Its flexible design moves with your body, providing comfort without compromising on shape. Perfect for light-colored clothing.',
      sizes: ['S', 'M', 'L', 'XL'],
      material: 'Cotton, Elastane',
      care: 'Machine wash warm',
      additionalImages: [
        'https://i.imgur.com/8sYLXVq.png',
        'https://i.imgur.com/example3.png',
        'https://i.imgur.com/example4.png',
      ]
    },
    {
      id: 3,
      name: 'Soft Touch Lace Bralette',
      price: 11.99,
      image: 'https://i.imgur.com/M2Q9xff.png',
      description: 'Embrace elegance and comfort with our Soft Touch Lace Bralette. This delicate bralette provides gentle support and a beautiful lace design, perfect for lounging or as a stylish undergarment. Non-padded for a natural look.',
      sizes: ['XS', 'S', 'M'],
      material: 'Lace, Polyamide',
      care: 'Hand wash cold',
      additionalImages: [
        'https://i.imgur.com/M2Q9xff.png',
        'https://i.imgur.com/example5.png',
        'https://i.imgur.com/example6.png',
      ]
    },
    {
      id: 4,
      name: 'Everyday Support White Bra',
      price: 11.99,
      image: 'https://via.placeholder.com/200x200?text=White+Bra',
      description: 'The Everyday Support White Bra is your go-to for reliable comfort and support. Its simple yet effective design makes it ideal for daily wear under any outfit. Features adjustable straps and a comfortable band.',
      sizes: ['M', 'L', 'XL', 'XXL'],
      material: 'Polyester, Cotton blend',
      care: 'Machine wash cold',
      additionalImages: [
        'https://via.placeholder.com/200x200?text=White+Bra',
        'https://via.placeholder.com/200x200?text=White+Bra+View2',
        'https://via.placeholder.com/200x200?text=White+Bra+View3',
      ]
    },
  ];

  // Find the product that matches the ID from the URL
  const product = products.find(p => p.id === parseInt(id)); // parseInt converts string 'id' to number

  // If product not found, display an error message
  if (!product) {
    return <div style={{ padding: '50px', textAlign: 'center', fontSize: '1.2em' }}>Product Not Found!</div>;
  }

  // Basic styling for the product detail page (you'll move this to CSS later)
  const productDetailStyles = {
    container: {
      padding: '50px 20px',
      maxWidth: '900px',
      margin: '40px auto',
      backgroundColor: 'var(--white)',
      borderRadius: '12px',
      boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
      display: 'flex',
      flexWrap: 'wrap', // Allow wrapping on smaller screens
      gap: '30px',
    },
    imageSection: {
      flex: '1 1 40%', // Takes 40% width, flexible
      minWidth: '300px', // Minimum width before wrapping
      textAlign: 'center',
    },
    mainImage: {
      width: '100%',
      maxWidth: '400px',
      height: 'auto',
      objectFit: 'contain',
      borderRadius: '8px',
      border: '1px solid #f0f0f0',
      marginBottom: '15px',
    },
    thumbnailContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
    },
    thumbnail: {
      width: '80px',
      height: '80px',
      objectFit: 'cover',
      borderRadius: '5px',
      border: '1px solid #ddd',
      cursor: 'pointer',
    },
    detailsSection: {
      flex: '1 1 50%', // Takes 50% width, flexible
      minWidth: '300px', // Minimum width before wrapping
      textAlign: 'left',
    },
    productName: {
      fontSize: '2em',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: 'var(--secondary-dark)',
    },
    productPrice: {
      fontSize: '1.8em',
      fontWeight: 'bold',
      color: 'var(--primary-blue)',
      marginBottom: '20px',
    },
    productDescription: {
      fontSize: '1em',
      lineHeight: '1.6',
      marginBottom: '20px',
      color: 'var(--text-color)',
    },
    attribute: {
      marginBottom: '10px',
      fontSize: '0.95em',
      color: 'var(--text-color)',
    },
    attributeLabel: {
      fontWeight: 'bold',
      marginRight: '5px',
    },
    sizeOptions: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
    },
    sizeButton: {
      padding: '8px 12px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      cursor: 'pointer',
      backgroundColor: 'var(--light-bg)',
      '&:hover': {
        backgroundColor: '#f0f0f0',
      },
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
      marginTop: '20px',
    },
  };

  return (
    <div style={productDetailStyles.container}>
      <div style={productDetailStyles.imageSection}>
        <img src={product.image} alt={product.name} style={productDetailStyles.mainImage} />
        {/* You can add more images here if product.additionalImages exists */}
        {product.additionalImages && product.additionalImages.length > 1 && (
          <div style={productDetailStyles.thumbnailContainer}>
            {product.additionalImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} thumbnail ${index + 1}`}
                style={productDetailStyles.thumbnail}
                // You could add onClick to change main image here
              />
            ))}
          </div>
        )}
      </div>
      <div style={productDetailStyles.detailsSection}>
        <h1 style={productDetailStyles.productName}>{product.name}</h1>
        <p style={productDetailStyles.productPrice}>£{product.price.toFixed(2)}</p>
        <p style={productDetailStyles.productDescription}>{product.description}</p>
        
        {product.sizes && (
          <div style={productDetailStyles.attribute}>
            <span style={productDetailStyles.attributeLabel}>Sizes:</span>
            <div style={productDetailStyles.sizeOptions}>
              {product.sizes.map((size, index) => (
                <button key={index} style={productDetailStyles.sizeButton}>{size}</button>
              ))}
            </div>
          </div>
        )}

        {product.material && (
          <p style={productDetailStyles.attribute}>
            <span style={productDetailStyles.attributeLabel}>Material:</span> {product.material}
          </p>
        )}
        {product.care && (
          <p style={productDetailStyles.attribute}>
            <span style={productDetailStyles.attributeLabel}>Care:</span> {product.care}
          </p>
        )}

        <button 
          style={productDetailStyles.addToCartButton}
          // You'd typically add a quantity selector and size selection before adding to cart
          onClick={() => addToCart(product)} 
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;