import React from 'react';

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies.map((movie, index) => (
        <div className='movie-item' key={index}>
          <img src={movie.Poster} alt={movie.Title} />
          <div className='overlay' onClick={() => props.handleFavouritesClick(movie)}>
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
