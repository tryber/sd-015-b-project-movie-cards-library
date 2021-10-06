import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const renderMovies = movies.map((movie, index) => (
      <MovieCard key={ `Movie Title ${index + 1}` } movie={ movie } />
    ));
    return (
      <ul>{renderMovies}</ul>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};

export default MovieList;
