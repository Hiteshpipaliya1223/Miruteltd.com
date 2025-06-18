import React from 'react';

const ContactUsPage = () => {
  return (
    <div style={pageStyles.container}>
      <h1 style={pageStyles.heading}>Contact Mirute Ltd.</h1>
      <p style={pageStyles.paragraph}>
        We'd love to hear from you! Whether you have a question about our products,
        need assistance with an order, or just want to share your feedback, our team is here to help.
      </p>
      <div style={pageStyles.contactInfo}>
        <p><strong>Email:</strong> <a href="mailto:Mirute1307@gmail.com" style={pageStyles.link}>Mirute1307@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:07765394030" style={pageStyles.link}>07765394030</a></p>
        <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM (BST)</p>
        <p><strong>Address:</strong> [Your Company Address Here, e.g., Mirute Ltd., 123 Fashion Lane, London, UK]</p>
      </div>
      <p style={pageStyles.paragraph}>
        Feel free to reach out to us using the contact details above, and we'll get back to you as soon as possible.
      </p>
    </div>
  );
};

const pageStyles = {
  container: {
    maxWidth: '800px',
    margin: '60px auto', // Increased vertical margin
    padding: '40px', // More internal padding
    backgroundColor: 'var(--white)',
    borderRadius: '12px', // More rounded corners
    boxShadow: '0 8px 30px rgba(0,0,0,0.08)', // Professional shadow
    textAlign: 'center',
    color: 'var(--text-color)',
    lineHeight: '1.7', // Improved readability
  },
  heading: {
    fontSize: '3em', // Larger heading
    color: 'var(--primary-blue)', // Primary blue
    marginBottom: '30px', // More space
    fontWeight: '700', // Bolder
  },
  paragraph: {
    fontSize: '1.15em', // Slightly larger paragraph text
    marginBottom: '25px', // More space
    color: 'var(--secondary-dark)', // Darker text for readability
  },
  contactInfo: {
    backgroundColor: 'var(--light-bg)', // Light background for info block
    padding: '30px', // More padding
    borderRadius: '10px', // Rounded corners
    border: '1px solid var(--border-color)', // Subtle border
    marginBottom: '40px', // More space below info block
    fontSize: '1.1em',
    lineHeight: '1.8',
    boxShadow: 'inset 0 1px 5px rgba(0,0,0,0.05)', /* Inner shadow for depth */
  },
  link: {
    color: 'var(--accent-pink)', // Accent color for links
    textDecoration: 'underline', // Underline for clarity
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#e66d00', // Darker accent on hover
    },
  },
  '@media (max-width: 768px)': {
    container: {
      margin: '30px 20px', // Adjust margin on smaller screens
      padding: '30px',
    },
    heading: {
      fontSize: '2.5em',
    },
    paragraph: {
      fontSize: '1em',
    },
    contactInfo: {
      padding: '20px',
    },
  },
};

export default ContactUsPage;