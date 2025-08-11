import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { MovieDetailsType } from "../utils/types";
import { MovieInfo } from "../components/movie-info";

const key = import.meta.env.VITE_API_KEY as string;

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieInfo, setMovieDetails] = useState<MovieDetailsType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getMovieByID(id: string) {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}`,
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

        setMovieDetails(data);
        return data;
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    }
    getMovieByID(movieId as string);
  }, [movieId]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div>
      <div>{movieInfo && <MovieInfo {...movieInfo} />}</div>
    </div>
  );
};

export default MovieDetails;
