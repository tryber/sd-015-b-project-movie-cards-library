import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
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
}

export default MovieList;
