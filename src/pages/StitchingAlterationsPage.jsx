// src/pages/StitchingAlterationsPage.jsx
import React from 'react';
import { Typography, Container, Box, useTheme } from '@mui/material';
import TimeSlotBooking from '../components/TimeSlotBooking';

const StitchingAlterationsPage = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, textAlign: 'center' }}>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          mb: { xs: 2, md: 3 },
          color: theme.palette.primary.dark,
          fontWeight: 700,
          fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
        }}
      >
        Stitching & Alterations Service
      </Typography>

      <Typography
        variant="body1"
        color={theme.palette.text.primary}
        sx={{ mb: { xs: 4, md: 6 }, maxWidth: 800, mx: 'auto' }}
      >
        Welcome to our premium stitching and alterations service. Whether you need a custom-made garment, a perfect fit for your existing clothes, or intricate repairs, our skilled tailors are here to bring your vision to life.
      </Typography>
      <Typography
        variant="body1"
        color={theme.palette.text.primary}
        sx={{ mb: { xs: 6, md: 8 }, maxWidth: 800, mx: 'auto' }}
      >
        Book your preferred time slot below for a consultation or service appointment. We look forward to providing you with impeccable craftsmanship!
      </Typography>

      <TimeSlotBooking serviceType="Stitching & Alterations" />

      <Box sx={{ mt: { xs: 8, md: 10 }, borderTop: 1, borderColor: theme.palette.divider, pt: { xs: 4, md: 5 } }}>
        <Typography variant="h4" component="h2" sx={{ mb: 3, color: theme.palette.primary.dark }}>
          Our Services Include:
        </Typography>
        <Box
          component="ul"
          sx={{
            listStyleType: 'disc',
            listStylePosition: 'inside',
            paddingLeft: 0,
            display: 'inline-block',
            textAlign: 'left',
          }}
        >
          <Typography component="li" variant="body1" sx={{ mb: 1, color: theme.palette.text.primary }}>Custom Dressmaking</Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1, color: theme.palette.text.primary }}>Bridal & Formal Wear Alterations</Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1, color: theme.palette.text.primary }}>Jeans & Trouser Hemming</Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1, color: theme.palette.text.primary }}>Jacket & Coat Alterations</Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1, color: theme.palette.text.primary }}>Button & Zipper Repair</Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1, color: theme.palette.text.primary }}>General Clothing Repair</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default StitchingAlterationsPage;