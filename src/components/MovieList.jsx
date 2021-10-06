import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((element, index) => (
        <section key={ index }>
          <MovieCard movie={ element } />
        </section>
      ))
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
