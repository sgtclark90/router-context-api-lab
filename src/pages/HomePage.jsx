import React from 'react';
import { useMovieContext } from '../context/MovieContext';
import MovieItem from '../components/MovieItem';
import { useNavigate } from 'react-router-dom';
import { popular } from '../services/popular';

const HomePage = () => {
  // const { movies } = useMovieContext(); 
  // const movies = popular;
  const movies =popular.map(entry => entry.Search[0]);
  console.log('johns an ass', movies)
  const navigate = useNavigate();
  
  const goToSearchPage = () => {
    navigate('/search');
  }
  
  return (
    <div className="home-page">
      <div className="header">
        <h1>Movie Database</h1>
        <button onClick={goToSearchPage}>Search Movies</button>
      </div>
      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))
        ) : (
          <p>No movies available.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
