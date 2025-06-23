// src/pages/ProductDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 
import './ProductDetailPage.css'; 

// --- DUMMY PRODUCT DATA --- (Keep your existing dummyProducts array here)
const dummyProducts = [
  {
    id: 1, 
    name: 'Seamless Push-Up Bra',
    description: 'Experience ultimate comfort and a flawless silhouette with our Seamless Push-Up Bra. Designed for everyday wear, it offers perfect lift and invisible support under any outfit. Made with breathable, soft-touch fabric for all-day comfort.',
    price: 11.99,
    sizes: ['30', '32', '34'],
    material: '80% Nylon, 20% Spandex',
    care: 'Hand wash cold, line dry',
    colorOptions: [
      { name: 'Black', hexCode: '#000000', images: ['/images/black_bra_side.png', '/images/black_bra_side1.png', '/images/black_bra_side2.png', '/images/black_bra_side3.png'] },
      { name: 'Brown', hexCode: '#A52A2A', images: ['/images/brown_bra_side.png', '/images/brown_bra_side1.png', '/images/brown_bra_side2.png'] },
      { name: 'Grey', hexCode: '#808080', images: ['/images/grey_bra_side.png', '/images/grey_bra_side1.png', '/images/grey_bra_side2.png', '/images/grey_bra_side3.png', '/images/grey_bra_side4.png'] },
      { name: 'Light Green', hexCode: '#90EE90', images: ['/images/light_green_bra.png', '/images/light_green_bra1.png', '/images/light_green_bra2.png'] },
      { name: 'Purple', hexCode: '#800080', images: ['/images/purple_bra_side.png', '/images/purple_bra_side1.png', '/images/purple_bra_side2.png', '/images/purple_bra_side3.png'] },
      { name: 'Nude', hexCode: '#F0D5BE', images: ['/images/nude_bra_side.png', '/images/nude_bra_side1.png', '/images/nude_bra_side2.png'] },
      { name: 'Sky', hexCode: '#87CEEB', images: ['/images/sky_bra_side.png', '/images/sky_bra_side1.png'] },
    ]
  },
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = dummyProducts.find(p => p.id === parseInt(id)); 

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    if (product && product.colorOptions && product.colorOptions.length > 0) {
      setSelectedColor(product.colorOptions[0]);
    }
  }, [product]);

  useEffect(() => {
    if (selectedColor && selectedColor.images && selectedColor.images.length > 0) {
      setMainImage(selectedColor.images[0]);
    }
  }, [selectedColor]);

  if (!product) {
    return <div style={{ padding: '50px', textAlign: 'center', fontSize: '1.2em' }}>Product Not Found!</div>;
  }

  const handleAddToCart = () => {
    if (selectedSize && selectedColor) {
      const productToAdd = {
        ...product,
        id: `${product.id}-${selectedColor.name}-${selectedSize}`,
        originalId: product.id,
        selectedColor: selectedColor.name,
        selectedSize: selectedSize,
        image: mainImage,
      };
      addToCart(productToAdd);
      alert(`${productToAdd.name} (${productToAdd.selectedColor}, Size ${productToAdd.selectedSize}) added to cart!`);
    } else {
      alert('Please select a size and color before adding to cart.');
    }
  };

  return (
    <div className="product-detail-container">
      <div className="image-gallery">
        <div className="main-image">
          <img src={mainImage} alt={product.name} />
        </div>
        <div className="thumbnails">
          {selectedColor && selectedColor.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${selectedColor.name} thumbnail ${index + 1}`}
              className={img === mainImage ? 'thumbnail active' : 'thumbnail'}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>

      <div className="product-info">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-price">£{product.price.toFixed(2)}</p>
        <p className="product-description">{product.description}</p>
        
        {/* Color Options */}
        {product.colorOptions && product.colorOptions.length > 0 && (
          // Apply attribute box styles here
          <div style={{...productAttributeBoxStyles, marginBottom: '20px' }}> {/* Combined styles */}
            <span className="attribute-label">Colour:</span>
            <div className="color-options">
              {product.colorOptions.map((color, index) => (
                <div 
                  key={index}
                  className={`color-swatch ${selectedColor && selectedColor.name === color.name ? 'active' : ''}`}
                  style={{ backgroundColor: color.hexCode }}
                  onClick={() => setSelectedColor(color)}
                  title={color.name}
                >
                  {color.name === 'White' && <div style={{width:'80%', height:'80%', borderRadius:'50%', border:'1px solid #ddd'}}></div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Size Options */}
        {product.sizes && (
          // Apply attribute box styles here
          <div style={{...productAttributeBoxStyles, marginBottom: '20px' }}> {/* Combined styles */}
            <span className="attribute-label">Sizes:</span>
            <div className="size-options">
              {product.sizes.map((size, index) => (
                <button 
                  key={index} 
                  className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Material */}
        {product.material && (
          // Apply attribute box styles here
          <div style={{...productAttributeBoxStyles, marginBottom: '10px' }}> {/* Combined styles */}
            <span className="attribute-label">Material:</span> {product.material}
          </div>
        )}
        
        {/* Care */}
        {product.care && (
          // Apply attribute box styles here
          <div style={{...productAttributeBoxStyles, marginBottom: '20px' }}> {/* Combined styles */}
            <span className="attribute-label">Care:</span> {product.care}
          </div>
        )}

        <button 
          className="add-to-cart-button"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// --- New Styles for the attribute boxes ---
const productAttributeBoxStyles = {
    backgroundColor: '#f9f9f9', // A very light grey for the box background
    border: '1px solid #eee', // A subtle light border
    borderRadius: '8px', // Slightly rounded corners
    padding: '15px', // Padding inside the box
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)', // A very soft shadow for depth
    // Note: marginBottom is applied directly in the JSX as it varies for each attribute
};

export default ProductDetailPage;