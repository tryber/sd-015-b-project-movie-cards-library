// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main className="movie-list">
        {movies.map((ind) => <MovieCard key={ ind.title } movie={ ind } />)}
      </main>
    );
  }
}

export default MovieList;
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
