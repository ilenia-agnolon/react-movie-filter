import { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import movies from "./components/movies";

function App() {
  //valore scelto nella select ("" = tutti)
  const [selectedGenre, setSelectedGenre] = useState("");

  //lista che viene mostrata
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const genres = [];

  return (
    <>
      <main>
        <h1>React Movie Filter</h1>

        {/* labels */}
        <div>
          {/* 1. Seleziona un genere */}
          <div className="mb-3">
            <label for="genreSelect" className="form-label">
              Seleziona il genere che vuoi
            </label>
            <select
              id="genreSelect"
              className="form-select"
              value={selectedGenre}
              onChange={(e) => {
                setSelectedGenre(e.target.value);
              }}
            >
              {/* opzioni disponibili */}
              <option value="">-</option>
              <option value="Fantascienza">Fantascienza</option>
              <option value="Thriller">Thriller</option>
              <option value="Romantico">Romantico</option>
              <option value="Azione">Azione</option>
            </select>
          </div>
        </div>

        {/* film */}
        <div>
          <ul>
            {movies.map((movie, index) => (
              <li key={index}>
                {movie.title} &minus; {movie.genre}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
