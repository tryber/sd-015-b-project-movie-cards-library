import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((movie) => {
        return <MovieCard key={ movie.title } movie={ movie } />;
      })
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string),
};

export default MovieList;
