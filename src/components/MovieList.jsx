// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => {
        const { title } = movie;
        return <MovieCard movie={ movie } key={ title } />;
      })}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
