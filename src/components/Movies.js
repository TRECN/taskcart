import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/movie.css'
const MovieAPIPage = () => {
    // All the options required for api request
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
          include_adult: 'false',
          include_video: 'false',
          language: 'en-US',
          page: '1',
          sort_by: 'popularity.desc'
        },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmM0YTFiMDVhNjYyNDdkZGI1ZDdhNTFjZDdjODI4MCIsInN1YiI6IjYxODQ1NTk4ZTkzZTk1MDAyYjNkNDdlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U0iI0vKkOUBGRcMMwHMFntO2EJS9Pptnb2y7Pd-AS9Y'
        }
      };
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function makes request to the api and stores the response in the movies hook
    const fetchMovies = async () => {
      try {
        const response = await axios.request(options);
        setMovies(response.data.results);
        console.log(movies)
        setLoading(false);
      } catch (error) {
        setError('Error fetching movies.');
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (movies.length === 0) {
    return <div className="empty">No movies available.</div>;
  }

  return (
    <div className="movie-api-page">
      <h1>Movie API Page</h1>
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id} className="movie-item">
            <h2>{movie.title}</h2>
            
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieAPIPage;