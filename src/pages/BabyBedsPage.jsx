// src/pages/BabyBedsPage.jsx
import React from 'react';
import './BabyBedsPage.css'; // You will create this CSS file next

const BabyBedsPage = () => {
  return (
    <div className="baby-beds-page-container" style={{padding: '50px', textAlign: 'center'}}>
      <h2>Our Baby Beds Collection</h2>
      <p>This page will showcase our exquisite range of baby beds. Crafted with love for your little one's peaceful dreams.</p>
      {/* Using your existing babybed.jpg image */}
      <img src="/images/babybed.jpg" alt="Beautiful Baby Bed" style={{maxWidth: '600px', display: 'block', margin: '30px auto', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}} />
      {/* Add more content, product listings, etc., here later */}
    </div>
  );
};

export default BabyBedsPage;