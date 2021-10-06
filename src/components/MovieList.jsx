import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    const allMovies = movies.map((film) => (
      <MovieCard key={ film.title } movie={ film } />
    ));

    return <div className="movie-list">{ allMovies }</div>;
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieList;
