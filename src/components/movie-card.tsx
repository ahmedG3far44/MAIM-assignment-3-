import { Link } from "react-router-dom";
import { useMovie } from "../context/movieContext";
import type { MovieType } from "../utils/types";

const MovieCard = (movie: MovieType) => {
  const { favoriteMovieList, addFavoriteMovie, removeFavoriteMovie } =
    useMovie();

  const {
    id,
    title,
    original_language,
    original_title,
    poster_path,
    release_date,
    vote_average,
    popularity,
    adult,
  } = movie;

  const inFavoriteList = favoriteMovieList.map((movie) =>
    movie.id.toString() === id.toString() ? true : false
  );

  return (
    <div className="movie-card">
      <Link to={`/movie/${id}`}>{title}</Link>
      <button
        onClick={() => {
          if (inFavoriteList) {
            removeFavoriteMovie(id.toString());
          } else {
            addFavoriteMovie(movie);
          }
        }}
      >
        {inFavoriteList ? "Remove from list" : "favorite"}
      </button>
      <img
        src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`}
        width={250}
        height={300}
        alt={original_title}
        loading="lazy"
      />
      <div>
        <span>{adult ? "Adults only" : "Children"}</span>
        <span>{popularity}</span>
        <span>{release_date}</span>
        <span>{original_language}</span>
        <span>{vote_average}</span>
      </div>
    </div>
  );
};

//https://media.themoviedb.org/t/p/w300_and_h450_bestv2/yvirUYrva23IudARHn3mMGVxWqM.jpg
export default MovieCard;
