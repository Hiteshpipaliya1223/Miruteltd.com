import React, { useState, useEffect } from 'react'; // --- UPDATED: Import useState and useEffect ---

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false); // State to control animation

  useEffect(() => {
    // Set isVisible to true after component mounts to trigger animation
    setIsVisible(true);
  }, []);

  return (
    <section style={heroStyles.container}>
      <div style={heroStyles.contentWrapper}>
        {/* --- UPDATED: Apply animation class conditionally --- */}
        <div style={{
          ...heroStyles.promoContent,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}>
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
          <button style={heroStyles.shopNowButton}>
            Shop Our Seamless Collection
          </button>
        </div>
      </div>
    </section>
  );
};

const heroStyles = {
  container: {
    backgroundColor: 'var(--light-bg)',
    padding: '60px 20px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 150px)', // Adjust based on header/footer height
    position: 'relative',
    overflow: 'hidden',
  },
  contentWrapper: {
    maxWidth: '1200px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  promoContent: {
    backgroundColor: 'var(--white)',
    borderRadius: '15px',
    padding: '40px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    maxWidth: '900px',
    margin: '0 auto',
    zIndex: 10,
    // --- Initial animation state (will be overridden by isVisible) ---
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
  },
  promoTitle: {
    fontSize: '3.5em',
    color: 'var(--secondary-dark)',
    marginBottom: '20px',
    fontWeight: '700',
    lineHeight: '1.2',
  },
  promoDescription: {
    fontSize: '1.2em',
    color: 'var(--text-color)',
    marginBottom: '30px',
    maxWidth: '700px',
    margin: '0 auto 30px auto',
    lineHeight: '1.6',
  },
  promoProducts: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginBottom: '40px',
    flexWrap: 'wrap',
  },
  promoProductItem: {
    textAlign: 'center',
    transition: 'transform 0.3s ease', // Smooth transition for hover
    '&:hover': {
      transform: 'scale(1.05)', // Subtle zoom on hover
    },
  },
  promoProductImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid var(--primary-blue)',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
  },
  promoProductText: {
    fontSize: '1em',
    color: 'var(--text-color)',
    marginTop: '10px',
    fontWeight: '500',
  },
  shopNowButton: {
    backgroundColor: 'var(--primary-blue)',
    color: 'var(--white)',
    padding: '20px 45px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.3em',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
    boxShadow: '0 5px 15px rgba(0, 123, 255, 0.3)',
    '&:hover': {
      backgroundColor: '#0056b3', // Darker blue on hover
      transform: 'translateY(-3px)', // More pronounced lift
      boxShadow: '0 8px 20px rgba(0, 123, 255, 0.4)',
    }
  },
  '@media (max-width: 768px)': {
    promoTitle: {
      fontSize: '2.5em',
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
};

export default HeroSection;