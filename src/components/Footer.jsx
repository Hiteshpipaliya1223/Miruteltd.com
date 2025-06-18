import React from 'react';
import { Link } from 'react-router-dom'; // <--- ADD THIS LINE

const Footer = () => {
  return (
    <footer style={footerStyles.container}>
      <div style={footerStyles.contentWrapper}>
        <div style={footerStyles.section}>
          <h3 style={footerStyles.heading}>Mirute Ltd.</h3>
          <p style={footerStyles.text}>
            Your destination for premium comfort and style in seamless push-up bras.
          </p>
          <div style={footerStyles.socialIcons}>
            {/* These are external links, so <a> is fine. They have valid hrefs. */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={footerStyles.socialLink}>📘</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={footerStyles.socialLink}>📸</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={footerStyles.socialLink}>🐦</a>
          </div>
        </div>

        <div style={footerStyles.section}>
          <h3 style={footerStyles.heading}>Quick Links</h3>
          <ul style={footerStyles.linkList}>
            {/* Changed <a> to <Link> for internal navigation */}
            <li><Link to="/shop" style={footerStyles.link}>Shop All Bras</Link></li>
            <li><Link to="/size-guide" style={footerStyles.link}>Size Guide</Link></li>
            <li><Link to="/faq" style={footerStyles.link}>FAQs</Link></li>
            <li><Link to="/contact" style={footerStyles.link}>Contact Us</Link></li>
            <li><Link to="/blog" style={footerStyles.link}>Blog</Link></li>
          </ul>
        </div>

        <div style={footerStyles.section}>
          <h3 style={footerStyles.heading}>Customer Service</h3>
          <ul style={footerStyles.linkList}>
            {/* Changed <a> to <Link> for internal navigation */}
            <li><Link to="/returns" style={footerStyles.link}>Returns & Refunds</Link></li>
            <li><Link to="/shipping" style={footerStyles.link}>Shipping Info</Link></li>
            <li><Link to="/privacy" style={footerStyles.link}>Privacy Policy</Link></li>
            <li><Link to="/terms" style={footerStyles.link}>Terms of Service</Link></li>
          </ul>
        </div>

        <div style={footerStyles.section}>
          <h3 style={footerStyles.heading}>Contact</h3>
          <p style={footerStyles.text}>Email: Mirute1307@gmail.com</p>
          <p style={footerStyles.text}>Phone: 07765394030</p>
          <p style={footerStyles.text}>Address: [Your Company Address Here]</p>
        </div>
      </div>

      <div style={footerStyles.bottomBar}>
        <p style={footerStyles.copyright}>
          &copy; {new Date().getFullYear()} Mirute Ltd. All rights reserved.
        </p>
        <div style={footerStyles.paymentIcons}>
          <span>💳</span><span>🅿️</span><span></span>
        </div>
      </div>
    </footer>
  );
};

const footerStyles = {
  container: {
    backgroundColor: 'var(--secondary-dark)',
    color: 'var(--light-bg)',
    padding: '50px 20px 30px 20px',
    marginTop: 'auto',
    fontFamily: 'inherit',
    borderTop: '5px solid var(--primary-blue)',
  },
  contentWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
    maxWidth: '1200px',
    margin: '0 auto 50px auto',
  },
  section: {
    marginBottom: '20px',
  },
  heading: {
    fontSize: '1.4em',
    color: 'var(--primary-blue)',
    marginBottom: '20px',
    borderBottom: '2px solid var(--primary-blue)',
    paddingBottom: '10px',
    fontWeight: '600',
  },
  text: {
    fontSize: '0.98em',
    lineHeight: '1.7',
    marginBottom: '10px',
    color: 'var(--light-bg)',
  },
  socialIcons: {
    marginTop: '20px',
    display: 'flex',
    gap: '20px',
  },
  socialLink: {
    fontSize: '2em',
    textDecoration: 'none',
    color: 'var(--light-bg)',
    transition: 'color 0.3s ease, transform 0.2s ease',
  },
  linkList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: 'var(--light-bg)',
    fontSize: '0.98em',
    marginBottom: '10px',
    display: 'block',
    transition: 'color 0.3s ease',
  },
  bottomBar: {
    borderTop: '1px solid #555555',
    paddingTop: '25px',
    marginTop: '25px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  copyright: {
    fontSize: '0.9em',
    color: '#AAAAAA',
    marginBottom: '10px',
  },
  paymentIcons: {
    fontSize: '2em',
    color: 'var(--light-bg)',
    display: 'flex',
    gap: '15px',
    marginBottom: '10px', // Added this from your provided code
  },
};

export default Footer;