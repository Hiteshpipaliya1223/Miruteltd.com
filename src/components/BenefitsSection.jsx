import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: '💖', // Heart icon for comfort/care
      title: 'Supreme Comfort',
      description: 'Experience all-day comfort with our soft, breathable fabrics designed for your well-being.',
    },
    {
      icon: '✨', // Sparkle for perfect fit/confidence
      title: 'Perfect Fit',
      description: 'Our bras are meticulously crafted to provide seamless support and a flattering silhouette for every body type.',
    },
    {
      icon: '🚀', // Rocket for innovation/quality
      title: 'Innovative Design',
      description: 'Engineered with advanced materials and thoughtful design for invisible wear under any outfit.',
    },
    {
      icon: '🇬🇧', // UK flag for local support/delivery
      title: 'Free UK Delivery',
      description: 'Enjoy complimentary standard delivery across the UK on orders over £50.',
    },
  ];

  return (
    <section style={benefitsStyles.container}>
      <h2 style={benefitsStyles.heading}>Why Choose Mirute Ltd.?</h2>
      <div style={benefitsStyles.grid}>
        {benefits.map((benefit, index) => (
          <div key={index} style={benefitsStyles.benefitCard}>
            <div style={benefitsStyles.icon}>{benefit.icon}</div>
            <h3 style={benefitsStyles.cardTitle}>{benefit.title}</h3>
            <p style={benefitsStyles.cardDescription}>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const benefitsStyles = {
  container: {
    backgroundColor: 'var(--white)', // Clean background
    padding: '80px 20px',
    textAlign: 'center',
    fontFamily: 'inherit',
  },
  heading: {
    fontSize: '3em',
    color: 'var(--secondary-dark)',
    marginBottom: '50px',
    fontWeight: '700',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Responsive grid
    gap: '30px', // Space between cards
    maxWidth: '1200px',
    margin: '0 auto',
  },
  benefitCard: {
    backgroundColor: 'var(--light-bg)', // Lighter background for cards
    padding: '35px', // More padding inside cards
    borderRadius: '10px', // Rounded corners for cards
    boxShadow: '0 4px 15px rgba(0,0,0,0.06)', // Lighter shadow for cards
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease', // --- UPDATED: Added background-color transition ---
    border: '1px solid var(--border-color)', // Subtle border
    '&:hover': {
      transform: 'translateY(-8px)', // More pronounced lift on hover
      boxShadow: '0 8px 20px rgba(0,0,0,0.12)', // Stronger shadow on hover
      backgroundColor: '#EBF6FF', // --- NEW: Subtle blue tint on hover ---
    },
  },
  icon: {
    fontSize: '4em', // Larger icons
    marginBottom: '20px', // More space below icon
    color: 'var(--primary-blue)', // Use primary blue for icons (if emoji isn't used)
  },
  cardTitle: {
    fontSize: '1.6em', // Larger title
    color: 'var(--primary-blue)', // Primary blue for card titles
    marginBottom: '12px', // More space
    fontWeight: '600', // Semi-bold
  },
  cardDescription: {
    fontSize: '1.05em', // Slightly larger description
    color: 'var(--text-color)',
    lineHeight: '1.7',
  },
  '@media (max-width: 768px)': {
    heading: {
      fontSize: '2.5em',
    },
    benefitCard: {
      padding: '25px',
    },
    icon: {
      fontSize: '3em',
    },
    cardTitle: {
      fontSize: '1.4em',
    },
    cardDescription: {
      fontSize: '1em',
    },
  },
};

export default BenefitsSection;