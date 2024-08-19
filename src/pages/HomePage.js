import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <SearchBar />
            <MovieList />
        </div>
    );
};

export default HomePage;