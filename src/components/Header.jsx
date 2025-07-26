// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import MiruteLogo from '../assets/your-logo.svg';

// Material-UI Imports
import {
  AppBar, Toolbar, Typography, Button, IconButton, Badge,
  Box, Container, InputBase, Drawer, List, ListItem, ListItemText,
  useMediaQuery, useTheme, Menu, MenuItem,
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import BabyBedIcon from '@mui/icons-material/KingBed';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

import './Header.css';

const Header = () => {
  const { getCartItemCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElShop, setAnchorElShop] = useState(null);
  const [anchorElServices, setAnchorElServices] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleShopMenuOpen = (event) => {
    setAnchorElShop(event.currentTarget);
  };

  const handleShopMenuClose = () => {
    setAnchorElShop(null);
  };

  const handleServicesMenuOpen = (event) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleServicesMenuClose = () => {
    setAnchorElServices(null);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Blog', path: '/blog' },
  ];

  const shopDropdownItems = [
    { name: 'All Products', path: '/shop' },
    { name: 'New Arrivals', path: '/shop?category=new-arrivals' },
    { name: 'Best Sellers', path: '/shop?category=best-sellers' },
  ];

  const servicesDropdownItems = [
    { name: 'Stitching & Alterations', path: '/stitching-alterations' },
    { name: 'Baby Beds', path: '/baby-beds' },
    { name: 'Tailoring Services', path: '/tailoring-services' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography variant="h6" sx={{ my: 1, color: 'primary.main' }}>
          Mirute Ltd.
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem component={Link} to={item.path} key={item.name} onClick={handleDrawerToggle} disablePadding>
            <ListItemText primary={item.name} sx={{ textAlign: 'center' }} />
          </ListItem>
        ))}
        {/* Shop Dropdown in Mobile */}
        <ListItem button onClick={handleShopMenuOpen}>
            <ListItemText primary="Shop" sx={{ textAlign: 'center' }} />
            <ExpandMoreIcon />
        </ListItem>
        <Menu
            anchorEl={anchorElShop}
            open={Boolean(anchorElShop)}
            onClose={handleShopMenuClose}
            MenuListProps={{
                'aria-labelledby': 'shop-button',
            }}
        >
            {shopDropdownItems.map((item) => (
                <MenuItem
                    key={item.name}
                    onClick={() => { handleShopMenuClose(); handleDrawerToggle(); }}
                    component={Link}
                    to={item.path}
                >
                    <ListItemText primary={item.name} />
                </MenuItem>
            ))}
        </Menu>
        {/* Services Dropdown in Mobile */}
        <ListItem button onClick={handleServicesMenuOpen}>
            <ListItemText primary="Services" sx={{ textAlign: 'center' }} />
            <ExpandMoreIcon />
        </ListItem>
        <Menu
            anchorEl={anchorElServices}
            open={Boolean(anchorElServices)}
            onClose={handleServicesMenuClose}
            MenuListProps={{
                'aria-labelledby': 'services-button',
            }}
        >
            {servicesDropdownItems.map((item) => (
                <MenuItem
                    key={item.name}
                    onClick={() => { handleServicesMenuClose(); handleDrawerToggle(); }}
                    component={Link}
                    to={item.path}
                >
                    <ListItemText primary={item.name} />
                </MenuItem>
            ))}
        </Menu>

        <Divider sx={{ my: 1 }} />
        <ListItem component={Link} to="/register" onClick={handleDrawerToggle} disablePadding>
          <ListItemText primary="Register" sx={{ textAlign: 'center' }} />
        </ListItem>
        <ListItem component={Link} to="/sign-in" onClick={handleDrawerToggle} disablePadding>
          <ListItemText primary="Sign In" sx={{ textAlign: 'center' }} />
        </ListItem>
        <ListItem component={Link} to="/cart" onClick={handleDrawerToggle} disablePadding>
          <ListItemText primary={`Cart (${getCartItemCount()})`} sx={{ textAlign: 'center' }} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: 'white', borderBottom: '1px solid #e0e0e0' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: '64px !important' }}>
          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' }, color: 'text.primary' }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' },
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <img src={MiruteLogo} alt="Mirute Ltd. Logo" style={{ height: '40px', marginRight: '8px' }} />
            {!isMobile && (
                <span className="logo-text">Mirute Ltd.</span>
            )}
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              {menuItems.map((item) => (
                <Button key={item.name} component={Link} to={item.path} sx={{ color: 'text.primary', mx: 1 }}>
                  {item.name}
                </Button>
              ))}
              {/* Shop Dropdown */}
              <Button
                id="shop-button"
                aria-controls={anchorElShop ? 'shop-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={anchorElShop ? 'true' : undefined}
                onClick={handleShopMenuOpen}
                sx={{ color: 'text.primary', mx: 1 }}
                endIcon={<ExpandMoreIcon />}
              >
                Shop
              </Button>
              <Menu
                id="shop-menu"
                anchorEl={anchorElShop}
                open={Boolean(anchorElShop)}
                onClose={handleShopMenuClose}
                MenuListProps={{
                  'aria-labelledby': 'shop-button',
                }}
              >
                {shopDropdownItems.map((item) => (
                  <MenuItem key={item.name} onClick={handleShopMenuClose} component={Link} to={item.path}>
                    <LocalMallIcon fontSize="small" sx={{ mr: 1 }} /> {item.name}
                  </MenuItem>
                ))}
              </Menu>

              {/* Services Dropdown */}
              <Button
                id="services-button"
                aria-controls={anchorElServices ? 'services-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={anchorElServices ? 'true' : undefined}
                onClick={handleServicesMenuOpen}
                sx={{ color: 'text.primary', mx: 1 }}
                endIcon={<ExpandMoreIcon />}
              >
                Services
              </Button>
              <Menu
                id="services-menu"
                anchorEl={anchorElServices}
                open={Boolean(anchorElServices)}
                onClose={handleServicesMenuClose}
                MenuListProps={{
                  'aria-labelledby': 'services-button',
                }}
              >
                {servicesDropdownItems.map((item) => (
                  <MenuItem key={item.name} onClick={handleServicesMenuClose} component={Link} to={item.path}>
                    {item.name === 'Baby Beds' && <BabyBedIcon fontSize="small" sx={{ mr: 1 }} />}
                    {item.name === 'Tailoring Services' && <DesignServicesIcon fontSize="small" sx={{ mr: 1 }} />}
                    {item.name === 'Stitching & Alterations' && <DesignServicesIcon fontSize="small" sx={{ mr: 1 }} />}
                    {item.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}

          {/* Search and Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', ml: { xs: 0, md: 2 } }}>
            {/* Search Input (Desktop only for now) */}
            {!isMobile && (
              <Box sx={{ position: 'relative', borderRadius: theme.shape.borderRadius, bgcolor: 'action.hover', '&:hover': { bgcolor: 'action.selected' }, mr: 2, display: 'flex', alignItems: 'center' }}>
                <SearchIcon sx={{ color: 'text.secondary', ml: 1 }} />
                <InputBase
                  placeholder="Search products..."
                  inputProps={{ 'aria-label': 'search' }}
                  sx={{ color: 'inherit', '& .MuiInputBase-input': { p: 1, width: '15ch', transition: 'width 0.3s', '&:focus': { width: '25ch' }}}}
                />
              </Box>
            )}

            {/* Phone Number (Desktop only) */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary', mr: 2 }}>
                <PhoneIcon sx={{ mr: 0.5 }} />
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  07765394030
                </Typography>
              </Box>
            )}

            {/* Account Icon */}
            <IconButton component={Link} to="/sign-in" color="inherit" sx={{ color: 'text.secondary' }}>
              <AccountCircle />
              {!isMobile && <Typography variant="body2" sx={{ ml: 0.5 }}>Account</Typography>}
            </IconButton>

            {/* Cart Icon */}
            <IconButton component={Link} to="/cart" color="inherit" sx={{ color: 'text.secondary' }}>
              <Badge badgeContent={getCartItemCount()} color="error">
                <ShoppingCartIcon />
              </Badge>
              {!isMobile && <Typography variant="body2" sx={{ ml: 0.5 }}>Cart</Typography>}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </AppBar>
  );
};

export default Header;