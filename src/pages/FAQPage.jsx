import React from 'react';

const FAQPage = () => {
  const faqs = [
    {
      question: "What materials are Mirute Ltd. bras made from?",
      answer: "Our bras are crafted from high-quality, breathable, and skin-friendly fabrics, primarily a blend of nylon and spandex to ensure comfort, stretch, and durability. Specific material compositions are listed on each product page."
    },
    {
      question: "How do I find my correct bra size?",
      answer: "We recommend referring to our comprehensive 'Size Guide' available on our website. It includes instructions on how to measure yourself accurately to find your perfect Mirute Ltd. fit. If you're still unsure, feel free to contact our customer support for personalized assistance."
    },
    {
      question: "What is your return and exchange policy?",
      answer: "We offer a hassle-free return and exchange policy within 30 days of purchase, provided the items are unworn, unwashed, and in their original packaging with tags attached. Please see our 'Returns' page for full details and instructions."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we offer free UK delivery on all orders over £50. For international shipping inquiries, please contact our customer service team. We are working on expanding our delivery options soon!"
    },
    {
      question: "How should I care for my Mirute Ltd. bra?",
      answer: "To ensure the longevity of your bra, we recommend hand washing with mild detergent and air drying. Avoid using harsh chemicals or machine drying. Detailed care instructions are also on the product label."
    }
  ];

  return (
    <div style={pageStyles.container}>
      <h1 style={pageStyles.heading}>Frequently Asked Questions</h1>
      <p style={pageStyles.paragraph}>
        Find answers to the most common questions about Mirute Ltd. products,
        ordering, and more.
      </p>
      <div style={pageStyles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} style={pageStyles.faqItem}>
            <h3 style={pageStyles.faqQuestion}>{faq.question}</h3>
            <p style={pageStyles.faqAnswer}>{faq.answer}</p>
          </div>
        ))}
      </div>
      <p style={pageStyles.paragraph}>
        Can't find what you're looking for? Don't hesitate to <a href="mailto:Mirute1307@gmail.com" style={pageStyles.link}>contact our support team</a>.
      </p>
    </div>
  );
};

const pageStyles = {
  container: {
    maxWidth: '900px',
    margin: '60px auto', // Increased vertical margin
    padding: '40px', // More internal padding
    backgroundColor: 'var(--white)',
    borderRadius: '12px', // More rounded corners
    boxShadow: '0 8px 30px rgba(0,0,0,0.08)', // Professional shadow
    textAlign: 'left', // Align text to left
    color: 'var(--text-color)',
    lineHeight: '1.7', // Improved readability
  },
  heading: {
    fontSize: '3em', // Larger heading
    color: 'var(--primary-blue)', // Primary blue
    marginBottom: '30px', // More space
    textAlign: 'center', // Center heading
    fontWeight: '700', // Bolder
  },
  paragraph: {
    fontSize: '1.15em', // Slightly larger paragraph text
    marginBottom: '40px', // More space
    textAlign: 'center', // Center paragraph
    color: 'var(--secondary-dark)', // Darker text for readability
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px', // Increased gap between FAQ items
  },
  faqItem: {
    padding: '25px', // More padding
    border: '1px solid var(--border-color)', // Subtle border
    borderRadius: '10px', // Rounded corners
    backgroundColor: 'var(--light-bg)', // Light background for items
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)', // Soft shadow
  },
  faqQuestion: {
    fontSize: '1.4em', // Larger question text
    color: 'var(--secondary-dark)', // Darker text
    marginBottom: '10px',
    fontWeight: '600', // Semi-bold
  },
  faqAnswer: {
    fontSize: '1em', // Standard answer text size
    color: 'var(--text-color)',
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
      margin: '30px 20px',
      padding: '30px',
    },
    heading: {
      fontSize: '2.5em',
    },
    paragraph: {
      fontSize: '1em',
    },
    faqItem: {
      padding: '20px',
    },
    faqQuestion: {
      fontSize: '1.2em',
    },
  },
};

export default FAQPage;