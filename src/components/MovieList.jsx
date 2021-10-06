import React from 'react';
import PropTypes from 'prop-types';
import MovieCards from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((movie) => <MovieCards movie={ movie } key={ movie.title } />)
    );
  }
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
