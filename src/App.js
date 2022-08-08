import { useEffect, useState } from 'react';

import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';


const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.React_App_API_TOKEN}`;

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&query=${title}`);
        const data = await response.json();
        setMovies(data.results);
    }

    const searchPopularMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.React_App_API_TOKEN}`);
        const data = await response.json();
        setMovies(data.results)
    }

    useEffect(() => {
        searchPopularMovies();
    }, []);

    return (
        <div className="app">
            <h1>React Movie</h1>
            <div className="search">
                <input 
                    placeholder="Search for a movie, tv show, person..."
                    value={searchTerm}
                    onChange={(e) => {setSearchTerm(e.target.value)}}
                    onKeyUp={(e) => {if(e.key === 'Enter' || e.keyCode === 13) searchMovies(searchTerm)}}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {searchMovies(searchTerm)}}
                />
            </div>
            {movies?.length > 0 
                ? (
                    <div className="container">
                        {movies.map((movie) => {
                            return (
                                <MovieCard movie={movie}/>
                            )
                        })}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies Found!</h2>
                    </div>
                )}
        </div>
    );
}

export default App;