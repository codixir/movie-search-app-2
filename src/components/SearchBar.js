import useSearchStore from "../store/useSearchStore";
import './SearchBar.css';

const SearchBar = () => {
    const { searchQuery, setSearchQuery, fetchMovies } = useSearchStore();

    const handleSearch = async (e) => {
        setSearchQuery(e.target.value);
        if (e.target.value.length > 2) {
            await fetchMovies(e.target.value);
        }
    };


    return (
        <input 
            className="search-bar"
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={handleSearch}
        />
    )
};

export default SearchBar;