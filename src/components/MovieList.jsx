import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies, onDelete }) {
  if (movies.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">🎭</div>
        <h3 className="empty-state-title">No movies found</h3>
        <p className="empty-state-text">Try adjusting your filters or add a new movie!</p>
      </div>
    );
  }

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default MovieList;