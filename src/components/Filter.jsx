import React from 'react';
import StarRating from './StarRating';

function Filter({ titleFilter, setTitleFilter, rateFilter, setRateFilter }) {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label className="filter-label">Search by Title</label>
        <input
          type="text"
          placeholder="Type a movie name..."
          value={titleFilter}
          onChange={e => setTitleFilter(e.target.value)}
          className="filter-input"
        />
      </div>
      <div className="filter-group">
        <label className="filter-label">Minimum Rating</label>
        <div className="filter-rating">
          <StarRating rating={rateFilter} interactive onRate={setRateFilter} size={22} />
          <span className="filter-rating-value">{rateFilter > 0 ? rateFilter : 'Any'}</span>
          {rateFilter > 0 && (
            <button className="filter-clear" onClick={() => setRateFilter(0)}>Clear</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Filter;