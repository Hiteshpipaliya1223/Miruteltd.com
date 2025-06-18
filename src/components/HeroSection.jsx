import React from 'react';

const HeroSection = () => {
  return (
    <section style={heroStyles.container}>
      <div style={heroStyles.contentWrapper}>
        <div style={heroStyles.promoContent}>
          <h2 style={heroStyles.promoTitle}>Welcome to Mirute Ltd.: Where Comfort Meets Confidence</h2>
          <p style={heroStyles.promoDescription}>
            Discover our exquisite collection of seamless push-up bras, meticulously designed to provide unparalleled comfort, a flawless silhouette, and a boost of confidence for every woman. Experience the Mirute Ltd. difference today.
          </p>
          <div style={heroStyles.promoProducts}>
            <div style={heroStyles.promoProductItem}>
              <img src="https://i.imgur.com/8sYLXVq.png" alt="Black Seamless Bra" style={heroStyles.promoProductImage} />
              <p style={heroStyles.promoProductText}>Smooth Silhouette</p>
            </div>
             <div style={heroStyles.promoProductItem}>
              <img src="https://i.imgur.com/M2Q9xff.png" alt="Purple Seamless Bra" style={heroStyles.promoProductImage} />
              <p style={heroStyles.promoProductText}>Ultimate Comfort</p>
            </div>
             <div style={heroStyles.promoProductItem}>
              <img src="https://i.imgur.com/Kbz8ZDD.png" alt="Sky Seamless Bra" style={heroStyles.promoProductImage} />
              <p style={heroStyles.promoProductText}>Perfect Lift</p>
            </div>
          </div>
          <div style={heroStyles.promoPrice}>
            Bras from <span style={heroStyles.priceHighlight}>£11.99</span>
          </div>
          <button style={heroStyles.shopNowButton}>Shop Our Seamless Collection</button>
        </div>
      </div>
    </section>
  );
};

const heroStyles = {
  container: {
    backgroundColor: 'var(--light-bg)', // Consistent light background
    padding: '80px 20px', // More vertical padding for impact
    margin: '30px 0', // More margin from surrounding elements
    overflow: 'hidden', // Ensures no overflow issues with animations
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px', // Increased gap
    maxWidth: '1000px', // Slightly wider content area
    margin: '0 auto',
    alignItems: 'center',
    textAlign: 'center',
  },
  promoContent: {
    flex: '1',
    width: '100%',
    backgroundColor: 'var(--white)', // White card background
    padding: '50px 40px', // More padding inside card
    borderRadius: '12px', // More rounded corners
    boxShadow: '0 8px 30px rgba(0,0,0,0.1)', // More pronounced shadow
  },
  promoTitle: {
    color: 'var(--secondary-dark)', // Darker text for professionalism
    fontSize: '3.2em', // Larger, more impactful title
    marginBottom: '25px',
    lineHeight: '1.2',
    fontWeight: '700', // Bolder title
  },
  promoDescription: {
    fontSize: '1.3em', // Larger description
    color: 'var(--text-color)',
    marginBottom: '40px',
    maxWidth: '800px',
    margin: '0 auto 40px auto',
  },
  promoProducts: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '40px', // More space between product images
    marginBottom: '40px',
  },
  promoProductItem: {
    textAlign: 'center',
    flex: '0 0 auto',
    maxWidth: '160px', // Larger product image containers
  },
  promoProductImage: {
    width: '140px', // Larger images
    height: '140px',
    objectFit: 'contain',
    border: '2px solid var(--border-color)', // More prominent border
    borderRadius: '10px', // More rounded image corners
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)', // Soft shadow for images
    transition: 'transform 0.3s ease', // Add transition for hover effect
    '&:hover': {
      transform: 'scale(1.08)', // Subtle zoom on hover
    }
  },
  promoProductText: {
    fontSize: '1.1em', // Larger text
    color: 'var(--secondary-dark)',
    marginTop: '15px', // More space
    fontWeight: 'bold',
  },
  promoPrice: {
    fontSize: '2.2em', // Larger price text
    color: 'var(--secondary-dark)',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  priceHighlight: {
    fontSize: '1.2em', // Relative size to parent
    color: 'var(--primary-blue)', // Use primary blue for highlight
    fontWeight: '900', // Extra bold for emphasis
    marginLeft: '10px',
  },
  shopNowButton: {
    backgroundColor: 'var(--primary-blue)',
    color: 'var(--white)',
    padding: '20px 45px', // Larger button
    border: 'none',
    borderRadius: '8px', // More rounded
    fontSize: '1.3em', // Larger font
    fontWeight: 'bold', // Bolder text
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
    boxShadow: '0 5px 15px rgba(0, 123, 255, 0.3)', // Shadow for button pop
    '&:hover': {
      backgroundColor: '#0056b3', // Darker blue on hover
      transform: 'translateY(-3px)', // More pronounced lift
      boxShadow: '0 8px 20px rgba(0, 123, 255, 0.4)', // More shadow on hover
    }
  },
  '@media (max-width: 768px)': {
    promoTitle: {
      fontSize: '2.5em', // Adjust for smaller screens
    },
    promoDescription: {
      fontSize: '1em',
    },
    promoProducts: {
      gap: '20px',
    },
    promoProductImage: {
      width: '100px',
      height: '100px',
    },
    promoProductItem: {
      maxWidth: '120px',
    },
    shopNowButton: {
      padding: '15px 30px',
      fontSize: '1.1em',
    },
  },
  '@media (max-width: 480px)': {
    promoTitle: {
      fontSize: '2em',
    },
    promoContent: {
      padding: '30px 20px',
    },
    promoProducts: {
      flexDirection: 'column', // Stack products vertically on very small screens
      alignItems: 'center',
    },
    promoProductImage: {
      width: '120px',
      height: '120px',
    },
  }
};

export default HeroSection;