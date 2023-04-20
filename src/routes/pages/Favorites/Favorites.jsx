import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Favorites.scss";

export const Favorites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const savedMovies = localStorage.getItem("@primeflix");

    setMovies(JSON.parse(savedMovies) || []);
  }, []);

  return (
    <div className="favorites-movies">
      <h1>Meus Filmes Favoritos</h1>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <span>{movie.title}</span>
            <div>
              <Link to={`/movie/${movie.id}`}>Ver detalhes</Link>
              <button>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
