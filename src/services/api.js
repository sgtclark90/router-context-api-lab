import axios from 'axios';

// Set up BASE_URL and API_KEY variables here
const BASE_URL = 'http://www.omdbapi.com/';
const API_KEY = 'a4db15bf'; // Replace with your actual API key

const fetchMovies = async (searchTerm) => {
  try {
    const response = await axios.get(`${BASE_URL}?s=${searchTerm}&apikey=${API_KEY}`);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

const fetchMovieById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie:', error);
    throw error;
  }
};

export { fetchMovies, fetchMovieById };
