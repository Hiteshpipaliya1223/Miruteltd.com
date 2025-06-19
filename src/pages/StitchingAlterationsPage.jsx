// src/pages/StitchingAlterationsPage.jsx
import React from 'react';
// Assuming you have a component that handles the actual booking logic and display
// import TimeSlotBooking from '../components/TimeSlotBooking'; // Uncomment and import if you have this

const StitchingAlterationsPage = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '960px', margin: '40px auto', backgroundColor: 'var(--light-bg)', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h1 style={{ textAlign: 'center', color: 'var(--primary-dark)', marginBottom: '30px' }}>Stitching & Alterations Service</h1>
      <p style={{ fontSize: '1.1em', lineHeight: '1.6', color: 'var(--text-color)', marginBottom: '20px' }}>
        Welcome to our premium stitching and alterations service. Whether you need a custom-made garment, a perfect fit for your existing clothes, or intricate repairs, our skilled tailors are here to bring your vision to life.
      </p>
      <p style={{ fontSize: '1.1em', lineHeight: '1.6', color: 'var(--text-color)', marginBottom: '40px' }}>
        Book your preferred time slot below for a consultation or service appointment. We look forward to providing you with impeccable craftsmanship!
      </p>

      {/* You will place your Time Slot Booking component here */}
      {/* For example: */}
      {/* <TimeSlotBooking /> */}

      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '30px', marginTop: '40px' }}>
        <h2 style={{ color: 'var(--primary-dark)', marginBottom: '15px' }}>Our Services Include:</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '25px', color: 'var(--text-color)' }}>
          <li style={{ marginBottom: '10px' }}>Custom Dressmaking</li>
          <li style={{ marginBottom: '10px' }}>Bridal & Formal Wear Alterations</li>
          <li style={{ marginBottom: '10px' }}>Jeans & Trouser Hemming</li>
          <li style={{ marginBottom: '10px' }}>Jacket & Coat Alterations</li>
          <li style={{ marginBottom: '10px' }}>Button & Zipper Repair</li>
          <li style={{ marginBottom: '10px' }}>General Clothing Repair</li>
        </ul>
      </div>
    </div>
  );
};

export default StitchingAlterationsPage;