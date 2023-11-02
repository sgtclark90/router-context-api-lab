// Set up BASE_URL and API_KEY variables here
const BASE_URL = 'http://www.omdbapi.com/';
const API_KEY = 'a4db15bf'; // Replace with your actual API key

const fetchMovies = async (searchTerm) => {
  try {
    const response = await fetch(`${BASE_URL}?s=${searchTerm}&apikey=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

const fetchMovieById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie:', error);
    throw error;
  }
};

export { fetchMovies, fetchMovieById };