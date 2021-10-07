import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <main className="movie-list">
        {
          movies.map((elemento) => (
            <MovieCard movie={ elemento } key={ elemento.title } />))
        }
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.string.isRequired,
};

export default MovieList;
