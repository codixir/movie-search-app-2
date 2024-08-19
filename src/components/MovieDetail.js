import { useEffect } from "react";
import { useParams } from 'react-router-dom'
import useSearchStore from "../store/useSearchStore";
import './MovieDetail.css'

const MovieDetail = () => {
    const { id } = useParams();
    const { movieDetail, fetchMovieDetail } = useSearchStore();

    useEffect(() => {
        fetchMovieDetail(id)
    }, [id, fetchMovieDetail])

    return movieDetail ? (
        <div className="movie-detail">
            <h2>{movieDetail.Title}</h2>
            <img src={movieDetail.Poster}  alt={movieDetail.Title} />
            <p>{movieDetail.Plot}</p>
        </div>
    ): <p>Loading...</p>;
};

export default MovieDetail;

