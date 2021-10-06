import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {

  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        <MovieCard movies={ movies } />
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arr
}

export default MovieList;
