import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../../services/api";

import "./Home.scss";

export const Home = () => {
  //
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadingMoviesApi() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "b66f811ab3fe4641c5297fc568060aa4",
          language: "pt-BR",
          page: 1,
        },
      });

      setMovies(response.data.results.slice(0, 10));
      setTimeout(() => {
        setIsLoading(false);
      }, 1800);
    }

    loadingMoviesApi();
  }, []);

  if (isLoading) {
    return <div>Carregando filmes .....</div>;
  }

  return (
    <div className="container">
      <div className="list-movies">
        {movies.map((movie) => (
          <article key={movie.id}>
            <strong>{movie.title}</strong>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
            />
            <Link to={`/movie/${movie.id}`}>Acessar</Link>
          </article>
        ))}
      </div>
    </div>
  );
};
