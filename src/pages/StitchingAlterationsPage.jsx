// src/pages/StitchingAlterationsPage.jsx

import React from 'react';
// Assuming you have some existing content for this page,
// or we can add a basic structure.
import TimeSlotBooking from '../components/TimeSlotBooking'; // <--- IMPORT IT HERE!

const StitchingAlterationsPage = () => {
  return (
    <div style={pageStyles.container}>
      <h1 style={pageStyles.heading}>Stitching & Alterations Services</h1>
      <p style={pageStyles.paragraph}>
        We offer expert stitching and alteration services to perfect your garments.
        Book a consultation or service slot below.
      </p>
      
      {/* --- RENDER THE BOOKING COMPONENT HERE --- */}
      <TimeSlotBooking /> 

      {/* Add any other content related to stitching/alterations here */}
      <div style={pageStyles.section}>
        <h2 style={pageStyles.subHeading}>Our Services Include:</h2>
        <ul>
          <li>Custom garment stitching</li>
          <li>Hemming and lengthening</li>
          <li>Waist adjustments</li>
          <li>Zipper and button repair/replacement</li>
          <li>And much more!</li>
        </ul>
      </div>

    </div>
  );
};

const pageStyles = {
    container: {
        padding: '20px',
        maxWidth: '900px',
        margin: '20px auto',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    },
    heading: {
        textAlign: 'center',
        color: 'var(--primary-blue)',
        marginBottom: '20px',
        fontSize: '2.5em',
    },
    paragraph: {
        textAlign: 'center',
        marginBottom: '30px',
        lineHeight: '1.6',
        color: 'var(--text-color)',
    },
    section: {
        marginTop: '40px',
        borderTop: '1px solid var(--border-color)',
        paddingTop: '30px',
    },
    subHeading: {
        color: 'var(--secondary-dark)',
        marginBottom: '15px',
        fontSize: '1.8em',
    }
    // You can add more styles as needed
};

export default StitchingAlterationsPage;