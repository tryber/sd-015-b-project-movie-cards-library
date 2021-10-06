// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as generateId } from 'uuid';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div className="movie-list ">
        {movies.map((movie) => <MovieCard key={ generateId() } movie={ movie } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ),
};

MovieList.defaultProps = {
  movies: 'N/A',
};

export default MovieList;
