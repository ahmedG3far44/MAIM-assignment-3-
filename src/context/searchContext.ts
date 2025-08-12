import { createContext, useContext } from "react";
import type { SearchContextType } from "./SearchProvider";

export const SearchContext = createContext<SearchContextType>({
  search: "",
  setSearch: () => {},
  movies: [],
  loading: false,
  query: "",
  error: null,
  blocked: false,
  getMovieByTitle: async () => [],
});
export const useSearch = () => useContext(SearchContext);
