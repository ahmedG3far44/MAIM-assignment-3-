
export interface MovieType {
  id: number;
  title: string;
  original_title: string;
  original_language: string;
  adult: boolean;
  popularity: number;
  backdrop_path: string;
  overview: string;
  vote_average: string;
  poster_path: string;
  release_date: string;
}

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface MovieDetailsType {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string; // or Date if you prefer to parse it
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status:
    | "Released"
    | "Post Production"
    | "In Production"
    | "Planned"
    | "Canceled"
    | "Rumored";
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface FavoriteListType {
  favoriteMovieList: MovieType[];
  removeFavoriteMovie: (id: string) => void;
  addFavoriteMovie: (movie: MovieType) => void;
}
