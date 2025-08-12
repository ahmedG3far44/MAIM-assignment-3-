import { Link } from "react-router-dom";
import { useMovie } from "../context/movieContext";
import type { MovieType } from "../utils/types";
import { useState } from "react";
import { HeartPlus, Star, Trash } from "lucide-react";

const MovieCard = (movie: MovieType) => {
  const { favoriteMovieList, addFavoriteMovie, removeFavoriteMovie } =
    useMovie();
  const { original_title, id, poster_path, title, vote_average } = movie;
  const [inFavoriteList] = useState<boolean>(
    favoriteMovieList.find((movie) => movie.id?.toString() === id?.toString())
      ? true
      : false
  );

  return (
    <div className="card">
      <img
        className="thumbnail"
        src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`}
        width={250}
        height={300}
        alt={original_title}
        loading="lazy"
      />
      <div className="fav-btn">
        {inFavoriteList ? (
          <span className="delete" onClick={() => removeFavoriteMovie(id ? id?.toString() : "4")}>
            <Trash size={20} />
          </span>
        ) : (
          <span onClick={() => addFavoriteMovie(movie)}>
            <HeartPlus size={20} />
          </span>
        )}
      </div>

      <div className="movie-info">
        <Link className="title" to={`/movie/${id}`}>
          {title}
        </Link>

        <span className="star">
          <Star size={15} />
          {vote_average}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
