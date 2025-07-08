import React, { useState } from 'react';

const StarRating = ({ initialRating = 0, onRatingChange, readOnly = false }) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    if (readOnly) return;
    setRating(index);
    if (onRatingChange) {
      onRatingChange(index);
    }
  };

  const handleMouseEnter = (index) => {
    if (readOnly) return;
    setHover(index);
  };

  const handleMouseLeave = () => {
    if (readOnly) return;
    setHover(0);
  };

  return (
    <div style={starRatingStyles.container} onMouseLeave={handleMouseLeave}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            style={{
              ...starRatingStyles.starButton,
              color: index <= (hover || rating) ? 'var(--star-color-active)' : 'var(--star-color-inactive)',
              cursor: readOnly ? 'default' : 'pointer',
            }}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
          >
            &#9733; {/* Unicode star character */}
          </button>
        );
      })}
      {/* Optionally display the selected rating */}
      {!readOnly && rating > 0 && <span style={starRatingStyles.currentRatingText}>({rating}/5)</span>}
      {readOnly && initialRating > 0 && <span style={starRatingStyles.currentRatingText}>({initialRating.toFixed(1)}/5)</span>}
    </div>
  );
};

const starRatingStyles = {
  container: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '2px',
  },
  starButton: {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    fontSize: '1.8em',
    transition: 'color 0.2s ease, transform 0.1s ease',
    padding: '0',
    margin: '0',
    lineHeight: '1',
    '&:hover': {
      transform: 'scale(1.1)',
    }
  },
  currentRatingText: {
    marginLeft: '10px',
    fontSize: '0.9em',
    color: 'var(--text-color)',
  }
};

export default StarRating;