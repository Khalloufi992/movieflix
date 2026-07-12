import React, { useState } from 'react';

function StarRating({ rating, max = 5, size = 16, interactive = false, onRate }) {
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {Array.from({ length: max }, (_, i) => {
        const starValue = i + 1;
        const filled = interactive ? (hover || rating) >= starValue : rating >= starValue;
        return (
          <span
            key={i}
            className={`star ${filled ? 'filled' : ''} ${interactive ? 'interactive' : ''}`}
            onClick={() => interactive && onRate?.(starValue)}
            onMouseEnter={() => interactive && setHover(starValue)}
            onMouseLeave={() => interactive && setHover(0)}
            style={{ fontSize: size }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;