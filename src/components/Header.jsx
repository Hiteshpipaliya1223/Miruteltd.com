// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import the useCart hook
import MiruteLogo from '../assets/your-logo.svg'; // <--- NEW: Import your SVG logo file here.
                                                 //      Adjust the path if your SVG is in a different folder.

const Header = () => {
  const { getTotalItems } = useCart();
  const cartItemCount = getTotalItems();

  return (
    <header style={headerStyles.container}>
      <div style={headerStyles.topBar}>
        <div style={headerStyles.topBarLeft}>
          <button style={headerStyles.topBarLink}>GB <span style={{ fontSize: '0.8em' }}>▼</span></button>
          <button style={headerStyles.topBarLink}>COMPARE (0)</button>
        </div>
        <div style={headerStyles.topBarRight}>
          <span style={headerStyles.welcomeText}>WELCOME TO MIRUTE LTD.</span>
          <a href="mailto:Mirute1307@gmail.com" style={headerStyles.topBarLink}>CONTACT US</a>
          <Link to="/faq" style={headerStyles.topBarLink}>FAQ</Link>
          <Link to="/blog" style={headerStyles.topBarLink}>BLOG</Link>
          {/* <--- FIX: Changed the 'to' prop to match the correct route */}
          <Link to="/stitching-alterations" style={headerStyles.topBarLink}>STITCHING & ALTERATIONS</Link>
          <Link to="/register" style={headerStyles.topBarLink}>REGISTER</Link>
          <Link to="/sign-in" style={headerStyles.topBarLink}>SIGN IN</Link>
          <Link to="/register" style={headerStyles.topBarLink}>CREATE AN ACCOUNT</Link>
        </div>
      </div>

      <div style={headerStyles.mainHeader}>
        <div style={headerStyles.logo}>
          <Link to="/">
            {/* <--- UPDATED: Using the imported SVG logo */}
            <img src={MiruteLogo} alt="Mirute Ltd. Logo" style={headerStyles.logoImage} />
          </Link>
        </div>
        <div style={headerStyles.searchBar}>
          <input type="text" placeholder="Search products..." style={headerStyles.searchInput} />
          <button style={headerStyles.searchButton}>🔍</button>
        </div>
        <div style={headerStyles.contactInfo}>
          <span style={headerStyles.callNow}>CALL US NOW</span>
          <span style={headerStyles.phoneNumber}>07765394030</span>
        </div>
        <div style={headerStyles.cartIcon}>
          <Link to="/cart" style={{ ...headerStyles.cartText, textDecoration: 'none', color: 'inherit' }}>🛒</Link>
          <span style={headerStyles.cartCount}>{cartItemCount}</span>
        </div>
      </div>
    </header>
  );
};

const headerStyles = {
  container: {
    backgroundColor: 'var(--white)',
    borderBottom: '1px solid var(--border-color)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  topBar: {
    backgroundColor: 'var(--light-bg)',
    padding: '8px 20px',
    fontSize: '0.85em',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid var(--border-color)',
    flexWrap: 'wrap',
    gap: '10px',
  },
  topBarLeft: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  topBarRight: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    flexGrow: 1,
  },
  topBarLink: {
    background: 'none',
    border: 'none',
    padding: 0,
    margin: 0,
    cursor: 'pointer',
    font: 'inherit',
    textDecoration: 'none',
    color: 'var(--secondary-dark)',
    fontWeight: 'normal',
    whiteSpace: 'nowrap',
    transition: 'color 0.3s ease',
  },
  welcomeText: {
    color: 'var(--secondary-dark)',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
  },
  mainHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    flexWrap: 'wrap',
    gap: '20px',
  },
  logo: {
    flexShrink: 0,
  },
  logoImage: {
    height: '50px', // Adjust as needed
    width: 'auto',
  },
  searchBar: {
    display: 'flex',
    flexGrow: 1,
    maxWidth: '550px',
    order: 3, // Maintain order for responsiveness
    width: '100%', // Ensure it takes full width on small screens
  },
  searchInput: {
    flexGrow: 1,
    padding: '12px 15px',
    border: '1px solid var(--border-color)',
    borderRadius: '5px 0 0 5px',
    fontSize: '1em',
    outline: 'none',
  },
  searchButton: {
    backgroundColor: 'var(--primary-blue)',
    color: 'var(--white)',
    border: '1px solid var(--primary-blue)',
    padding: '12px 18px',
    borderRadius: '0 5px 5px 0',
    cursor: 'pointer',
    fontSize: '1.1em',
  },
  contactInfo: {
    textAlign: 'right',
    order: 2, // Maintain order for responsiveness
    whiteSpace: 'nowrap',
  },
  callNow: {
    display: 'block',
    fontSize: '0.85em',
    color: 'var(--text-color)',
  },
  phoneNumber: {
    display: 'block',
    fontSize: '1.4em',
    fontWeight: 'bold',
    color: 'var(--secondary-dark)',
  },
  cartIcon: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.8em',
    color: 'var(--secondary-dark)',
    position: 'relative',
    order: 4, // Maintain order for responsiveness
    marginLeft: 'auto', // Pushes it to the right
    cursor: 'pointer',
  },
  cartText: {
    marginRight: '5px',
    fontSize: '1.1em',
  },
  cartCount: {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    backgroundColor: 'var(--accent-pink)',
    color: 'var(--white)',
    borderRadius: '50%',
    padding: '3px 8px',
    fontSize: '0.7em',
    fontWeight: 'bold',
    minWidth: '22px',
    textAlign: 'center',
    boxSizing: 'border-box',
  },

  // Media queries for responsiveness
  '@media (max-width: 1024px)': { // For tablets and smaller desktops
    mainHeader: {
      gap: '15px',
      padding: '15px 15px',
    },
    logoImage: {
      height: '45px',
    },
    searchBar: {
      maxWidth: '400px',
    },
    phoneNumber: {
      fontSize: '1.2em',
    },
    cartIcon: {
      fontSize: '1.6em',
    },
  },

  '@media (max-width: 768px)': { // For larger mobile devices and small tablets
    topBar: {
      flexDirection: 'column', // Stack items vertically
      alignItems: 'flex-start', // Align items to the start
      padding: '10px 15px',
      gap: '5px',
    },
    topBarRight: {
      justifyContent: 'flex-start', // Align to start when stacked
      width: '100%', // Take full width
      gap: '10px',
    },
    topBarLeft: {
        width: '100%',
        gap: '10px',
    },
    mainHeader: {
      flexDirection: 'column', // Stack main header items vertically
      padding: '15px',
      gap: '15px',
    },
    logo: {
      width: '100%', // Logo takes full width
      textAlign: 'center',
      order: 1, // Ensure logo is at the top
    },
    logoImage: {
      height: '40px', // Smaller logo for mobile
    },
    searchBar: {
      order: 2, // Search bar below logo
      width: '100%', // Full width
      maxWidth: '100%', // Ensure it doesn't exceed parent width
    },
    contactInfo: {
      order: 3, // Contact info below search bar
      textAlign: 'center',
      width: '100%', // Full width
    },
    cartIcon: {
      order: 4, // Cart icon below contact info
      width: '100%', // Full width
      justifyContent: 'center', // Center cart icon
      marginLeft: '0', // Remove auto margin when centered
      fontSize: '1.5em',
    },
    callNow: {
      fontSize: '0.8em',
    },
    phoneNumber: {
      fontSize: '1.2em',
    },
    searchInput: {
        padding: '10px 12px',
        fontSize: '0.9em',
    },
    searchButton: {
        padding: '10px 15px',
        fontSize: '1em',
    },
  },

  '@media (max-width: 480px)': { // For smaller mobile devices
    topBar: {
      padding: '8px 10px',
      fontSize: '0.75em',
    },
    topBarLink: {
      padding: '5px 8px',
    },
    welcomeText: {
        fontSize: '0.8em',
    },
    mainHeader: {
      padding: '10px',
      gap: '10px',
    },
    logoImage: {
      height: '35px',
    },
    searchInput: {
      padding: '8px 10px',
      fontSize: '0.85em',
    },
    searchButton: {
      padding: '8px 12px',
      fontSize: '0.9em',
    },
    phoneNumber: {
      fontSize: '1em',
    },
    cartIcon: {
      fontSize: '1.3em',
    },
    cartCount: {
      padding: '2px 6px',
      fontSize: '0.6em',
      minWidth: '18px',
      top: '-6px',
      right: '-6px',
    },
  },
};

export default Header;