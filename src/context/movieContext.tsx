import { createContext, useContext } from "react";
import type { FavoriteListType } from "../utils/types";

export const MovieContext = createContext<FavoriteListType>({
  favoriteMovieList: [],
  addFavoriteMovie: () => {},
  removeFavoriteMovie: () => {},
});

export const useMovie = () => useContext(MovieContext);
