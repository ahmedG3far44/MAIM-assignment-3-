import { useState, type ReactNode } from "react";
import type { MovieType } from "../utils/types";
import { SearchContext } from "./searchContext";

export interface SearchContextType {
  search: string;
  setSearch: (text: string) => void;
  movies: MovieType[];
  loading: boolean;
  query: string;
  error: null | string;
  blocked: boolean;
  getMovieByTitle: () => Promise<MovieType[]>;
}

const key = import.meta.env.VITE_API_KEY as string;

const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState<string>("");
  const query = search.split(" ").join("+");
  const [movies, setMovie] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const blockCondition = query.length <= 2;

  async function getMovieByTitle() {
    if (blockCondition) return;
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
      setSearch("")
      return data;
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        query,
        movies,
        loading,
        error,
        blocked: blockCondition,
        getMovieByTitle,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
