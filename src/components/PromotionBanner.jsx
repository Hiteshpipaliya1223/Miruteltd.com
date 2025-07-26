// src/components/PromotionBanner.jsx (UPDATED with Material-UI)
import React from 'react';
import { Box, Typography } from '@mui/material'; // Import Material-UI components

const PromotionBanner = () => {
  return (
    <Box
      sx={{
        bgcolor: 'miruteAccent.main', // Uses the custom accentPink from your theme
        color: 'miruteAccent.contrastText', // Uses the contrastText color defined for miruteAccent in your theme
        padding: { xs: '12px 20px', md: '16px 25px' }, // Responsive padding (approx 12-16px vertical)
        textAlign: 'center',
        fontSize: { xs: '1em', md: '1.1em' }, // Responsive font size
        fontWeight: 'bold',
        borderRadius: '8px', // More rounded corners
        maxWidth: '1000px', // Confine width a bit
        mx: 'auto', // margin-left: auto, margin-right: auto (centers the block)
        my: { xs: 2, md: 3 }, // margin-top and margin-bottom (2 -> 16px, 3 -> 24px)
        boxShadow: 3, // Uses Material-UI's shadow system (corresponds to theme.shadows[3])
        textShadow: '1px 1px 2px rgba(0,0,0,0.1)', // Subtle text shadow (direct CSS)
      }}
    >
      <Typography variant="body1" component="p" sx={{ m: 0 }}>
        ✨ **FREE UK DELIVERY** on all orders over £50! ✨
      </Typography>
    </Box>
  );
};

// The 'bannerStyles' object is no longer needed as styles are applied directly via the 'sx' prop.
// const bannerStyles = { ... };

export default PromotionBanner;