import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import type { CategoryMovieType, Movie } from "../utils/types";
import movieList from "../utils/static-movies.json";

export const StaticMoviesList = () => {
  const categories: CategoryMovieType[] = movieList.categories;
  return (
    <>
      {categories.map((category) => {
        return (
          <div className="flex-col" key={category.title}>
            <h1 className="category-title">{category.title}</h1>

            <div className="movies-container">
              {category.movies.map((movie) => {
                return (
                  <MovieCard
                    key={movie.title}
                    thumbnail={movie.thumbnail}
                    title={movie.title}
                    rating={movie.rating}
                    year={movie.year}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};


const MovieCard = ({ thumbnail, title, rating, year }: Movie) => {
  return (
    <div className="card">
      <img
        className="thumbnail"
        src={thumbnail}
        width={250}
        height={300}
        alt={title}
        loading="lazy"
      />

      <div className="movie-info">
        <Link className="title" to={`/`}>
          {title}
        </Link>

        <div className="flex">
          <span className="star">
            <Star size={15} />
            {rating}
          </span>
          <span className="star">{year}</span>
        </div>
      </div>
    </div>
  );
};
