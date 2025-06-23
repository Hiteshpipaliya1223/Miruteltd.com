import React from 'react';
import './StitchingAlterationsPage.css'; // You can create this CSS file later if needed

const StitchingAlterationsPage = () => {
  return (
    <div className="stitching-alterations-page">
      <h2>Stitching & Alterations Services</h2>
      <p>Details about stitching and alterations will go here.</p>
      {/* You can add more content, images, and sections later */}
      <img src="/images/repair-services.jpg" alt="Repair Services" style={{maxWidth: '500px', margin: '20px auto', display: 'block'}} />
      <img src="/images/basic-alterations.jpg" alt="Basic Alterations" style={{maxWidth: '500px', margin: '20px auto', display: 'block'}} />
      <img src="/images/custom-design.jpg" alt="Custom Design" style={{maxWidth: '500px', margin: '20px auto', display: 'block'}} />

    </div>
  );
};

export default StitchingAlterationsPage;