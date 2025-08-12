import Header from "../components/header";
import MovieCard from "../components/movie-card";
import { useMovie } from "../context/movieContext";

const Favorites = () => {
  const { favoriteMovieList } = useMovie();
  return (
    <div className="container">
      <Header />
      {favoriteMovieList.length > 0 ? (
        <>
          <h3>User Favorite Items:</h3>
          <div className="movies-container">
            {favoriteMovieList.map((movie) => {
              return <MovieCard key={movie.id} {...movie} />;
            })}
          </div>
        </>
      ) : (
        <p>no items in fav list yet!!</p>
      )}
    </div>
  );
};

export default Favorites;
