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

  useEffect(() => {
    if (selectedGenre === "") {
      setFilteredMovies(movies);
    } else {
      setFilteredMovies(
        movies.filter((movie) => movie.genre === selectedGenre)
      );
    } // → se l'utente ha scelto l'opzione vuota rimettiamo dentro filteredMovies l'intero array movies, altrimenti si filtra l'array, tenendo solo i film il cui genre corrisponde a quello nella select. Infine setFilteredMovies aggiorna lo stato
  }, [selectedGenre]); // → questo effetto si ri-esegue solo quando cambia il genere selezionato

  return (
    <>
      <main>
        <h1>React Movie Filter</h1>

        {/* labels */}
        <div>
          {/* 1. Seleziona un genere */}
          <div className="mb-3">
            <label htmlFor="genreSelect" className="form-label">
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
            {filteredMovies.map((movie, index) => (
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
