import React from 'react';
import { useMovieContext } from '../context/MovieContext'; // Updated import

const MovieDetailsPage = () => {
  const { selectedMovie } = useMovieContext(); // Use useMovieContext() to access the context

  if (!selectedMovie) {
    return (
      <div className="movie-details-page">
        <p>Select a movie to view its details.</p>
      </div>
    );
  }

  return (
    <div className="movie-details-page">
      <h2>{selectedMovie.Title}</h2>
      <div className="movie-details">
        <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
        <p>Year: {selectedMovie.Year}</p>
        <p>Director: {selectedMovie.Director}</p>
        <p>Plot: {selectedMovie.Plot}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default MovieDetailsPage;
