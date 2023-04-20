import { useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";

import api from "../../../services/api";

import "./Movie.scss";

export const Movie = () => {
  const { id } = useParams();
  const navigation = useNavigate();

  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadMovieParams() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "b66f811ab3fe4641c5297fc568060aa4",
            language: "pt-BR",
          },
        })
        .then((response) => {
          console.log(response.data);
          setMovie(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          navigation("/", { replace: true });
          return;
        });
    }

    loadMovieParams();

    return () => console.log("UNMOUNT COMPONENT");
  }, [id, Navigate]);

  function saveMovies() {
    const localStoregeMovies = localStorage.getItem("@primeflix");

    let savedMovies = JSON.parse(localStoregeMovies) || [];

    const hasMovie = savedMovies.some(
      (localMovie) => localMovie.id === movie.id
    );

    if (hasMovie) {
      alert("FILME NA LISTA !!!");
      return;
    }

    savedMovies.push(movie);
    localStorage.setItem("@primeflix", JSON.stringify(savedMovies));
    alert("FILME SALVO !!!");
  }

  if (isLoading) {
    return (
      <div>
        <h2>Carregando o filme SOLO</h2>
      </div>
    );
  }

  return (
    <div className="movie-info">
      <h1>{movie.title}</h1>
      <strong>{movie.title}</strong>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title}
      />
      <h3>Sinopse</h3>
      <span>{movie.overview}</span>

      <strong>Avaliação: {movie.vote_average}/10</strong>

      <div className="buttons-area">
        <button onClick={saveMovies}>Salvar</button>
        <button>
          <a
            href={`https://youtube.com/results?search_query=${movie.title} trailer`}
            target="blank"
            rel="external"
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
};
