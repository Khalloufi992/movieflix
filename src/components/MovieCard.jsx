import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <img src={movie.posterURL} alt={movie.title} width="200" />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <h4>⭐ {movie.rating}</h4>
    </div>
  );
};

export default MovieCard;