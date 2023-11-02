import React from 'react';
import { useMovieContext } from '../context/MovieContext'; // Import useMovieContext
import MovieItem from '../components/MovieItem';

const HomePage = () => {
  const { movies } = useMovieContext(); // Use useMovieContext to access movies

  return (
    <div className="home-page">
      <h2>Popular Movies</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
