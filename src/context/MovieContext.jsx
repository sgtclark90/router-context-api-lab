import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchMovies } from '../services/api';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch popular movies when the component mounts
    const initMovies = async () => {
      try {
        const data = await fetchMovies('popular'); // Replace 'popular' with your search term
        setMovies(data.Search); // Assuming the API returns a Search array
      } catch (error) {
        console.error(error);
      }
    };

    initMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
};
export const useMovieContext = () => {
    const context = useContext(MovieContext);
    if (!context) {
      throw new Error('useMovieContext must be used within a MovieProvider');
    }
    return context;
  };