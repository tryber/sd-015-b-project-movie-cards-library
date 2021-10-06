// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  const moviesList = movies;
  return (
    <div className="movie-list">
      {moviesList.map((movie) => {
        const { title } = movie;
        console.log(title);
        return <MovieCard movie={ movie } key={ title } />;
      })}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
