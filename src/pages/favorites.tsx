import MovieCard from "../components/movie-card";
import { useMovie } from "../context/movieContext";

const Favorites = () => {
  const { favoriteMovieList } = useMovie();

  return (
    <div>
      <h1>User Favorite Items:</h1>
      <div className="favorites-container">
        {favoriteMovieList.map((movie) => {
          return <MovieCard {...movie} />;
        })}
      </div>
    </div>
  );
};

export default Favorites;
