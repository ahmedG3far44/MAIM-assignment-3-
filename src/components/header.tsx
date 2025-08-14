import { Link } from "react-router-dom";
import { useSearch } from "../context/searchContext";
import { Search } from "lucide-react";

const Header = () => {
  const { search, setSearch, getMovieByTitle, blocked } = useSearch();
  return (
    <header>
      <Link to={"/"} className="logo">
        Cine<span>Stream</span>
      </Link>
      <nav>
        <Link to={"/favorite"}>Movies</Link>
        <Link to={"/favorite"}>TV Shows</Link>
        <Link to={"/favorite"}>Episodes</Link>
        <Link to={"/favorite"}>My List</Link>
      </nav>

      <div className="search-bar">
        <input
          type="search"
          value={search}
          placeholder="search for movies"
          onChange={(e) => setSearch(e.target.value as string)}
        />
        <button disabled={blocked} onClick={getMovieByTitle}>
          <Search size={15} />
        </button>
      </div>
    </header>
  );
};

export default Header;
