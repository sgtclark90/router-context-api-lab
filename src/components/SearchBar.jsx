import React, { useContext, useState } from 'react';
import { useMovieContext } from '../context/MovieContext'; // Use the hook instead of importing 'MovieContext'

const SearchBar = () => {
  const { searchMovies } = useMovieContext(); // Use the hook to access the context
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('search term: ', searchTerm);
    searchMovies(searchTerm);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
