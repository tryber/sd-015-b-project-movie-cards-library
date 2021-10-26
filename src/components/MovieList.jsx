import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {movies.map(
          (movie) => (<MovieCard
            key={ movie.title }
            subtitle={ movie.subtitle }
            movie={ movie }
          />),
        )}
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
