// src/pages/TailoringServicesPage.jsx
import React from 'react';
import './TailoringServicesPage.css'; // You will create this CSS file next

const TailoringServicesPage = () => {
  return (
    <div className="tailoring-services-page-container" style={{padding: '50px', textAlign: 'center'}}>
      <h2>Expert Tailoring & Repair Services</h2>
      <p>We offer precise alterations, custom fitting, bespoke designs, and professional repairs to ensure your garments always look their best.</p>
      <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px', margin: '40px 0'}}>
        <div style={{flexBasis: '300px', flexShrink: 0}}>
            <h3>Basic Alterations</h3>
            {/* Using your existing basic-alterations.jpg image */}
            <img src="/images/basic-alterations.jpg" alt="Basic Alterations" style={{maxWidth: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)'}} />
            <p style={{fontSize: '0.95em', marginTop: '15px'}}>Perfect your fit with our skilled alteration specialists.</p>
        </div>
        <div style={{flexBasis: '300px', flexShrink: 0}}>
            <h3>Custom Design</h3>
            {/* Using your existing custom-design.jpg image */}
            <img src="/images/custom-design.jpg" alt="Custom Design" style={{maxWidth: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)'}} />
            <p style={{fontSize: '0.95em', marginTop: '15px'}}>Bring your unique vision to life with our bespoke design service.</p>
        </div>
        <div style={{flexBasis: '300px', flexShrink: 0}}>
            <h3>Repair Services</h3>
            {/* Using your existing repair-services.jpg image */}
            <img src="/images/repair-services.jpg" alt="Repair Services" style={{maxWidth: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)'}} />
            <p style={{fontSize: '0.95em', marginTop: '15px'}}>Revitalize your cherished garments to their original glory.</p>
        </div>
      </div>
    </div>
  );
};

export default TailoringServicesPage;