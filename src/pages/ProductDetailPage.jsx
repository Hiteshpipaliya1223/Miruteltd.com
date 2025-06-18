import React, { useState } from 'react'; // <--- Added useState import
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import StarRating from '../components/StarRating';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // State to hold the rating chosen by the user for *their* review
  const [userSelectedRating, setUserSelectedRating] = useState(0); 
  // State to hold the user's review comment
  const [userReviewComment, setUserReviewComment] = useState('');

  // --- Temporary Product Data (Replace with real data fetching later) ---
  const products = [
    {
      id: 1,
      name: 'Seamless Black Push-Up Bra',
      price: 18.99,
      image: 'https://i.imgur.com/Kbz8ZDD.png',
      rating: 4.5,
      reviews: 120,
      description: 'Experience ultimate comfort and support with our seamless black push-up bra. Designed for a smooth look under any outfit, it offers excellent lift and shape.',
      material: '80% Nylon, 20% Spandex',
      features: ['Seamless design', 'Push-up padding', 'Adjustable straps', 'Underwire support'],
      availableSizes: ['S', 'M', 'L', 'XL'],
    },
    {
      id: 2,
      name: 'Comfort Flex Nude Bra',
      price: 16.50,
      image: 'https://i.imgur.com/8sYLXVq.png',
      rating: 4.8,
      reviews: 95,
      description: 'Our comfort flex nude bra provides everyday essential support with an invisible finish. Its soft fabric adapts to your body, offering unparalleled comfort.',
      material: '90% Polyester, 10% Elastane',
      features: ['Wire-free comfort', 'Soft-touch fabric', 'Lightly padded cups', 'Adjustable hooks'],
      availableSizes: ['S', 'M', 'L'],
    },
    {
      id: 3,
      name: 'Soft Touch Lace Bralette',
      price: 22.00,
      image: 'https://i.imgur.com/M2Q9xff.png',
      rating: 4.2,
      reviews: 78,
      description: 'Embrace elegance with our soft touch lace bralette. Perfect for lounging or layering, it offers gentle support without sacrificing style.',
      material: '70% Nylon, 30% Lace',
      features: ['Delicate lace detailing', 'Unpadded for natural shape', 'Pullover style', 'Breathable fabric'],
      availableSizes: ['XS', 'S', 'M', 'L'],
    },
    {
      id: 4,
      name: 'Everyday Support White Bra',
      price: 15.99,
      image: 'https://via.placeholder.com/200x200?text=White+Bra',
      rating: 4.6,
      reviews: 150,
      description: 'A classic white bra offering reliable support for daily wear. Its simple yet effective design ensures comfort and versatility.',
      material: '75% Cotton, 25% Elastane',
      features: ['Full coverage cups', 'Comfortable straps', 'Durable fabric', 'Machine washable'],
      availableSizes: ['M', 'L', 'XL'],
    },
  ];
  // --- End Temporary Product Data ---

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div style={productDetailStyles.notFound}>Product not found.</div>;
  }

  // Function to handle a new rating selection by the user for their review
  const handleUserRatingChange = (newRating) => {
    setUserSelectedRating(newRating); // Update the state with the selected rating
    console.log(`User selected ${newRating} stars for ${product.name}.`);
  };

  // Function to handle review text input
  const handleReviewCommentChange = (event) => {
    setUserReviewComment(event.target.value);
  };

  // Function to handle review submission
  const handleSubmitReview = () => {
    if (userSelectedRating === 0) {
      alert('Please select a star rating before submitting your review!');
      return;
    }
    
    const reviewData = {
      productId: product.id,
      rating: userSelectedRating,
      comment: userReviewComment,
      // In a real app, you'd add: userId, timestamp, etc.
    };

    console.log("Submitting review:", reviewData);
    alert('Thank you for your review!'); // Provide user feedback
    
    // Reset the form fields after submission (optional)
    setUserSelectedRating(0);
    setUserReviewComment('');

    // IMPORTANT: In a real application, this is where you would send `reviewData`
    // to your backend API using fetch or a library like Axios (e.g., axios.post('/api/reviews', reviewData)).
  };

  return (
    <div style={productDetailStyles.container}>
      <div style={productDetailStyles.imageSection}>
        <img src={product.image} alt={product.name} style={productDetailStyles.mainImage} />
        {/* You could add thumbnail images here if you had more product images */}
      </div>
      <div style={productDetailStyles.detailsSection}>
        <h1 style={productDetailStyles.productName}>{product.name}</h1>
        <p style={productDetailStyles.productPrice}>£{product.price.toFixed(2)}</p>

        <div style={productDetailStyles.ratingAndReviews}>
          {/* Interactive StarRating component for user to select */}
          <StarRating 
            initialRating={product.rating} 
            // Note: This StarRating is for displaying the *product's average rating*.
            // The interactive one for user input is below in the review section.
            readOnly={true} // Display average rating as read-only here
          />
          <span style={productDetailStyles.reviewCount}>({product.reviews} reviews)</span>
        </div>

        <p style={productDetailStyles.productDescription}>{product.description}</p>

        {/* Additional product details */}
        <div style={productDetailStyles.additionalDetails}>
            <p><strong>Material:</strong> {product.material}</p>
            <p><strong>Features:</strong> {product.features.join(', ')}</p>
            <p><strong>Available Sizes:</strong> {product.availableSizes.join(', ')}</p>
        </div>

        <button
          style={productDetailStyles.addToCartButton}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
        {/* You can add quantity selector here later */}

        {/* --- START NEW REVIEW SECTION --- */}
        <div style={productDetailStyles.reviewSection}>
          <h3 style={productDetailStyles.reviewSectionHeading}>Leave Your Review</h3>
          
          <div style={productDetailStyles.userRatingInput}> {/* Changed div name for clarity */}
            <p style={{margin: '0 10px 0 0', whiteSpace: 'nowrap'}}>Select Your Rating:</p>
            <StarRating 
              initialRating={userSelectedRating} // Display the user's *currently selected* rating
              onRatingChange={handleUserRatingChange} // This one is interactive for selection
              readOnly={false} 
            />
            {userSelectedRating > 0 && <span style={{marginLeft: '5px', fontWeight: 'bold'}}>{userSelectedRating}/5</span>}
          </div>

          <textarea
            style={productDetailStyles.reviewTextArea}
            placeholder="Share your thoughts about this product..."
            value={userReviewComment}
            onChange={handleReviewCommentChange}
            rows="4"
          ></textarea>

          <button
            style={productDetailStyles.submitReviewButton}
            onClick={handleSubmitReview}
          >
            Submit Review
          </button>
        </div>
        {/* --- END NEW REVIEW SECTION --- */}

      </div>
    </div>
  );
};

const productDetailStyles = {
  container: {
    display: 'flex',
    flexDirection: 'row', // Default to row for larger screens
    maxWidth: '1000px',
    margin: '60px auto',
    padding: '40px',
    backgroundColor: 'var(--white)',
    borderRadius: '12px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
    gap: '40px', // Space between image and details
    alignItems: 'flex-start', // Align items to the top
  },
  imageSection: {
    flex: '1 1 40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImage: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    borderRadius: '8px',
    border: '1px solid var(--border-color)',
    objectFit: 'contain',
  },
  detailsSection: {
    flex: '1 1 60%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  productName: {
    fontSize: '2.8em',
    color: 'var(--secondary-dark)',
    marginBottom: '15px',
    fontWeight: '700',
    lineHeight: '1.2',
  },
  productPrice: {
    fontSize: '2.2em',
    fontWeight: 'bold',
    color: 'var(--primary-blue)',
    marginBottom: '20px',
  },
  ratingAndReviews: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '25px',
    gap: '15px',
  },
  reviewCount: {
    fontSize: '1.1em',
    color: 'var(--text-color)',
  },
  productDescription: {
    fontSize: '1.1em',
    color: 'var(--text-color)',
    lineHeight: '1.6',
    marginBottom: '30px',
  },
  additionalDetails: {
    fontSize: '1em',
    color: 'var(--secondary-dark)',
    marginBottom: '30px',
    lineHeight: '1.8',
    '& p': {
        marginBottom: '10px',
    }
  },
  addToCartButton: {
    backgroundColor: 'var(--accent-pink)',
    color: 'var(--white)',
    padding: '18px 35px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.4em',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
    boxShadow: '0 6px 20px rgba(253, 126, 20, 0.3)',
    '&:hover': {
      backgroundColor: '#e66d00',
      transform: 'translateY(-3px)',
      boxShadow: '0 10px 25px rgba(253, 126, 20, 0.4)',
    },
  },
  notFound: {
    textAlign: 'center',
    fontSize: '1.8em',
    color: 'var(--dark-grey)',
    marginTop: '100px',
    minHeight: '400px',
  },
  
  // --- NEW REVIEW SECTION STYLES ---
  reviewSection: {
    marginTop: '40px',
    borderTop: '1px solid var(--border-color)',
    paddingTop: '30px',
    width: '100%',
    display: 'flex', // Use flexbox for centering content
    flexDirection: 'column',
    alignItems: 'center', // Center content horizontally
  },
  reviewSectionHeading: {
    fontSize: '1.8em',
    color: 'var(--secondary-dark)',
    marginBottom: '20px',
    fontWeight: '600',
  },
  userRatingInput: { // Renamed from userRatingDisplay for clarity
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Center the display
    marginBottom: '20px',
    fontSize: '1.1em',
    color: 'var(--text-color)',
  },
  reviewTextArea: {
    width: 'calc(100% - 40px)',
    maxWidth: '600px',
    padding: '15px',
    fontSize: '1em',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    resize: 'vertical',
    marginBottom: '20px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    '&:focus': {
      borderColor: 'var(--primary-blue)',
    },
  },
  submitReviewButton: {
    backgroundColor: 'var(--primary-blue)',
    color: 'var(--white)',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.2em',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
    boxShadow: '0 5px 15px rgba(0, 123, 255, 0.2)',
    '&:hover': {
      backgroundColor: '#0056b3',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 20px rgba(0, 123, 255, 0.3)',
    },
  },
  // Responsive adjustments
  '@media (max-width: 900px)': {
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: '30px',
      margin: '40px 20px',
    },
    imageSection: {
      marginBottom: '30px',
      width: '100%',
    },
    detailsSection: {
      alignItems: 'center',
      textAlign: 'center',
    },
    productName: {
      fontSize: '2.4em',
    },
    productPrice: {
      fontSize: '1.8em',
    },
    productDescription: {
      textAlign: 'center',
    },
    ratingAndReviews: {
      justifyContent: 'center',
    },
    additionalDetails: {
      textAlign: 'left',
      width: '100%',
    },
    reviewSection: { // Ensure review section remains centered in smaller screens
        paddingLeft: '0',
        paddingRight: '0',
    },
    userRatingInput: { // Ensure stars input is centered
        justifyContent: 'center',
    },
  },
  '@media (max-width: 600px)': {
    container: {
      padding: '20px',
      margin: '20px 10px',
    },
    productName: {
      fontSize: '2em',
    },
    productPrice: {
      fontSize: '1.6em',
    },
    addToCartButton: {
      padding: '15px 30px',
      fontSize: '1.2em',
    },
  }
};

export default ProductDetailPage;