import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import MovieDetails from "./pages/movie-details.tsx";
import { MovieProvider } from "./context/MovieProvider.tsx";
import Favorites from "./pages/favorites.tsx";
import SearchProvider from "./context/SearchProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MovieProvider>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<App />} />
            <Route path="/movie/:movieId" element={<MovieDetails />} />
            <Route path="/favorite" element={<Favorites />} />
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </MovieProvider>
  </StrictMode>
);
