import React, { useState, useEffect } from 'react';
import { fetchMovieById } from '../services/api';

const MovieItem = ({ movieId }) => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    fetchMovieData(movieId);
  }, [movieId]);

  const fetchMovieData = async (id) => {
    try {
      const movie = await fetchMovieById(id);
      setMovieData(movie);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-item">
      <img src={movieData.Poster} alt={movieData.Title} />
      <div className="movie-details">
        <h3 className="movie-title">{movieData.Title}</h3>
        <p className="movie-year">Year: {movieData.Year}</p>
      </div>
    </div>
  );
};

export default MovieItem;
