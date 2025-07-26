// src/components/HeroSection.jsx (UPDATED with Material-UI)
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Container, // Using Container for max width and centering hero content
  Paper, // Good for content blocks with shadow and background
} from '@mui/material';
import { useTheme } from '@mui/material/styles'; // To access theme properties if needed
import { Link } from 'react-router-dom'; // Import Link for navigation
import MiruteLogo from '../assets/your-logo.svg'; // Make sure this path is correct

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false); // State to control animation
  const theme = useTheme(); // Access the custom theme

  useEffect(() => {
    // Set isVisible to true after component mounts to trigger animation
    setIsVisible(true);
  }, []);

  return (
    <Box
      component="section"
      sx={{
        bgcolor: 'background.default', // Uses theme's light background color
        py: { xs: 8, md: 10 }, // Responsive padding top/bottom (64px to 80px)
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 150px)', // Adjust based on header/footer height
        position: 'relative',
        overflow: 'hidden',
        // Optional: Add a subtle patterned background or gradient for uniqueness
        // background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
        // Or if you have a subtle texture image:
        // backgroundImage: 'url(/path/to/subtle-texture.png)',
        // backgroundRepeat: 'repeat',
        // backgroundSize: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={10} // Material-UI shadow (corresponds to theme.shadows[10])
          sx={{
            bgcolor: 'background.paper', // Uses theme's white color for paper
            borderRadius: theme.shape.borderRadius * 2, // 15px rounded corners (default border-radius is 4px)
            p: { xs: 4, md: 5 }, // Responsive padding (32px to 40px)
            maxWidth: 900, // Max width of the content box
            mx: 'auto', // Centers the box horizontally
            zIndex: 10,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            display: 'flex', // Use flexbox for content alignment within Paper
            flexDirection: 'column', // Stack content vertically
            alignItems: 'center', // Center items horizontally
            justifyContent: 'center', // Center items vertically
          }}
        >
          {/* Company Logo - Prominent placement */}
          <Box sx={{ mb: { xs: 3, md: 4 } }}>
            <img
              src={MiruteLogo}
              alt="Mirute Ltd. Logo"
              style={{
                maxWidth: '200px', // Adjust size to be more prominent
                height: 'auto',
                display: 'block', // Ensure it behaves like a block element
                margin: '0 auto', // Center the image
                filter: 'drop-shadow(3px 3px 6px rgba(0,0,0,0.2))', // Subtle shadow on logo
              }}
            />
          </Box>

          {/* Company Name - Primary Heading */}
          <Typography
            variant="h1" // Make this the largest heading for the company name
            component="h1" // Render as an h1 HTML element
            sx={{
              color: 'primary.dark', // Use a strong, brand-aligned color from your theme
              mb: { xs: 1, md: 2 }, // Reduced margin bottom to keep it close to the tagline
              fontWeight: 900, // Extra bold for strong presence
              lineHeight: 1.1,
              fontSize: { xs: '3.5rem', sm: '4.5rem', md: '5.5rem' }, // Larger responsive font size
              letterSpacing: '-0.05em', // Tighter letter spacing for a modern look
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)', // Subtle text shadow
            }}
          >
            Mirute Ltd.
          </Typography>

          {/* Tagline / Slogan - Unique and Catchy */}
          <Typography
            variant="h4" // Slightly smaller than h1, but still prominent
            component="p"
            sx={{
              color: 'secondary.main', // Use a contrasting or complementary color from your theme
              mb: { xs: 3, md: 4 }, // Responsive margin-bottom
              fontWeight: 600, // Medium-bold
              lineHeight: 1.4,
              fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' }, // Responsive font size
              fontStyle: 'italic', // Add a touch of elegance
              maxWidth: 700,
              mx: 'auto',
            }}
          >
            Where Comfort Meets Confidence – Elevate Your Everyday.
          </Typography>

          {/* Original Welcome/Description Text - Adjusted to fit below the new prominent branding */}
          <Typography
            variant="body1" // Using body1 variant for description text
            sx={{
              color: 'text.primary', // Uses your theme's default text color
              mb: { xs: 4, md: 5 }, // Responsive margin-bottom
              maxWidth: 700,
              mx: 'auto', // Centers the text block
              lineHeight: 1.6,
              fontSize: { xs: '1em', md: '1.1em' }, // Responsive font size
            }}
          >
            Discover our exquisite collection of seamless push-up bras, meticulously designed to provide unparalleled comfort, a flawless silhouette, and a boost of confidence for every woman. Experience the Mirute Ltd. difference today.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: { xs: 2, md: 3 }, // Responsive gap between items
              mb: { xs: 4, md: 5 }, // Responsive margin-bottom
              flexWrap: 'wrap',
            }}
          >
            {/* Promo Product Items (retained from your original code) */}
            {/* Promo Product Item 1 */}
            <Box
              sx={{
                textAlign: 'center',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)', // Subtle zoom on hover
                },
                flexBasis: { xs: 'calc(50% - 16px)', sm: 'auto' }, // 2 items per row on xs, auto on sm+
                maxWidth: { xs: '150px', sm: '180px' }, // Max width for items
              }}
            >
              <Box
                component="img"
                src="https://i.imgur.com/8sYLXVq.png"
                alt="Black Seamless Bra"
                sx={{
                  width: { xs: 120, sm: 150 }, // Responsive image size
                  height: { xs: 120, sm: 150 }, // Responsive image size
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid',
                  borderColor: 'primary.main', // Uses primary-blue from your theme
                  boxShadow: 5, // Material-UI shadow
                }}
              />
              <Typography variant="body2" sx={{ color: 'text.primary', mt: 1, fontWeight: 500 }}>
                Smooth Silhouette
              </Typography>
            </Box>

            {/* Promo Product Item 2 */}
            <Box
              sx={{
                textAlign: 'center',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                flexBasis: { xs: 'calc(50% - 16px)', sm: 'auto' },
                maxWidth: { xs: '150px', sm: '180px' },
              }}
            >
              <Box
                component="img"
                src="https://i.imgur.com/M2Q9xff.png"
                alt="Purple Seamless Bra"
                sx={{
                  width: { xs: 120, sm: 150 },
                  height: { xs: 120, sm: 150 },
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid',
                  borderColor: 'primary.main',
                  boxShadow: 5,
                }}
              />
              <Typography variant="body2" sx={{ color: 'text.primary', mt: 1, fontWeight: 500 }}>
                Ultimate Comfort
              </Typography>
            </Box>

            {/* Promo Product Item 3 */}
            <Box
              sx={{
                textAlign: 'center',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                flexBasis: { xs: 'calc(50% - 16px)', sm: 'auto' },
                maxWidth: { xs: '150px', sm: '180px' },
              }}
            >
              <Box
                component="img"
                src="https://i.imgur.com/Kbz8ZDD.png"
                alt="Sky Seamless Bra"
                sx={{
                  width: { xs: 120, sm: 150 },
                  height: { xs: 120, sm: 150 },
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid',
                  borderColor: 'primary.main',
                  boxShadow: 5,
                }}
              />
              <Typography variant="body2" sx={{ color: 'text.primary', mt: 1, fontWeight: 500 }}>
                Perfect Lift
              </Typography>
            </Box>
          </Box>

          <Button
            component={Link} // Use Link for internal navigation
            to="/shop" // Link to your shop page
            variant="contained"
            color="primary"
            size="large"
            sx={{
              p: { xs: '15px 30px', md: '20px 45px' },
              borderRadius: '8px',
              fontSize: { xs: '1.1em', md: '1.3em' },
              fontWeight: 'bold',
              transition: 'transform 0.2s ease, box-shadow 0.3s ease',
              boxShadow: 5,
              '&:hover': {
                bgcolor: 'primary.dark',
                transform: 'translateY(-3px)',
                boxShadow: 8,
              },
            }}
          >
            Shop Our Seamless Collection
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default HeroSection;