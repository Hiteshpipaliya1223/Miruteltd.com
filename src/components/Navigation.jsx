import React from 'react';
import { Link } from 'react-router-dom'; // Make sure this import is present

const Navigation = () => {
  return (
    <nav style={navStyles.container}>
      <ul style={navStyles.navList}>
        {/* Changed <a> to <Link> and href to to */}
        <li style={navStyles.navItem}><Link to="/" style={navStyles.navLink}>HOME</Link></li>
        <li style={navStyles.navItem}><Link to="/shop" style={navStyles.navLink}>SHOP</Link></li> {/* Used /shop as a generic shop page */}
        <li style={navStyles.navItem}><Link to="/categories" style={navStyles.navLink}>CATEGORIES</Link></li> {/* Placeholder for categories page */}
        <li style={navStyles.navItem}><Link to="/new-arrivals" style={navStyles.navLink}>NEW ARRIVALS</Link></li> {/* Placeholder */}
        <li style={navStyles.navItem}><Link to="/sale" style={navStyles.navLink}>SALE</Link></li> {/* Placeholder */}
        <li style={navStyles.navItem}><Link to="/about-us" style={navStyles.navLink}>ABOUT US</Link></li> {/* Placeholder */}
      </ul>
    </nav>
  );
};

const navStyles = {
  container: {
    backgroundColor: 'var(--primary-blue)', // Use new primary blue
    padding: '12px 20px', // Slightly more padding
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  navList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: '40px', // Increased spacing between navigation items
    flexWrap: 'wrap', // Allow items to wrap on smaller screens
  },
  navItem: {
    // No specific styles needed for the li itself, the link carries it
  },
  navLink: {
    textDecoration: 'none',
    color: 'var(--white)',
    fontSize: '1.15em', // Slightly larger font
    fontWeight: 'bold',
    padding: '8px 0',
    transition: 'color 0.3s ease, transform 0.2s ease', // Added transform for hover
    display: 'inline-block', // Necessary for transform to work correctly
    '&:hover': {
      color: 'var(--accent-pink)', // Accent color on hover
      transform: 'scale(1.05)', // Subtle zoom effect
    },
  },
  // Media query for smaller screens if items don't fit well
  '@media (max-width: 768px)': {
    navList: {
      gap: '20px', // Reduce gap on smaller screens
      justifyContent: 'flex-start', // Align left if wrapping
      overflowX: 'auto', // Allow horizontal scrolling if necessary
      paddingBottom: '5px',
      '-webkit-overflow-scrolling': 'touch', /* for smooth scrolling on iOS */
      scrollbarWidth: 'none',   /* Firefox */
      msOverflowStyle: 'none',   /* IE and Edge */
    },
    'navList::-webkit-scrollbar': { /* Chrome, Safari, Opera */
      display: 'none',
    },
    navLink: {
        fontSize: '1em', // Slightly smaller font for mobile
        padding: '5px 0',
    },
  },
  '@media (max-width: 480px)': { // For very small mobile devices
    navList: {
      gap: '15px', // Further reduce gap
    },
    navLink: {
        fontSize: '0.9em', // Even smaller font
    },
  },
};

export default Navigation;