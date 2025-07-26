// src/pages/ProductDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// Import Material-UI components
import {
  Container, Grid, Box, Typography, Button, Paper,
  ImageList, ImageListItem, ToggleButtonGroup, ToggleButton
} from '@mui/material';
import { useTheme } from '@mui/material/styles'; // To access theme palette and spacing

// --- DUMMY PRODUCT DATA - ABSOLUTELY CORRECTED LOCAL IMAGE PATHS ---
const dummyProducts = [
  {
    id: 1,
    name: 'Seamless Push-Up Bra',
    description: 'Experience ultimate comfort and a flawless silhouette with our Seamless Push-Up Bra. Designed for everyday wear, it offers perfect lift and invisible support under any outfit. Made with breathable, soft-touch fabric for all-day comfort.',
    price: 7.99, // <--- PRICE CHANGED HERE
    sizes: ['30', '32', '34', '36', '38'],
    material: '80% Nylon, 20% Spandex',
    care: 'Hand wash cold, line dry',
    colorOptions: [
      // Make sure these filenames EXACTLY match what you have in D:\MIRUTE\my-store\public\images\
      { name: 'Black', hexCode: '#000000', images: ['/images/black_bra_side.png', '/images/black_bra_side1.png', '/images/black_bra_side2.png', '/images/black_bra_side3.png'] },
      { name: 'Brown', hexCode: '#A52A2A', images: ['/images/brown_bra_side.png', '/images/brown_bra_side1.png', '/images/brown_bra_side2.png'] },
      { name: 'Grey', hexCode: '#808080', images: ['/images/grey_bra_side.png', '/images/grey_bra_side1.png', '/images/grey_bra_side2.png'] },
      { name: 'Light Green', hexCode: '#90EE90', images: ['/images/light_green_bra.png', '/images/light_green_bra1.png', '/images/light_green_bra2.png'] },
      { name: 'Purple', hexCode: '#800080', images: ['/images/purple_bra_side.png', '/images/purple_bra_side1.png', '/images/purple_bra_side2.png'] },
      { name: 'Nude', hexCode: '#F0D5BE', images: ['/images/nude_bra_side.png', '/images/nude_bra_side1.png', '/images/nude_bra_side2.png'] },
      { name: 'Sky', hexCode: '#87CEEB', images: ['/images/sky_bra_side.png', '/images/sky_bra_side1.png'] },
    ]
  },
];
// --- END DUMMY PRODUCT DATA ---


const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const theme = useTheme();

  // Find the product based on the URL ID
  const product = dummyProducts.find(p => p.id === parseInt(id));

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState('');

  // Effect to set initial color and main image when product data loads or changes
  useEffect(() => {
    if (product && product.colorOptions && product.colorOptions.length > 0) {
      // Set the first color option as selected by default
      setSelectedColor(product.colorOptions[0]);
    }
  }, [product]);

  // Effect to update main image when selected color changes, or initially
  useEffect(() => {
    if (selectedColor && selectedColor.images && selectedColor.images.length > 0) {
      setMainImage(selectedColor.images[0]); // Set the first image of the selected color as main
    } else {
      // Fallback if no color is selected or no images for selected color
      setMainImage('');
    }
  }, [selectedColor]);

  // --- ADDED CONSOLE LOGS FOR DEBUGGING ---
  // These logs will show what values `product`, `selectedColor`, and `mainImage` hold
  // You can check your browser's console (F12 -> Console tab) to see these.
  console.log("Product:", product);
  console.log("Selected Color State:", selectedColor);
  console.log("Main Image State (when updated):", mainImage);
  // --- END CONSOLE LOGS ---


  // --- handleAddToCart FUNCTION ---
  const handleAddToCart = () => {
    if (selectedSize && selectedColor) {
      const productToAdd = {
        // Spread existing product properties (name, price, etc.)
        ...product,
        // Override or add specific properties for the cart item
        id: `${product.id}-${selectedColor.name}-${selectedSize}`, // Unique ID for cart item
        originalId: product.id, // Keep original ID for lookup if needed
        selectedColor: selectedColor.name,
        selectedSize: selectedSize,
        image: mainImage, // <--- THIS IS THE CRITICAL LINE FOR THE IMAGE URL
        quantity: 1, // Start with quantity 1 for new items
      };
      addToCart(productToAdd);
      alert(`${productToAdd.name} (${productToAdd.selectedColor}, Size ${productToAdd.selectedSize}) added to cart!`);
    } else {
      alert('Please select a size and color before adding to cart.');
    }
  };
  // --- END handleAddToCart FUNCTION ---


  if (!product) {
    return (
      <Container sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h5" color="error">Product Not Found!</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}> {/* Responsive padding for the page */}
      <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start"> {/* Main layout: 2 columns */}

        {/* Image Gallery Column */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: { xs: 2, md: 3 }, mb: { xs: 2, md: 3 } }}> {/* Paper for the main image */}
            <Box
              component="img"
              src={mainImage} // This is the source for the large main image
              alt={product.name}
              sx={{
                width: '100%',
                height: { xs: 300, sm: 400, md: 500 }, // Responsive height for main image
                objectFit: 'contain', // Ensures image fits without cropping
                borderRadius: theme.shape.borderRadius,
                transition: 'opacity 0.3s ease-in-out',
              }}
            />
          </Paper>

          {/* Thumbnails */}
          {selectedColor && selectedColor.images.length > 0 && (
            <ImageList sx={{ width: '100%', height: 100, overflowX: 'auto', flexWrap: 'nowrap' }} cols={selectedColor.images.length} rowHeight={100} gap={10}>
              {selectedColor.images.map((img, index) => (
                <ImageListItem key={index} sx={{ flexShrink: 0 }}>
                  <img
                    src={img} // Source for each thumbnail image
                    alt={`${selectedColor.name} thumbnail ${index + 1}`}
                    loading="lazy"
                    onClick={() => setMainImage(img)} // Clicking changes the main image
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      border: img === mainImage ? `2px solid ${theme.palette.primary.main}` : '2px solid transparent',
                      cursor: 'pointer',
                      transition: 'border 0.3s ease, transform 0.2s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      }
                    }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          )}
        </Grid>

        {/* Product Info Column */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                color: 'text.primary',
                fontWeight: 700,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              }}
            >
              {product.name}
            </Typography>

            <Typography
              variant="h4"
              component="p"
              color="primary.main"
              sx={{ mb: 2, fontWeight: 600 }}
            >
              £{product.price.toFixed(2)}
            </Typography>

            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
              {product.description}
            </Typography>

            {/* Color Options Section */}
            {product.colorOptions && product.colorOptions.length > 0 && (
              <Paper elevation={1} sx={{ p: 2, mb: 3, bgcolor: 'background.paper' }}>
                <Typography variant="subtitle1" component="span" sx={{ fontWeight: 'bold', mr: 1 }}>Colour:</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 1 }}>
                  {product.colorOptions.map((color) => (
                    <ToggleButton
                      key={color.name}
                      value={color.name}
                      selected={selectedColor && selectedColor.name === color.name}
                      onChange={() => setSelectedColor(color)}
                      sx={{
                        minWidth: 40,
                        height: 40,
                        borderRadius: '50%',
                        bgcolor: color.hexCode,
                        border: selectedColor && selectedColor.name === color.name ? `2px solid ${theme.palette.primary.main}` : `1px solid ${theme.palette.divider}`,
                        p: 0,
                        '&:hover': {
                            bgcolor: color.hexCode,
                            opacity: 0.8,
                            borderColor: theme.palette.primary.dark,
                        },
                        '&.Mui-selected': {
                            bgcolor: color.hexCode,
                            border: `2px solid ${theme.palette.primary.main}`,
                            boxShadow: `0 0 0 2px ${theme.palette.primary.light}`,
                            '&:hover': {
                                bgcolor: color.hexCode,
                            }
                        }
                      }}
                    >
                      {/* Optional: Add a distinct inner circle for white swatch */}
                      {color.name === 'White' && (
                        <Box sx={{
                          width: '80%', height: '80%', borderRadius: '50%',
                          border: '1px solid #ddd',
                        }} />
                      )}
                    </ToggleButton>
                  ))}
                </Box>
              </Paper>
            )}

            {/* Size Options Section */}
            {product.sizes && (
              <Paper elevation={1} sx={{ p: 2, mb: 3, bgcolor: 'background.paper' }}>
                <Typography variant="subtitle1" component="span" sx={{ fontWeight: 'bold', mr: 1 }}>Sizes:</Typography>
                <ToggleButtonGroup
                  value={selectedSize}
                  exclusive
                  onChange={(event, newSize) => setSelectedSize(newSize)}
                  aria-label="product sizes"
                  sx={{ mt: 1 }}
                >
                  {product.sizes.map((size) => (
                    <ToggleButton
                      key={size}
                      value={size}
                      sx={{
                        border: `1px solid ${theme.palette.divider}`,
                        '&.Mui-selected': {
                          bgcolor: 'primary.main',
                          color: 'primary.contrastText',
                          '&:hover': {
                            bgcolor: 'primary.dark',
                          },
                        },
                        '&:hover': {
                            bgcolor: theme.palette.action.hover,
                        },
                        borderRadius: theme.shape.borderRadius,
                        minWidth: 48,
                        height: 48,
                      }}
                    >
                      {size}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Paper>
            )}

            {/* Material Section */}
            {product.material && (
              <Paper elevation={1} sx={{ p: 2, mb: 2, bgcolor: 'background.paper' }}>
                <Typography variant="body1">
                  <Typography component="span" sx={{ fontWeight: 'bold' }}>Material:</Typography> {product.material}
                </Typography>
              </Paper>
            )}

            {/* Care Section */}
            {product.care && (
              <Paper elevation={1} sx={{ p: 2, mb: 3, bgcolor: 'background.paper' }}>
                <Typography variant="body1">
                  <Typography component="span" sx={{ fontWeight: 'bold' }}>Care:</Typography> {product.care}
                </Typography>
              </Paper>
            )}

            {/* Add to Cart Button */}
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleAddToCart}
              sx={{
                width: '100%',
                py: 1.5,
                fontSize: '1.2em',
                fontWeight: 'bold',
                boxShadow: 5,
                '&:hover': {
                  boxShadow: 8,
                  bgcolor: 'primary.dark',
                },
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetailPage;