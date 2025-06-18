import React from 'react';

const PromotionBanner = () => {
  return (
    <div style={bannerStyles.container}>
      <p style={bannerStyles.text}>
        ✨ **FREE UK DELIVERY** on all orders over £50! ✨
      </p>
    </div>
  );
};

const bannerStyles = {
  container: {
    backgroundColor: 'var(--accent-pink)', // Use new accent pink
    color: 'var(--white)', // White text for contrast
    padding: '12px 20px', // Slightly more padding
    textAlign: 'center',
    fontSize: '1.1em', // Slightly larger font
    fontWeight: 'bold',
    borderRadius: '8px', // More rounded corners
    maxWidth: '1000px', // Confine width a bit
    margin: '20px auto', // Increased margin from other elements, center
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)', // More prominent shadow
    textShadow: '1px 1px 2px rgba(0,0,0,0.1)', // Subtle text shadow for pop
  },
  text: {
    margin: 0,
    // Ensure text within spans proper font-weight etc.
  },
};

export default PromotionBanner;