// src/pages/StitchingAlterationsPage.jsx
import React from 'react';
import TimeSlotBooking from '../components/TimeSlotBooking'; // <-- This import must be correct

const StitchingAlterationsPage = () => {
  return (
    // The outermost div needs to be the single parent.
    // Ensure you use the styles defined within this component or remove them if not needed.
    <div style={pageStyles.container}> {/* Using a local style object */}
      <h1 style={pageStyles.heading}>Stitching & Alterations Service</h1> {/* This was the 'h1' line from your previous code in the image */}
      <p style={pageStyles.paragraph}>
        Welcome to our premium stitching and alterations service. Whether you need a custom-made garment, a perfect fit for your existing clothes, or intricate repairs, our skilled tailors are here to bring your vision to life.
      </p>
      <p style={pageStyles.paragraph}>
        Book your preferred time slot below for a consultation or service appointment. We look forward to providing you with impeccable craftsmanship!
      </p>

      {/* Your Time Slot Booking component goes here */}
      <TimeSlotBooking /> {/* <-- THIS LINE IS CRUCIAL AND MUST BE PRESENT! */}

      <div style={pageStyles.servicesSection}>
        <h2 style={pageStyles.servicesHeading}>Our Services Include:</h2>
        <ul style={pageStyles.servicesList}>
          <li style={pageStyles.servicesListItem}>Custom Dressmaking</li>
          <li style={pageStyles.servicesListItem}>Bridal & Formal Wear Alterations</li>
          <li style={pageStyles.servicesListItem}>Jeans & Trouser Hemming</li>
          <li style={pageStyles.servicesListItem}>Jacket & Coat Alterations</li>
          <li style={pageStyles.servicesListItem}>Button & Zipper Repair</li>
          <li style={pageStyles.servicesListItem}>General Clothing Repair</li>
        </ul>
      </div>
    </div>
  );
};

// Define styles locally for this component
const pageStyles = {
    container: {
        padding: '20px',
        maxWidth: '960px',
        margin: '40px auto',
        backgroundColor: 'var(--light-bg)', // Assuming var(--light-bg) is defined in your CSS
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    heading: {
        textAlign: 'center',
        color: 'var(--primary-dark)', // Assuming var(--primary-dark) is defined
        marginBottom: '30px',
    },
    paragraph: {
        fontSize: '1.1em',
        lineHeight: '1.6',
        color: 'var(--text-color)', // Assuming var(--text-color) is defined
        marginBottom: '20px',
    },
    servicesSection: {
        borderTop: '1px solid var(--border-color)', // Assuming var(--border-color) is defined
        paddingTop: '30px',
        marginTop: '40px',
    },
    servicesHeading: {
        color: 'var(--primary-dark)',
        marginBottom: '15px',
    },
    servicesList: {
        listStyleType: 'disc',
        paddingLeft: '25px',
        color: 'var(--text-color)',
    },
    servicesListItem: {
        marginBottom: '10px',
    }
};

export default StitchingAlterationsPage;