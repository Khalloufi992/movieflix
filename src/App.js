import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { INITIAL_MOVIES } from './Movie';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import AddMovieModal from './components/AddMovieModal';
import StarRating from './components/StarRating';
import './App.css';

// ===== HOME PAGE =====
function HomePage({ movies, setMovies }) {
  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const filteredMovies = movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
    const matchesRate = rateFilter === 0 || movie.rating >= rateFilter;
    return matchesTitle && matchesRate;
  });

  const handleAddMovie = (newMovie) => setMovies(prev => [newMovie, ...prev]);
  const handleDeleteMovie = (id) => setMovies(prev => prev.filter(m => m.id !== id));

  return (
    <div className="page">
      <div className="container">
        <header className="app-header">
          <div>
            <h1 className="app-title">🎬 MovieFlix</h1>
            <p className="app-subtitle">Your personal movie collection</p>
          </div>
          <button className="btn-add" onClick={() => setShowModal(true)}>
            <span>+</span> Add Movie
          </button>
        </header>

        <Filter
          titleFilter={titleFilter}
          setTitleFilter={setTitleFilter}
          rateFilter={rateFilter}
          setRateFilter={setRateFilter}
        />

        <div className="results-count">
          Showing <strong>{filteredMovies.length}</strong> of {movies.length} movies
          {(titleFilter || rateFilter > 0) && <span> (filtered)</span>}
        </div>

        <MovieList movies={filteredMovies} onDelete={handleDeleteMovie} />
      </div>

      <AddMovieModal isOpen={showModal} onClose={() => setShowModal(false)} onAdd={handleAddMovie} />
    </div>
  );
}

// ===== MOVIE DETAIL PAGE =====
function MovieDetailPage({ movies }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === Number(id));

  if (!movie) {
    return (
      <div className="page">
        <div className="container">
          <div className="empty-state">
            <div className="empty-state-icon">🎭</div>
            <h3 className="empty-state-title">Movie not found</h3>
            <button className="btn btn-primary" onClick={() => navigate('/')} style={{ marginTop: 20 }}>
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  const getYouTubeId = (url) => {
    const match = url.match(/embed\/([^?&]+)/);
    return match ? match[1] : '';
  };

  const videoId = getYouTubeId(movie.trailerURL);

  return (
    <div className="page detail-page">
      <div className="container">
        <button className="back-button" onClick={() => navigate('/')}>
          <span>←</span> Back to Movies
        </button>

        <div className="detail-layout">
          <div className="detail-poster-section">
            <img src={movie.posterURL} alt={movie.title} className="detail-poster" />
            <div className="detail-rating-box">
              <StarRating rating={movie.rating} size={24} />
              <span className="detail-rating-text">{movie.rating}/5</span>
            </div>
          </div>

          <div className="detail-info">
            <h1 className="detail-title">{movie.title}</h1>
            <div className="detail-meta">
              <span className="detail-badge">{movie.year}</span>
              <span className="detail-badge">{movie.genre}</span>
              <span className="detail-badge">{movie.director}</span>
            </div>

            <div className="detail-section">
              <h3 className="detail-section-title">Synopsis</h3>
              <p className="detail-description">{movie.description}</p>
            </div>

            <div className="detail-section">
              <h3 className="detail-section-title">🎬 Trailer</h3>
              <div className="trailer-wrapper">
                {videoId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`${movie.title} Trailer`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="trailer-iframe"
                  />
                ) : (
                  <div className="trailer-placeholder">
                    <span>▶</span>
                    <p>Trailer unavailable</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== APP =====
function App() {
  const [movies, setMovies] = useState(INITIAL_MOVIES);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage movies={movies} setMovies={setMovies} />} />
        <Route path="/movie/:id" element={<MovieDetailPage movies={movies} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;