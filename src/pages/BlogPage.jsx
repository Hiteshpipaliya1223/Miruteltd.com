import React from 'react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Finding Your Perfect Bra Fit",
      date: "June 15, 2025",
      excerpt: "Are you wearing the right bra size? Discover our comprehensive guide to measuring yourself and finding the perfect fit for ultimate comfort and support. Learn tips and tricks from Mirute Ltd. experts!",
      image: "https://via.placeholder.com/400x250?text=Bra+Fit+Guide"
    },
    {
      id: 2,
      title: "Why Seamless Bras Are a Must-Have for Every Wardrobe",
      date: "May 28, 2025",
      excerpt: "Seamless bras offer unparalleled smoothness and comfort, making them invisible under any outfit. Explore the benefits of adding seamless styles to your collection and how they can elevate your everyday look.",
      image: "https://via.placeholder.com/400x250?text=Seamless+Bra+Benefits"
    },
    {
      id: 3,
      title: "Upcoming Stitching & Alteration Services at Mirute Ltd.",
      date: "May 10, 2025",
      excerpt: "Exciting news! Mirute Ltd. is soon launching professional stitching and alteration services to help you achieve the perfect fit for all your garments. Stay tuned for more details!",
      image: "https://via.placeholder.com/400x250?text=Alteration+Services"
    }
  ];

  return (
    <div style={pageStyles.container}>
      <h1 style={pageStyles.heading}>Mirute Ltd. Blog</h1>
      <p style={pageStyles.paragraph}>
        Stay updated with the latest trends, style tips, product insights, and company news from Mirute Ltd.
      </p>
      <div style={pageStyles.blogGrid}>
        {blogPosts.map((post) => (
          <div key={post.id} style={pageStyles.blogPostCard}>
            <img src={post.image} alt={post.title} style={pageStyles.postImage} />
            <div style={pageStyles.postContent}>
              <h3 style={pageStyles.postTitle}>{post.title}</h3>
              <p style={pageStyles.postDate}>{post.date}</p>
              <p style={pageStyles.postExcerpt}>{post.excerpt}</p>
              <a href="#" style={pageStyles.readMoreLink}>Read More &rarr;</a>
            </div>
          </div>
        ))}
      </div>
      <p style={pageStyles.paragraph}>
        More inspiring articles coming soon!
      </p>
    </div>
  );
};

const pageStyles = {
  container: {
    maxWidth: '1000px',
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
    marginBottom: '40px', // More space
    color: 'var(--secondary-dark)', // Darker text for readability
  },
  blogGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '35px', // Increased gap
    marginBottom: '40px',
  },
  blogPostCard: {
    border: '1px solid var(--border-color)',
    borderRadius: '10px', // Rounded corners
    overflow: 'hidden',
    backgroundColor: 'var(--light-bg)', // Light background
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)', // Soft shadow
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex', // Use flexbox
    flexDirection: 'column', // Stack content
    '&:hover': {
      transform: 'translateY(-8px)', // More pronounced lift
      boxShadow: '0 8px 20px rgba(0,0,0,0.1)', // Stronger shadow
    }
  },
  postImage: {
    width: '100%',
    height: '220px', // Slightly taller image
    objectFit: 'cover',
    borderBottom: '1px solid var(--border-color)', // Border to separate image
  },
  postContent: {
    padding: '25px', // More padding
    textAlign: 'left',
    flexGrow: 1, // Allows content to fill space, pushing button down
    display: 'flex',
    flexDirection: 'column',
  },
  postTitle: {
    fontSize: '1.4em', // Larger title
    color: 'var(--secondary-dark)', // Darker text
    marginBottom: '10px',
    fontWeight: '600', // Semi-bold
  },
  postDate: {
    fontSize: '0.9em', // Standard date font
    color: 'var(--text-color)',
    marginBottom: '15px', // More space
  },
  postExcerpt: {
    fontSize: '1em', // Standard excerpt font
    color: 'var(--text-color)',
    marginBottom: '20px', // More space
    flexGrow: 1, // Allows excerpt to take available space
  },
  readMoreLink: {
    color: 'var(--primary-blue)', // Primary blue for link
    textDecoration: 'underline',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
    alignSelf: 'flex-start', // Align to start of flex container
    marginTop: 'auto', // Push to bottom
    '&:hover': {
      color: 'var(--accent-pink)', // Accent color on hover
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
    blogGrid: {
      gap: '25px',
    },
  },
  '@media (max-width: 480px)': {
    blogGrid: {
      gridTemplateColumns: '1fr', // Stack cards vertically
    },
    blogPostCard: {
      maxWidth: '350px', // Limit width for narrow screens
      margin: '0 auto', // Center single column cards
    },
  },
};

export default BlogPage;