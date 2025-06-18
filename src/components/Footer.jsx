import React from 'react';

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
            <a href="#" style={footerStyles.socialLink}>📘</a> {/* Facebook */}
            <a href="#" style={footerStyles.socialLink}>📸</a> {/* Instagram */}
            <a href="#" style={footerStyles.socialLink}>🐦</a> {/* Twitter */}
          </div>
        </div>

        <div style={footerStyles.section}>
          <h3 style={footerStyles.heading}>Quick Links</h3>
          <ul style={footerStyles.linkList}>
            <li><a href="#" style={footerStyles.link}>Shop All Bras</a></li>
            <li><a href="#" style={footerStyles.link}>Size Guide</a></li>
            <li><a href="#" style={footerStyles.link}>FAQs</a></li>
            <li><a href="#" style={footerStyles.link}>Contact Us</a></li>
            <li><a href="#" style={footerStyles.link}>Blog</a></li>
          </ul>
        </div>

        <div style={footerStyles.section}>
          <h3 style={footerStyles.heading}>Customer Service</h3>
          <ul style={footerStyles.linkList}>
            <li><a href="#" style={footerStyles.link}>Returns & Refunds</a></li>
            <li><a href="#" style={footerStyles.link}>Shipping Info</a></li>
            <li><a href="#" style={footerStyles.link}>Privacy Policy</a></li>
            <li><a href="#" style={footerStyles.link}>Terms of Service</a></li>
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
        <p style={footerStyles.copyright}>&copy; {new Date().getFullYear()} Mirute Ltd. All rights reserved.</p>
        <div style={footerStyles.paymentIcons}>
          <span>💳</span><span>🅿️</span><span></span> {/* Placeholder for payment icons */}
        </div>
      </div>
    </footer>
  );
};

const footerStyles = {
  container: {
    backgroundColor: 'var(--secondary-dark)', // Dark background for footer
    color: 'var(--light-bg)', // Light text for contrast
    padding: '50px 20px 30px 20px', // More padding
    marginTop: 'auto', // Pushes footer to the bottom
    fontFamily: 'inherit', // Inherit from body
    borderTop: '5px solid var(--primary-blue)', // A strong blue line at the top
  },
  contentWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Adjust min width for better flow
    gap: '40px', // Increased gap
    maxWidth: '1200px',
    margin: '0 auto 50px auto', // More margin at the bottom of main content
  },
  section: {
    marginBottom: '20px', // Maintain consistency
  },
  heading: {
    fontSize: '1.4em', // Slightly larger heading
    color: 'var(--primary-blue)', // Primary blue for headings
    marginBottom: '20px', // More space
    borderBottom: '2px solid var(--primary-blue)', // Stronger underline
    paddingBottom: '10px', // More padding below underline
    fontWeight: '600', // Semi-bold
  },
  text: {
    fontSize: '0.98em', // Slightly larger text
    lineHeight: '1.7',
    marginBottom: '10px',
    color: 'var(--light-bg)', // Light text
  },
  socialIcons: {
    marginTop: '20px', // More space
    display: 'flex',
    gap: '20px', // Increased gap
  },
  socialLink: {
    fontSize: '2em', // Larger icons
    textDecoration: 'none',
    color: 'var(--light-bg)',
    transition: 'color 0.3s ease, transform 0.2s ease',
    '&:hover': {
      color: 'var(--accent-pink)', // Accent color on hover
      transform: 'scale(1.1)', // Subtle zoom
    },
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
    marginBottom: '10px', // More space
    display: 'block',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: 'var(--primary-blue)', // Primary blue on hover
    },
  },
  bottomBar: {
    borderTop: '1px solid #555555',
    paddingTop: '25px', // More padding
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
    fontSize: '0.9em', // Slightly larger
    color: '#AAAAAA',
    marginBottom: '10px',
  },
  paymentIcons: {
    fontSize: '2em', // Larger payment icons
    color: 'var(--light-bg)',
    display: 'flex',
    gap: '15px',
    marginBottom: '10px',
  },
  '@media (max-width: 768px)': {
    contentWrapper: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', // Adjust for smaller screens
    },
    bottomBar: {
      flexDirection: 'column', // Stack on small screens
    },
  },
};

export default Footer;