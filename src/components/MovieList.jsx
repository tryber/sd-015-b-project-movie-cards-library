// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return movies.map((movie, index) => <MovieCard key={ index } card={ movie } />);
  }
}

MovieList.propTypes = {
  movies: PropTypes.object.isRequired,
}.isRequired;

export default MovieList;
