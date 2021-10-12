import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const moviesProp = this.props;
    const moviesPropDef = moviesProp.movies;
    return (
      <article className="movie-list">
        {moviesPropDef.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </article>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default MovieList;
