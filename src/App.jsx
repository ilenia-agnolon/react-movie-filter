import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import movies from "./components/movies";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <h1>React Movie Filter</h1>

        {/* film */}
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              {movie.title} &minus; {movie.genre}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
