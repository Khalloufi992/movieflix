import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import "./App.css";
function App() {
  const [movies, setMovies] = useState([
    {
      title: "Breaking Bad",
      description: "A chemistry teacher becomes a drug kingpin.",
      posterURL:
        "https://m.media-amazon.com/images/I/81VStYnDGrL._AC_SY679_.jpg",
      rating: 9,
    },
    {
      title: "Money Heist",
      description: "A group of robbers attack the Royal Mint.",
      posterURL:
        "https://m.media-amazon.com/images/I/91OCx9M6z-L._AC_SY679_.jpg",
      rating: 8,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const addMovie = () => {
    if (
      newMovie.title &&
      newMovie.description &&
      newMovie.posterURL &&
      newMovie.rating
    ) {
      setMovies([...movies, newMovie]);

      setNewMovie({
        title: "",
        description: "",
        posterURL: "",
        rating: "",
      });
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= (ratingFilter || 0)
  );

  return (
    <div className="App">
      <h1>🎬 Movie App</h1>

      <Filter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />

      <h2>Add New Movie</h2>

      <input
        type="text"
        placeholder="Title"
        value={newMovie.title}
        onChange={(e) =>
          setNewMovie({ ...newMovie, title: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Description"
        value={newMovie.description}
        onChange={(e) =>
          setNewMovie({ ...newMovie, description: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={(e) =>
          setNewMovie({ ...newMovie, posterURL: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Rating"
        value={newMovie.rating}
        onChange={(e) =>
          setNewMovie({ ...newMovie, rating: Number(e.target.value) })
        }
      />

      <button onClick={addMovie}>Add Movie</button>

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;