import React from 'react';
import { useMovieContext } from '../context/MovieContext'; // Updated import
import MovieItem from '../components/MovieItem';
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const { searchResults } = useMovieContext(); // Use useMovieContext() to access the context
  const navigate = useNavigate();
  const goHome =() => {
    navigate('/');
  }

  return (
    <div className="search-page">
      <button onClick={goHome}>Home</button>
      <SearchBar />
      <h2>Search Results</h2>
      {searchResults && searchResults.length > 0 ? ( 
        <div className="movie-list">
          {searchResults.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchPage;
