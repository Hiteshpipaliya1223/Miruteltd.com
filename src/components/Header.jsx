import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import the useCart hook

const Header = () => {
  // Use the useCart hook to get the getTotalItems function
  const { getTotalItems } = useCart();
  const cartItemCount = getTotalItems(); // Get the current count of items in the cart

  return (
    <header style={headerStyles.container}>
      <div style={headerStyles.topBar}>
        <div style={headerStyles.topBarLeft}>
          <a href="#" style={headerStyles.topBarLink}>GB <span style={{fontSize: '0.8em'}}>▼</span></a>
          <a href="#" style={headerStyles.topBarLink}>COMPARE ()</a>
        </div>
        <div style={headerStyles.topBarRight}>
          <span style={headerStyles.welcomeText}>WELCOME TO MIRUTE LTD.</span>
          <a href="mailto:Mirute1307@gmail.com" style={headerStyles.topBarLink}>CONTACT US</a>
          <Link to="/faq" style={headerStyles.topBarLink}>FAQ</Link>
          <Link to="/blog" style={headerStyles.topBarLink}>BLOG</Link>
          <Link to="/register" style={headerStyles.topBarLink}>REGISTER</Link>
          <Link to="/sign-in" style={headerStyles.topBarLink}>SIGN IN</Link>
          <Link to="/register" style={headerStyles.topBarLink}>CREATE AN ACCOUNT</Link>
        </div>
      </div>

      <div style={headerStyles.mainHeader}>
        <div style={headerStyles.logo}>
          <Link to="/">
            <img src="https://i.imgur.com/qQXdrfu.jpeg" alt="Mirute Ltd. Logo" style={headerStyles.logoImage} />
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
          {/* Display the dynamic cart count */}
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
    height: '50px',
    width: 'auto',
  },
  searchBar: {
    display: 'flex',
    flexGrow: 1,
    maxWidth: '550px',
    order: 3,
    width: '100%',
  },
  searchInput: {
    flexGrow: 1,
    padding: '12px 15px',
    border: '1px solid var(--border-color)',
    borderRadius: '5px 0 0 5px',
    fontSize: '1em',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    '&:focus': {
      borderColor: 'var(--primary-blue)',
    }
  },
  searchButton: {
    backgroundColor: 'var(--primary-blue)',
    color: 'var(--white)',
    border: '1px solid var(--primary-blue)',
    padding: '12px 18px',
    borderRadius: '0 5px 5px 0',
    cursor: 'pointer',
    fontSize: '1.1em',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#0056b3',
    }
  },
  contactInfo: {
    textAlign: 'right',
    order: 2,
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
    order: 4,
    marginLeft: 'auto',
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
  // Media queries for larger screens
  '@media (min-width: 768px)': {
    mainHeader: {
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
    },
    searchBar: {
      order: 'unset',
      width: 'auto',
      margin: '0 20px',
    },
    contactInfo: {
      order: 'unset',
    },
    cartIcon: {
      order: 'unset',
      marginLeft: 'unset',
    },
  },
  '@media (max-width: 500px)': {
    topBar: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    mainHeader: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: '15px 10px',
    },
    logo: {
      marginBottom: '15px',
    },
    searchBar: {
      order: 3,
      marginBottom: '15px',
    },
    contactInfo: {
      order: 2,
      textAlign: 'center',
      marginBottom: '15px',
    },
    cartIcon: {
      order: 4,
      marginLeft: '0',
      width: '100%',
      justifyContent: 'center',
    },
  }
};
export default Header;