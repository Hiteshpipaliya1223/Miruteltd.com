// src/pages/ProductList.jsx (UPDATED with only one dummy product)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import StarRating from '../components/StarRating'; // We will use MUI Rating directly
// import './ProductList.css'; // Commenting out as we're using MUI for styling

// Import MUI components for better UI
import {
  Box, Grid, Card, CardMedia, CardContent, Typography, Button, Rating,
  Select, MenuItem, FormControl, InputLabel, Paper, Slider, Chip
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

// Assuming you have a CartContext and useCart hook
import { useCart } from '../context/CartContext';

// Dummy Products - NOW ONLY ONE PRODUCT LISTED
const dummyProducts = [
  { id: 1, name: 'Seamless Black Push-Up Bra', price: 7.99, image: 'https://i.imgur.com/Kbz8ZDD.png', rating: 4.5, reviews: 120, category: 'Bras', brand: 'Mirute Comfort' },
];

const categories = ['All', 'Bras', 'Bralettes', 'Sport Bras']; // Example categories

const ProductList = () => {
  // Access addToCart function from CartContext
  const { addToCart } = useCart();

  // State for filters and sorting
  const [sortOption, setSortOption] = useState('none');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 50]); // Example price range

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  // Logic to filter and sort products
  const sortedAndFilteredProducts = dummyProducts
    .filter(product =>
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      (product.price >= priceRange[0] && product.price <= priceRange[1])
    )
    .sort((a, b) => {
      if (sortOption === 'price_asc') return a.price - b.price;
      if (sortOption === 'price_desc') return b.price - a.price;
      if (sortOption === 'rating_desc') return b.rating - a.rating;
      return 0; // No change in order for 'none'
    });

  return (
    // Replaced .product-list-container with MUI Box
    <Box sx={{ flexGrow: 1, p: 3, mt: 4 }}>
      <Grid container spacing={3}>
        {/* Left Sidebar for Filters */}
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Filters</Typography>

            <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>Categories</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {categories.map(category => (
                <Chip
                  key={category}
                  label={category}
                  onClick={() => handleCategoryChange(category)}
                  color={selectedCategory === category ? 'primary' : 'default'}
                  variant={selectedCategory === category ? 'filled' : 'outlined'}
                  sx={{ cursor: 'pointer' }}
                />
              ))}
            </Box>

            <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>Price Range</Typography>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={0}
              max={50} // Adjust max based on your product prices
              step={1}
              marks={[
                { value: 0, label: '£0' },
                { value: 50, label: '£50+' }
              ]}
            />
            <Typography variant="body2">£{priceRange[0]} - £{priceRange[1]}</Typography>
          </Paper>
        </Grid>

        {/* Main Content for Products */}
        <Grid item xs={12} md={9}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h5">Our Bra Collection</Typography>
            <FormControl sx={{ minWidth: 150 }}>
              <InputLabel id="sort-select-label">Sort By</InputLabel>
              <Select
                labelId="sort-select-label"
                value={sortOption}
                label="Sort By"
                onChange={handleSortChange}
              >
                <MenuItem value="none">Recommended</MenuItem>
                <MenuItem value="price_asc">Price: Low to High</MenuItem>
                <MenuItem value="price_desc">Price: High to Low</MenuItem>
                <MenuItem value="rating_desc">Avg. Customer Review</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Replaced .product-grid with MUI Grid container */}
          <Grid container spacing={3}>
            {sortedAndFilteredProducts.map((product) => (
              // Replaced .product-card with MUI Grid item and Card
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p:1, boxShadow: 3, '&:hover': { boxShadow: 6, transform: 'translateY(-2px)' } }}>
                  {/* --- CORRECTED LINK PATH --- */}
                  <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {/* Replaced .product-image with MUI CardMedia */}
                    <CardMedia
                      component="img"
                      image={product.image} // Changed from imageUrl to image to match dummyProducts
                      alt={product.name}
                      sx={{ height: 200, objectFit: 'contain', p: 1 }}
                    />
                    {/* Replaced .product-details with MUI CardContent */}
                    <CardContent sx={{ flexGrow: 1, pb: 1 }}>
                      {/* Replaced .product-name-link and h3 with MUI Typography */}
                      <Typography gutterBottom variant="subtitle1" component="div">
                        {product.name}
                      </Typography>
                      {/* Replaced .product-card-price with MUI Typography */}
                      <Typography variant="h6" color="text.primary">
                        £{product.price.toFixed(2)}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        {/* Replaced StarRating with MUI Rating */}
                        <Rating name="read-only" value={product.rating} readOnly precision={0.1} size="small" />
                        {/* Replaced .product-reviews with MUI Typography */}
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                          ({product.reviews} reviews)
                        </Typography>
                      </Box>
                    </CardContent>
                  </Link>
                  {/* Replaced .add-to-cart-card-button with MUI Button */}
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddShoppingCartIcon />}
                    onClick={() => addToCart(product)}
                    sx={{ m: 1, mt: 'auto' }} // Push button to bottom of card
                  >
                    Add to Cart
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
          {sortedAndFilteredProducts.length === 0 && (
            <Typography variant="h6" color="text.secondary" align="center" sx={{ mt: 4 }}>
              No products found matching your criteria.
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductList;