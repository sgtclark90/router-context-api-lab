import React from 'react';
import { useMovieContext } from '../context/MovieContext'; // Updated import
import MovieItem from '../components/MovieItem';

const SearchPage = () => {
  const { searchResults } = useMovieContext(); // Use useMovieContext() to access the context

  return (
    <div className="search-page">
      <h2>Search Results</h2>
      {searchResults.length > 0 ? (
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
