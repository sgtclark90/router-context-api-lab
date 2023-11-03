import React, { useState, useEffect } from 'react';
import { fetchMovieById } from '../services/api';

const MovieItem = (zzz) => {
  const movieId = zzz.movie.imdbID
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    fetchMovieData(movieId);
  }, [movieId]);

  const fetchMovieData = async (id) => {
    try {
      const movie = await fetchMovieById(id);
      console.log(movie)
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
        <p className='plot'>Plot: {movieData.Plot}</p>
        <p className="movie-year">Year: {movieData.Year}</p>
        <p className='rating'>Rating: {movieData.Rated}</p>
        <p className='release-date'>Released: {movieData.Released}</p>
        <p className='genre'>Genre: {movieData.Genre}</p>
        <p className='rating'>IMDB Rating: {movieData.imdbRating}</p>
      </div>
    </div>
  );
};

export default MovieItem;
