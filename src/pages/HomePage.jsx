import React from 'react';
import { useMovieContext } from '../context/MovieContext';
import MovieItem from '../components/MovieItem';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { movies } = useMovieContext(); 
  const goToSearchPage =() => {
    navigate('/search');
  }
  return (
    <div className="home-page">
      <h2>Popular Movies</h2>
      <button onClick={goToSearchPage}>Search</button>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
