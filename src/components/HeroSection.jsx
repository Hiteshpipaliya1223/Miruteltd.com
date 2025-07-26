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
        minHeight: 'calc(100vh - 150px)', // Adjust based on header/footer height, as before
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg"> {/* Content wrapper, centered and max-width */}
        <Paper
          elevation={10} // Material-UI shadow (corresponds to theme.shadows[10])
          sx={{
            bgcolor: 'background.paper', // Uses theme's white color for paper
            borderRadius: theme.shape.borderRadius * 2, // 15px rounded corners (default border-radius is 4px)
            p: { xs: 4, md: 5 }, // Responsive padding (32px to 40px)
            maxWidth: 900, // Max width of the content box
            mx: 'auto', // Centers the box horizontally
            zIndex: 10,
            // Animation styles
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
          }}
        >
          <Typography
            variant="h2" // Using h2 variant from your theme
            component="h2" // Render as h2 HTML element
            sx={{
              color: 'secondary.main', // Uses your theme's secondary-dark color
              mb: { xs: 2, md: 3 }, // Responsive margin-bottom (16px to 24px)
              fontWeight: 700,
              lineHeight: 1.2,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' }, // Responsive font size
            }}
          >
            Welcome to Mirute Ltd.: Where Comfort Meets Confidence
          </Typography>

          <Typography
            variant="body1" // Using body1 variant for description text
            sx={{
              color: 'text.primary', // Uses your theme's default text color
              mb: { xs: 3, md: 4 }, // Responsive margin-bottom (24px to 32px)
              maxWidth: 700,
              mx: 'auto', // Centers the text block
              lineHeight: 1.6,
              fontSize: { xs: '1em', md: '1.2em' }, // Responsive font size
            }}
          >
            Discover our exquisite collection of seamless push-up bras, meticulously designed to provide unparalleled comfort, a flawless silhouette, and a boost of confidence for every woman. Experience the Mirute Ltd. difference today.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: { xs: 2, md: 3 }, // Responsive gap between items (16px to 24px)
              mb: { xs: 4, md: 5 }, // Responsive margin-bottom (32px to 40px)
              flexWrap: 'wrap',
            }}
          >
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
            variant="contained" // Use contained variant for solid background
            color="primary" // Uses primary-blue from your theme
            size="large" // Make the button larger
            sx={{
              p: { xs: '15px 30px', md: '20px 45px' }, // Responsive padding
              borderRadius: '8px',
              fontSize: { xs: '1.1em', md: '1.3em' }, // Responsive font size
              fontWeight: 'bold',
              transition: 'transform 0.2s ease, box-shadow 0.3s ease',
              boxShadow: 5, // Initial shadow
              '&:hover': {
                bgcolor: 'primary.dark', // Darker blue on hover (from theme palette)
                transform: 'translateY(-3px)', // More pronounced lift
                boxShadow: 8, // More prominent shadow on hover
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