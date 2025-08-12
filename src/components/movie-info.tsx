import React, { useState } from "react";
import "../index.css";
import type { MovieDetailsType } from "../utils/types";

export const MovieInfo = ({
  poster_path,
  backdrop_path,
  title,
  tagline,
  overview,
  release_date,
  runtime,
  vote_average,
  status,
  genres,
}: MovieDetailsType) => {
  const [isOverviewExpanded, setIsOverviewExpanded] = useState(false);

  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const formatRating = (rating: number) => {
    return (rating / 2).toFixed(1); 
  };

  const toggleOverview = () => {
    setIsOverviewExpanded(!isOverviewExpanded);
  };

  return (
    <div className="movie-details">
      <div
        style={{
          backgroundImage: `url(https://media.themoviedb.org/t/p/w300_and_h450_bestv2${backdrop_path})`,
        }}
        className="hero-section"
      >
        <div className="hero-content">
          <div className="poster-container">
            {poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                className="poster"
              />
            )}
          </div>

          <div className="movie-info">
            <h1 className="title">{title}</h1>
            {tagline && <p className="tagline">"{tagline}"</p>}

            <div className="metadata">
              {vote_average > 0 && (
                <div className="rating">
                  <span className="star">★</span>
                  {formatRating(vote_average)}
                </div>
              )}

              {release_date && (
                <>
                  <span className="separator">•</span>
                  <span className="metadata-item">
                    {new Date(release_date).getFullYear()}
                  </span>
                </>
              )}

              {runtime && (
                <>
                  <span className="separator">•</span>
                  <span className="metadata-item">
                    {formatRuntime(runtime)}
                  </span>
                </>
              )}

              {status && (
                <>
                  <span className="separator">•</span>
                  <span className="status-badge">{status}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="details-section">
        {overview && (
          <div className="overview-container">
            <h2 className="section-title">Overview</h2>
            <div style={{ position: "relative" }}>
              <p className="overview">{overview}</p>
              {!isOverviewExpanded && overview.length > 200 && (
                <div className="overview-fade"></div>
              )}
              {overview.length > 200 && (
                <button className="expand-button" onClick={toggleOverview}>
                  {isOverviewExpanded ? "Show Less" : "Read More"}
                </button>
              )}
            </div>
          </div>
        )}

        {genres && genres.length > 0 && (
          <div className="genres-container">
            <h2 className="section-title">Genres</h2>
            <div className="genres-list">
              {genres.map((genre, index) => (
                <span key={genre.id || index} className="genre-tag">
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Sample data for demonstration
// const sampleMovieData = {
//   backdrop_path: "/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",
//   poster_path: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
//   title: "The Matrix",
//   tagline: "Welcome to the Real World",
//   overview: "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth. The rebels hope to free humanity from the Matrix, a virtual reality system that has enslaved mankind.",
//   release_date: "1999-03-30",
//   runtime: 136,
//   vote_average: 8.2,
//   status: "Released",
//   genres: [
//     { id: 1, name: "Action" },
//     { id: 2, name: "Science Fiction" },
//     { id: 3, name: "Thriller" }
//   ]
// };
