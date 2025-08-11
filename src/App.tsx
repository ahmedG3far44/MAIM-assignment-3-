import { useState } from "react";
import MovieCard from "./components/movie-card";
import type { MovieType } from "./utils/types";

const key = import.meta.env.VITE_API_KEY as string;

const App = () => {
  const [search, setSearch] = useState<string>("");
  const query = search.split(" ").join("+");
  const [movies, setMovie] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function getMovieByTitle() {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${key}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("connection error");
      }
      const data = await response.json();
      setMovie(data.results);
      return data;
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="search"
          onChange={(e) => setSearch(e.target.value as string)}
        />{" "}
        <button onClick={getMovieByTitle}>search</button>
      </div>
      <div className="movies-container">
        {movies.map((movie) => {
          return <MovieCard {...movie} />;
        })}
      </div>
      <div>{query}</div>
    </div>
  );
};

export default App;
