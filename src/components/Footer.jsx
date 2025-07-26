// src/components/Footer.jsx (UPDATED with Material-UI & unused import removed)
import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; // Alias Link from react-router-dom
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink, // Alias Link from Material-UI for external links
  // IconButton, // This import has been removed as it was not used
} from '@mui/material';

// Import social media icons (ensure you have @mui/icons-material installed)
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'secondary.main', // Uses secondary-dark from your theme
        color: 'white', // Text color will be white (or light-bg in your old theme terms)
        padding: { xs: '30px 20px', md: '50px 20px 30px 20px' }, // Responsive padding
        marginTop: 'auto', // Pushes footer to the bottom
        borderTop: '5px solid',
        borderColor: 'primary.main', // Uses primary-blue from your theme
      }}
    >
      <Container maxWidth="lg" sx={{ mb: { xs: 3, md: 6 } }}>
        <Grid container spacing={{ xs: 4, md: 5 }} justifyContent="center">
          {/* Section 1: Mirute Ltd. */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                color: 'primary.light', // Using a lighter primary shade for headings
                mb: 2,
                pb: 1.2,
                borderBottom: '2px solid',
                borderColor: 'primary.light',
                fontWeight: 600,
              }}
            >
              Mirute Ltd.
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.7, mb: 2, color: 'text.secondary' }}> {/* Using text.secondary for a slightly lighter text */}
              Your destination for premium comfort and style in seamless push-up bras.
            </Typography>
            <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
              <MuiLink href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" sx={{ color: 'white', '&:hover': { color: 'primary.light', transform: 'scale(1.1)' } }}>
                <FacebookIcon sx={{ fontSize: '2.2em' }} />
              </MuiLink>
              <MuiLink href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" sx={{ color: 'white', '&:hover': { color: 'primary.light', transform: 'scale(1.1)' } }}>
                <InstagramIcon sx={{ fontSize: '2.2em' }} />
              </MuiLink>
              <MuiLink href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" sx={{ color: 'white', '&:hover': { color: 'primary.light', transform: 'scale(1.1)' } }}>
                <TwitterIcon sx={{ fontSize: '2.2em' }} />
              </MuiLink>
            </Box>
          </Grid>

          {/* Section 2: Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                color: 'primary.light',
                mb: 2,
                pb: 1.2,
                borderBottom: '2px solid',
                borderColor: 'primary.light',
                fontWeight: 600,
              }}
            >
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              <li><MuiLink component={RouterLink} to="/shop" sx={footerLinkStyle}>Shop All Bras</MuiLink></li>
              <li><MuiLink component={RouterLink} to="/size-guide" sx={footerLinkStyle}>Size Guide</MuiLink></li>
              <li><MuiLink component={RouterLink} to="/faq" sx={footerLinkStyle}>FAQs</MuiLink></li>
              <li><MuiLink component={RouterLink} to="/contact" sx={footerLinkStyle}>Contact Us</MuiLink></li>
              <li><MuiLink component={RouterLink} to="/blog" sx={footerLinkStyle}>Blog</MuiLink></li>
            </Box>
          </Grid>

          {/* Section 3: Customer Service */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                color: 'primary.light',
                mb: 2,
                pb: 1.2,
                borderBottom: '2px solid',
                borderColor: 'primary.light',
                fontWeight: 600,
              }}
            >
              Customer Service
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              <li><MuiLink component={RouterLink} to="/returns" sx={footerLinkStyle}>Returns & Refunds</MuiLink></li>
              <li><MuiLink component={RouterLink} to="/shipping" sx={footerLinkStyle}>Shipping Info</MuiLink></li>
              <li><MuiLink component={RouterLink} to="/privacy" sx={footerLinkStyle}>Privacy Policy</MuiLink></li>
              <li><MuiLink component={RouterLink} to="/terms" sx={footerLinkStyle}>Terms of Service</MuiLink></li>
            </Box>
          </Grid>

          {/* Section 4: Contact */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                color: 'primary.light',
                mb: 2,
                pb: 1.2,
                borderBottom: '2px solid',
                borderColor: 'primary.light',
                fontWeight: 600,
              }}
            >
              Contact
            </Typography>
            <Typography variant="body2" sx={footerContactTextStyle}>Email: Mirute1307@gmail.com</Typography>
            <Typography variant="body2" sx={footerContactTextStyle}>Phone: 07765394030</Typography>
            <Typography variant="body2" sx={footerContactTextStyle}>Address: 209A Roxeth Green Avenue, Harrow, London, HA2 0QG, UK</Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Bottom Bar */}
      <Box
        sx={{
          borderTop: '1px solid #555555',
          pt: 3,
          mt: 3,
          textAlign: 'center',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' }, // Stack on small, row on medium+
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          maxWidth: 'lg', // Match container width
          margin: '0 auto',
        }}
      >
        <Typography variant="caption" sx={{ color: '#AAAAAA', mb: { xs: 1, sm: 0 } }}>
          &copy; {new Date().getFullYear()} Mirute Ltd. All rights reserved.
        </Typography>
        <Box sx={{ fontSize: '2em', color: 'white', display: 'flex', gap: 1.5, mb: { xs: 1, sm: 0 } }}>
          {/* Payment Icons - Using emojis as placeholders. Consider actual image assets for production. */}
          <span>💳</span><span>🅿️</span><span></span>
        </Box>
      </Box>
    </Box>
  );
};

// Common style for footer links
const footerLinkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontSize: '0.98em',
  mb: 1,
  display: 'block',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: 'primary.light', // Hover effect using primary color from theme
  },
};

// Common style for contact text
const footerContactTextStyle = {
  fontSize: '0.98em',
  lineHeight: '1.7',
  mb: 1,
  color: 'text.secondary',
};


export default Footer;