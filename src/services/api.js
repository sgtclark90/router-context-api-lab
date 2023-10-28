import axios from 'axios'; //for running with the entire app
// const axios = require("axios") //for running as isolated file for testing

//sample API query path: http://www.omdbapi.com/?s=Batman&apikey=[yourkey]

//set up BASE_URL and API_KEY variables here
const BASE_URL = "http://www.omdbapi.com/?"



const fetchMovies = async (searchTerm) => {
  try {
    //your code here

  } catch (error) {
      console.error("Error fetching movies:", error);
      throw error;
  }
};

const fetchMovieById = async (id) => {
  try {
    //your code here
    
  } catch (error) {
    console.error("Error fetching movie:", error);
    throw error;
  }
}

// fetchMovies("Bathman");
// fetchMovieById("tt3896198")

export { fetchMovies, fetchMovieById };