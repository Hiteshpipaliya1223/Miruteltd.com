import React from 'react';
import './ProductDisplay.css';

const ProductDisplay = () => {
    const categories = [
        "Stitching Consultation",
        "Basic Alteration",
        "Complex Alteration",
        "Custom Design",
        "Fabric Sourcing",
        "Measurement Guide"
    ];

    const displaySections = [
        // --- Product Collection Images ---
        {
            title: "Dresses Collection", // More specific title
            description: "Discover our elegant range of custom-stitched dresses.",
            imageUrl: "https://i.imgur.com/MfE9DhO.png", // Your first product image
            linkText: "Explore Dresses",
            linkUrl: "/Products" // Assuming /Products leads to a product listing
        },
        {
            title: "Tops & Blouses", // Another specific title
            description: "Stylish tops perfectly tailored for you.",
            imageUrl: "https://i.imgur.com/2EIXSYr.png", // Your second product image
            linkText: "View Tops",
            linkUrl: "/Products"
        },
        {
            title: "Jackets & Outerwear", // Another specific title
            description: "Browse our collection of custom jackets.",
            imageUrl: "https://i.imgur.com/Yb0H4F7.png", // Your third product image
            linkText: "Discover Jackets",
            linkUrl: "/Products"
        },
        {
            title: "Custom Designs", // Example for another product
            description: "Bring your unique vision to life with our custom design service.",
            imageUrl: "https://i.imgur.com/KeXZUdg.png", // Your fourth product image
            linkText: "Start Designing",
            linkUrl: "/Products"
        },
        {
            title: "Accessories Showcase", // Example for another product
            description: "Complete your look with our curated accessories.",
            imageUrl: "https://i.imgur.com/qiLsXaA.png", // Your fifth product image
            linkText: "Shop Accessories",
            linkUrl: "/Products"
        },
        {
            title: "New Arrivals", // Example for another product
            description: "Be the first to see our latest fashion pieces.",
            imageUrl: "https://i.imgur.com/T7iZgLg.png", // Your sixth product image
            linkText: "See What's New",
            linkUrl: "/Products"
        },

        // --- Alterations Services Images ---
        {
            title: "Basic Alterations", // More specific title
            description: "Quick and reliable adjustments for a perfect fit.",
            imageUrl: "https://i.imgur.com/czkLVWR.jpeg", // Your first alteration image
            linkText: "Get Basic Fit",
            linkUrl: "/stitching-alterations"
        },
        {
            title: "Complex Tailoring", // Another specific title
            description: "Intricate modifications for sophisticated garments.",
            imageUrl: "https://i.imgur.com/juEbUcq.jpeg", // Your second alteration image
            linkText: "Expert Tailoring",
            linkUrl: "/stitching-alterations"
        },
        {
            title: "Custom Fitting", // Another specific title
            description: "Personalized fittings for your unique body shape.",
            imageUrl: "https://i.imgur.com/pTGkT97.jpeg", // Your third alteration image
            linkText: "Book a Fitting",
            linkUrl: "/stitching-alterations"
        },
        {
            title: "Repair Services", // Example for another alteration type
            description: "Mending and repairing your favorite clothes.",
            imageUrl: "https://i.imgur.com/zPTTSfc.jpeg", // Your fourth alteration image
            linkText: "View Repairs",
            linkUrl: "/stitching-alterations"
        },
        {
            title: "Fabric Transformations", // Example for another alteration type
            description: "Transform old garments into new styles.",
            imageUrl: "https://i.imgur.com/rDDnn0C.jpeg", // Your fifth alteration image
            linkText: "Re-style Now",
            linkUrl: "/stitching-alterations"
        }
    ];

    return (
        <div className="product-display-container">
            <header className="main-header">
                <h1 className="main-title">OUR SERVICES & PRODUCTS</h1>
                <nav className="category-nav">
                    {categories.map((category, index) => (
                        <a key={index} href={`#${category.toLowerCase().replace(/\s/g, '-')}`} className="category-item">
                            {category}
                        </a>
                    ))}
                </nav>
            </header>

            <main className="display-sections">
                {displaySections.map((section, index) => (
                    <section
                        key={index}
                        className="display-section"
                        style={{ backgroundImage: `url(${section.imageUrl})` }}
                    >
                        <div className="overlay-content">
                            <h2 className="section-title">{section.title}</h2>
                            <p className="section-description">{section.description}</p>
                            <a href={section.linkUrl} className="section-link">{section.linkText} &rarr;</a>
                        </div>
                    </section>
                ))}
            </main>
        </div>
    );
};

export default ProductDisplay;