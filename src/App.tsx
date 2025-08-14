import { useSearch } from "./context/searchContext";
import HeroMovie from "./components/hero-movie";
import MovieCard from "./components/movie-card";
import Spinner from "./components/spinner";
import Error from "./components/error";

const App = () => {
  const { movies, loading, error } = useSearch();
  if (error) return <Error> {error}</Error>;
  return (
    <div>
      <HeroMovie />
      {loading ? (
        <Spinner />
      ) : (
        <div className="movies-container">
          {movies && (
            <>
              {movies.map((movie) => {
                return <MovieCard key={movie.id} {...movie} />;
              })}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
