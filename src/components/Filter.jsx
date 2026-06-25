import React from "react";

const Filter = ({
  titleFilter,
  setTitleFilter,
  ratingFilter,
  setRatingFilter,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />

      <input
        type="number"
        placeholder="Minimum rating"
        value={ratingFilter}
        onChange={(e) => setRatingFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;