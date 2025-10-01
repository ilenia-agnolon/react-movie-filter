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

  return (
    <>
      <main>
        <h1>React Movie Filter</h1>

        {/* labels */}
        <div>
          {/* 1. Seleziona un genere */}
          <div class="mb-3">
            <label for="disabledSelect" class="form-label">
              Seleziona il genere che vuoi
            </label>
            <select id="disabledSelect" class="form-select">
              <option>Seleziona un genere</option>
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
