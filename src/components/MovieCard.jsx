import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

function MovieCard({ movie, onDelete }) {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card-link">
      <div className="movie-card">
        <div className="movie-card-image-wrapper">
          <img src={movie.posterURL} alt={movie.title} className="movie-card-image" />
          <div className="movie-card-rating-badge">
            <StarRating rating={movie.rating} size={14} />
          </div>
          {onDelete && (
            <button
              className="movie-card-delete"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onDelete(movie.id);
              }}
              title="Delete movie"
            >
              ×
            </button>
          )}
          <div className="movie-card-overlay">
            <span className="movie-card-play">▶ Watch Trailer</span>
          </div>
        </div>
        <div className="movie-card-content">
          <h3 className="movie-card-title">{movie.title}</h3>
          <p className="movie-card-meta">{movie.year} • {movie.genre}</p>
          <p className="movie-card-description">{movie.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;