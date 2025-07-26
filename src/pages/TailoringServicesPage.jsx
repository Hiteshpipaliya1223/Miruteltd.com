// src/pages/TailoringServicesPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Container, Grid, Paper, Button, useTheme } from '@mui/material';

const TailoringServicesPage = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, textAlign: 'center' }}>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          mb: { xs: 2, md: 3 },
          color: 'primary.main',
          fontWeight: 700,
          fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
        }}
      >
        Expert Tailoring & Repair Services
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mb: { xs: 6, md: 8 },
          color: 'text.primary',
          maxWidth: '800px',
          mx: 'auto',
        }}
      >
        We offer precise alterations, custom fitting, bespoke designs, and professional repairs to ensure your garments always look their best.
      </Typography>

      <Grid container spacing={{ xs: 3, md: 5 }} justifyContent="center">
        {/* Basic Alterations Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: { xs: 2, md: 3 }, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box
              component="img"
              src="/images/comfort-confidence.jpg"
              alt="Basic Alterations"
              sx={{
                width: '100%',
                height: 200,
                objectFit: 'cover',
                borderRadius: '8px',
                mb: 2,
                border: `1px solid ${theme.palette.divider}`,
              }}
            />
            <Typography variant="h5" component="h3" sx={{ mb: 1, color: 'primary.dark', fontWeight: 600 }}>
              Basic Alterations
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', flexGrow: 1 }}>
              Perfect your fit with our skilled alteration specialists. From hems to waist adjustments, we ensure your clothing fits flawlessly.
            </Typography>
          </Paper>
        </Grid>

        {/* Custom Design Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: { xs: 2, md: 3 }, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box
              component="img"
              src="/images/custom-design.png"
              alt="Custom Design"
              sx={{
                width: '100%',
                height: 200,
                objectFit: 'cover',
                borderRadius: '8px',
                mb: 2,
                border: `1px solid ${theme.palette.divider}`,
              }}
            />
            <Typography variant="h5" component="h3" sx={{ mb: 1, color: 'primary.dark', fontWeight: 600 }}>
              Custom Design
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', flexGrow: 1 }}>
              Bring your unique vision to life with our bespoke design service. We create custom garments that reflect your unique style.
            </Typography>
          </Paper>
        </Grid>

        {/* Repair Services Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: { xs: 2, md: 3 }, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box
              component="img"
              src="/images/repair-services.png"
              alt="Repair Services"
              sx={{
                width: '100%',
                height: 200,
                objectFit: 'cover',
                borderRadius: '8px',
                mb: 2,
                border: `1px solid ${theme.palette.divider}`,
              }}
            />
            <Typography variant="h5" component="h3" sx={{ mb: 1, color: 'primary.dark', fontWeight: 600 }}>
              Repair Services
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', flexGrow: 1 }}>
              Revitalize your cherished garments to their original glory. From mending to re-stitching, we handle all repairs with care.
            </Typography>
          </Paper>
        </Grid>

        {/* Stitching & Alterations Service Card with Link to Booking */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: { xs: 2, md: 3 }, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box
              component="img"
              src="/images/craftsmanship.jpg"
              alt="Stitching & Alterations Service"
              sx={{
                width: '100%',
                height: 200,
                objectFit: 'cover',
                borderRadius: '8px',
                mb: 2,
                border: `1px solid ${theme.palette.divider}`,
              }}
            />
            <Typography variant="h5" component="h3" sx={{ mb: 1, color: 'primary.dark', fontWeight: 600 }}>
              Stitching & Alterations Service
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, flexGrow: 1 }}>
              Comprehensive stitching and precise alterations for a perfect fit and custom designs. Book your appointment now!
            </Typography>
            <Button
              variant="contained"
              color="miruteAccent"
              component={Link}
              to="/stitching-alterations"
              sx={{ mt: 'auto' }}
            >
              Book Now
            </Button>
          </Paper>
        </Grid>

      </Grid>
    </Container>
  );
};

export default TailoringServicesPage;