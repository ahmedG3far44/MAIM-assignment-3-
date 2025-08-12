import { useState, type ReactNode } from "react";
import { type MovieType } from "../utils/types";
import { MovieContext } from "./movieContext";

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteMovieList, setFavorite] = useState<MovieType[]>(
    JSON.parse(localStorage.getItem("favorites") as string)!
  );

  function save(newArray: MovieType[]) {
    localStorage.removeItem("favorites");
    localStorage.setItem("favorites", JSON.stringify(newArray));
  }
  function addFavoriteMovie(movie: MovieType) {
    if (favoriteMovieList) {
      setFavorite([...favoriteMovieList, movie]);
      save(favoriteMovieList);
      alert(`${movie.title} was added to favorite list!!`);
    }
  }
  function removeFavoriteMovie(id: string) {
    const filteredMovies = favoriteMovieList?.filter(
      (movie) => movie.id.toString() !== id.toString()
    );
    setFavorite(filteredMovies);
    save(filteredMovies);
  }

  return (
    <MovieContext.Provider
      value={{ favoriteMovieList, addFavoriteMovie, removeFavoriteMovie }}
    >
      {children}
    </MovieContext.Provider>
  );
};
