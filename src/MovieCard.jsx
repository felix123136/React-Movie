import React from 'react';
import PlaceHolder from './placeholder.png';

const MovieCard = ({movie}) => {
    return (
        <div className="movie">
            <div>
                <p>{movie.release_date}</p>
            </div>
            <div>
                <img 
                    src={movie.poster_path !== null ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : PlaceHolder}
                    alt={movie.title}
                />
            </div>
            <div>
                <span>⭐{movie.vote_average}</span>
                <h3>{movie.title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;